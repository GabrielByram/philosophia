import { useState, useRef, useMemo, useCallback } from "react";
import { PHILOSOPHERS, DATA } from "./data/encyclopediaData.js";

/* ═══════════════════════════
   RENDERING & APP LOGIC
   ═══════════════════════════ */

const PALETTE = {
  bg: "#FAF6F0", sidebar: "#2B2825", sidebarHover: "#3A3632", sidebarActive: "#4A443E",
  text: "#2B2825", textMuted: "#8A8279", textLight: "#B5AEA4",
  accent: "#A0522D", accentLight: "#C7856B", accentBg: "#F7EDE6",
  border: "#E5DDD2", borderLight: "#EDE7DE", link: "#7B5B3A",
  sidebarText: "#C9C1B6", sidebarTextActive: "#FAF6F0", tagBg: "#EDE7DE",
  conceptBg: "#F0E8DF", conceptBorder: "#D4C8B8",
};

const buildTree = (data) => {
  const tree = [];
  Object.entries(data).forEach(([dk, domain]) => {
    const dNode = { id: dk, label: domain.label, icon: domain.icon, children: [], type: "domain" };
    Object.entries(domain.subtopics).forEach(([sk, sub]) => {
      const sNode = { id: `${dk}.${sk}`, label: sub.label, children: [], type: "subtopic" };
      Object.entries(sub.entries).forEach(([ek, entry]) => {
        sNode.children.push({ id: `${dk}.${sk}.${ek}`, label: entry.title, type: "entry" });
      });
      dNode.children.push(sNode);
    });
    tree.push(dNode);
  });
  return tree;
};

const getEntry = (path) => {
  const p = path.split(".");
  return p.length >= 3 ? DATA[p[0]]?.subtopics?.[p[1]]?.entries?.[p[2]] : null;
};
const getDomain = (path) => DATA[path?.split(".")[0]] || null;
const getSubtopic = (path) => { const p = path?.split("."); return DATA[p?.[0]]?.subtopics?.[p?.[1]] || null; };

// Parse body text with {links}
const parseBody = (text, onNav) => {
  if (!text) return null;
  const parts = [];
  let remaining = text;
  let key = 0;
  const regex = /\{([^}|]+?)(?:\|([^}]*))?\}/g;
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(remaining.substring(lastIndex - (text.length - remaining.length), match.index - (text.length - remaining.length)));
    }
    // Actually let's redo this more carefully
    break;
  }

  // Simpler approach: split and process
  const segments = [];
  let buf = "";
  let i = 0;
  while (i < text.length) {
    if (text[i] === "{") {
      if (buf) segments.push({ type: "text", value: buf });
      buf = "";
      let j = i + 1;
      while (j < text.length && text[j] !== "}") j++;
      const inner = text.substring(i + 1, j);
      const pipeIdx = inner.indexOf("|");
      if (pipeIdx === -1) {
        // {Name} — philosopher link
        const slug = inner.toLowerCase().replace(/[^a-z]/g, "").replace(/\s+/g, "");
        const phKey = Object.keys(PHILOSOPHERS).find(k => k === slug || PHILOSOPHERS[k].name.toLowerCase().replace(/[^a-z]/g, "") === slug);
        segments.push({ type: "philosopher", name: inner, key: phKey || slug });
      } else {
        const display = inner.substring(0, pipeIdx);
        const target = inner.substring(pipeIdx + 1);
        if (target.startsWith("philosopher:")) {
          segments.push({ type: "philosopher", name: display, key: target.replace("philosopher:", "") });
        } else if (target.startsWith("concept:")) {
          segments.push({ type: "concept", name: display, key: target.replace("concept:", "") });
        } else {
          // entry path
          segments.push({ type: "link", name: display, path: target });
        }
      }
      i = j + 1;
    } else {
      buf += text[i];
      i++;
    }
  }
  if (buf) segments.push({ type: "text", value: buf });

  return segments.map((seg, idx) => {
    if (seg.type === "text") return <span key={idx}>{seg.value}</span>;
    if (seg.type === "philosopher") {
      return (
        <span key={idx} onClick={(e) => { e.stopPropagation(); onNav("philosopher", seg.key); }}
          style={{ color: PALETTE.accent, cursor: "pointer", borderBottom: `1px solid ${PALETTE.accentLight}`, fontWeight: 500, transition: "color 0.15s" }}
          onMouseEnter={e => e.target.style.color = "#7B3A1A"}
          onMouseLeave={e => e.target.style.color = PALETTE.accent}
        >{seg.name}</span>
      );
    }
    if (seg.type === "link") {
      return (
        <span key={idx} onClick={(e) => { e.stopPropagation(); onNav("entry", seg.path); }}
          style={{ color: PALETTE.link, cursor: "pointer", borderBottom: `1px dashed ${PALETTE.border}`, transition: "color 0.15s" }}
          onMouseEnter={e => e.target.style.color = PALETTE.accent}
          onMouseLeave={e => e.target.style.color = PALETTE.link}
        >{seg.name}</span>
      );
    }
    if (seg.type === "concept") {
      return (
        <span key={idx}
          style={{ color: PALETTE.link, borderBottom: `1px dotted ${PALETTE.conceptBorder}`, cursor: "default" }}
          title={seg.key.replace(/_/g, " ")}
        >{seg.name}</span>
      );
    }
    return null;
  });
};

export function Encyclopedia() {
  const [view, setView] = useState({ type: "home" }); // { type: "home" | "entry" | "philosopher", id: string }
  const [expanded, setExpanded] = useState(new Set(Object.keys(DATA)));
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [history, setHistory] = useState([]);
  const contentRef = useRef(null);
  const tree = useMemo(() => buildTree(DATA), []);

  const navigate = useCallback((type, id) => {
    setHistory(prev => [...prev, { ...view }].slice(-20));
    setView({ type, id });
    if (contentRef.current) contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    if (type === "entry") {
      const parts = id.split(".");
      setExpanded(prev => { const n = new Set(prev); n.add(parts[0]); if (parts.length >= 2) n.add(`${parts[0]}.${parts[1]}`); return n; });
    }
  }, [view]);

  const onNav = useCallback((type, id) => {
    if (type === "philosopher") navigate("philosopher", id);
    else if (type === "entry") navigate("entry", id);
  }, [navigate]);

  const goBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(h => h.slice(0, -1));
      setView(prev);
      if (contentRef.current) contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Search
  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    const results = [];
    // Search entries
    Object.entries(DATA).forEach(([dk, domain]) => {
      Object.entries(domain.subtopics).forEach(([sk, sub]) => {
        Object.entries(sub.entries).forEach(([ek, entry]) => {
          const score = (entry.title.toLowerCase().includes(q) ? 10 : 0) + (entry.summary.toLowerCase().includes(q) ? 5 : 0) + (entry.body.toLowerCase().includes(q) ? 2 : 0);
          if (score > 0) results.push({ type: "entry", id: `${dk}.${sk}.${ek}`, label: entry.title, sub: `${domain.label} › ${sub.label}`, score });
        });
      });
    });
    // Search philosophers
    Object.entries(PHILOSOPHERS).forEach(([pk, phil]) => {
      const score = (phil.name.toLowerCase().includes(q) ? 12 : 0) + (phil.bio.toLowerCase().includes(q) ? 2 : 0) + (phil.keyIdeas.some(i => i.toLowerCase().includes(q)) ? 6 : 0);
      if (score > 0) results.push({ type: "philosopher", id: pk, label: phil.name, sub: `${phil.tradition} · ${phil.years}`, score });
    });
    return results.sort((a, b) => b.score - a.score).slice(0, 12);
  }, [search]);

  const toggleExpand = (id) => setExpanded(prev => { const n = new Set(prev); if (n.has(id)) n.delete(id); else n.add(id); return n; });

  // Render tree node
  const renderNode = (node, depth = 0) => {
    const isExp = expanded.has(node.id);
    const isActive = view.type === "entry" && view.id === node.id;
    const hasKids = node.children?.length > 0;
    const isEntry = node.type === "entry";
    const pl = 14 + depth * 14;
    return (
      <div key={node.id}>
        <div onClick={() => { if (isEntry) navigate("entry", node.id); else if (hasKids) toggleExpand(node.id); }}
          style={{ padding: `6px 10px 6px ${pl}px`, cursor: "pointer", display: "flex", alignItems: "center", gap: 7,
            fontSize: isEntry ? 12.5 : depth === 0 ? 13 : 12.5, fontWeight: depth === 0 ? 600 : isEntry ? 400 : 500,
            color: isActive ? PALETTE.sidebarTextActive : isEntry ? PALETTE.sidebarText : depth === 0 ? "#E8E2D9" : "#B5AEA4",
            background: isActive ? PALETTE.sidebarActive : "transparent", borderRadius: 4, marginBottom: 1,
            letterSpacing: depth === 0 ? "0.04em" : "0.01em", transition: "background 0.15s",
            fontFamily: depth === 0 ? "'Cormorant Garamond',Georgia,serif" : "'Source Serif 4',Georgia,serif",
            textTransform: depth === 0 ? "uppercase" : "none",
          }}
          onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = PALETTE.sidebarHover; }}
          onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
        >
          {depth === 0 && <span style={{ fontSize: 13, opacity: 0.5 }}>{node.icon}</span>}
          {hasKids && !isEntry && <span style={{ fontSize: 8, opacity: 0.4, transform: isExp ? "rotate(90deg)" : "none", transition: "transform 0.15s", display: "inline-block", width: 8 }}>▸</span>}
          {isEntry && <span style={{ width: 8, fontSize: 7, opacity: 0.25 }}>●</span>}
          <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{node.label}</span>
        </div>
        {hasKids && isExp && <div>{node.children.map(c => renderNode(c, depth + 1))}</div>}
      </div>
    );
  };

  // ─── PHILOSOPHER PAGE ─────────────────────
  const renderPhilosopher = () => {
    const phil = PHILOSOPHERS[view.id];
    if (!phil) return <div style={{ padding: 60, color: PALETTE.textMuted }}>Philosopher not found: {view.id}</div>;
    const paras = phil.bio.split("\n\n").filter(Boolean);
    // Find all entries this philosopher appears in
    const appearsIn = [];
    Object.entries(DATA).forEach(([dk, domain]) => {
      Object.entries(domain.subtopics).forEach(([sk, sub]) => {
        Object.entries(sub.entries).forEach(([ek, entry]) => {
          if (entry.keyThinkers?.includes(view.id)) {
            appearsIn.push({ path: `${dk}.${sk}.${ek}`, title: entry.title, domain: domain.label, sub: sub.label });
          }
        });
      });
    });

    return (
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 40px 80px" }}>
        {history.length > 0 && (
          <button onClick={goBack} style={{ background: "none", border: `1px solid ${PALETTE.border}`, borderRadius: 6, padding: "5px 14px", color: PALETTE.textMuted, fontSize: 12, cursor: "pointer", fontFamily: "'JetBrains Mono',monospace", marginBottom: 20, display: "flex", alignItems: "center", gap: 6 }}>
            ← Back
          </button>
        )}
        <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono',monospace", color: PALETTE.accent, letterSpacing: "0.1em", marginBottom: 8, textTransform: "uppercase" }}>{phil.tradition}</div>
        <h1 style={{ fontSize: 42, fontFamily: "'Cormorant Garamond',serif", fontWeight: 400, color: PALETTE.text, margin: "0 0 6px", lineHeight: 1.1 }}>{phil.name}</h1>
        <div style={{ fontSize: 15, color: PALETTE.textMuted, fontStyle: "italic", marginBottom: 32 }}>{phil.years}</div>
        <div style={{ width: 48, height: 2, background: PALETTE.accent, marginBottom: 36, borderRadius: 1, opacity: 0.6 }} />
        <div style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 16.5, lineHeight: 1.85, color: PALETTE.text }}>
          {paras.map((p, i) => <p key={i} style={{ margin: "0 0 20px", textAlign: "justify", hyphens: "auto" }}>{p}</p>)}
        </div>
        {/* Key Ideas */}
        <div style={{ marginTop: 36, padding: "20px 24px", background: PALETTE.accentBg, borderRadius: 10, border: `1px solid ${PALETTE.border}` }}>
          <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace", color: PALETTE.accent, letterSpacing: "0.12em", marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>Key Ideas</div>
          {phil.keyIdeas.map((idea, i) => (
            <div key={i} style={{ fontSize: 14, fontFamily: "'Source Serif 4',serif", color: PALETTE.text, padding: "4px 0", lineHeight: 1.6 }}>• {idea}</div>
          ))}
        </div>
        {/* Key Works */}
        <div style={{ marginTop: 16, padding: "20px 24px", background: "#FFF", borderRadius: 10, border: `1px solid ${PALETTE.borderLight}` }}>
          <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace", color: PALETTE.textMuted, letterSpacing: "0.12em", marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>Major Works</div>
          {phil.keyWorks.map((w, i) => <div key={i} style={{ fontSize: 14, fontFamily: "'Source Serif 4',serif", color: PALETTE.text, padding: "3px 0", fontStyle: "italic" }}>{w}</div>)}
        </div>
        {/* Appears in entries */}
        {appearsIn.length > 0 && (
          <div style={{ marginTop: 16, padding: "20px 24px", background: "#FFF", borderRadius: 10, border: `1px solid ${PALETTE.borderLight}` }}>
            <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace", color: PALETTE.textMuted, letterSpacing: "0.12em", marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>Featured In</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {appearsIn.map((a, i) => (
                <span key={i} onClick={() => navigate("entry", a.path)}
                  style={{ padding: "5px 14px", background: PALETTE.tagBg, borderRadius: 20, fontSize: 13, fontFamily: "'Source Serif 4',serif", color: PALETTE.link, cursor: "pointer", border: "1px solid transparent", transition: "all 0.15s" }}
                  onMouseEnter={e => { e.target.style.borderColor = PALETTE.accent; e.target.style.background = PALETTE.accentBg; }}
                  onMouseLeave={e => { e.target.style.borderColor = "transparent"; e.target.style.background = PALETTE.tagBg; }}
                >{a.title} →</span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // ─── ENTRY ARTICLE PAGE ───────────────────
  const renderArticle = () => {
    const entry = getEntry(view.id);
    if (!entry) return <div style={{ padding: 60, color: PALETTE.textMuted }}>Entry not found.</div>;
    const domain = getDomain(view.id);
    const subtopic = getSubtopic(view.id);
    const paras = entry.body.split("\n\n").filter(Boolean);

    return (
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 40px 80px" }}>
        {history.length > 0 && (
          <button onClick={goBack} style={{ background: "none", border: `1px solid ${PALETTE.border}`, borderRadius: 6, padding: "5px 14px", color: PALETTE.textMuted, fontSize: 12, cursor: "pointer", fontFamily: "'JetBrains Mono',monospace", marginBottom: 20, display: "flex", alignItems: "center", gap: 6 }}>← Back</button>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontFamily: "'JetBrains Mono',monospace", color: PALETTE.textLight, marginBottom: 24, flexWrap: "wrap", letterSpacing: "0.03em" }}>
          <span style={{ cursor: "pointer", color: PALETTE.link }} onClick={() => { setHistory(h => [...h, view]); setView({ type: "home" }); }}>Home</span>
          <span style={{ opacity: 0.4 }}>/</span><span>{domain?.label}</span>
          <span style={{ opacity: 0.4 }}>/</span><span>{subtopic?.label}</span>
        </div>
        <h1 style={{ fontSize: 38, fontFamily: "'Cormorant Garamond',serif", fontWeight: 400, color: PALETTE.text, margin: "0 0 10px", lineHeight: 1.15, letterSpacing: "-0.01em" }}>{entry.title}</h1>
        <p style={{ fontSize: 17, fontFamily: "'Source Serif 4',serif", color: PALETTE.textMuted, margin: "0 0 32px", fontStyle: "italic", lineHeight: 1.6 }}>{entry.summary}</p>
        <div style={{ width: 48, height: 2, background: PALETTE.accent, marginBottom: 36, borderRadius: 1, opacity: 0.6 }} />
        <div style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: 16.5, lineHeight: 1.85, color: PALETTE.text }}>
          {paras.map((p, i) => <p key={i} style={{ margin: "0 0 22px", textAlign: "justify", hyphens: "auto" }}>{parseBody(p, onNav)}</p>)}
        </div>
        {/* Key Thinkers */}
        {entry.keyThinkers?.length > 0 && (
          <div style={{ marginTop: 40, padding: "20px 24px", background: PALETTE.accentBg, borderRadius: 10, border: `1px solid ${PALETTE.border}` }}>
            <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace", color: PALETTE.accent, letterSpacing: "0.12em", marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>Key Thinkers</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {entry.keyThinkers.map(id => {
                const ph = PHILOSOPHERS[id];
                return ph ? (
                  <span key={id} onClick={() => navigate("philosopher", id)}
                    style={{ padding: "5px 14px", background: "#FFF", borderRadius: 20, fontSize: 13, fontFamily: "'Source Serif 4',serif", color: PALETTE.text, border: `1px solid ${PALETTE.border}`, cursor: "pointer", transition: "all 0.15s" }}
                    onMouseEnter={e => { e.target.style.borderColor = PALETTE.accent; e.target.style.background = PALETTE.accentBg; }}
                    onMouseLeave={e => { e.target.style.borderColor = PALETTE.border; e.target.style.background = "#FFF"; }}
                  >{ph.name}</span>
                ) : null;
              })}
            </div>
          </div>
        )}
        {/* Key Works */}
        {entry.keyWorks?.length > 0 && (
          <div style={{ marginTop: 16, padding: "20px 24px", background: "#FFF", borderRadius: 10, border: `1px solid ${PALETTE.borderLight}` }}>
            <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace", color: PALETTE.textMuted, letterSpacing: "0.12em", marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>Key Works</div>
            {entry.keyWorks.map((w, i) => (
              <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 14, fontFamily: "'Source Serif 4',serif" }}>
                <span style={{ color: PALETTE.textMuted, minWidth: 110 }}>{w.author}</span>
                <span style={{ fontStyle: "italic", color: PALETTE.text, flex: 1 }}>{w.work}</span>
                <span style={{ color: PALETTE.textLight, fontFamily: "'JetBrains Mono',monospace", fontSize: 11 }}>{w.year}</span>
              </div>
            ))}
          </div>
        )}
        {/* Related */}
        {entry.related?.length > 0 && (
          <div style={{ marginTop: 16, padding: "20px 24px", background: "#FFF", borderRadius: 10, border: `1px solid ${PALETTE.borderLight}` }}>
            <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono',monospace", color: PALETTE.textMuted, letterSpacing: "0.12em", marginBottom: 12, textTransform: "uppercase", fontWeight: 600 }}>Related Entries</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {entry.related.map(r => { const re = getEntry(r); return re ? (
                <span key={r} onClick={() => navigate("entry", r)}
                  style={{ padding: "5px 14px", background: PALETTE.tagBg, borderRadius: 20, fontSize: 13, fontFamily: "'Source Serif 4',serif", color: PALETTE.link, cursor: "pointer", border: "1px solid transparent", transition: "all 0.15s" }}
                  onMouseEnter={e => { e.target.style.borderColor = PALETTE.accent; e.target.style.background = PALETTE.accentBg; }}
                  onMouseLeave={e => { e.target.style.borderColor = "transparent"; e.target.style.background = PALETTE.tagBg; }}
                >{re.title} →</span>
              ) : null; })}
            </div>
          </div>
        )}
      </div>
    );
  };

  // ─── LANDING ──────────────────────────────
  const renderHome = () => {
    // Philosopher index
    const philList = Object.entries(PHILOSOPHERS).sort((a, b) => a[1].name.localeCompare(b[1].name));
    return (
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "56px 40px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono',monospace", color: PALETTE.textMuted, letterSpacing: "0.2em", marginBottom: 12, textTransform: "uppercase" }}>Interactive Encyclopedia</div>
          <h1 style={{ fontSize: 52, fontWeight: 300, fontFamily: "'Cormorant Garamond',Georgia,serif", color: PALETTE.text, margin: "0 0 16px", letterSpacing: "-0.01em", lineHeight: 1.1 }}>Philosophia</h1>
          <p style={{ fontSize: 17, color: PALETTE.textMuted, maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontFamily: "'Source Serif 4',Georgia,serif" }}>
            A structured exploration of Western philosophy — organized by domain, linked by ideas, with dedicated pages for every major thinker.
          </p>
        </div>
        {/* Domain cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 52 }}>
          {Object.entries(DATA).map(([key, domain]) => {
            const count = Object.values(domain.subtopics).reduce((a, s) => a + Object.keys(s.entries).length, 0);
            const first = Object.entries(domain.subtopics)[0]; const fk = first ? Object.keys(first[1].entries)[0] : null;
            const fp = first && fk ? `${key}.${first[0]}.${fk}` : null;
            return (
              <div key={key} onClick={() => { if (fp) navigate("entry", fp); }}
                style={{ padding: "22px 26px", background: "#FFF", border: `1px solid ${PALETTE.borderLight}`, borderRadius: 10, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = PALETTE.accent; e.currentTarget.style.boxShadow = "0 4px 20px rgba(160,82,45,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = PALETTE.borderLight; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: 22, marginBottom: 6, opacity: 0.6 }}>{domain.icon}</div>
                <div style={{ fontSize: 19, fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, color: PALETTE.text, marginBottom: 5 }}>{domain.label}</div>
                <div style={{ fontSize: 13, color: PALETTE.textMuted, lineHeight: 1.6, fontFamily: "'Source Serif 4',serif", marginBottom: 10 }}>{domain.desc}</div>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono',monospace", color: PALETTE.textLight }}>{Object.keys(domain.subtopics).length} subtopics · {count} entries</div>
              </div>
            );
          })}
        </div>
        {/* Philosopher index */}
        <div>
          <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono',monospace", color: PALETTE.textMuted, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>Philosopher Index — {philList.length} thinkers</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {philList.map(([key, phil]) => (
              <div key={key} onClick={() => navigate("philosopher", key)}
                style={{ padding: "10px 14px", background: "#FFF", border: `1px solid ${PALETTE.borderLight}`, borderRadius: 8, cursor: "pointer", transition: "all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = PALETTE.accent; e.currentTarget.style.background = PALETTE.accentBg; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = PALETTE.borderLight; e.currentTarget.style.background = "#FFF"; }}
              >
                <div style={{ fontSize: 14, fontFamily: "'Source Serif 4',serif", fontWeight: 500, color: PALETTE.text }}>{phil.name}</div>
                <div style={{ fontSize: 11, color: PALETTE.textLight, fontFamily: "'JetBrains Mono',monospace", marginTop: 2 }}>{phil.years}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", background: PALETTE.bg, fontFamily: "'Source Serif 4',Georgia,serif", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Source+Serif+4:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet" />
      {/* Sidebar */}
      <div style={{ width: sidebarOpen ? 272 : 44, minWidth: sidebarOpen ? 272 : 44, background: PALETTE.sidebar, display: "flex", flexDirection: "column", transition: "width 0.25s, min-width 0.25s", overflow: "hidden", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ padding: sidebarOpen ? "16px 14px 10px" : "16px 8px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", minHeight: 44 }}>
          {sidebarOpen && <div onClick={() => { setHistory(h => [...h, view]); setView({ type: "home" }); }} style={{ fontSize: 14, fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, color: "#C2A67A", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>Philosophia</div>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: 14, padding: 4 }}>{sidebarOpen ? "◂" : "▸"}</button>
        </div>
        {sidebarOpen && (
          <>
            <div style={{ padding: "10px 10px 6px" }}>
              <input placeholder="Search entries & thinkers..." value={search} onChange={e => setSearch(e.target.value)}
                style={{ width: "100%", boxSizing: "border-box", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "7px 11px", color: PALETTE.sidebarText, fontSize: 12, fontFamily: "'JetBrains Mono',monospace", outline: "none" }} />
            </div>
            {search && searchResults.length > 0 && (
              <div style={{ padding: "0 10px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)", maxHeight: 300, overflowY: "auto" }}>
                {searchResults.map((r, i) => (
                  <div key={i} onClick={() => { navigate(r.type, r.id); setSearch(""); }}
                    style={{ padding: "7px 10px", borderRadius: 4, cursor: "pointer", marginBottom: 2, transition: "background 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = PALETTE.sidebarHover}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                    <div style={{ fontSize: 12.5, color: PALETTE.sidebarTextActive, fontFamily: "'Source Serif 4',serif" }}>{r.label}</div>
                    <div style={{ fontSize: 10, color: "#777", fontFamily: "'JetBrains Mono',monospace", marginTop: 2 }}>{r.sub}</div>
                  </div>
                ))}
              </div>
            )}
            {/* Philosopher quick links */}
            <div style={{ padding: "8px 10px 4px" }}>
              <div style={{ fontSize: 9, fontFamily: "'JetBrains Mono',monospace", color: "#666", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Philosophers</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 8 }}>
                {Object.entries(PHILOSOPHERS).sort((a,b) => a[1].name.localeCompare(b[1].name)).slice(0, 14).map(([k, p]) => (
                  <span key={k} onClick={() => navigate("philosopher", k)}
                    style={{ padding: "2px 8px", borderRadius: 3, fontSize: 10, color: view.type === "philosopher" && view.id === k ? "#C2A67A" : "#999", cursor: "pointer", background: view.type === "philosopher" && view.id === k ? "rgba(194,166,122,0.12)" : "transparent", fontFamily: "'JetBrains Mono',monospace", transition: "color 0.15s" }}
                    onMouseEnter={e => e.target.style.color = "#C2A67A"}
                    onMouseLeave={e => { if (!(view.type === "philosopher" && view.id === k)) e.target.style.color = "#999"; }}
                  >{p.name.split(" ").pop()}</span>
                ))}
                <span style={{ padding: "2px 8px", fontSize: 10, color: "#666", fontFamily: "'JetBrains Mono',monospace" }}>+{Object.keys(PHILOSOPHERS).length - 14}</span>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", flex: 1, overflowY: "auto", padding: "6px 6px", overscrollBehavior: "contain" }}>
              {tree.map(n => renderNode(n))}
            </div>
          </>
        )}
      </div>
      {/* Content */}
      <div ref={contentRef} style={{ flex: 1, overflowY: "auto", overscrollBehavior: "contain" }}>
        {view.type === "home" && renderHome()}
        {view.type === "entry" && renderArticle()}
        {view.type === "philosopher" && renderPhilosopher()}
      </div>
    </div>
  );
}

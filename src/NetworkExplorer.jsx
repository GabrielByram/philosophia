import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { TRADITIONS, PHILOSOPHERS, ERAS, yearToY, CANVAS_WIDTH, CANVAS_HEIGHT, CONNECTIONS, CONNECTION_LABELS } from "./data/networkData.js";

function PhilosophyExplorer() {
  const [selected, setSelected] = useState(null);
  const [expandedIdea, setExpandedIdea] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [filterTradition, setFilterTradition] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [detailLevel, setDetailLevel] = useState(0); // 0=blurb, 1=fuller, 2=subtopics, 3=sources
  const scrollRef = useRef(null);

  const NODE_R = 28;

  const filteredPhilosophers = useMemo(() =>
    Object.entries(PHILOSOPHERS).filter(([id, p]) => {
      if (filterTradition && p.tradition !== filterTradition) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.ideas.some((i) => i.title.toLowerCase().includes(q))
        );
      }
      return true;
    }), [filterTradition, searchQuery]);

  const filteredIds = useMemo(() => new Set(filteredPhilosophers.map(([id]) => id)), [filteredPhilosophers]);

  const getConnectedIds = useCallback((id) => {
    if (!id) return new Set();
    const p = PHILOSOPHERS[id];
    return new Set([id, ...p.influences, ...p.influenced]);
  }, []);

  const connectedToSelected = selected ? getConnectedIds(selected) : null;
  const connectedToHovered = hoveredNode ? getConnectedIds(hoveredNode) : null;

  const getNodeOpacity = (id) => {
    if (!filteredIds.has(id)) return 0;
    if (hoveredNode) return connectedToHovered.has(id) ? 1 : 0.12;
    if (selected) return connectedToSelected.has(id) ? 1 : 0.2;
    return 1;
  };

  const getConnectionOpacity = (from, to) => {
    if (!filteredIds.has(from) || !filteredIds.has(to)) return 0;
    if (hoveredNode) return (connectedToHovered.has(from) && connectedToHovered.has(to)) ? 0.8 : 0.03;
    if (selected) return (connectedToSelected.has(from) && connectedToSelected.has(to)) ? 0.7 : 0.04;
    return 0.1;
  };

  const phil = selected ? PHILOSOPHERS[selected] : null;
  const trad = phil ? TRADITIONS[phil.tradition] : null;

  const scrollToNode = (id) => {
    const p = PHILOSOPHERS[id];
    if (p && scrollRef.current) {
      const containerRect = scrollRef.current.getBoundingClientRect();
      const targetY = p.y - containerRect.height / 3;
      scrollRef.current.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", fontFamily: "'Crimson Pro', 'Georgia', serif", background: "#0A0A0C", color: "#E8E4DF", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet" />

      {/* ── LEFT: Scrollable Timeline ────────────────────── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Top bar */}
        <div style={{ padding: "12px 16px", display: "flex", gap: 10, alignItems: "center", background: "#0A0A0C", borderBottom: "1px solid rgba(255,255,255,0.06)", flexWrap: "wrap", zIndex: 10, flexShrink: 0 }}>
          <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: "0.05em", color: "#C2A67A", marginRight: 8 }}>
            PHILOSOPHIA
          </div>
          <input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 10px", color: "#E8E4DF", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", width: 160, outline: "none" }}
          />
          <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <button
              onClick={() => setFilterTradition(null)}
              style={{ padding: "3px 8px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.1)", background: !filterTradition ? "rgba(194,166,122,0.25)" : "transparent", color: !filterTradition ? "#C2A67A" : "#666", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", cursor: "pointer", letterSpacing: "0.04em" }}
            >ALL</button>
            {Object.entries(TRADITIONS).map(([key, t]) => (
              <button
                key={key}
                onClick={() => setFilterTradition(filterTradition === key ? null : key)}
                style={{ padding: "3px 8px", borderRadius: 4, border: `1px solid ${filterTradition === key ? t.color : "rgba(255,255,255,0.06)"}`, background: filterTradition === key ? `${t.color}30` : "transparent", color: filterTradition === key ? t.accent : "#555", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", cursor: "pointer", letterSpacing: "0.04em", whiteSpace: "nowrap" }}
              >{t.label.toUpperCase()}</button>
            ))}
          </div>
        </div>

        {/* Scrollable SVG area */}
        <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", overflowX: "hidden", position: "relative" }}>
          {/* Era time axis labels */}
          {ERAS.map((era, i) => {
            const yStart = yearToY(era.startYear);
            const yEnd = yearToY(era.endYear);
            return (
              <div key={i} style={{ position: "absolute", left: 0, top: yStart, height: yEnd - yStart, width: "100%", background: era.color, borderTop: `1px solid ${era.border}`, pointerEvents: "none", zIndex: 0 }}>
                <div style={{ position: "sticky", top: 0, padding: "6px 10px", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: era.border.replace("0.18", "0.6"), letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {era.label}
                </div>
              </div>
            );
          })}

          <svg width="100%" height={CANVAS_HEIGHT} style={{ position: "relative", zIndex: 1 }}>
            <defs>
              <marker id="arrowhead" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
                <polygon points="0 0, 7 2.5, 0 5" fill="rgba(255,255,255,0.2)" />
              </marker>
              {Object.entries(TRADITIONS).map(([key, t]) => (
                <radialGradient key={key} id={`glow-${key}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={t.color} stopOpacity="0.45" />
                  <stop offset="100%" stopColor={t.color} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            {/* Connection paths — rendered first so nodes paint over them */}
            {CONNECTIONS.map(({ from, to }, i) => {
              const pf = PHILOSOPHERS[from];
              const pt = PHILOSOPHERS[to];
              const opacity = getConnectionOpacity(from, to);
              if (opacity === 0) return null;
              const dx = pt.x - pf.x, dy = pt.y - pf.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist === 0) return null;
              const nx = dx / dist, ny = dy / dist;
              const sx = pf.x + nx * NODE_R, sy = pf.y + ny * NODE_R;
              const ex = pt.x - nx * (NODE_R + 6), ey = pt.y - ny * (NODE_R + 6);
              const curvature = Math.min(0.15, 40 / dist);
              const mx = (sx + ex) / 2 + ny * dist * curvature;
              const my = (sy + ey) / 2 - nx * dist * curvature;
              const isHighlighted = (selected && (from === selected || to === selected)) || (hoveredNode && (from === hoveredNode || to === hoveredNode));
              return (
                <path
                  key={i}
                  d={`M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`}
                  fill="none"
                  stroke={isHighlighted ? TRADITIONS[pf.tradition].color : "rgba(255,255,255,0.25)"}
                  strokeWidth={isHighlighted ? 1.8 : 0.8}
                  strokeDasharray={isHighlighted ? "none" : "3 3"}
                  markerEnd="url(#arrowhead)"
                  style={{ transition: "opacity 0.3s", opacity }}
                />
              );
            })}

            {/* Nodes */}
            {Object.entries(PHILOSOPHERS).map(([id, p]) => {
              const t = TRADITIONS[p.tradition];
              const opacity = getNodeOpacity(id);
              if (opacity === 0) return null;
              const isSelected = selected === id;
              const isHovered = hoveredNode === id;
              const scale = isSelected ? 1.12 : isHovered ? 1.06 : 1;
              return (
                <g
                  key={id}
                  className="node-group"
                  transform={`translate(${p.x}, ${p.y}) scale(${scale})`}
                  onClick={(e) => { e.stopPropagation(); setSelected(isSelected ? null : id); setExpandedIdea(null); setDetailLevel(0); scrollToNode(id); }}
                  onMouseEnter={() => setHoveredNode(id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ cursor: "pointer", opacity, transition: "opacity 0.3s" }}
                >
                  <circle r={NODE_R * 2} fill={`url(#glow-${p.tradition})`} opacity={isSelected ? 0.7 : isHovered ? 0.4 : 0.15} />
                  <circle r={NODE_R} fill="#0A0A0C" stroke={t.color} strokeWidth={isSelected ? 2.5 : 1.2} />
                  <circle r={NODE_R - 3} fill={`${t.color}15`} />
                  <text textAnchor="middle" dy="0.35em" fill={t.accent} fontSize={p.name.length > 12 ? 9 : 11} fontWeight="600" fontFamily="'Crimson Pro', serif" letterSpacing="0.04em">
                    {p.name.split(/[\s-]/).map((w) => w[0]).join("").slice(0, 3)}
                  </text>
                  <text textAnchor="middle" y={NODE_R + 13} fill="#888" fontSize={9.5} fontFamily="'Crimson Pro', serif" fontWeight="400">
                    {p.name}
                  </text>
                  <text textAnchor="middle" y={NODE_R + 25} fill="#555" fontSize={8} fontFamily="'JetBrains Mono', monospace">
                    {p.years}
                  </text>
                </g>
              );
            })}
            {/* Connection labels — rendered last so they sit above nodes */}
            {CONNECTIONS.map(({ from, to, label }, i) => {
              if (!label) return null;
              const pf = PHILOSOPHERS[from];
              const pt = PHILOSOPHERS[to];
              const isHighlighted = (selected && (from === selected || to === selected)) || (hoveredNode && (from === hoveredNode || to === hoveredNode));
              if (!isHighlighted) return null;
              const dx = pt.x - pf.x, dy = pt.y - pf.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist === 0) return null;
              const nx = dx / dist, ny = dy / dist;
              const sx = pf.x + nx * NODE_R, sy = pf.y + ny * NODE_R;
              const ex = pt.x - nx * (NODE_R + 6), ey = pt.y - ny * (NODE_R + 6);
              const curvature = Math.min(0.15, 40 / dist);
              const mx = (sx + ex) / 2 + ny * dist * curvature;
              const my = (sy + ey) / 2 - nx * dist * curvature;
              const midX = (sx + 2 * mx + ex) / 4;
              const midY = (sy + 2 * my + ey) / 4;
              return (
                <text
                  key={i}
                  x={midX}
                  y={midY - 6}
                  textAnchor="middle"
                  fill={TRADITIONS[pf.tradition].accent}
                  fontSize={11}
                  fontFamily="'JetBrains Mono', monospace"
                  stroke="rgba(15,15,20,0.85)"
                  strokeWidth={3}
                  paintOrder="stroke"
                  style={{ pointerEvents: "none" }}
                >
                  {label}
                </text>
              );
            })}
          </svg>

          {/* Hint */}
          {!selected && (
            <div style={{ position: "sticky", bottom: 16, textAlign: "center", pointerEvents: "none", zIndex: 5 }}>
              <div style={{ display: "inline-block", background: "rgba(10,10,12,0.88)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "8px 18px", fontSize: 12, color: "#666", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.03em", backdropFilter: "blur(8px)" }}>
                Click a philosopher to explore · Scroll down through time
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── RIGHT: Detail Panel ──────────────────────────── */}
      <div style={{
        width: selected ? 420 : 0,
        minWidth: selected ? 420 : 0,
        transition: "width 0.35s ease, min-width 0.35s ease",
        overflow: "hidden",
        borderLeft: selected ? "1px solid rgba(255,255,255,0.06)" : "none",
        background: "linear-gradient(135deg, #111114 0%, #0A0A0C 100%)",
      }}>
        {phil && trad && (
          <div style={{ padding: "24px 22px", height: "100vh", overflowY: "auto", boxSizing: "border-box" }}>

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: trad.color, letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>
                  {trad.label}
                </div>
                <h2 style={{ margin: 0, fontSize: 26, fontWeight: 300, letterSpacing: "0.01em", color: "#F0ECE6" }}>
                  {phil.name}
                </h2>
                <div style={{ fontSize: 13, color: "#666", marginTop: 3, fontStyle: "italic" }}>
                  {phil.years}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{ background: "none", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, color: "#888", width: 26, height: 26, cursor: "pointer", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
              >✕</button>
            </div>

            {/* Tagline */}
            <div style={{ padding: "8px 12px", background: `${trad.color}10`, border: `1px solid ${trad.color}25`, borderRadius: 8, marginBottom: 20, fontSize: 14, fontStyle: "italic", color: trad.accent, letterSpacing: "0.02em" }}>
              "{phil.tagline}"
            </div>

            {/* ── Depth Level Tabs ── */}
            <div style={{ display: "flex", gap: 0, marginBottom: 20, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              {["Overview", "Deep Dive", "Subtopics", "Sources"].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setDetailLevel(i)}
                  style={{
                    flex: 1,
                    padding: "7px 4px",
                    background: detailLevel === i ? `${trad.color}20` : "rgba(255,255,255,0.02)",
                    border: "none",
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    color: detailLevel === i ? trad.accent : "#666",
                    fontSize: 10,
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    transition: "all 0.2s",
                  }}
                >{label}</button>
              ))}
            </div>

            {/* ── Level 0: Overview (blurb + key ideas) ── */}
            {detailLevel === 0 && (
              <>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: "#B0ACA5", marginBottom: 24, letterSpacing: "0.01em" }}>
                  {phil.blurb}
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#555", letterSpacing: "0.12em", marginBottom: 10, textTransform: "uppercase" }}>
                    Key Ideas
                  </div>
                  {phil.ideas.map((idea, i) => {
                    const isExp = expandedIdea === i;
                    return (
                      <div
                        key={i}
                        onClick={() => setExpandedIdea(isExp ? null : i)}
                        style={{ padding: "9px 12px", marginBottom: 5, background: isExp ? `${trad.color}12` : "rgba(255,255,255,0.02)", border: `1px solid ${isExp ? trad.color + "35" : "rgba(255,255,255,0.04)"}`, borderRadius: 7, cursor: "pointer", transition: "all 0.2s" }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div style={{ fontSize: 13, fontWeight: 500, color: isExp ? trad.accent : "#C8C4BE" }}>{idea.title}</div>
                          <div style={{ fontSize: 10, color: "#555", transform: isExp ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>▸</div>
                        </div>
                        {isExp && (
                          <div style={{ marginTop: 8, fontSize: 12.5, lineHeight: 1.7, color: "#A09B94" }}>
                            {idea.desc}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* ── Level 1: Deep Dive (fuller write-up) ── */}
            {detailLevel === 1 && (
              <div style={{ fontSize: 13.5, lineHeight: 1.85, color: "#B0ACA5", letterSpacing: "0.01em" }}>
                {(phil.fuller || phil.blurb).split("\n\n").map((para, i) => (
                  <p key={i} style={{ margin: "0 0 16px 0" }}>{para}</p>
                ))}
              </div>
            )}

            {/* ── Level 2: Subtopics ── */}
            {detailLevel === 2 && (
              <div>
                <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#555", letterSpacing: "0.12em", marginBottom: 12, textTransform: "uppercase" }}>
                  Subtopics & Branches
                </div>
                {(phil.subtopics || []).map((sub, i) => (
                  <div key={i} style={{ padding: "12px 14px", marginBottom: 8, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8 }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: trad.accent, marginBottom: 6 }}>{sub.name}</div>
                    <div style={{ fontSize: 12.5, lineHeight: 1.75, color: "#A09B94" }}>{sub.desc}</div>
                  </div>
                ))}
                {(!phil.subtopics || phil.subtopics.length === 0) && (
                  <div style={{ fontSize: 13, color: "#555", fontStyle: "italic" }}>No subtopics available yet.</div>
                )}
              </div>
            )}

            {/* ── Level 3: Primary Sources ── */}
            {detailLevel === 3 && (
              <div>
                <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#555", letterSpacing: "0.12em", marginBottom: 12, textTransform: "uppercase" }}>
                  Primary Sources & Recommended Reading
                </div>
                {(phil.primarySources || []).map((src, i) => (
                  <div key={i} style={{ padding: "12px 14px", marginBottom: 8, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#D0CBC4", marginBottom: 2 }}>
                      <span style={{ fontStyle: "italic" }}>{src.title}</span>
                    </div>
                    <div style={{ fontSize: 11, color: trad.color, marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>
                      {src.author}
                    </div>
                    <div style={{ fontSize: 12, lineHeight: 1.65, color: "#908B84" }}>
                      {src.note}
                    </div>
                  </div>
                ))}
                {(!phil.primarySources || phil.primarySources.length === 0) && (
                  <div style={{ fontSize: 13, color: "#555", fontStyle: "italic" }}>No sources listed yet.</div>
                )}
              </div>
            )}

            {/* ── Connections (always visible) ── */}
            <div style={{ marginTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
              {phil.influences.length > 0 && (
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#555", letterSpacing: "0.12em", marginBottom: 8, textTransform: "uppercase" }}>
                    Influenced by
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {phil.influences.map((id) => {
                      const inf = PHILOSOPHERS[id];
                      if (!inf) return null;
                      const it = TRADITIONS[inf.tradition];
                      const connKey = `${id}→${selected}`;
                      const connLabel = CONNECTION_LABELS[connKey];
                      return (
                        <button
                          key={id}
                          onClick={(e) => { e.stopPropagation(); setSelected(id); setExpandedIdea(null); setDetailLevel(0); scrollToNode(id); }}
                          title={connLabel || "influenced"}
                          style={{ padding: "4px 10px", borderRadius: 16, border: `1px solid ${it.color}40`, background: `${it.color}10`, color: it.accent, fontSize: 11, cursor: "pointer", fontFamily: "'Crimson Pro', serif", letterSpacing: "0.02em", transition: "all 0.2s" }}
                          onMouseEnter={(e) => { e.target.style.background = `${it.color}25`; }}
                          onMouseLeave={(e) => { e.target.style.background = `${it.color}10`; }}
                        >{inf.name}</button>
                      );
                    })}
                  </div>
                </div>
              )}

              {phil.influenced.length > 0 && (
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#555", letterSpacing: "0.12em", marginBottom: 8, textTransform: "uppercase" }}>
                    Influenced
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {phil.influenced.map((id) => {
                      const inf = PHILOSOPHERS[id];
                      if (!inf) return null;
                      const it = TRADITIONS[inf.tradition];
                      const connKey = `${selected}→${id}`;
                      const connLabel = CONNECTION_LABELS[connKey];
                      return (
                        <button
                          key={id}
                          onClick={(e) => { e.stopPropagation(); setSelected(id); setExpandedIdea(null); setDetailLevel(0); scrollToNode(id); }}
                          title={connLabel || "influenced"}
                          style={{ padding: "4px 10px", borderRadius: 16, border: `1px solid ${it.color}40`, background: `${it.color}10`, color: it.accent, fontSize: 11, cursor: "pointer", fontFamily: "'Crimson Pro', serif", letterSpacing: "0.02em", transition: "all 0.2s" }}
                          onMouseEnter={(e) => { e.target.style.background = `${it.color}25`; }}
                          onMouseLeave={(e) => { e.target.style.background = `${it.color}10`; }}
                        >{inf.name}</button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Tradition badge */}
            <div style={{ marginTop: 16, padding: "12px 14px", background: "rgba(255,255,255,0.02)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: trad.color }} />
                <span style={{ fontSize: 13, color: trad.accent }}>{trad.label}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PhilosophyExplorer;

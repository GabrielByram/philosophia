import { useState } from "react";
import { Encyclopedia } from "./Encyclopedia.jsx";
import PhilosophyExplorer from "./NetworkExplorer.jsx";

export default function App() {
  const [view, setView] = useState("encyclopedia");

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.6rem 1.25rem",
          borderBottom: "1px solid #e0ddd8",
          background: "#faf9f7",
        }}
      >
        <span style={{ fontFamily: "Georgia, serif", fontSize: "1.25rem", fontWeight: 600, letterSpacing: "0.02em", color: "#2c2a26" }}>
          Philosophia
        </span>

        <nav style={{ display: "flex", gap: "0.25rem", background: "#ede9e3", borderRadius: "6px", padding: "3px" }}>
          {[
            { key: "encyclopedia", label: "Encyclopedia" },
            { key: "network", label: "Network" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setView(key)}
              style={{
                padding: "0.3rem 0.85rem",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontFamily: "inherit",
                fontWeight: view === key ? 600 : 400,
                background: view === key ? "#fff" : "transparent",
                color: view === key ? "#2c2a26" : "#6b6560",
                boxShadow: view === key ? "0 1px 3px rgba(0,0,0,0.12)" : "none",
                transition: "all 0.15s ease",
              }}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        {view === "encyclopedia" ? <Encyclopedia /> : <PhilosophyExplorer />}
      </main>
    </div>
  );
}

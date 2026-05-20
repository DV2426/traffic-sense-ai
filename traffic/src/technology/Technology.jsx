import { useState,  useRef } from "react";

const TECHS = [
  {
    num: "01 / SIMULATION",
    icon: "🚗",
    title: "SUMO Traffic Simulation",
    desc: "Creates realistic virtual traffic environments to generate rich data on vehicle count, speed, and density across complex intersections.",
    tags: ["Virtual Environment", "Traffic Data", "Intersection Modeling"],
    accent: "#00e5ff",
  },
  {
    num: "02 / AI ENGINE",
    icon: "🤖",
    title: "AI-Based Traffic Prediction",
    desc: "Analyzes historical and live simulation data to predict congestion levels, enabling intelligent and proactive traffic control decisions.",
    tags: ["Pattern Analysis", "Congestion Forecast", "Smart Decisions"],
    accent: "#7b2fff",
  },
  {
    num: "03 / LEARNING",
    icon: "🧠",
    title: "Reinforcement Learning (RL)",
    desc: "Autonomously learns optimal traffic signal timing through continuous trial-and-feedback cycles, minimizing wait times and reducing congestion.",
    tags: ["Auto Signal Timing", "Continuous Learning", "Wait Reduction"],
    accent: "#ff4d6d",
  },
  {
    num: "04 / OPTIMIZATION",
    icon: "⚛️",
    title: "Quantum-Inspired Optimization",
    desc: "Explores large solution spaces efficiently to find superior signal timing combinations, elevating intersection throughput and traffic management.",
    tags: ["Signal Optimization", "Efficient Search", "Throughput Boost"],
    accent: "#00ffb3",
  },
  {
    num: "05 / HARDWARE",
    icon: "🚦",
    title: "Arduino Traffic Light Control",
    desc: "Translates AI-generated decisions into real-world hardware signals, dynamically adjusting red, yellow, and green timings at physical intersections.",
    tags: ["Dynamic Control", "Hardware Interface", "AI-Driven Signals"],
    accent: "#ff9a3c",
  },
  {
    num: "06 / FRONTEND",
    icon: "🌐",
    title: "Frontend Technologies",
    desc: "Modern web stack powering the project dashboard and monitoring interface with a responsive, real-time user experience.",
    tags: ["HTML", "CSS", "JavaScript", "React.js"],
    accent: "#3cf0ff",
  },
  {
    num: "07 / DATA",
    icon: "📊",
    title: "Data Processing & Analysis",
    desc: "Processes large volumes of simulation output, monitors live traffic density and vehicle movement to supply the AI with clean, actionable intelligence.",
    tags: ["Data Pipeline", "Density Monitoring", "Real-Time Analysis"],
    accent: "#b48aff",
  },
  {
    num: "08 / ROUTING",
    icon: "🗺️",
    title: "Smart Route Suggestion",
    desc: "Recommends less-congested alternate routes in real time, reducing individual travel time and distributing traffic loads more evenly across the network.",
    tags: ["Alternate Routes", "Travel Time", "Load Balancing"],
    accent: "#f9e94e",
  },
];

const CHIPS = [
  { icon: "🚗", label: "SUMO Simulation" },
  { icon: "🤖", label: "AI Prediction" },
  { icon: "🧠", label: "Reinforcement Learning" },
  { icon: "⚛️", label: "Quantum Optimization" },
  { icon: "🚦", label: "Arduino Control" },
  { icon: "🌐", label: "React Frontend" },
  { icon: "📊", label: "Data Processing" },
  { icon: "🗺️", label: "Smart Routing" },
];

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function TechCard({ tech, index }) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const rgb = hexToRgb(tech.accent);

  const handleMouseMove = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    setMouse({
      x: (((e.clientX - r.left) / r.width) * 100).toFixed(1),
      y: (((e.clientY - r.top) / r.height) * 100).toFixed(1),
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "#10151b",
        border: `1px solid ${hovered ? tech.accent : "rgba(0,229,255,0.12)"}`,
        borderRadius: 18,
        padding: "34px 30px 30px",
        overflow: "hidden",
        cursor: "default",
        transform: hovered ? "translateY(-7px) scale(1.015)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(${rgb},0.18)`
          : "none",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s, box-shadow 0.35s",
        animation: `fadeUp 0.6s ${index * 0.07}s ease both`,
      }}
    >
      {/* Mouse-follow glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(${rgb},0.1) 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
          pointerEvents: "none",
        }}
      />

      {/* Top accent stripe */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${tech.accent}, transparent)`,
          borderRadius: "18px 18px 0 0",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 60, height: 60,
          borderRadius: 16,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.9rem",
          marginBottom: 22,
          background: `rgba(${rgb},0.09)`,
          border: `1px solid rgba(${rgb},0.22)`,
          position: "relative",
          transform: hovered ? "rotate(-6deg) scale(1.12)" : "rotate(0) scale(1)",
          transition: "transform 0.3s",
        }}
      >
        {tech.icon}
        {/* Pulse ring */}
        <div
          style={{
            position: "absolute",
            inset: -6,
            borderRadius: 20,
            border: `1px solid ${tech.accent}`,
            animation: "pulseRing 2.4s ease-out infinite",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Number */}
      <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "0.6rem", letterSpacing: "0.18em", color: "#5a7a9a", marginBottom: 6 }}>
        {tech.num}
      </div>

      {/* Title */}
      <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: 14, lineHeight: 1.3 }}>
        {tech.title}
      </div>

      {/* Desc */}
      <div style={{ fontSize: "0.88rem", color: "#5a7a9a", lineHeight: 1.75, marginBottom: 22 }}>
        {tech.desc}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {tech.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              padding: "4px 12px",
              borderRadius: 100,
              background: hovered ? `rgba(${rgb},0.15)` : `rgba(${rgb},0.07)`,
              border: `1px solid rgba(${rgb},0.35)`,
              color: tech.accent,
              transition: "background 0.25s",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Technology() {
  const [chipHover, setChipHover] = useState(null);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseRing {
          0%   { opacity: 0.6; transform: scale(0.92); }
          100% { opacity: 0;   transform: scale(1.45); }
        }
        @keyframes starMove {
          from { background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0; }
          to   { background-position: 400px 400px, -600px 600px, 500px -500px, -700px 700px, 350px -350px, -450px 450px; }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #050b18;
          font-family: 'Exo 2', sans-serif;
          color: #d0e8ff;
          overflow-x: hidden;
        }
      `}</style>

      {/* Outer wrapper */}
      <div
        style={{
          minHeight: "100vh",
          background: "#050b18",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated starfield */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundImage: `
              radial-gradient(1px 1px at 12% 15%, rgba(0,229,255,.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 44% 72%, rgba(123,47,255,.35) 0%, transparent 100%),
              radial-gradient(1px 1px at 78% 30%, rgba(255,77,109,.3) 0%, transparent 100%),
              radial-gradient(1px 1px at 90% 88%, rgba(0,229,255,.25) 0%, transparent 100%),
              radial-gradient(1px 1px at 25% 55%, rgba(255,255,255,.15) 0%, transparent 100%),
              radial-gradient(1px 1px at 60% 10%, rgba(255,255,255,.12) 0%, transparent 100%)
            `,
            backgroundSize: "400px 400px, 600px 600px, 500px 500px, 700px 700px, 350px 350px, 450px 450px",
            animation: "starMove 60s linear infinite",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Section content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "90px 32px 110px",
          }}
        >
          {/* ── Header ── */}
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div
              style={{
                display: "inline-block",
                fontFamily: "'Orbitron', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#df7f00",
                border: "1px solid #df7f00",
                padding: "6px 20px",
                borderRadius: 100,
                marginBottom: 22,
                background: "rgba(0,229,255,0.06)",
                animation: "fadeUp 0.5s ease both",
              }}
            >
              ⚡ Stack &amp; Tools
            </div>

            <h2
              style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "clamp(2rem, 5vw, 3.6rem)",
                fontWeight: 900,
                lineHeight: 1.1,
color: "#dc6409",
                
                    marginBottom: 18,
                animation: "fadeUp 0.5s 0.08s ease both",
              }}
            >
              Technologies Used
            </h2>

            <p
              style={{
                color: "#a1a9b1",
                fontSize: "1.05rem",
                maxWidth: 560,
                margin: "0 auto",
                lineHeight: 1.7,
                animation: "fadeUp 0.5s 0.16s ease both",
              }}
            >
              The core technologies, algorithms, and frameworks powering the Traffic Sense AI intelligent traffic management system.
            </p>

            {/* Divider */}
            <div
              style={{
                width: 80,
                height: 3,
                background: "linear-gradient(90deg, #d17205, #ff0000)",
                margin: "24px auto 0",
                borderRadius: 4,
                transformOrigin: "left",
                animation: "lineGrow 0.7s 0.3s ease both",
              }}
            />
          </div>

          {/* ── Cards Grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 26,
            }}
          >
            {TECHS.map((tech, i) => (
              <TechCard key={tech.title} tech={tech} index={i} />
            ))}
          </div>

          {/* ── Summary Bar ── */}
          <div
            style={{
              marginTop: 72,
              background: "#070d18",
              border: "2px solid #bff9f91a",
              borderRadius: 20,
              padding: "36px 40px",
              display: "flex",
              flexWrap: "wrap",
              gap: 28,
              alignItems: "center",
              justifyContent: "space-between",
              animation: "fadeUp 0.6s 0.6s ease both",
            }}
          >
            <div style={{ width: "100%" }}>
              <h3
                style={{
                  fontFamily: "'Orbitron', monospace",
                  fontSize: "0.85rem",
                  letterSpacing: "0.15em",
                  color: "#df9109",
                  marginBottom: 16,
                }}
              >
                🚀 QUICK OVERVIEW
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {CHIPS.map((chip, i) => (
                  <div
                    key={chip.label}
                    onMouseEnter={() => setChipHover(i)}
                    onMouseLeave={() => setChipHover(null)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      padding: "8px 16px",
                      borderRadius: 100,
                      background: chipHover === i ? "rgba(223, 187, 133, 0.14)" : "rgba(238, 183, 72, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#cce8ff",
                      cursor: "default",
                      transform: chipHover === i ? "scale(1.05)" : "scale(1)",
                      transition: "background 0.25s, transform 0.25s",
                    }}
                  >
                    <span style={{ fontSize: "1rem" }}>{chip.icon}</span>
                    {chip.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
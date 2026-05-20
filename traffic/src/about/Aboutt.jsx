import { useState, useEffect } from "react";
import aboutImg from '../images/about.png';
const styles = {
  /* Reset & Base */
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },

  page: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor:'#1a1b1c',
    minHeight: "100vh",
    color: "#1a1a2e",
  },

  /* Header */
  header: {
    background: '#dc6409',
    padding: "36px 20px 32px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(227, 156, 13, 0.35)",
  },
  headerTitle: {
    fontSize: "clamp(28px, 5vw, 44px)",
    fontWeight: 800,
    color: "#ffffff",
    letterSpacing: "0.5px",
    marginBottom: "8px",
    textShadow: "0 2px 8px rgba(0,0,0,0.18)",
  },
  headerSubtitle: {
    fontSize: "clamp(13px, 2vw, 16px)",
    color: "rgba(242, 237, 237, 0.85)",
    fontWeight: 400,
    letterSpacing: "1.2px",
  },

  /* Main Content */
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "48px 24px",
  },

  /* About Section */
  aboutSection: {
    display: "flex",
    gap: "40px",
    alignItems: "flex-start",
    marginBottom: "60px",
    flexWrap: "wrap",
  },
  aboutText: {
    flex: "1 1 320px",
  },
  sectionHeading: {
    fontSize: "26px",
    fontWeight: 700,
    color: '#dc6409',
    marginBottom: "18px",
  },
  aboutParagraph: {
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#f8f8f8",
    marginBottom: "14px",
  },

  /* ✅ NEW IMAGE STYLE */
  imageBox: {
    flex: "0 0 320px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin:"100px,10px",
    
  },

  image: {
    width: "100%",
    maxWidth: "1120px",
    minHeight:"350px",
        margin:"100px,10px,100px,0px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },

  /* Key Features */
  featuresSection: {
    marginBottom: "60px",
  },
  featuresSectionTitle: {
    fontSize: "26px",
    fontWeight: 700,
    color: '#dc6409',
    textAlign: "center",
    marginBottom: "32px",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  featureCard: {
    background: 'radial-gradient(circle at top, #1b1b1b, #0d0d0d)',
    borderRadius: "16px",
    padding: "28px 22px 24px",
    textAlign: "center",
    boxShadow: "0 2px 16px rgba(26,110,247,0.08)",
    border: "1px solid #1e1f1f",
    transition: "transform 0.22s ease, box-shadow 0.22s ease",
    cursor: "default",
  },
  featureCardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 32px rgba(26,110,247,0.18)",
  },
  featureIcon: {
    fontSize: "36px",
    marginBottom: "12px",
    display: "block",
  },
  featureTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#b7c4f5",
    marginBottom: "10px",
  },
  featureDesc: {
    fontSize: "13.5px",
    color: "#b7bac0",
    lineHeight: "1.6",
  },

  /* Real World Impact */
  impactSection: {
    background:'radial-gradient(circle at top, #333232, #0d0d0d)',
    borderRadius: "18px",
    padding: "36px 32px",
    border: "1px solid #c2d8ff",
  },
  impactHeading: {
    fontSize: "24px",
    fontWeight: 700,
    color: '#dc6409',
    marginBottom: "14px",
  },
  impactText: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#fcfcfe",
  },

  /* Footer */
  footer: {
    textAlign: "center",
    padding: "24px",
    fontSize: "13px",
    color: "#8a9abc",
    borderTop: "1px solid #dce8ff",
    marginTop: "20px",
  },
};

const features = [
  {
    icon: "🚦",
    title: "Smart Signals",
    desc: "Dynamic traffic light control based on real-time traffic data.",
  },
  {
    icon: "🤖",
    title: "AI Analysis",
    desc: "Uses AI to predict and manage traffic flow efficiently.",
  },
  {
    icon: "📍",
    title: "Route Suggestion",
    desc: "Suggests less congested routes to save time.",
  },
  {
    icon: "📊",
    title: "Simulation",
    desc: "Traffic scenarios tested using SUMO simulation model.",
  },
];


function FeatureCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.featureCard,
        ...(hovered ? styles.featureCardHover : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={styles.featureIcon}>{icon}</span>
      <div style={styles.featureTitle}>{title}</div>
      <div style={styles.featureDesc}>{desc}</div>
    </div>
  );
}

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        ...styles.page,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Traffic Sense AI</h1>
        <p style={styles.headerSubtitle}>Smart Traffic Management System</p>
      </header>

      {/* Main */}
      <main style={styles.main}>

        {/* About Project */}
        <section style={styles.aboutSection}>
          <div style={styles.aboutText}>
            <h2 style={styles.sectionHeading}>About Project</h2>
            <p style={styles.aboutParagraph}>
              This project focuses on improving traffic flow using AI and
              simulation. Traffic data is generated using the SUMO model, where
              different traffic situations are created by changing vehicle
              count, speed, and density.
            </p>
            <p style={styles.aboutParagraph}>
              The system analyzes this data and controls traffic signals using
              Arduino. Signal timings are adjusted dynamically instead of using
              fixed timings, helping reduce congestion and waiting time.
            </p>
          </div>
</section>
<section>
          {/* Workflow Diagram */}
         <div style={styles.imageBox}>
            <img src={aboutImg} alt="Workflow" style={styles.image} />
          </div>
        </section>

        {/* Key Features */}
        <section style={styles.featuresSection}>
          <h2 style={styles.featuresSectionTitle}>Key Features</h2>
          <div style={styles.featuresGrid}>
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        {/* Real World Impact */}
        <section style={styles.impactSection}>
          <h2 style={styles.impactHeading}>Real World Impact</h2>
          <p style={styles.impactText}>
            This system helps reduce traffic congestion, improves travel time,
            and supports smart city development. Even though it is based on
            simulation, it shows strong potential for real-world applications.
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Traffic Sense AI — Smart Traffic Management System
      </footer>
    </div>
  );
}

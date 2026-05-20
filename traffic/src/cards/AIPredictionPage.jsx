import { useEffect, useState } from "react";

export default function AIPredictionPage() {

  const [data, setData] = useState(null);

  // 🔥 Fetch SUMO data from Flask
  useEffect(() => {
    fetch("http://127.0.0.1:5000/run-simulation")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div style={styles.page}>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.overlay}>
          <h1 style={styles.heroTitle}>🤖 AI-Based Traffic Prediction</h1>
          <p style={styles.heroText}>
            Intelligent traffic prediction system using SUMO simulation + AI.
          </p>
        </div>
      </section>

      {/* Dashboard Section */}
      <section style={styles.sectionLight}>
        <h2 style={styles.headingCenter}>🚦 Live Traffic Dashboard</h2>

        <div style={styles.dashboardCard}>

          <div style={styles.dashboardInfo}>

            {/* Vehicle Count */}
            <div style={styles.infoCard}>
              <h3>🚗 Vehicle Count</h3>
              <p>{data ? data.vehicle_count : "Loading..."}</p>
            </div>

            {/* Traffic Level */}
            <div style={styles.infoCard}>
              <h3>📊 Traffic Level</h3>
              <p>{data ? data.traffic_level : "Loading..."}</p>
            </div>

            {/* Signal Time */}
            <div style={styles.infoCard}>
              <h3>⏱ Signal Time</h3>
              <p>{data ? data.signal_time : "Loading..."}</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

// ================= STYLES =================

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#f4f7fb",
  },

  heroSection: {
    height: "350px",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1600&auto=format&fit=crop)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    background: "rgba(0,0,0,0.6)",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
  },

  heroTitle: {
    color: "white",
    fontSize: "40px",
  },

  heroText: {
    color: "#ddd",
    fontSize: "18px",
  },

  sectionLight: {
    padding: "60px 10%",
  },

  headingCenter: {
    textAlign: "center",
    color: "#0d6efd",
    marginBottom: "40px",
  },

  dashboardCard: {
    background: "white",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },

  dashboardInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },

  infoCard: {
    background: "#f4f7fb",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
  },
};
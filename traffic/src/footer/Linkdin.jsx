import React from "react";

function Linkdin() {

  const developers = [
    {
      name: "Neha Dorage",
      role: "Frontend Developer",
      image:
       "https://th.bing.com/th/id/OIP.UhEOOa4oYoHcZvb00NjhugHaHa?w=186&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",      linkedin: "https://linkedin.com/in/neha-dorage-3738732aa",
    },

    {
      name: "Sakshi Yadav",
      role: "AI Engineer",
      image:
     " https://th.bing.com/th/id/OIP.jqd1uZ0NqJnHT0savPCdLgHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
       
      linkedin: "https://linkedin.com/in/sakshiyadav21",
    },

    {
      name: "Diksha Vasekar",
      role: "RL Researcher",
      image:
        "https://th.bing.com/th/id/OIP.jQDAnqE-AYPoi9uecXMCKwHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      linkedin: "https://www.linkedin.com/in/developer3/",
    },

    {
      name: "Yash Yadav",
      role: "Traffic Simulation Expert",
      image:
        "https://th.bing.com/th/id/OIP.YoTUWMoKovQT0gCYOYMwzwHaHa?w=206&h=206&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      linkedin: "https://linkedin.com/in/astroyash4",
    },
  ];

  return (

    <div style={styles.page}>

      {/* Header */}

      <div style={styles.header}>

        <h1 style={styles.heading}>
          Meet Our Developers
        </h1>

        <p style={styles.subHeading}>
          Traffic Sense AI Development Team
        </p>

      </div>

      {/* Developer Section */}

      <div style={styles.section}>

        <h2 style={styles.title}>
          👨‍💻 Developer Team
        </h2>

        <div style={styles.container}>

          {developers.map((dev, index) => (

            <div key={index} style={styles.card}>

              {/* Image */}

              <img
                src={dev.image}
                alt={dev.name}
                style={styles.image}
                onClick={() =>
                  window.open(dev.linkedin, "_blank")
                }
              />

              {/* Name */}

              <h3 style={styles.name}>
                {dev.name}
              </h3>

              {/* Role */}

              <p style={styles.role}>
                {dev.role}
              </p>

              {/* Extra Point */}

              <p style={styles.info}>
                ✔ Smart Traffic System Developer
              </p>

              {/* LinkedIn Button */}

              <button
                style={styles.button}
                onClick={() =>
                  window.open(dev.linkedin, "_blank")
                }
              >
                View LinkedIn
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div style={styles.footer}>

        <p>
          Traffic Sense AI © 2026
        </p>

      </div>

    </div>
  );
}

/* Styles */

const styles = {

  page: {
    margin: 0,
    padding: 0,
    fontFamily: "Arial, sans-serif",
     backgroundColor: '#1a1b1c',
    minHeight: "100vh",
  },

  header: {
    background: '#dc6409',
    color: "#ffffff",
    textAlign: "center",
    padding: "40px",
  },

  heading: {
    margin: 0,
    fontSize: "42px",
  },

  subHeading: {
    marginTop: "10px",
    fontSize: "18px",
  },

  section: {
    padding: "60px 40px",
  },

  title: {
    textAlign: "center",
    color: "#dc6409",
    fontSize: "36px",
    marginBottom: "50px",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  card: {
      background: 'radial-gradient(circle at top, #131111, #0d0d0d)',
    width: "260px",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },

  image: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #dc6409",
    cursor: "pointer",
  },

  name: {
    marginTop: "20px",
    color: "#d3d3d3",
  },

  role: {
    color: "#d2d1d1",
    fontSize: "15px",
  },

  info: {
    marginTop: "10px",
    color: "#b29595",
    fontSize: "14px",
  },

  button: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    background: "#dc6409",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
  },

  footer: {
    background: "#dc6409",
    color: "white",
    textAlign: "center",
    padding: "20px",
    marginTop: "50px",
  },

};

export default Linkdin;
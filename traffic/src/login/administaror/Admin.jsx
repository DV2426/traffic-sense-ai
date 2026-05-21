import React, { useState } from "react";
import bgImage from "../../images/login.jpeg";

function Admin({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        {/* BACK BUTTON */}
        <button
           onClick={() => onNavigate('LoginStart')}
          style={{
            background: "#dc6409",
            color: "#ffffff",
            marginBottom: "15px",
            cursor: "pointer",
            border: "2px solid #562602",
            borderRadius: "8px",
            padding: "6px 12px",
            fontWeight: "bold"
          }}
        >
          ← Back
        </button>

        {/* LOGIN CARD */}
        <div
          style={{
            width: "500px",
            padding: "30px",
            background: "rgba(37,37,36,0.95)",
            position: "relative",
            zIndex: 1,
            border: "2px solid #000",
            boxShadow: "5px 10px 30px rgba(209,115,115,0.7)",
            borderRadius: "12px",
            backdropFilter: "blur(5px)",
          }}
        >
          {/* TITLE */}
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              marginBottom: "8px",
              color: "#dc6409",
            }}
          >
            Administrator Login
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#ffffff",
              marginBottom: "25px",
            }}
          >
            Please login to your account.
          </p>

          {/* EMAIL */}
          <label
            style={{
              fontWeight: "500",
              color: "#ffffff",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Email
          </label>

          <input
            type="email"
            placeholder="name@email.com"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "15px",
              borderRadius: "8px",
              border: "1px solid #fff8f8",
              marginBottom: "20px",
              background: "#1b1b1b",
              color: "#ffffff",
              outline: "none",
            }}
          />

          {/* PASSWORD */}
          <label
            style={{
              fontWeight: "500",
              color: "#ffffff",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Password
          </label>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                background: "#1b1b1b",
                color: "#fff",
                outline: "none",
              }}
            />

            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{
                background: "#292828",
                border: "1px solid #555",
                color: "#fff",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "18px",
                padding: "10px",
              }}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>

          {/* SIGN IN BUTTON */}
          <button
            onClick={() => onNavigate()}
            style={{
              width: "100%",
              marginTop: "25px",
              padding: "12px",
              backgroundColor: "#dc6409",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>

          {/* OR */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0",
            }}
          >
            
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Admin;

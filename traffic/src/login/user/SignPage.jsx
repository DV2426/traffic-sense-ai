import React, { useState } from 'react';
import sign from '../../images/signup.jpg';

function SignPage({ onNavigate }) {

  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    rto: "",
    password: ""
  });

  return (
    <div style={container}>
      <div>

        {/* Back Button */}
        <button onClick={() => onNavigate('loginpage')} style={backBtn}>
          ← Back to Login
        </button>

        {/* Card */}
        <div style={card}>
          <h2 style={{color:'#dc6409'}}>Create your account</h2>

          {/* Inputs */}
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={input}
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={input}
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={(e) => setFormData({...formData, mobile: e.target.value})}
            style={input}
          />

          <input
            type="text"
            placeholder="RTO Number"
            value={formData.rto}
            onChange={(e) => setFormData({...formData, rto: e.target.value})}
            style={input}
          />

          {/* Password */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              style={{ ...input, flex: 1 }}
            />
            <button onClick={() => setShowPassword(!showPassword)} style={eyeBtn}>
              👁
            </button>
          </div>

          <p style={hint}>
            At least 8 characters, one number and one special character.
          </p>

          {/* Terms */}
          <div style={{ marginTop: "10px" }}>
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />

            <span style={{ marginLeft: "8px", color:"white" }}>
              I agree to the{" "}
            </span>

            <button
              type="button"
              onClick={() => onNavigate('terms')}
              style={linkStyle}
            >
              Terms of Service
            </button>

            <span style={{color:'white'}}> and </span>

            <button
              type="button"
              onClick={() => onNavigate('privacy')}
              style={linkStyle}
            >
              Privacy Policy
            </button>
          </div>

          {/* SIGN UP BUTTON */}
          <button
          
  onClick={async () => {
     console.log("Button clicked");
    try {
      const res = await fetch("http://127.0.0.1:5000/signup",  {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      console.log("Response:", data);

      if (res.ok) {
        alert("Signup Successful ✅");
        localStorage.setItem("user", JSON.stringify(formData));
        onNavigate('loginpage');
      } else {
        alert("Error: " + data.error);
      }

    } catch (err) {
      console.error(err);
      alert("Server not reachable ❌");
    }
  }}
  style={signupBtn}
>
  Sign Up
</button>

          {/* OR */}
          <div style={orBox}>
            <span>OR</span>
          </div>

          {/* Google */}
          <button style={googleBtn}>
            Sign in with Google
          </button>

          {/* Login */}
          <p style={{ textAlign: "center", marginTop: "15px" ,color:"white" }}>
            Already have an account?{" "}
            <button onClick={() => onNavigate('loginpage')} style={linkStyle}>
              Log In
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}

export default SignPage;

/* ================= STYLES ================= */

const container = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${sign})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const card = {
  width: "420px",
  padding: "30px",
  boxShadow: '5px 10px 30px rgba(139, 136, 136, 0.7)',
  background: '#252524',
  border: "2px solid black",
  borderRadius: "8px"
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const backBtn = {
  marginBottom: "15px",
  background: "#d4660b",
  border: "1px solid #ccc",
  padding: "8px 12px",
  margin:"8px 50px 10px 0px",
  cursor: "pointer",
  color:"white"
};

const eyeBtn = {
  marginLeft: "8px",
  background: "none",
  border: "none",
  cursor: "pointer"
};

const hint = {
  fontSize: "12px",
  color: "#dc6409"
};

const signupBtn = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  backgroundColor:  "#dc6409",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold"
};

const orBox = {
  textAlign: "center",
  margin: "20px 0",
  color: "#d4660b"
};

const googleBtn = {
  width: "100%",
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  background:  "#dc6409",
  cursor: "pointer",
  color:"white"
};

const linkStyle = {
  color: "#dc6409",
  cursor: "pointer",
  background: "none",
  border: "none",
  padding: 0,
  fontSize: "14px",
  textDecoration: "underline"
};
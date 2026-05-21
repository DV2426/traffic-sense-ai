import React from "react";

import front from '../images/loginstart.jpg';

function LoginStart({ onNavigate }) {
  return (
    
    <div style={container}>
       <div style={overlay}></div>
      <div style={box}>
        
        <h2 style={title}>Login As</h2>

     <button style={btn} onClick={() => onNavigate('loginpage')}>
  User Login
</button>

       

<button style={btn} onClick={() => onNavigate('admin')}>
  Administrator Login
</button>
<br></br>
<br></br>
       
      </div>
    </div>
  );
}

export default LoginStart;


/* ===== STYLES ===== */

const container = {
 minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
backgroundImage: `url(${front})`,


backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
   position: "relative",
};

const overlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.55)",
  backdropFilter: "blur(3px)",
};

const box = {
  textAlign: "center",
      zIndex: 2,
  width: "380px",
  padding: "40px",
  borderRadius: "18px",

  background: "rgba(25,25,25,0.88)",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow: "0 10px 35px rgba(0,0,0,0.6)",
};

const title = {
  color: "#ffffff",
  fontSize: "38px",
  marginBottom: "10px",
  fontWeight: "bold",
};

const btn = {
  width: "200px",
  padding: "12px",
  margin: "10px",
  backgroundColor: "#dc6409", // GREY BUTTON
  color: "#fff", // WHITE TEXT
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px"
};

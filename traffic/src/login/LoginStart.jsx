import React from "react";

import front from '../images/loginstart.jpg';

function LoginStart({ onNavigate }) {
  return (
    
    <div style={container}>
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
};

const box = {
  textAlign: "center"
};

const title = {
  color: '#f1dfd2', // WHITE TEXT
  marginBottom: "30px"
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

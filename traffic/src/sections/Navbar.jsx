import { useState } from 'react';
import T from '../tokens';
import Btn from '../components/Btn';

/* 🟠 CHANGE: define orange once */
const ORANGE = '#dc6409';

// ──────────────────────────────────────────────
// NavTextLink – Home / About / Technology
// ──────────────────────────────────────────────
function NavTextLink({ label, href = '#' }) {
  const [hov, setHov] = useState(false);

  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <span
      onClick={handleClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: '15px',
        fontWeight: '500',

        /* 🔁 CHANGE: hover color BLUE → ORANGE */
        color: hov ? ORANGE : '#ffffff',

        cursor: 'pointer',
        position: 'relative',
        zIndex: hov ? 20 : 1,
        transition: 'color 0.2s ease',
      }}
    >
      {label}
    </span>
  );
}

// ──────────────────────────────────────────────
// GearIcon – ⚙ settings
// ──────────────────────────────────────────────
function GearIcon() {
  const [hov, setHov] = useState(false);

  const handleClick = () => {
    window.open('https://trafficsenseai.com/settings', '_blank');
  };

  return (
    <span
      onClick={handleClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: '19px',

        /* 🔁 CHANGE: hover color BLUE → ORANGE */
        color: hov ? ORANGE : '#ffffff',

        cursor: 'pointer',
        transition: 'color 0.2s ease',
      }}
    >
      ⚙
    </span>
  );
}

// ──────────────────────────────────────────────
// Navbar
// ──────────────────────────────────────────────
function Navbar({ onNavigate,page }) {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 48px',

        backgroundColor: '#000000',
        borderBottom: `1px solid ${T.border}`,
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* ── Logo ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '34px',
            height: '34px',

            /* 🔁 CHANGE: logo background BLUE → ORANGE */
            backgroundColor: ORANGE,

            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '18px',
            }}
          >
            T
          </span>
        </div>

        <span
          style={{
            fontWeight: '700',
            fontSize: '17px',
            color: '#ffffff',
          }}
        >
          Traffic Sense AI
        </span>
      </div>

      {/* ── Right Side ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
         <span
         
  onClick={() => onNavigate('home')}
  style={{
    fontSize: '15px',
    fontWeight: '500',
  color: page === 'home' ? '#dc6409' : '#ffffff',
    cursor: 'pointer'
  }}
>
  Home
</span>
     
<span
  onClick={() => onNavigate('aboutt')}
  
  style={{
    fontSize: '15px',
    fontWeight: '500',
    color: page === 'aboutt' ? '#dc6409' : '#ffffff',
    cursor: 'pointer'
  }}
>
  About
</span>

        <span
  onClick={() => onNavigate('technology')}
  style={{
    fontSize: '15px',
    fontWeight: '500',
     color: page === 'technology' ? '#dc6409' : '#ffffff',
    cursor: 'pointer'
  }}
>
  Technology
</span>

        {/* 🔁 CHANGE: Dashboard button BLUE → ORANGE */}
        <Btn
          variant="custom"
          href="https://trafficsenseai.com/dashboard"
          style={{
            padding: '7px 18px',
            fontSize: '14px',
            backgroundColor: ORANGE,
            color: '#fff',
            border: 'none',
          }}
        >
          Dashboard
        </Btn>

        {/* Login button hover orange */}
        <Btn
          variant="outline"
          style={{
            padding: '7px 18px',
            fontSize: '14px',
            color: '#fff',
              backgroundColor: ORANGE,
          
          }}
          onMouseEnter={(e) => {
            e.target.style.color = ORANGE;
            e.target.style.borderColor = ORANGE;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#fff';
            e.target.style.borderColor = '#fff';
          }}
         onClick={() => onNavigate('LoginStart')}
        >
          Login
        </Btn>

        <GearIcon />
      </div>
    </nav>
  );
}

export default Navbar;
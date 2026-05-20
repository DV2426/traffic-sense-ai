import { useState } from 'react';
import T from '../tokens';

function Btn({
  children,
  variant = 'orange',   // 🔴 CHANGE #1: default variant set to ORANGE
  style: extraStyle = {},
  href,
  onClick,
}) {
  const [hov, setHov] = useState(false);

  // 🔴 CHANGE #2: ORANGE color constant
  const ORANGE = '#8a4d08';

  // 🔴 CHANGE #3: variants updated (orange is primary)
  const variants = {
    orange: {
      bg: ORANGE,
      color: '#ffffff',
      border: 'none',
      shadow: hov ? '0 6px 22px rgba(232, 136, 1, 0.73)' : 'none',
    },

    outline: {
      bg: '#ffffff',
      color: T.textDark,
      border: `1.8px solid ${T.border}`,
      shadow: hov ? '0 4px 14px rgba(0,0,0,.10)' : 'none',
    },

    outlineWhite: {
      bg: 'transparent',
      color: '#ffffff',
      border: '1.8px solid rgba(255,255,255,.55)',
      shadow: hov ? '0 4px 14px rgba(0,0,0,.15)' : 'none',
    },
  };

  // 🔴 CHANGE #4: safety fallback
  const v = variants[variant] || variants.orange;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '11px 24px',
        borderRadius: T.radiusBtn,
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',

        /* 🔴 uses ORANGE variant styles */
        backgroundColor: v.bg,
        color: v.color,
        border: v.border,
        boxShadow: v.shadow,

        position: 'relative',
        zIndex: hov ? 10 : 1,
        transform: hov ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.2s ease',
        outline: 'none',

        ...extraStyle,
      }}
    >
      {children}
    </button>
  );
}

export default Btn;
import { useState } from 'react';
import T from '../tokens';

/**
 * LinkSpan
 * --------
 * The blue "Learn More →" / "View Simulator →" / "Read Research →" links.
 *
 * href  →  URL that opens in a NEW TAB on click
 * style →  extra inline styles merged on top
 *
 * Hover: z-index 10, underline appears.
 */
function LinkSpan({ children, href = '#', style: extraStyle = {} }) {
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
        color:          T.blue,
        fontWeight:     '600',
        fontSize:       '14px',
        cursor:         'pointer',
        position:       'relative',
        zIndex:         hov ? 10 : 1,
        textDecoration: hov ? 'underline' : 'none',
        transition:     'all .18s ease',
        ...extraStyle,
      }}
    >
      {children}
    </span>
  );
}

export default LinkSpan;

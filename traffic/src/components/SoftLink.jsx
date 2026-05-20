import { useState } from 'react';
import T from '../tokens';

function SoftLink({ children, href = '#', style: extraStyle = {} }) {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <span
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'block',
        fontSize: '13px',
        color: hover ? T.blue : T.textGray,
        cursor: 'pointer',
        marginBottom: '9px',
        position: 'relative',
        zIndex: hover ? 10 : 1,
        transition: 'color 0.2s ease',
        ...extraStyle,
      }}
    >
      {children}
    </span>
  );
}

export default SoftLink;

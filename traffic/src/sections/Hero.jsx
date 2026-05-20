import { useEffect, useState } from 'react';
import T from '../tokens';
import Btn from '../components/Btn';
import image from '../images/bridge1.webp'; 
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerStyle = {
    width: '100%',
    height: '100vh',                  // ✅ FIX
    margin: 0,
    position: 'relative',
    overflow: 'hidden',
   backgroundImage: `url(${image})`,
     backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  };

  const contentWrapperStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    flexWrap: 'wrap',
  };

  const leftContentStyle = {
    flex: '1',
    minWidth: '300px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
    transition: 'all 0.8s ease-out',
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',   
    color: '#dc6409',
    fontSize: '13px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '20px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.6s ease-out 0.2s',
  };

  const arrowIconStyle = {
    width: '16px',
    height: '16px',
    fill: '#dc6409',
  };

  const headingStyle = {
    fontSize: '56px',
    fontWeight: '700',
    lineHeight: '1.1',
    marginBottom: '24px',
    color: '#1e293b',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.8s ease-out 0.3s',
  };

  /* ✅ ONLY CHANGE IS HERE */
  const highlightStyle = {
    color: '#dc6409',
    display: 'block',
  };

  const descriptionStyle = {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#ffffff',
    marginBottom: '36px',
    maxWidth: '500px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.8s ease-out 0.4s',
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.8s ease-out 0.5s',
    
  };

  const Button = ({ children, primary, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const baseButtonStyle = {
      padding: '14px 32px',
      fontSize: '15px',
      fontWeight: '600',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    };

    const primaryStyle = {
      ...baseButtonStyle,
       background: '#dc6409',     // white background
  color: '  #ffffff',          // dark text so it is visible
  border: '2px solid #e2e8f0'
    };

    const secondaryStyle = {
      ...baseButtonStyle,
      background: '#dc6409',
      color: '#ffffff',
      border: '2px solid #e2e8f0',
    };

    return (
      <button
        style={primary ? primaryStyle : secondaryStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  const rightContentStyle = {
    flex: '1',
    minWidth: '300px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
    transition: 'all 0.8s ease-out 0.4s',
  };

  const MapCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: isHovered 
        ? '0 25px 50px rgba(0, 0, 0, 0.15)'
        : '0 10px 30px rgba(0, 0, 0, 0.1)',
      transform: isHovered ? 'scale(1.02) translateY(-8px)' : 'scale(1) translateY(0)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      background: '#ffffff',
    };

    const imageContainerStyle = {
      position: 'relative',
      width: '100%',
      height: '400px',
      overflow: 'hidden',
    };

    const imageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.6s ease',
    };

    const overlayStyle = {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
      padding: '30px',
      color: '#ffffff',
    };

    const locationLabelStyle = {
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '8px',
      opacity: '0.9',
      fontWeight: '600',
    };

    const locationNameStyle = {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '8px',
    };

    const efficiencyBadgeStyle = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(16, 185, 129, 0.15)',
      backdropFilter: 'blur(10px)',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '600',
      border: '1px solid rgba(16, 185, 129, 0.3)',
    };

    const efficiencyDotStyle = {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: '#10b981',
      animation: 'pulse 2s infinite',
    };

    const handleClick = () => {
      window.open('https://www.openstreetmap.org/', '_blank', 'noopener,noreferrer');
    };

    return (
      <div 
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div style={imageContainerStyle}>
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
            alt="Traffic Management Map"
            style={imageStyle}
          />
          <div style={overlayStyle}>
            <div style={locationLabelStyle}>LIVE OPTIMIZATION</div>
            <div style={locationNameStyle}>Central Business District</div>
            <div style={efficiencyBadgeStyle}>
              <div style={efficiencyDotStyle}></div>
              <span style={{ color: '#10b981' }}>98.45 Efficiency</span>
            </div>
          </div>
        </div>
        <style>
          {`
            @keyframes pulse {
              0%, 100% {
                opacity: 1;
                transform: scale(1);
              }
              50% {
                opacity: 0.5;
                transform: scale(1.2);
              }
            }
          `}
        </style>
      </div>
    );
  };

  const handleLaunchDashboard = () => {
    window.open('/dashboard', '_blank', 'noopener,noreferrer');
  };

  const handleWatchDemo = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={leftContentStyle}>
          <div style={badgeStyle}>
            <svg style={arrowIconStyle} viewBox="0 0 24 24">
              <path d="M13 7l5 5-5 5M6 12h12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            POWERED BY QUANTUM LOGIC
          </div>
          
          <h1 style={headingStyle}>
            A Quantum-Inspired{' '}
            <span style={highlightStyle}>
              Congestion Prediction
            </span>{' '}
            Assistant
          </h1>
          
          <p style={descriptionStyle}>
            Harnessing the power of quantum-inspired algorithms and reinforcement learning to 
            optimize urban mobility in real-time. Experience the future of traffic management.
          </p>
          
          <div style={buttonGroupStyle}>
            <Button primary onClick={handleLaunchDashboard}>
              Launch Dashboard
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Button>
            <Button onClick={handleWatchDemo}>
              Watch Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </Button>
          </div>
        </div>
        
        <div style={rightContentStyle}>
          <MapCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;

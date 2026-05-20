

 import { useState } from 'react';
import T from '../tokens';

function AiTechCardFlip({ FrontAiImg, backsAiImg }) {
  const [hover, setHover] = useState(false);


   


  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flex: 1,
        height: '320px',
        perspective: '1200px',
      }}
    >
      {/* CARD INNER */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1)',
          transform: hover ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            borderRadius: T.radius,
            backgroundImage: `url(${FrontAiImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '3px solid #484848',
               opacity: hover ? 1 : 0.96,
            transition: 'opacity 0.3s ease',
            boxShadow: hover
              ? '0 28px 60px rgba(0,0,0,0.35)'
              : '0 18px 40px rgba(0,0,0,0.25)',

          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '18px',
              background:
                'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              color: '#fff',
              borderRadius: T.radius,
            }}
          >
            <h3 style={{ margin: 0, textAlign: 'center' }}>
            AI-based Congestion Prediction
            </h3>
          </div>
        </div>

        {/* BACK */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: T.radius,
            backgroundImage: `url(${backsAiImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '3px solid #717171',
            boxShadow: hover
              ? '0 28px 60px rgba(0,0,0,0.35)'
              : '0 18px 40px rgba(0,0,0,0.25)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.65)',
              borderRadius: T.radius,
              padding: '26px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            <h3>  AI-based Congestion Prediction</h3>

            <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
predictive modelling for peak-hour flow using deep neural notworks to anticipate bottlenecks before they happen
            </p>

            <a
              href="https://www.eclipse.org/sumo/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#dc6409',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                marginTop: '10px',
              }}
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiTechCardFlip;

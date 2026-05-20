import T from '../tokens';
import Btn from '../components/Btn';

// 🔴 CHANGE #1: import background image

import bridgeBg from '../images/bridge4.jpg';

function CTABanner() {
  return (
    <section
      style={{
        padding: '100px 48px 100px',
        maxWidth: '100%',
        margin: '0 auto',

        // 🔴 CHANGE #2: background image added to SECTION
        backgroundImage: `url(${bridgeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          background: 'rgba(220, 100, 9, 0.88)', // 🔴 CHANGE #3: overlay for readability
          borderRadius: '8px',
          padding: '50px 64px 40px',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto',
          opacity:'o.50'
        }}
      >
        <h2
          style={{
            fontSize: '38px',
            fontWeight: '800',
            color: T.white,
            margin: '0 0 16px',
            lineHeight: 1.15,
            maxWidth: '480px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Ready to optimize your city's traffic?
        </h2>

        <p
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,.9)',
            margin: '0 0 32px',
            lineHeight: 1.6,
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Join over 15 metropolitan areas using Traffic Sense AI to reduce
          congestion and carbon emissions.
        </p>

        {/* 🔴 CHANGE #4: buttons aligned with new Btn logic */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          {/* Default ORANGE button */}
          <Btn href="https://trafficsenseai.com/request-demo">
            Request a Demo
          </Btn>

          {/* Outline white button */}
          <Btn variant="outlineWhite" href="https://trafficsenseai.com/contact-sales">
            Contact Sales
          </Btn>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
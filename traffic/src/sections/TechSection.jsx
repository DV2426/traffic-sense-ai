import FlipTechCard from '../components/FlipTechCard';
import AiTechCardFlip from '../components/AiTechCardFlip';
import QutumFlip from '../components/QutumFlip';

import sumoFront from '../images/sumfront.png';
import sumoBack from '../images/sumback.png';

import aiFront from '../images/aiFront.jpg';
import aiBack from '../images/hqdefault.jpg';

import qFront from '../images/RLfront.png';
import qBack from '../images/RLback.jpg';

import T from '../tokens';

const cards = [
  { type: 'sumo' },
  { type: 'ai' },
  { type: 'quantum' },
];

function TechSection() {
  return (
    <section
      style={{
               backgroundColor: '#1a1b1c',
        padding: '80px 6% 120px',
        marginTop: '-36px', // 🔥 removes white line from App.jsx padding
      }}
    >
      {/* TEXT CONTENT */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          style={{
            color: T.orange,
            letterSpacing: '1px',
            fontSize: '13px',
            marginBottom: '10px',
          }}
        >
          OUR CORE TECHNOLOGIES
        </p>

        <h1
          style={{
            color: '#fff',
            fontSize: '42px',
            marginBottom: '16px',
          }}
        >
          Advanced Traffic Solutions for the Modern Smart City
        </h1>

        <p
          style={{
            color: '#bdbdbd',
            maxWidth: '720px',
            lineHeight: 1.7,
            marginBottom: '48px',
          }}
        >
          Leveraging cutting-edge AI and quantum-inspired logic to solve complex
          urban mobility challenges through predictive analytics and dynamic control.
        </p>

        {/* 🔹 CARDS (YOUR EXACT LOGIC – FIXED LAYOUT) */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',        // ✅ responsive
            justifyContent: 'center',
          }}
        >
          {cards.map((c, i) => {
            if (c.type === 'sumo') {
              return (
                <FlipTechCard
                  key={i}
                  frontImg={sumoFront}
                  backImg={sumoBack}
                />
              );
            }

            if (c.type === 'ai') {
              return (
                <AiTechCardFlip
                  key={i}
                  FrontAiImg={aiFront}
                  backsAiImg={aiBack}
                />
              );
            }

            if (c.type === 'quantum') {
              return (
                <QutumFlip
                  key={i}
                  frontImgg={qFront}
                  backImgg={qBack}
                />
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}

export default TechSection;
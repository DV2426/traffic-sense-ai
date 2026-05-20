import T from '../tokens';

export default function StatsRow() {
  return (
    <section
      style={{
 backgroundColor: '#1a1b1c',
    padding: '40px 6%',
    marginTop: '-1px', 
                  // 🔑 prevents white gap
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
        }}
      >
        {/* Card 1 */}
        <div style={cardStyle}>
          <h4 style={label}>CONGESTION REDUCTION</h4>
          <h1 style={value}>30%</h1>
         <a style={{ color: 'red' }}>↗ High Impact</a>
          <p style={desc}>Reduction in average vehicle wait times at intersections.</p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <h4 style={label}>PROCESSING SPEED</h4>
          <h1 style={value}>Quantum</h1>
          <a style={{ color: '#bc3c05' }}>↗ +45%</a>
          <p style={desc}>Optimized by second-generation quantum annealing logic.</p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <h4 style={label}>SIMULATION ACCURACY</h4>
          <h1 style={value}>99.9%</h1>
          <a style={{ color: '#269807' }}>● Precision</a>
          <p style={desc}>Validated against real-world traffic telemetry.</p>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: 'radial-gradient(circle at top, #1b1b1b, #0d0d0d)',
  borderRadius: '16px',
  padding: '28px',
  color: '#fff',
  boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
};

const label = {
  fontSize: '13px',
  letterSpacing: '1px',
  color: '#aaa',
};

const value = {
  fontSize: '42px',
  margin: '12px 0',
};

const desc = {
  fontSize: '14px',
  color: '#ccc',
};
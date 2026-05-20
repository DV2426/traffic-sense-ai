function Privacy({ onNavigate }) {
  return (
    <div style={container}>
      <div style={card}>
        <h2>Privacy Policy</h2>

        <p><b>1. Data:</b> Email collected.</p>
        <p><b>2. Usage:</b> For system improvement.</p>

        <button onClick={() => onNavigate('signup')}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default Privacy;

const container = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#0f172a',
  color: 'white',
};

const card = {
  background: '#1e293b',
  padding: '30px',
  borderRadius: '12px',
  width: '500px',
};
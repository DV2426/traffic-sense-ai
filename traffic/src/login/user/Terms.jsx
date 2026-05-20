function Terms({ onNavigate }) {
  return (
    <div style={container}>
      <div style={card}>
        <h2>Terms of Service</h2>

        <p><b>1. Acceptance:</b> You agree to terms.</p>
        <p><b>2. Usage:</b> For learning purpose.</p>
        <p><b>3. Security:</b> Do not misuse.</p>

        <button onClick={() => onNavigate('signup')}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default Terms;

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
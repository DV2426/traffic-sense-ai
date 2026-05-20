import T from '../tokens';
import SoftLink from '../components/SoftLink';

const cols = [
  {
    title: 'Product',
    links: [
      { label: 'Dashboard',  href: 'https://trafficsenseai.com/dashboard'  },
      { label: 'Simulation', href: 'https://trafficsenseai.com/simulation' },
      { label: 'Pricing',    href: 'https://trafficsenseai.com/pricing'    },
    ],
  },
  {
    title: 'Research Paper',
    links: [
      { label: 'Research', href: 'https://trafficsenseai.com/research' },
      { label: 'Careers',  href: 'https://trafficsenseai.com/careers'  },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: 'https://trafficsenseai.com/privacy' },
      { label: 'Terms',   href: 'https://trafficsenseai.com/terms'   },
    ],
  },
];

function Footer({ onNavigate }) {
  return (
    <footer style={{
      backgroundColor: '#1a1b1c',
      borderTop: `1px solid ${T.border}`,
      padding: '48px 48px 24px',
    }}>
      <div style={{
        maxWidth:'1160px', margin:'0 auto',
        display:'flex', justifyContent:'space-between', gap:'40px',
        marginBottom:'36px',
      }}>

        {/* Brand */}
        <div style={{ maxWidth:'240px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px' }}>
            <div style={{
              width:'30px', height:'30px',
              backgroundColor: T.orange,
              borderRadius:'7px',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <span style={{ color:T.white, fontWeight:'700' }}>T</span>
            </div>
            <span style={{ fontWeight:'700', color:T.white }}>Traffic Sense AI</span>
          </div>
          <p style={{ fontSize:'13px', color:T.white }}>
            Advancing urban mobility through AI research.
          </p>
        </div>

        {/* Links */}
        <div style={{ display:'flex', gap:'60px' }}>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontWeight:'700', color:T.white }}>{col.title}</div>
              {col.links.map(item => (
                <SoftLink key={item.label} href={item.href}>
                  {item.label}
                </SoftLink>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        maxWidth:'1160px', margin:'0 auto',
        borderTop: `1px solid ${T.border}`,
        paddingTop:'22px',
        display:'flex',
        justifyContent:'space-between',
      }}>
        <span
          onClick={() => onNavigate('linkedin')}
          style={{ color:'#fff', cursor:'pointer' }}
        >
          LinkedIn
        </span>
      </div>
    </footer>
  );
}

export default Footer;
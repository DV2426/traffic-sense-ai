import { useState } from 'react';
import T from './tokens';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import StatsRow from './sections/StatsRow';
import TechSection from './sections/TechSection';
import CTABanner from './sections/CTABanner';
import Footer from './sections/Footer';

import Aboutt from './about/Aboutt';

import LoginStart from './login/LoginStart';
import LoginPage from './login/user/LoginPage';
import SignPage from './login/user/SignPage';
import Privacy from './login/user/Privacy';
import Terms from './login/user/Terms';

import Technology from './technology/Technology';
import Linkdin from './footer/Linkdin';
import AIPredictionPage from './cards/AIPredictionPage';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      backgroundColor: T.white,
      color: T.textDark,
      minHeight: '100vh',
    }}>

      {/* Navbar */}
      <Navbar onNavigate={setPage} page={page} />

      {/* HOME */}
      {page === 'home' && (
        <>
          <Hero />
          <StatsRow />
          <TechSection />
          <CTABanner />
          <Footer onNavigate={setPage} />
        </>
      )}

      {/* ABOUT */}
      {page === 'aboutt' && <Aboutt onNavigate={setPage} />}

      {/* TECHNOLOGY */}
      {page === 'technology' && <Technology onNavigate={setPage} />}

      {/* LOGIN FLOW */}
      {page === 'LoginStart' && <LoginStart onNavigate={setPage} />}
      {page === 'loginpage' && <LoginPage onNavigate={setPage} />}

      {/* SIGNUP FLOW */}
      {page === 'signup' && <SignPage onNavigate={setPage} />}
      {page === 'terms' && <Terms onNavigate={setPage} />}
      {page === 'privacy' && <Privacy onNavigate={setPage} />}

      {/* LINKEDIN PAGE */}
      {page === 'linkdin' && <Linkdin onNavigate={setPage} />}

      {/* AI PREDICTION */}
      {page === 'aipredictionpage' && (
        <AIPredictionPage onNavigate={setPage} />
      )}

    </div>
  );
}
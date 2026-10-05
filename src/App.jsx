import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Manifesto from './pages/Manifesto';
import ApplicationTerminal from './pages/ApplicationTerminal';
import Microgrant from './pages/Microgrant';
import Research from './pages/Research';

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyInput, setKeyInput] = useState('');
  const [validationState, setValidationState] = useState('idle'); // idle, validating, denied

  const handleKeySubmit = (e) => {
    e.preventDefault();
    if (!keyInput.trim()) return;
    setValidationState('validating');
    setTimeout(() => {
      setValidationState('denied');
    }, 1500);
  };

  return (
    <>
    <header className="nav-header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
          <span style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '2.4rem', color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '-0.02em', marginRight: '0.02em', transform: 'scaleY(1.1)' }}>INFERENCE</span>
          <span style={{ fontFamily: 'var(--font-alt)', fontSize: '0.8rem', color: 'var(--color-white)', letterSpacing: '0.45em', fontWeight: 600, textTransform: 'uppercase', marginRight: '-0.45em', marginTop: '0.6rem' }}>O(1) PARTNERS</span>
        </div>
      </Link>
      <nav className="nav-links">
        <Link to="/" className="nav-link">MANIFESTO</Link>
        <Link to="/research" className="nav-link">RESEARCH & THESIS</Link>
        <Link to="/fellowship" className="nav-link link-glow">OPEN SOURCE FELLOWSHIP</Link>
        <button onClick={() => { setIsModalOpen(true); setValidationState('idle'); setKeyInput(''); }} className="nav-link link-glow" style={{ color: 'var(--color-accent)' }}>INSTITUTIONAL LPs [REQUEST ACCESS]</button>
        <span style={{ color: 'var(--color-white)', opacity: 0.5, margin: '0 0.5rem' }}>|</span>
        <Link to="/terminal" className="nav-link link-glow" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          EXECUTE TRACE <span style={{ color: 'var(--color-accent)' }}>*</span>
        </Link>
      </nav>
    </header>

    {isModalOpen && (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(10, 25, 47, 0.95)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ border: '1px solid var(--color-accent)', padding: '3rem', maxWidth: '500px', width: '90%', backgroundColor: 'var(--color-slate)', position: 'relative' }}>
          
          <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '1rem', right: '1.5rem', color: 'var(--color-accent)', fontSize: '1.5rem' }}>✕</button>
          
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '2rem' }}>
            [VET ENGINE] SECURE DATA ROOM
          </div>
          
          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '2rem', color: 'var(--color-white)', fontWeight: 400, marginBottom: '1rem' }}>
            Institutional Access
          </h2>
          
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
            Please enter your provided cryptographic key to access the O(1) Syndicate Data Room and audit traces.
          </p>

          <form onSubmit={handleKeySubmit}>
            <input 
              type="text" 
              className="tp-input"
              placeholder="Enter LP Key (e.g. 0x8F9B...)" 
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              disabled={validationState === 'validating'}
              style={{ color: 'var(--color-accent)', borderBottomColor: 'var(--color-accent)', textTransform: 'uppercase' }}
            />
            
            {validationState === 'idle' && (
              <button type="submit" className="link-accent btn-magnetic" style={{ padding: '1rem 2rem', border: '1px solid var(--color-accent)', width: '100%', justifyContent: 'center' }}>
                DECRYPT & ENTER
              </button>
            )}

            {validationState === 'validating' && (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-accent)', textAlign: 'center', animation: 'pulse 1.5s infinite' }}>
                &gt; EVALUATING TRACE...
              </div>
            )}

            {validationState === 'denied' && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#ff3366', marginBottom: '1rem' }}>
                  [ERROR: 403] CRYPTOGRAPHIC KEY INVALID.
                </div>
                <a href="mailto:investors@inference.capital?subject=Request%20Institutional%20Key" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-white)', textDecoration: 'underline' }}>
                  Contact Managing Partner for allocation
                </a>
              </div>
            )}
          </form>

        </div>
      </div>
    )}
    </>
  );
}

function LegalFooter() {
  return (
    <footer style={{ backgroundColor: 'var(--color-slate)', color: 'rgba(255, 255, 255, 0.4)', padding: '4rem max(5vw, 4rem)', borderTop: '1px solid rgba(255,255,255,0.05)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', lineHeight: 1.6 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <div>
          <div style={{ color: 'var(--color-white)', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>INFERENCE CAPITAL</div>
          <p>Oxford, United Kingdom</p>
          <p>Strictly Private & Confidential.</p>
        </div>
        <div>
          <div style={{ color: 'var(--color-white)', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>LEGAL DISCLAIMER</div>
          <p>
            Inference Capital is a private investment vehicle. Information presented on this platform is for educational and research purposes only and does not constitute financial advice, an offer to sell, or a solicitation of an offer to buy any securities.
          </p>
        </div>
        <div>
          <div style={{ color: 'var(--color-white)', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>RISK DISCLOSURE</div>
          <p>
            Investments in early-stage autonomous systems and cryptographic architectures carry a high degree of risk and are highly illiquid. Only accredited institutional investors should apply for Data Room access.
          </p>
        </div>
      </div>
      <div style={{ maxWidth: '1400px', margin: '3rem auto 0', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
        <span>&copy; {new Date().getFullYear()} Inference Capital. All mathematical models proprietary.</span>
        <span>VET ENGINE v1.0.4</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Manifesto />} />
          <Route path="/terminal" element={<ApplicationTerminal />} />
          <Route path="/fellowship" element={<Microgrant />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </main>
      <LegalFooter />
    </Router>
  );
}

export default App;

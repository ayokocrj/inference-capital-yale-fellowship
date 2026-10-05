import React, { useState, useRef, useEffect } from 'react';

import { AdvancedNeuralCanvas } from '../components/BackgroundAnimations';

export default function ApplicationTerminal() {
  const [formData, setFormData] = useState({
    github: '',
    hash: '',
    architecture: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('EVALUATING TRACE...');
    setTimeout(() => {
      setStatus('TRACE REJECTED. INSUFFICIENT DETERMINISTIC PROOF.');
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-slate)', minHeight: '100vh', color: 'var(--color-white)', position: 'relative' }}>
      <AdvancedNeuralCanvas isDarkSection={true} />
      


      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem max(5vw, 4rem) 8rem', position: 'relative', zIndex: 2 }}>
        
        <div className="grid-2-col" style={{ gap: '8rem' }}>
          
          {/* Left Column: Fellowship Context */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '2rem', textTransform: 'uppercase' }}>
              VET Engine & Open-Source Syndicate
            </div>
            <h1 style={{ fontSize: '4rem', fontWeight: 200, lineHeight: 1.1, marginBottom: '3rem' }}>
              Submit your open-source repo or agent trace to the Audit Engine.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '3rem' }}>
              Inference Capital merges automated code auditing via Verifiable Execution Traces (VET) with the expertise of Oxford and Yale academic talent nodes. Submit your GitHub repository, Coolify Docker stack, or cryptographic proof for seed and institutional anchor allocation.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem' }}>1. Automated VET Auditing</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem' }}>Focus: Cryptographic verification of your autonomous execution loops and neural architecture.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem' }}>2. Human Node Evaluation</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem' }}>Focus: Strategic deal structuring, legal compliance, and market viability led by Oxford MBAs, MLFs, and DPhils.</p>
            </div>

          {/* Left Column: Fellowship Context */}

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem', color: 'var(--color-accent)' }}>3. Global LP Deployment</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem' }}>Focus: Once mathematically verified and human-approved, we unlock institutional liquidity.</p>
            </div>
            
            {/* NEW STUDENT PILOT PROGRAM */}
            <div style={{ marginTop: '4rem', padding: '1.5rem', borderLeft: '2px solid var(--color-accent)', backgroundColor: 'rgba(0, 229, 255, 0.05)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>Pilot Program</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--color-white)' }}>O(1) Global Hackathon Submission</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                Submit a GitHub repository from an Oxford lab or an international AI hackathon demonstrating high algorithmic density. If it compiles and passes our inference threshold, we deploy capital instantly.
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-white)', fontWeight: 700 }}>
                &gt; No Interviews. No Pitch Decks. Just Code.
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-text-dark)', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem' }}>Initiate VET Audit &gt;&gt;</h2>
            <p style={{ color: 'rgba(10, 25, 47, 0.6)', marginBottom: '3rem' }}>Are you building deterministic AI? Submit your GitHub trace or cryptographic proof to access the Inference Capital capital pool.</p>
            
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="tp-input" 
                placeholder="OXFORD_SSO_OR_GITHUB_URL" 
                value={formData.github}
                onChange={e => setFormData({...formData, github: e.target.value})}
                required 
              />
              <input 
                type="text" 
                className="tp-input" 
                placeholder="CRYPTOGRAPHIC_PROOF_HASH" 
                value={formData.hash}
                onChange={e => setFormData({...formData, hash: e.target.value})}
              />
              <input 
                type="text" 
                className="tp-input" 
                placeholder="ARCHITECTURE_PROPOSAL_LINK" 
                value={formData.architecture}
                onChange={e => setFormData({...formData, architecture: e.target.value})}
                required 
              />
              
              <button type="submit" className="accent-border-box" style={{ width: '100%', marginTop: '1rem', color: 'var(--color-text-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>EXECUTE TRACE EVALUATION</span>
                <span style={{ fontSize: '1.2rem' }}>↗</span>
              </button>
            </form>

            {status && (
              <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'var(--color-slate)', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                &gt; {status}
              </div>
            )}

            {/* Institutional LP Portal */}
            <div style={{ marginTop: '4rem', borderTop: '1px solid rgba(10, 25, 47, 0.1)', paddingTop: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                For Limited Partners
              </div>
              <p style={{ color: 'rgba(10, 25, 47, 0.6)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Access to the Inference Capital's inaugural SPV is currently strictly by invitation only. Institutional LPs may request cryptographic access to the Data Room (Thesis, LP Agreement, Audited Traces).
              </p>
              <button className="accent-border-box" style={{ width: '100%', borderColor: 'rgba(10, 25, 47, 0.2)', color: 'var(--color-slate)', backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onClick={() => alert('Access Request Logged. An Oxford node will contact you to verify institutional credentials.')}>
                <span>REQUEST DATA ROOM KEY [LOCKED]</span>
                <span style={{ fontSize: '1.2rem' }}>🔒</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

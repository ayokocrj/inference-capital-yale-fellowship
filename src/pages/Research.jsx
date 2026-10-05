import React from 'react';
import { Link } from 'react-router-dom';
import { AdvancedNeuralCanvas } from '../components/BackgroundAnimations';

export default function Research() {
  return (
    <div style={{ backgroundColor: 'var(--color-slate)', minHeight: '100vh', color: 'var(--color-white)', fontFamily: 'var(--font-sans)', position: 'relative' }}>
      <AdvancedNeuralCanvas isDarkSection={true} />
      


      {/* Header Section */}
      <section style={{ padding: '8rem max(5vw, 4rem) 4rem', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
          [ Core Doctrine ]
        </div>
        <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--color-white)', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
          Verifiable Execution Traces in Venture Capital.
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, fontWeight: 300 }}>
          The Inference Capital rejects probabilistic pitch decks. Our investment thesis is anchored entirely on deterministic auditing. Read our founding papers on the future of autonomous logic and capital deployment.
        </p>
      </section>

      {/* Papers Section */}
      <section style={{ padding: '4rem max(5vw, 4rem) 8rem', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Paper 1 */}
        <article className="grid-1-2-col" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '4rem 0', gap: '4rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '1rem' }}>PAPER 001 // PUBLISHED</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent)' }}>AUTHOR: INFERENCE CAPITAL</div>
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.2 }}>The Illusion of Autonomy: Why VET is the only future for AI Venture Capital.</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Most modern "AI Agents" are nothing more than LLM wrappers bound by human-in-the-loop dependencies. This paper explores why probabilistic models are unfundable at scale, and how Verifiable Execution Traces (VET) provide the mathematical guarantee required for institutional liquidity.
            </p>
            <button className="tp-button" style={{ padding: '0.8rem 2rem', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'transparent', color: 'var(--color-white)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'var(--color-white)'; }}>
              READ FULL THESIS ↗
            </button>
          </div>
        </article>

        {/* Paper 2 */}
        <article className="grid-1-2-col" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '4rem 0', gap: '4rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '1rem' }}>PAPER 002 // IN REVIEW</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent)' }}>AUTHOR: AIMS CDT NODE</div>
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.2 }}>O(1) Scalability: The deterministic death of Human-in-the-loop wrappers.</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '2rem' }}>
              An analysis of algorithmic complexity in decentralized networks. We demonstrate how relying on human intervention creates O(n) bottlenecks, and why Inference Capital only deploys capital into architectures capable of autonomous cryptographic settlement.
            </p>
            <button className="tp-button" style={{ padding: '0.8rem 2rem', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'transparent', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', cursor: 'not-allowed' }}>
              [ LOCKED - PEER REVIEW ]
            </button>
          </div>
        </article>

        {/* Paper 3: COSS & AI Agents */}
        <article className="grid-1-2-col" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '4rem 0', gap: '4rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '1rem' }}>PAPER 003 // PUBLISHED</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent)' }}>AUTHOR: YALE & OXFORD SYNDICATE</div>
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.2 }}>The COSS Alpha: Why Open-Source SaaS & Autonomous Agents Displace Closed Monoliths.</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Extending the commercial open-source thesis pioneered by OSS Capital. We prove that closed SaaS monopolies face structural margin compression against transparent, developer-owned open-source platforms. Combined with autonomous AI agents, COSS companies achieve superior Net Expansion Rates and zero customer acquisition friction.
            </p>
            <button className="tp-button" style={{ padding: '0.8rem 2rem', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'transparent', color: 'var(--color-white)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'var(--color-white)'; }}>
              READ COSS THESIS ↗
            </button>
          </div>
        </article>

        {/* Paper 4: Self-Hosted Infrastructure */}
        <article className="grid-1-2-col" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '4rem 0', gap: '4rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '1rem' }}>PAPER 004 // RESEARCH DRAFT</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent)' }}>AUTHOR: INFRASTRUCTURE CORE</div>
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.2 }}>The Sovereign Agent Stack: Coolify-Native Orchestration as an Enterprise Moat.</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Why self-hostable open-source software (deployable in 1-click via PaaS engines like Coolify) represents the ultimate regulatory defense for enterprise AI. We analyze data residency compliance, token cost optimization, and multi-tenant security in sovereign agent ecosystems.
            </p>
            <button className="tp-button" style={{ padding: '0.8rem 2rem', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'transparent', color: 'var(--color-white)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'var(--color-white)'; }}>
              READ SOVEREIGN AUDIT ↗
            </button>
          </div>
        </article>

      </section>
    </div>
  );
}

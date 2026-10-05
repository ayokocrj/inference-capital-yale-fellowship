import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdvancedNeuralCanvas } from '../components/BackgroundAnimations';
import { getAssetUrl } from '../utils/asset';

export default function Microgrant() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const carouselSlides = [
    {
      image: getAssetUrl("/images/oxford_founders_dorm.png"),
      label: "O(1) SYNDICATE ALUMNI",
      mentor: "Building autonomous systems from the Oxford CS Dorms."
    },
    {
      image: getAssetUrl("/images/oxford_hackathon_group.png"),
      label: "STEALTH BATCH #4",
      mentor: "The next frontier of AI will be built by students, not incumbents."
    },
    {
      image: getAssetUrl("/images/oxford_solo_builder.png"),
      label: "ELITE TRACE VALIDATION",
      mentor: "Zero interviews. Code execution only."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
  };

  return (
    <div style={{ backgroundColor: 'var(--color-slate)', minHeight: '100vh', color: 'var(--color-white)', fontFamily: 'var(--font-sans)', overflowX: 'hidden', position: 'relative' }}>
      <AdvancedNeuralCanvas isDarkSection={true} />

      {/* Hero Section */}
      <section style={{ padding: '8rem max(5vw, 4rem)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
            [ YALE PROSPECT FELLOWSHIP × OXFORD SYNTHESIS ]
          </div>
          <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 400, lineHeight: 1, color: 'var(--color-white)', marginBottom: '3rem', letterSpacing: '-0.02em' }}>
            The Open Source Builders Fellowship.
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'end' }}>
            <div>
              <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: '0 0 1.5rem 0', fontWeight: 300 }}>
                <strong style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Open source is the lifeblood of software.</strong> Almost every company and foundation model today relies on libraries, inference kernels, and programs made reliable by open-source contributors around the world. Open source is eating software faster than software is eating the world.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                Synthesizing the models of the <em>Sequoia Open Source Fellowship</em> and <em>OSS Capital</em>, we fund intrepid maintainers building open-source software and autonomous AI agents. Non-dilutive living grants (£1,000–£10,000+). Zero equity taken. You own 100% of what you make. No pitch decks. Code execution only.
              </p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <Link to="/terminal" style={{ 
                display: 'inline-block',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem', 
                padding: '1.2rem 3rem', 
                backgroundColor: 'transparent', 
                color: 'var(--color-accent)', 
                border: '1px solid var(--color-accent)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'background-color 0.3s ease, color 0.3s ease'
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-slate)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-accent)'; }}
              >
                Submit GitHub Trace ↗
              </Link>
              <div style={{ marginTop: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
                &gt; Rolling applications. 0% equity. Location-agnostic.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. THE ECOSYSTEM & CAPITAL EFFICIENCY */}
      <section style={{ padding: '6rem max(5vw, 4rem)', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            01 / Supporting The Software That Supports All Of Us
          </div>
          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '2.8rem', fontWeight: 400, color: 'var(--color-white)', margin: 0 }}>
            Positive-Sum Capitalism & Radical Capital Efficiency.
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'var(--font-sans)', fontSize: '1.15rem', marginTop: '1rem', maxWidth: '800px', lineHeight: 1.6 }}>
            Over the last decade, leading closed-source software companies raised an average of $300M+ in VC to reach $100M in ARR. We believe Commercial Open Source (COSS) and Autonomous AI Agents can achieve that same scale with just <strong>10–30% of that funding</strong>, growing into profitable powerhouses through organic developer distribution and sovereign self-hosted Coolify orchestration.
          </p>
        </div>
        <div style={{ width: '100%', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
          <img src={getAssetUrl("/images/ecosystem_team.png")} alt="O(1) Syndicate Ecosystem" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
        </div>
      </section>

      {/* 2. THE MENTORS */}
      <section style={{ padding: '6rem max(5vw, 4rem)', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            02 / The Syndicate & Mentors
          </div>
          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '3rem', fontWeight: 400, color: 'var(--color-white)', margin: 0 }}>
            Guidance from 50+ Open-Source Founders
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontFamily: 'var(--font-sans)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '750px', margin: '1rem auto 0', lineHeight: 1.6 }}>
            Inspired by the founders behind companies like GitLab, Red Hat, Hugging Face, MongoDB, FastAPI, vLLM, and Pydantic—driving trillions in open-source value to help you scale through positive-sum capitalism.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            { img: "mentor_1.png", title: "Founder of $10B Decacorn", tag: "COSS SCALING" },
            { img: "mentor_2.png", title: "Partner at Tier 1 VC Fund", tag: "OPEN CAPITAL" },
            { img: "mentor_3.png", title: "Ex-VP Engineering, Top AI Lab", tag: "AGENT COMPUTE" },
            { img: "mentor_4.png", title: "Founder of Series C Unicorn", tag: "DEV VIRALITY" }
          ].map((mentor, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', marginBottom: '1.5rem', backgroundColor: '#e2e2e2', borderRadius: '4px', position: 'relative' }}>
                <img src={getAssetUrl(`/images/${mentor.img}`)} alt="Classified Mentor" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(20px) grayscale(100%)', transform: 'scale(1.1)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(10, 25, 47, 0.5)' }}>
                  <span style={{ color: 'var(--color-white)', fontFamily: 'var(--font-mono)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(5px)' }}>Locked</span>
                </div>
              </div>
              <h3 style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-sans)', fontSize: '1.2rem', margin: '0 0 0.2rem 0', fontWeight: 600 }}>Undisclosed Mentor</h3>
              <p style={{ color: 'var(--color-white)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', margin: '0 0 0.4rem 0' }}>{mentor.title}</p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>{mentor.tag}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/terminal" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', padding: '1rem 3rem', backgroundColor: 'transparent', color: 'var(--color-accent)', border: '1px solid var(--color-accent)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-slate)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-accent)'; }}>
            Submit Trace to Unlock Roster ↗
          </Link>
        </div>
      </section>

      {/* 3. THE ALUMNI */}
      <section style={{ padding: '2rem max(5vw, 4rem) 6rem', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <div style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            03 / The Trace & Real Adoption
          </div>
          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '3rem', fontWeight: 400, color: 'var(--color-white)', margin: 0 }}>
            Real-World Adoption Over Vanity Stars
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontFamily: 'var(--font-sans)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '700px', lineHeight: 1.5 }}>
            Founders and open-source creators backed before the world caught on. The true test of our fellowship is the production execution trace left behind.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { img: "alumni_new_1.png", name: "Arthur W. (Oxford AIMS)", domain: "Autonomous Agent Reasoning", status: "Raising $2M Pre-Seed", tag: "STEALTH" },
            { img: "alumni_new_2.png", name: "Elena & Sophie (Cambridge CS)", domain: "Neural Cryptography & Privacy", status: "Closed Seed Round", tag: "$15M" },
            { img: "alumni_new_3.png", name: "Daksh, Sam & V. (Oxford DPhil)", domain: "LLM Inference & Kernel Layer", status: "Raising $3.5M Seed", tag: "STEALTH" },
            { img: "alumni_new_4.png", name: "Marcus & J. (Cambridge PhD)", domain: "Quantum Error Correction", status: "Y-Combinator W26", tag: "FUNDED" }
          ].map((alumni, i) => (
            <div key={i} style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '1/1', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer' }}
                 onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 229, 255, 0.15)'; e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'; }}
                 onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}>
              <img src={getAssetUrl(`/images/${alumni.img}`)} alt={alumni.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', filter: 'grayscale(100%)' }} />
              
              {/* Overlay Content */}
              <div style={{ position: 'absolute', inset: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(10,25,47,1) 0%, rgba(10,25,47,0.4) 50%, transparent 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <div style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-slate)', padding: '0.3rem 0.6rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                    {alumni.tag}
                  </div>
                  <span style={{ color: 'var(--color-white)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>{alumni.status}</span>
                </div>
                <h4 style={{ color: 'var(--color-white)', fontFamily: 'var(--font-sans)', fontSize: '1.1rem', margin: '0 0 0.3rem 0', fontWeight: 600 }}>{alumni.name}</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', margin: 0 }}>Domain: {alumni.domain}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 3 Pillars / Key Goals (OSS Capital & Sequoia Synthesis) */}
      <section style={{ padding: '4rem max(5vw, 4rem) 6rem', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem' }}>
          
          <div>
            <div style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', marginBottom: '1rem', fontSize: '1.2rem' }}>01</div>
            <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '2.2rem', fontWeight: 400, color: 'var(--color-white)', marginBottom: '1.2rem' }}>
              Empowering Open-Source Creators
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              Supporting the software that supports all of us. We provide non-dilutive living grants and compute for intrepid creators building foundational AI agent primitives and open tools—whether outside or inside corporate walls.
            </p>
          </div>

          <div>
            <div style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', marginBottom: '1rem', fontSize: '1.2rem' }}>02</div>
            <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '2.2rem', fontWeight: 400, color: 'var(--color-white)', marginBottom: '1.2rem' }}>
              Radical Capital Efficiency
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              Proving that future COSS leaders can outscale closed-source monopolies with a fraction of the funding (10–30%), growing into highly profitable public software companies powered by community virality and Coolify orchestration.
            </p>
          </div>

          <div>
            <div style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', marginBottom: '1rem', fontSize: '1.2rem' }}>03</div>
            <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '2.2rem', fontWeight: 400, color: 'var(--color-white)', marginBottom: '1.2rem' }}>
              Deterministic Anchor Capital
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              For creators choosing to scale a commercial open-source enterprise, we deploy institutional anchor capital (backed by our Yale Prospect Fellowship initiative) via deterministic VET code auditing and smart contracts.
            </p>
          </div>

        </div>
      </section>

      {/* Sequoia-Inspired Fellowship FAQ Section */}
      <section style={{ padding: '6rem max(5vw, 4rem)', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', fontSize: '0.8rem' }}>
              [ FELLOWSHIP TERMS & ETHOS ]
            </div>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '3rem', fontWeight: 400, color: 'var(--color-white)', margin: 0 }}>
              Fellowship FAQs
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: "01 / Who should apply to the Fellowship?",
                a: "We want to support open-source creators and autonomous AI agent builders that have real-world adoption. That is not always the same as vanity stars on GitHub. Our goal is to help fellows make significant improvements to existing open-source projects or build new sovereign agent primitives."
              },
              {
                q: "02 / Who owns what I make?",
                a: "You do! 100%. We do not expect anything in return for fellowship sponsorship. Any code written before, during, or after the program is yours to decide what to do with under your chosen open-source license (MIT, Apache, AGPL). We do not have any influence over your roadmap."
              },
              {
                q: "03 / Am I expected to start a company or can I just work on my project?",
                a: "We don't expect you to start a company or require a legal entity to secure funding. You are welcome to work at your own pace on your existing open-source project or begin something new. If you later choose to commercialize via a COSS model, our syndicate is ready with seed checks."
              },
              {
                q: "04 / Is the Fellowship in person or location-agnostic?",
                a: "It is completely location-agnostic. You can live and work from anywhere in the world. Digital nomads and academic researchers are welcome! You are also invited to join our Oxford and Yale founder summits."
              },
              {
                q: "05 / Why did we start this Fellowship?",
                a: "The entire modern tech ecosystem, from agile startups to enterprise behemoths, is built on a foundation of open-source software maintained by OSS developers. We support this foundational work because we all rely on it in order to thrive."
              },
              {
                q: "06 / What are the terms and check size?",
                a: "Our goal is to cover living expenses, compute clusters, and development stipends (£1,000 to £10,000+ non-dilutive grants). We do not take any equity or consider this an investment in any future company."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                style={{ 
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
                  paddingBottom: openFaq === index ? '2rem' : '1.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <div 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    cursor: 'pointer',
                    paddingTop: '1rem'
                  }}
                >
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 400, color: 'var(--color-white)', margin: 0 }}>
                    {faq.q}
                  </h3>
                  <span style={{ fontSize: '1.5rem', color: 'var(--color-accent)', transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
                    +
                  </span>
                </div>
                
                <div 
                  style={{ 
                    maxHeight: openFaq === index ? '200px' : '0', 
                    overflow: 'hidden', 
                    transition: 'max-height 0.3s ease, opacity 0.3s ease',
                    opacity: openFaq === index ? 1 : 0,
                    marginTop: openFaq === index ? '1.5rem' : '0'
                  }}
                >
                  <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/terminal" style={{ 
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem', 
              padding: '1.2rem 3.5rem', 
              backgroundColor: 'var(--color-accent)', 
              color: 'var(--color-slate)', 
              fontWeight: 700,
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 229, 255, 0.4)'; }}
            onMouseOut={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              Apply to the Fellowship ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Sourcing Partners */}
      <section style={{ padding: '6rem max(5vw, 4rem)', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontSize: '0.8rem' }}>
            Strategic Sourcing Nodes
          </div>
          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: '2rem', fontWeight: 400, color: 'var(--color-white)', marginBottom: '4rem' }}>
            We partner with the world's most elite academic AI societies and labs.
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <img src={getAssetUrl("/images/oxai_logo.svg")} alt="OxAI" style={{ height: '50px', filter: 'brightness(0) invert(1) opacity(0.8)', transition: 'filter 0.3s' }} onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1) opacity(1)'} onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1) opacity(0.8)'} />
            
            {/* BOLD-Lab Typography Logo */}
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '2.5rem', fontWeight: 800, color: 'rgba(255,255,255,0.8)', letterSpacing: '-0.05em', transition: 'color 0.3s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.color = 'rgba(255,255,255,1)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
              BOLD<span style={{ fontWeight: 300 }}>LAB</span>
            </span>

            <img src={getAssetUrl("/images/oxford_ai_ethics.png")} alt="Institute for Ethics in AI Oxford" style={{ height: '70px', filter: 'opacity(0.8)', transition: 'filter 0.3s' }} onMouseOver={(e) => e.currentTarget.style.filter = 'opacity(1)'} onMouseOut={(e) => e.currentTarget.style.filter = 'opacity(0.8)'} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="nav-logo-container" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          <span className="nav-logo-top" style={{ fontSize: '2rem', color: 'var(--color-accent)' }}>O(1)</span>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.3)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Open Source Fellowships and Grants are the core sourcing engine for Inference Capital.
        </p>
      </footer>
    </div>
  );
}

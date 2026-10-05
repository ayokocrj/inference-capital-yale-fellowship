import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AdvancedNeuralCanvas, DenseNeuralNetworkCanvas } from '../components/BackgroundAnimations';

export default function Manifesto() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [portfolioFilter, setPortfolioFilter] = useState('all');

  const openSourcePortfolio = [
    {
      name: "Langfuse",
      category: "ai-agents",
      categoryLabel: "AI AGENT OBSERVABILITY",
      stage: "SERIES A",
      license: "MIT",
      stars: "12.8k+",
      coolify: true,
      desc: "Open-source LLM engineering and observability platform. Traces autonomous AI agent loops, prompt variations, and evaluation metrics in real time.",
      disrupts: "Datadog / Proprietary AI Monitoring",
      vetStatus: "PASS"
    },
    {
      name: "Twenty",
      category: "coss-saas",
      categoryLabel: "COMMERCIAL OPEN SOURCE CRM",
      stage: "SEED",
      license: "AGPL-3.0",
      stars: "24.5k+",
      coolify: true,
      desc: "The open-source CRM alternative to Salesforce. Full GraphQL APIs, modular data models, self-hostable on sovereign infrastructure.",
      disrupts: "Salesforce / HubSpot",
      vetStatus: "PASS"
    },
    {
      name: "Flowise",
      category: "ai-agents",
      categoryLabel: "MULTI-AGENT ORCHESTRATION",
      stage: "SERIES A",
      license: "MIT",
      stars: "33.2k+",
      coolify: true,
      desc: "Drag & drop visual builder to construct and deploy customized multi-agent LLM workflows, autonomous memory, and enterprise tools.",
      disrupts: "Closed AI Agent Frameworks",
      vetStatus: "PASS"
    },
    {
      name: "Hermes Agent",
      category: "ai-agents",
      categoryLabel: "AUTONOMOUS AGENT RUNTIME",
      stage: "SEED",
      license: "APACHE-2.0",
      stars: "15.1k+",
      coolify: true,
      desc: "Nous Research sovereign autonomous AI agent stack with persistent memory, tool calling, and deterministic self-hosted reasoning loops.",
      disrupts: "Closed LLM Agent APIs",
      vetStatus: "PASS"
    },
    {
      name: "Documenso",
      category: "coss-saas",
      categoryLabel: "OPEN SOURCE LEGAL TECH",
      stage: "SEED",
      license: "AGPL-3.0",
      stars: "9.8k+",
      coolify: true,
      desc: "The open-source DocuSign alternative. Cryptographically verifiable document signing and sovereign contract workflows.",
      disrupts: "DocuSign / Adobe Sign",
      vetStatus: "PASS"
    },
    {
      name: "Formbricks",
      category: "coss-saas",
      categoryLabel: "OPEN SOURCE EXPERIENCE SAAS",
      stage: "SEED",
      license: "AGPL-3.0",
      stars: "11.4k+",
      coolify: true,
      desc: "Privacy-first experience management and survey suite. In-app contextual triggers with zero data leakage to foreign third parties.",
      disrupts: "Qualtrics / Typeform",
      vetStatus: "PASS"
    },
    {
      name: "LiteLLM",
      category: "infrastructure",
      categoryLabel: "AI GATEWAY & ROUTER",
      stage: "SERIES A",
      license: "MIT",
      stars: "20.6k+",
      coolify: true,
      desc: "Open-source universal proxy to manage authentication, spend tracking, and load balancing across 100+ LLMs in standardized OpenAI format.",
      disrupts: "Closed Cloud AI Gateways",
      vetStatus: "PASS"
    },
    {
      name: "Activepieces / N8N",
      category: "infrastructure",
      categoryLabel: "AGENTIC WORKFLOW AUTOMATION",
      stage: "SERIES B",
      license: "FAIR-CODE / MIT",
      stars: "55.0k+",
      coolify: true,
      desc: "Open-source workflow automation and AI node orchestration connecting autonomous agents with enterprise ERP and database pipelines.",
      disrupts: "Zapier / Make",
      vetStatus: "PASS"
    },
    {
      name: "Qdrant",
      category: "infrastructure",
      categoryLabel: "VECTOR COMPUTE FOR AGENTS",
      stage: "SERIES B",
      license: "APACHE-2.0",
      stars: "22.3k+",
      coolify: true,
      desc: "AI-native vector search engine written in Rust. Powers sub-millisecond similarity queries and long-term memory for autonomous agents.",
      disrupts: "Pinecone / Closed Vector Clouds",
      vetStatus: "PASS"
    },
    {
      name: "Chatwoot",
      category: "coss-saas",
      categoryLabel: "CUSTOMER INTELLIGENCE SUITE",
      stage: "SERIES A",
      license: "MIT",
      stars: "21.2k+",
      coolify: true,
      desc: "Open-source omni-channel customer engagement platform with autonomous AI triage, live chat, and cross-channel routing.",
      disrupts: "Intercom / Zendesk",
      vetStatus: "PASS"
    },
    {
      name: "Nexus GPU",
      category: "infrastructure",
      categoryLabel: "DECENTRALIZED COMPUTE",
      stage: "SERIES A",
      license: "OPEN-PROTOCOL",
      stars: "8.5k+",
      coolify: true,
      desc: "Decentralized routing protocol for idle GPU compute clusters powering open-source model fine-tuning.",
      disrupts: "Monopolistic GPU Clouds",
      vetStatus: "PASS"
    },
    {
      name: "Vector DB Core",
      category: "infrastructure",
      categoryLabel: "ENTERPRISE RAG ARCHITECTURE",
      stage: "SEED",
      license: "APACHE-2.0",
      stars: "7.1k+",
      coolify: true,
      desc: "O(1) search infrastructure for enterprise autonomous RAG agents and deterministic retrieval pipelines.",
      disrupts: "Legacy Indexing Middleware",
      vetStatus: "PASS"
    }
  ];

  // Removed old 3-item slides array since we are merging the team into this carousel.

  const carouselData = [
    {
      title: "O(1) Data Sourcing",
      content: "We don't do 'coffee chats'. We ingest GitHub commits, academic publications, and raw compute usage. If your intellectual density is high, we will find you."
    },
    {
      title: "Deterministic Validation",
      content: "Human bias is eliminated. Our models analyze your technical architecture and market heuristics to predict success probability with terrifying accuracy."
    },
    {
      title: "Instant Capital Deployment",
      content: "Once validated, capital is deployed via smart contracts in O(1) time. No bureaucratic friction. You get the capital, you build the future."
    }
  ];

  const teamSlides = [
    {
      image: "/images/engineer_female.png",
      name: "Node Alpha",
      role: "Lead AI Architect | MSc in Advanced Computer Science",
      desc: "Architect of the O(1) decision engine. While our VET framework audits the code, our Advanced CS talent evaluates underlying algorithmic complexity."
    },
    {
      image: "/images/engineer_male.png",
      name: "Node Beta",
      role: "Quantitative Execution | Oxford Executive MBA (EMBA)",
      desc: "Venture capital requires mature judgment. Our EMBA nodes leverage decades of corporate leadership to align quantitative execution with global liquidity pools."
    },
    {
      image: "/images/team_white_1.png",
      name: "Node Gamma",
      role: "Software Architecture | DPhil in AIMS",
      desc: "The human intellect behind our Technical Due Diligence. Doctoral researchers from the AIMS CDT translate complex cryptographic proofs into actionable investment conviction."
    },
    {
      image: "/images/team_white_5_1783476223747.png",
      name: "Node Delta",
      role: "Data Infrastructure | MSc in Law and Finance (MLF)",
      desc: "Decentralized AI demands robust legal structuring. Our MLF talent ensures that verifiable data architectures are shielded by compliant cross-border frameworks."
    },
    {
      image: "/images/team_white_6_1783476231709.png",
      name: "Node Epsilon",
      role: "Smart Contract Security | BA in PPE",
      desc: "Technology does not scale in a vacuum. Our PPE nodes evaluate the macro-economic viability, regulatory risks, and ethical governance of the protocols we fund."
    },
    {
      image: "/images/team_white_7_1783476239842.png",
      name: "Node Zeta",
      role: "API Integration Lead | Oxford MBA",
      desc: "Bridging the gap between Oxford laboratories and global venture hubs. Our MBA network structures the deals and manages API-first revenue strategies."
    },
    {
      image: "/images/team_white_8_1783476248909.png",
      name: "Node Eta",
      role: "Algorithmic Risk | DPhil in Computer Science",
      desc: "Pushing the boundaries of our Inference Engine. They design the proprietary VET auditing parameters to evaluate risk in next-generation neural networks."
    },
    {
      image: "/images/team_white_9_1783476257015.png",
      name: "Node Theta",
      role: "Cryptographic Proofs | MSc in Financial Economics (MFE)",
      desc: "Financial modeling meets deeptech. Our MFE talent analyzes O(1) scalability metrics to project the long-term unit economics of cryptographic networks."
    },
    {
      image: "/images/team_white_10_1783476266175.png",
      name: "Node Iota",
      role: "Compute Optimization | MSc in AI for Business",
      desc: "Translating pure compute capability into commercial dominance. They evaluate how autonomous agents integrate into enterprise workflows to disrupt legacy software."
    },
    {
      image: "/images/team_white_11_1783476273688.png",
      name: "Node Kappa",
      role: "Protocol Engineering | BA in Computer Science",
      desc: "The human pulse on campus. Our undergraduate CS nodes source unpolished protocol engineers from internal Oxford hackathons before founders raise capital."
    }
  ];

  const nextTeamSlide = () => setCurrentTeamSlide((prev) => (prev === teamSlides.length - 1 ? 0 : prev + 1));
  const prevTeamSlide = () => setCurrentTeamSlide((prev) => (prev === 0 ? teamSlides.length - 1 : prev - 1));

  useEffect(() => {
    document.title = "Inference Capital | Deterministic AI Syndicate";
  }, []);

  return (
    <div>
      
      {/* Hero Section */}
      <section className="section-light">
        <AdvancedNeuralCanvas isDarkSection={false} />
        <div style={{ maxWidth: '1200px', position: 'relative', zIndex: 2 }}>
          <h1 className="hero-title-light">
            Trust is <span style={{ color: 'var(--color-accent)', fontWeight: 400 }}>O(1)</span>.<br/>
            We syndicate <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'relative', zIndex: 1, fontWeight: 400 }}>deterministic capital</span>
              <span style={{ position: 'absolute', bottom: '10%', left: '-2%', width: '104%', height: '30%', backgroundColor: 'var(--color-accent)', opacity: 0.2, zIndex: 0 }}></span>
            </span><br/>
            for <span style={{ color: 'var(--color-accent)', fontWeight: 400 }}>Open Source SaaS & AI Agents</span>.
          </h1>
          <div className="giant-arrow">↗</div>
        </div>
      </section>

      {/* Prospect Fellowship Yale & Fellowship Banner */}
      <section style={{ backgroundColor: 'var(--color-accent)', padding: '1rem', textAlign: 'center', position: 'relative', zIndex: 3 }}>
        <p style={{ color: 'var(--color-slate)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.1em', margin: 0, textTransform: 'uppercase', fontWeight: 500 }}>
          <span style={{ fontWeight: 700, marginRight: '1rem' }}>[YALE PROSPECT FELLOWSHIP CANDIDACY]</span> 
          Institutional syndicate investing in Commercial Open Source (COSS) & Autonomous AI Agents. Inspired by OSS Capital. Zero interviews. Code execution only.
          <Link to="/microgrant" style={{ color: 'var(--color-slate)', textDecoration: 'underline', marginLeft: '1rem', fontWeight: 700 }}>Learn More ↗</Link>
        </p>
      </section>

      {/* NEW CONTENT: Managing Partner Section */}
      <section className="section-dark" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
        <AdvancedNeuralCanvas isDarkSection={true} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="grid-1-2-col" style={{ alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '100%', aspectRatio: '1', backgroundColor: 'var(--color-slate)', border: '1px solid rgba(255, 255, 255, 0.1)', overflow: 'hidden' }}>
                <img src="/images/caryl.png" alt="Caryl OBAM, Managing Partner" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '-1rem', right: '-1rem', backgroundColor: 'var(--color-white)', color: 'var(--color-text-dark)', padding: '0.5rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                GP / MP
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                Caryl OBAM
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 200, color: 'var(--color-white)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Managing Partner
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '2rem' }}>
                With an MSc in Applied Artificial Intelligence from Oxford Saïd Business School (joint program with the Computer Science Department) and an Advanced Undergraduate Diploma in IT System Analysis and Design (Oxford), the Managing Partner acts as the central router between the University's elite technical laboratories, open-source maintainers, and international liquidity pools. Formulated for the Yale Prospect Fellowship, Inference Capital deploys institutional anchor capital into Commercial Open Source (COSS) and Autonomous AI Agents. By designing the proprietary VET engine and auditing code directly from GitHub repositories and self-hosted Docker stacks (Coolify-native), Caryl ensures that Inference Capital deploys capital with deterministic precision and zero institutional friction.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-white)' }}>
                <div>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', display: 'block', marginBottom: '0.25rem' }}>BASE</span>
                  <span>Oxford, UK</span>
                </div>
                <div>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', display: 'block', marginBottom: '0.25rem' }}>NETWORK</span>
                  <span>London / San Francisco / Paris / New Haven</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="section-dark">
        <AdvancedNeuralCanvas isDarkSection={true} />
        <div className="grid-2-col" style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', margin: '0 auto', alignItems: 'center' }}>
          
          <div style={{ paddingRight: '2rem' }}>
            <p style={{ fontSize: '2.5rem', fontWeight: 300, lineHeight: 1.4, color: 'var(--color-white)', marginBottom: '2rem' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>Open source is eating software faster than software is eating the world.</span> The era of closed-source black boxes and probabilistic speculation is over.
            </p>
            <p style={{ fontSize: '1.4rem', fontWeight: 300, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
              We support the software that supports all of us. Over the last decade, leading closed-source software companies raised an average of $300M+ in VC to reach scale. We prove that <strong style={{ color: 'var(--color-white)' }}>Commercial Open Source (COSS) and Autonomous AI Agents</strong> achieve that same scale with just <span style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)', borderBottom: '2px solid var(--color-accent)', padding: '0 0.2rem', fontWeight: 500, color: 'var(--color-accent)' }}>10–30% of traditional VC capital</span>, scaling into profitable market leaders through positive-sum capitalism.
            </p>
            <p style={{ fontSize: '1.2rem', fontWeight: 300, lineHeight: 1.5, color: 'rgba(255,255,255,0.7)' }}>
              Rooted in the Oxford deeptech ecosystem and aligned with the Yale Prospect Fellowship, our syndicate replaces human bias with mathematical precision, providing institutional LPs with an <strong style={{ color: 'var(--color-white)', fontWeight: 600 }}>asymmetric advantage</strong> in Open Source Technical Due Diligence.
            </p>
            <p style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-accent)', marginTop: '3rem', textTransform: 'uppercase' }}>
              — The O(1) Core Doctrine
            </p>
          </div>

          <div>
            <DenseNeuralNetworkCanvas />
          </div>

        </div>
      </section>

      {/* The Architecture / Team Carousel */}
      <section className="section-white">
        <AdvancedNeuralCanvas isDarkSection={false} />
        <div className="grid-2-col" style={{ position: 'relative', zIndex: 2, maxWidth: '1400px', margin: '0 auto', alignItems: 'center' }}>
          
          <div>
            <img src={teamSlides[currentTeamSlide].image} alt={teamSlides[currentTeamSlide].name} className="portrait-image" style={{ transition: 'opacity 0.3s ease' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '2rem 0' }}>
            
            <div style={{ minHeight: '300px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'rgba(10, 25, 47, 0.5)', marginBottom: '3rem', transition: 'all 0.3s' }}>
                {currentTeamSlide + 1} / {teamSlides.length}
              </div>
              <div className="accent-mono" style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>
                {teamSlides[currentTeamSlide].role}
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: 200, color: 'var(--color-text-dark)', marginBottom: '2rem' }}>
                {teamSlides[currentTeamSlide].name}
              </h2>
              <p style={{ fontSize: '1.25rem', fontWeight: 300, color: 'var(--color-text-dark)', marginBottom: '3rem', lineHeight: 1.6, minHeight: '120px' }}>
                {teamSlides[currentTeamSlide].desc}
              </p>
            </div>

            {/* Carousel Arrows */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '4rem' }}>
              <span 
                onClick={prevTeamSlide}
                style={{ fontSize: '1.5rem', fontWeight: 200, color: 'var(--color-text-dark)', cursor: 'pointer', transition: 'opacity 0.2s' }}
              >
                &larr;
              </span>
              <span 
                onClick={nextTeamSlide}
                style={{ fontSize: '1.5rem', fontWeight: 200, color: 'var(--color-accent)', cursor: 'pointer', transition: 'opacity 0.2s' }}
              >
                &rarr;
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* NEW CONTENT: Investment Criteria */}
      <section className="section-light" style={{ padding: '6rem max(5vw, 4rem)' }}>
        <AdvancedNeuralCanvas isDarkSection={false} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
              [ COSS & AGENTIC DOCTRINE ]
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: 200, color: 'var(--color-text-dark)' }}>
              Deterministic Evaluation Criteria
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(10, 25, 47, 0.6)', maxWidth: '700px', margin: '1rem auto 0', lineHeight: 1.5 }}>
              Inspired by OSS Capital's commercial open-source thesis, we apply quantitative VET auditing to public repositories and self-hosted AI agent architectures.
            </p>
          </div>

          <div className="grid-3-col">
            
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 200, color: 'var(--color-accent)', marginBottom: '1rem' }}>01</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text-dark)', marginBottom: '1rem' }}>Open Source Velocity & API ARR</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(10, 25, 47, 0.7)', lineHeight: 1.6 }}>
                We fund open-source protocols, developer tools, and agents with organic GitHub traction (star velocity, issue resolution rate, PR throughput) and autonomous cloud API monetization. Zero reliance on bloated sales teams.
              </p>
            </div>

            <div>
              <div style={{ fontSize: '3rem', fontWeight: 200, color: 'var(--color-accent)', marginBottom: '1rem' }}>02</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text-dark)', marginBottom: '1rem' }}>O(1) Self-Hostability & Portability</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(10, 25, 47, 0.7)', lineHeight: 1.6 }}>
                Every architecture must be sovereign, containerized, and deployable in O(1) time (verified against 1-click PaaS stacks like Coolify). No proprietary cloud lock-in. The marginal cost of servicing an enterprise client must trend toward zero.
              </p>
            </div>

            <div>
              <div style={{ fontSize: '3rem', fontWeight: 200, color: 'var(--color-accent)', marginBottom: '1rem' }}>03</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text-dark)', marginBottom: '1rem' }}>Verifiable Execution Traces (VET)</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(10, 25, 47, 0.7)', lineHeight: 1.6 }}>
                Probabilistic pitch decks are discarded. Our proprietary Technical Due Diligence engine continuously runs audits on public commits, Docker Compose manifests, and autonomous execution loops to guarantee that agent workflows are deterministically sound.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* NEW CONTENT: Algorithmic Portfolio & Coolify Open Source Stack */}
      <section className="section-dark">
        <AdvancedNeuralCanvas isDarkSection={true} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
                [ COSS & COOLIFY-NATIVE STACK ]
              </div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 200, color: 'var(--color-white)', lineHeight: 1.1 }}>
                VET Audited<br/>Open-Source Architectures
              </h2>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
                Validated on Docker Compose &amp; Coolify 1-Click Catalog
              </p>
              <div className="link-accent btn-magnetic" style={{ cursor: 'pointer' }}>Request detailed audit traces &gt;&gt;</div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Architectures' },
              { id: 'ai-agents', label: 'Autonomous AI Agents' },
              { id: 'coss-saas', label: 'Commercial Open Source SaaS (COSS)' },
              { id: 'infrastructure', label: 'Agentic Infrastructure & Compute' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setPortfolioFilter(tab.id)}
                className={`category-tab ${portfolioFilter === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="grid-3-col" style={{ gap: '2rem' }}>
            {openSourcePortfolio
              .filter(item => portfolioFilter === 'all' || item.category === portfolioFilter)
              .map((item, idx) => (
                <div key={idx} className="oss-card">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
                        {item.stage}
                      </span>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <span className="license-tag">{item.license}</span>
                        {item.coolify && (
                          <span className="coolify-tag" title="Verified One-Click Service on Coolify">
                            ⚡ COOLIFY 1-CLICK
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 300, color: 'var(--color-white)' }}>
                        {item.name}
                      </h3>
                      {item.stars && (
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                          ★ {item.stars}
                        </span>
                      )}
                    </div>

                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(0, 229, 255, 0.8)', letterSpacing: '0.08em', marginBottom: '1.2rem', textTransform: 'uppercase' }}>
                      {item.categoryLabel}
                    </div>

                    <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '1.5rem', minHeight: '54px', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>MARKET DISRUPTED</span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-mono)', textAlign: 'right' }}>{item.disrupts}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>VET TRACE AUDIT</span>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontWeight: 600 }}>{item.vetStatus}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* NEW CONTENT: FAQ Section */}
      <section className="section-white" style={{ padding: '6rem max(5vw, 4rem)' }}>
        <AdvancedNeuralCanvas isDarkSection={false} />
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 200, color: 'var(--color-text-dark)', marginBottom: '4rem', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: "Why does Inference Capital focus on Open-Source SaaS & Autonomous AI Agents?",
                a: "Commercial Open Source Software (COSS) represents the most resilient enterprise business model: zero vendor lock-in, organic developer distribution, and public code transparency. When paired with autonomous AI agents, open-source software can operate self-hosted or in the cloud, generating high-margin software revenues with near-zero customer acquisition cost."
              },
              {
                q: "How does Inference Capital compare to OSS Capital?",
                a: "OSS Capital pioneered early-stage COSS investing through qualitative community conviction. Inference Capital takes this paradigm to its quantitative conclusion: we replace subjective pitch meetings with deterministic Verifiable Execution Traces (VET). We evaluate GitHub commit velocity, Docker Compose self-hostability, and autonomous API settlement through pure algorithmic metrics."
              },
              {
                q: "Why is self-hostability (e.g., via Coolify) a core investment criterion?",
                a: "Enterprise AI demands data sovereignty and regulatory independence. Open-source architectures verified to run seamlessly on self-hosted orchestration platforms like Coolify guarantee to clients that their proprietary data and agent execution loops remain entirely within their own perimeter, eliminating hyperscaler lock-in."
              },
              {
                q: "How does the Yale Prospect Fellowship anchor this institutional mission?",
                a: "The Prospect Fellowship by the Yale Investments Office partners with forward-thinking investment managers to launch transformative funds. Inference Capital provides institutional LPs with an asymmetric, mathematically verified gateway into the frontier of Commercial Open Source and sovereign AI agents, bridging Oxford's technical rigor with Yale's institutional endowment excellence."
              },
              {
                q: "What is deterministic evaluation?",
                a: "Unlike traditional venture capital that relies on human intuition and probabilistic pitch decks, our O(1) engine evaluates the profitability and scalability of a software architecture purely mathematically through execution trace analysis."
              },
              {
                q: "What is your average check size?",
                a: "Our deployment algorithms have no human bias. Depending on the startup's verified metrics (from Seed to Series C), capital deployed automatically via our smart contracts ranges from $1M to $15M."
              },
              {
                q: "Do you fund non-technical founders?",
                a: "No. If your product does not have an architecture verifiable by our quantitative infrastructure (via open-source traces or cryptographic proofs), the application is automatically discarded by our filters."
              },
              {
                q: "Is there a human investment committee?",
                a: "No. While our Fellowship architects and audits the underlying mathematical models, the final capital deployment decision is executed entirely by the Inference Engine without any human or bureaucratic interference."
              },
              {
                q: "How long does the Due Diligence process take?",
                a: "O(1) time. Once your cryptographic proof or open-source trace is submitted, our algorithmic pipeline evaluates technical defensibility and API revenue in seconds. Capital is deployed instantly upon verification."
              },
              {
                q: "Does O(1) Inference Capital take Board Seats?",
                a: "No. Mathematical models do not sit on corporate boards. We monitor your API metrics in real-time. If you execute, you receive follow-on funding automatically. If you don't, you are algorithmically phased out."
              },
              {
                q: "Do you have a Scout Program?",
                a: "Yes. We operate a decentralized Scout Node Network. Engineers can route promising repositories to our Inference Engine. If capital is deployed, the routing node automatically receives a 2% execution bounty via smart contract."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                style={{ 
                  borderBottom: '1px solid rgba(10, 25, 47, 0.1)', 
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
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--color-text-dark)', margin: 0 }}>
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
                  <p style={{ fontSize: '1.1rem', color: 'rgba(10, 25, 47, 0.7)', lineHeight: 1.6, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--color-slate)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '4rem var(--spacing-container)', position: 'relative', zIndex: 2 }}>
        <div className="grid-4-col" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-white)', letterSpacing: '0.1em' }}>MANIFESTO</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-white)', letterSpacing: '0.1em', opacity: 0.3, cursor: 'not-allowed' }}>CONTACT US</span>
            <Link to="/microgrant" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-white)', letterSpacing: '0.1em', textDecoration: 'none' }}>THE FELLOWSHIP</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-white)', letterSpacing: '0.1em', opacity: 0.3, cursor: 'not-allowed' }}>ALGORITHMIC PORTFOLIO</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-white)', letterSpacing: '0.1em', opacity: 0.3, cursor: 'not-allowed' }}>NEWSROOM</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-white)', letterSpacing: '0.1em', opacity: 0.3, cursor: 'not-allowed' }}>LP PORTAL</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-white)', letterSpacing: '0.1em', opacity: 0.3, cursor: 'not-allowed' }}>ARCHITECTURE</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-white)', letterSpacing: '0.1em', opacity: 0.3, cursor: 'not-allowed' }}>FOR ENTERPRISE</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-white)', letterSpacing: '0.1em', opacity: 0.3, cursor: 'not-allowed' }}>RESPONSIBILITY</span>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', maxWidth: '600px', lineHeight: 1.6 }}>
            *O(1) Inference Capital is a new-generation algorithmic Private Equity fund. All deployment decisions are executed via deterministic mathematical models. Human CVs and probabilistic pitch decks are automatically rejected.
          </p>
          <div className="nav-logo-container">
            <span className="nav-logo-top" style={{ fontSize: '4rem' }}>O(1)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

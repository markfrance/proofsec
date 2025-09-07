import React from 'react';

function Home({ openModal }) {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Smart Contract Security You Can Trust</h1>
            <p className="hero-subtitle">
              Independent blockchain audits with enterprise-grade methodology, delivered fast and at a fraction of the cost of big firms.
            </p>
            <button className="cta-button hero-cta" onClick={openModal}>🔒 Request an Audit</button>
          </div>
          <div className="hero-background">
            <div className="blockchain-animation"></div>
          </div>
        </div>
      </section>

      {/* Why Security Matters */}
      <section className="security-matters">
        <div className="container">
          <h2 className="section-title">Billions Lost. Don't Be Next.</h2>
          <p className="section-text">
            Billions of dollars have been lost to hacks, exploits, and unchecked vulnerabilities. 
            Security isn't optional — it's mission-critical. At ProofSec, we provide professional, 
            independent audits that give you proof, not promises.
          </p>
          <div className="checklist">
            <div className="checklist-item">
            <span className="checkmark">✅</span>
            <span>Prevent costly exploits</span>
            </div>
            <div className="checklist-item">
              <span className="checkmark">✅</span>
              <span>Build investor and user trust</span>
            </div>
            <div className="checklist-item">
              <span className="checkmark">✅</span>
              <span>Launch with confidence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Audit Packages</h2>
          <p className="section-subtitle">Choose the package that fits your project's needs.</p>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Quick Review</h3>
              <ul className="service-features">
                <li>Up to 500 lines of code</li>
                <li>3–5 day turnaround</li>
                <li>PDF report & badge</li>
              </ul>
              <div className="service-price">From $1,500</div>
            </div>
            <div className="service-card featured">
              <h3 className="service-title">Standard Audit</h3>
              <ul className="service-features">
                <li>Full contract suite review</li>
                <li>1–2 weeks</li>
                <li>Manual + automated analysis</li>
              </ul>
              <div className="service-price">From $3,000</div>
            </div>
            <div className="service-card">
              <h3 className="service-title">Comprehensive Audit</h3>
              <ul className="service-features">
                <li>Complex protocols (DEX, bridge, lending)</li>
                <li>2–3 weeks</li>
                <li>Gas optimization + exploit testing</li>
              </ul>
              <div className="service-price">From $7,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="process">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-text">
            Our process combines automated analysis, manual review, and exploit pattern checks to deliver actionable results.
          </p>
          <div className="process-timeline">
            <div className="process-step">
              <img src="./logo192.png" width="64" height="64" alt="Step 1" className="step-image" />
              <h3 className="step-title">Submit Code</h3>
            </div>
            <div className="process-step">
              <img src="./logo192.png" width="64" height="64" alt="Step 1" className="step-image" />
              <h3 className="step-title">Audit & Review</h3>
            </div>
            <div className="process-step">
              <img src="./logo192.png" width="64" height="64" alt="Step 1" className="step-image" />
              <h3 className="step-title">Fix Recommendations</h3>
            </div>
            <div className="process-step">
              <img src="./logo192.png" width="64" height="64" alt="Step 1" className="step-image" />
              <h3 className="step-title">Final Report + Badge</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="methodology">
        <div className="container">
          <h2 className="section-title">Our Audit Methodology</h2>
          <p className="section-text">
            We follow a rigorous 5-step process to ensure comprehensive security analysis of your smart contracts.
          </p>
          <div className="methodology-steps">
            <div className="methodology-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Gather Scope</h3>
                <p className="step-description">
                  Collect code, documentation, and intended use cases to understand the complete system architecture and requirements.
                </p>
              </div>
            </div>
            <div className="methodology-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Run Automated Checks</h3>
                <p className="step-description">
                  Static analysis for common issues including reentrancy, overflows, and unsafe calls using industry-standard tools.
                </p>
              </div>
            </div>
            <div className="methodology-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Manual Code Review</h3>
                <p className="step-description">
                  Line-by-line inspection for logic flaws, role management, gas inefficiencies, and comprehensive testing of all known attack vectors.
                </p>
              </div>
            </div>
            <div className="methodology-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Draft Audit Report</h3>
                <p className="step-description">
                  Provide vulnerabilities ranked by severity with detailed recommended fixes and implementation guidance.
                </p>
              </div>
            </div>
            <div className="methodology-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Deliver & Revise</h3>
                <p className="step-description">
                  Deliver final audit PDF. Apply revisions if fixes are made and perform recheck to ensure all issues are resolved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Report */}
      <section id="sample" className="sample-report">
        <div className="container">
          <h2 className="section-title">See How We Work</h2>
          <p className="section-text">
            Download a redacted sample audit report to understand our methodology and deliverables.
          </p>
          <img src="./ProofsecAuditExample.png" width="50%" height="auto" alt="Sample Report" className="sample-report-image" />
        </div>
      </section>

      {/* About ProofSec */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-text">
            ProofSec was founded by blockchain engineers with over 7 years of smart contract development and security experience. 
            We've built and reviewed DEXs, token systems, staking platforms, and cross-chain bridges. Our mission is to deliver 
            high-quality audits that are fast, transparent, and affordable for projects of all sizes.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2 className="section-title">Launch Secure. Launch with ProofSec.</h2>
          <button className="cta-button large" onClick={openModal}>🔒 Request Your Audit Today</button>
        </div>
      </section>
    </>
  );
}

export default Home;

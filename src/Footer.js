import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="./proofsec.png" width="224" height="64" alt="ProofSec Logo" className="step-image" />
            </Link>
          </div>
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#services" className="footer-link">Services</a>
            <a href="#process" className="footer-link">Process</a>
            <a href="#sample" className="footer-link">Sample Report</a>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </div>
          <div className="footer-social">
            <a href="https://x.com/proof_sec" className="social-link" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.linkedin.com/company/proofsecxyz" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com/@proof_sec" className="social-link" target="_blank" rel="noopener noreferrer">YouTube</a>


            
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 ProofSec. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

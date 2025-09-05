import { Link } from 'react-router-dom';

function Header({ openModal }) {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="logo">
            <img src="./proofsec.png" width="224" height="64" alt="ProofSec Logo" className="step-image" />
          </Link>
        </div>
        <nav className="nav-menu">
          <a href="/#home" className="nav-link">Home</a>
          <a href="/#services" className="nav-link">Services</a>
          <a href="/#process" className="nav-link">Process</a>
          <a href="/#sample" className="nav-link">Sample Report</a>
          <button className="cta-button" onClick={openModal}>Request Audit</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

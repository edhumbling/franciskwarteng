import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="majestic-footer">
        <div className="majestic-footer-container">
          {/* Main Footer Content */}
          <div className="footer-content-grid">
            {/* Column 1: Brand */}
            <div className="footer-column">
              <h3 className="footer-brand-title">Francis Kwarteng</h3>
              <p className="footer-brand-subtitle">BS MLS (ASCPi), MS</p>
              <p className="footer-brand-description">
                Biomedical Scientist | NYU Langone Health
              </p>
              <p className="footer-brand-description" style={{ marginTop: '12px' }}>
                Bronx, New York
              </p>
            </div>

            {/* Column 2: Explore */}
            <div className="footer-column">
              <h4 className="footer-column-title">Explore</h4>
              <ul className="footer-links-list">
                <li><Link href="/" className="footer-link-item">Home</Link></li>
                <li><Link href="/about" className="footer-link-item">About</Link></li>
                <li><Link href="/research" className="footer-link-item">Research</Link></li>
                <li><Link href="/projects" className="footer-link-item">Projects</Link></li>
                <li><Link href="/essays" className="footer-link-item">Essays</Link></li>
                <li><Link href="/contact" className="footer-link-item">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Highlights */}
            <div className="footer-column">
              <h4 className="footer-column-title">Highlights</h4>
              <ul className="footer-links-list">
                <li><Link href="/research" className="footer-link-item">Publications</Link></li>
                <li><Link href="/essays" className="footer-link-item">Essays & Notes</Link></li>
                <li><Link href="/projects" className="footer-link-item">Bibinii Farms</Link></li>
              </ul>
            </div>

            {/* Column 4: Connect */}
            <div className="footer-column">
              <h4 className="footer-column-title">Connect</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="mailto:kwartengfo@warhawks.ulm.edu" className="footer-link-item">
                    Email
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/franciskwarteng-8711bb1ab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link-item"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
              <div style={{ marginTop: '24px' }}>
                <p className="footer-contact-label">Email:</p>
                <a 
                  href="mailto:kwartengfo@warhawks.ulm.edu" 
                  className="footer-contact-email"
                >
                  kwartengfo@warhawks.ulm.edu
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-majestic-divider"></div>

          {/* Bottom Section */}
          <div className="footer-bottom-section">
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                © {new Date().getFullYear()} Francis Kwarteng. All rights reserved.
              </p>
              <p className="footer-tagline">
                Advancing molecular medicine through precision laboratory science
              </p>
            </div>
            <div className="footer-bottom-right">
              <p className="footer-location">
                🏥 NYU Langone Health
              </p>
              <p className="footer-location">
                📍 Bronx, New York, United States
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Innovative Dual‑Lane Glass Ticker */}
      <div className="glass-ticker" aria-hidden="true">
        <div className="glass-ticker-lane">
          <div className="glass-ticker-track">
            <span>Francis Kwarteng ;</span>
            <span>Francis Kwarteng ;</span>
          </div>
        </div>
        <div className="glass-ticker-lane glass-ticker-lane--reverse">
          <div className="glass-ticker-track">
            <span>Francis Kwarteng ;</span>
            <span>Francis Kwarteng ;</span>
          </div>
        </div>
      </div>
    </>
  );
}

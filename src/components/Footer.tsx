import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="signature-footer">
        <div className="signature-footer-stripes" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="signature-footer-container">
          <div className="signature-footer-grid">
            {/* Brand + Mission */}
            <div className="signature-footer-brand">
              <p className="signature-footer-eyebrow">Biomedical Scientist</p>
              <h3 className="signature-footer-title">Francis Kwarteng</h3>
              <p className="signature-footer-tagline">
                Bridging molecular diagnostics and translational research to power equitable healthcare innovation.
              </p>
              <div className="signature-footer-socials">
                <a
                  href="https://www.linkedin.com/in/franciskwarteng-8711bb1ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="signature-social-link"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="mailto:kwartengfo@warhawks.ulm.edu"
                  className="signature-social-link"
                  aria-label="Email"
                >
                  ✉
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="signature-footer-column">
              <h4 className="signature-footer-heading">Site Navigation</h4>
              <ul className="signature-footer-links">
                <li><Link href="/" className="signature-footer-link">Home</Link></li>
                <li><Link href="/about" className="signature-footer-link">About</Link></li>
                <li><Link href="/research" className="signature-footer-link">Research</Link></li>
                <li><Link href="/projects" className="signature-footer-link">Projects</Link></li>
                <li><Link href="/essays" className="signature-footer-link">Essays &amp; Notes</Link></li>
                <li><Link href="/contact" className="signature-footer-link">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="signature-footer-column">
              <h4 className="signature-footer-heading">Contact Information</h4>
              <ul className="signature-footer-details">
                <li>📍 Bronx, New York</li>
                <li>🏥 NYU Langone Health</li>
                <li>
                  ✉ <a href="mailto:kwartengfo@warhawks.ulm.edu" className="signature-footer-link">kwartengfo@warhawks.ulm.edu</a>
                </li>
                <li>
                  in <a
                    href="https://www.linkedin.com/in/franciskwarteng-8711bb1ab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="signature-footer-link"
                  >linkedin.com/in/franciskwarteng-8711bb1ab</a>
                </li>
              </ul>
            </div>

            {/* Newsletter CTA */}
            <div className="signature-footer-column">
              <h4 className="signature-footer-heading">Newsletter</h4>
              <p className="signature-footer-note">
                Subscribe to lab updates, publications, and invited talks from Francis Kwarteng.
              </p>
              <a href="mailto:kwartengfo@warhawks.ulm.edu?subject=Newsletter%20Subscription" className="signature-footer-button">
                Subscribe
              </a>
            </div>
          </div>

          <div className="signature-footer-divider" aria-hidden="true"></div>

          <div className="signature-footer-bottom">
            <p>© {new Date().getFullYear()} Francis Kwarteng. All rights reserved.</p>
            <div className="signature-footer-bottom-links">
              <Link href="/sitemap" className="signature-footer-link">Sitemap</Link>
              <Link href="/index" className="signature-footer-link">Index</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Innovative Single‑Lane Glass Ticker (Amazon font) */}
      <div className="glass-ticker" aria-hidden="true">
        <div className="glass-ticker-lane">
          <div className="glass-ticker-track">
            <span>Francis Kwarteng ;</span>
            <span>Francis Kwarteng ;</span>
          </div>
        </div>
      </div>
    </>
  );
}

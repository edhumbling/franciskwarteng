import Link from "next/link";

export default function Footer() {
  return (
    <footer className="apple-footer">
      <div className="apple-footer-container">
        {/* Title */}
        <h3 className="footer-title">Francis Kwarteng</h3>
        
        {/* Navigation Links */}
        <div className="footer-links-section">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/research" className="footer-link">Research</Link>
          <Link href="/projects" className="footer-link">Projects</Link>
          <Link href="/essays" className="footer-link">Essays</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
        </div>
        
        {/* Divider */}
        <div className="footer-divider"></div>
        
        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-contact">
            Contact: <a href="mailto:kwartengfo@warhawks.ulm.edu">kwartengfo@warhawks.ulm.edu</a>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Francis Kwarteng. All rights reserved.
          </div>
          <div className="footer-copyright">
            Biomedical Scientist | NYU Langone Health
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="apple-footer">
      <style jsx>{`
        .apple-footer {
          background: #000306;
          border-top: 1px solid rgba(32, 139, 15, 0.2);
          padding: 60px 0 40px;
          margin-top: 80px;
        }
        .apple-footer-container {
          max-width: 980px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .footer-links-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 40px;
        }
        .footer-link {
          color: #e5e5e7;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s ease;
          padding: 4px 0;
        }
        .footer-link:hover {
          color: #ffffff;
        }
        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(32, 139, 15, 0.2);
          margin: 40px 0;
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }
        .footer-copyright {
          color: #a1a1a6;
          font-size: 12px;
        }
        .footer-contact {
          color: #e5e5e7;
          font-size: 13px;
        }
        .footer-contact a {
          color: #208b0f;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-contact a:hover {
          color: #2bad12;
        }
        .footer-title {
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: center;
        }
        @media (max-width: 768px) {
          .apple-footer {
            padding: 40px 0 30px;
          }
          .footer-links-section {
            gap: 8px;
          }
          .footer-link {
            font-size: 13px;
          }
        }
      `}</style>
      
      <div className="apple-footer-container">
        {/* Title */}
        <h3 className="footer-title">Francis Kwarteng</h3>
        
        {/* Navigation Links */}
        <div className="footer-links-section">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/about" className="footer-link">About</Link>
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

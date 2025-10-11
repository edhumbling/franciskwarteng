import Link from "next/link";

export default function Footer() {
  return (
    <footer className="amazon-footer">
      <div className="amazon-footer-content">
        <div className="amazon-grid amazon-grid-4" style={{ marginBottom: "40px" }}>
          <div>
            <h3 style={{ marginBottom: "16px", fontSize: "16px" }}>Navigation</h3>
            <ul className="amazon-list">
              <li className="amazon-list-item"><Link href="/">Home</Link></li>
              <li className="amazon-list-item"><Link href="/about">About</Link></li>
              <li className="amazon-list-item"><Link href="/projects">Projects</Link></li>
              <li className="amazon-list-item"><Link href="/essays">Essays</Link></li>
              <li className="amazon-list-item"><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: "16px", fontSize: "16px" }}>Research</h3>
            <ul className="amazon-list">
              <li className="amazon-list-item"><Link href="/projects">Current Projects</Link></li>
              <li className="amazon-list-item"><Link href="/essays">Scientific Essays</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: "16px", fontSize: "16px" }}>Connect</h3>
            <ul className="amazon-list">
              <li className="amazon-list-item"><Link href="mailto:kwartengfo@warhawks.ulm.edu">Email</Link></li>
              <li className="amazon-list-item"><Link href="https://www.linkedin.com/in/franciskwarteng-8711bb1ab">LinkedIn</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: "16px", fontSize: "16px" }}>About</h3>
            <p className="text-secondary" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              Biomedical Scientist focused on advancing molecular medicine through precision laboratory science.
            </p>
          </div>
        </div>
        <div className="amazon-divider"></div>
        <div style={{ textAlign: "center", color: "var(--amazon-text-muted)", fontSize: "12px" }}>
          © {new Date().getFullYear()} Francis Kwarteng. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function ContactPage() {
  return (
    <div>
      <div className="amazon-section-header" style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>Contact Francis Kwarteng</h1>
        <p className="text-muted" style={{ fontSize: "14px", maxWidth: "800px" }}>
          Get in touch for research collaborations, speaking engagements, or laboratory consulting
        </p>
      </div>

      <div className="amazon-grid amazon-grid-2" style={{ marginBottom: "40px" }}>
        <div className="amazon-card-elevated">
          <h3 style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "24px" }}>✉</span>
            Email
          </h3>
          <Link 
            href="mailto:kwartengfo@warhawks.ulm.edu"
            className="text-accent"
            style={{ fontSize: "16px", display: "block", marginBottom: "12px" }}
          >
            kwartengfo@warhawks.ulm.edu
          </Link>
          <p className="text-muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
            For research collaborations, speaking engagements, or laboratory consulting
          </p>
        </div>

        <div className="amazon-card-elevated">
          <h3 style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "24px" }}>in</span>
            LinkedIn
          </h3>
          <Link 
            href="https://www.linkedin.com/in/franciskwarteng-8711bb1ab"
            className="text-accent"
            style={{ fontSize: "16px", display: "block", marginBottom: "12px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/franciskwarteng-8711bb1ab
          </Link>
          <p className="text-muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
            Connect to follow biomedical projects and professional milestones
          </p>
        </div>
      </div>

      <div className="amazon-section">
        <h2 className="amazon-section-title">Collaboration Opportunities</h2>
        <div className="amazon-grid amazon-grid-2">
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "12px" }}>
              Biomedical Research Partnerships
            </h3>
            <p className="text-muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              Collaborate on translational parasitology, protein dynamics, and diagnostic innovation
            </p>
          </div>

          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "12px" }}>
              Clinical Laboratory Optimization
            </h3>
            <p className="text-muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              Design resilient blood bank workflows and quality systems grounded in regulatory excellence
            </p>
          </div>

          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "12px" }}>
              Educational Engagements
            </h3>
            <p className="text-muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              Curate workshops and lectures that make complex science accessible and actionable
            </p>
          </div>

          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "12px" }}>
              Thought Leadership
            </h3>
            <p className="text-muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              Co-create essays, panels, and publications illuminating laboratory science frontiers
            </p>
          </div>
        </div>
      </div>

      <div className="amazon-section">
        <h2 className="amazon-section-title">Location & Availability</h2>
        <div className="amazon-grid amazon-grid-2">
          <div className="amazon-card">
            <h3 style={{ marginBottom: "12px" }}>Based in Bronx, New York</h3>
            <p className="text-muted" style={{ fontSize: "13px", marginBottom: "8px" }}>
              Serving institutions globally with a grounding in New York&apos;s medical excellence
            </p>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Time Zone: Eastern Time (ET)
            </p>
          </div>

          <div className="amazon-card">
            <h3 style={{ marginBottom: "12px" }}>Primary Institution</h3>
            <p className="text-accent" style={{ fontSize: "14px", marginBottom: "8px" }}>
              NYU Langone Health
            </p>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Blood Bank Technologist
            </p>
          </div>
        </div>
      </div>

      <div className="amazon-card-elevated" style={{ textAlign: "center", padding: "40px" }}>
        <h2 style={{ marginBottom: "12px" }}>Ready to Connect?</h2>
        <p className="text-muted" style={{ marginBottom: "24px", fontSize: "14px" }}>
          Reach out to co-create research, clinical excellence, or educational experiences
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Link href="mailto:kwartengfo@warhawks.ulm.edu" className="amazon-button-primary amazon-button">
            Send Email
          </Link>
          <Link href="https://www.linkedin.com/in/franciskwarteng-8711bb1ab" className="amazon-button" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}

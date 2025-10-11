import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="amazon-card-elevated" style={{ marginBottom: "40px", padding: "40px" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 300px", 
          gap: "40px", 
          alignItems: "center" 
        }} className="hero-grid-responsive">
          <div>
            <div className="amazon-badge" style={{ marginBottom: "16px" }}>Biomedical Scientist</div>
            <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>Francis Kwarteng</h1>
            <p className="text-secondary" style={{ fontSize: "16px", marginBottom: "20px", lineHeight: "1.6" }}>
              BS MLS (ASCPi), MS | New York State Licensed Clinical Laboratory Technologist
            </p>
            <p className="text-muted" style={{ fontSize: "14px", marginBottom: "24px", lineHeight: "1.6" }}>
              Biomedical Scientist focused on elucidating molecular mechanisms of physiological and pathological pathways with the aim of finding novel treatments for both infectious and metabolic diseases.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/projects" className="amazon-button-primary amazon-button">
                View Research
              </Link>
              <Link href="/contact" className="amazon-button">
                Get in Touch
              </Link>
            </div>
          </div>
          <div>
            <div style={{ 
              position: "relative", 
              width: "100%", 
              aspectRatio: "1/1", 
              borderRadius: "8px", 
              overflow: "hidden",
              maxWidth: "300px"
            }}>
              <Image src="/photo.jpeg" alt="Francis Kwarteng" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="amazon-grid amazon-grid-3" style={{ marginBottom: "40px" }}>
        <div className="amazon-card">
          <div className="amazon-stat">
            <span className="amazon-stat-value">1.2K+</span>
            <span className="amazon-stat-label">Critical Transfusions Safeguarded</span>
          </div>
        </div>
        <div className="amazon-card">
          <div className="amazon-stat">
            <span className="amazon-stat-value">7</span>
            <span className="amazon-stat-label">Research Discoveries</span>
          </div>
        </div>
        <div className="amazon-card">
          <div className="amazon-stat">
            <span className="amazon-stat-value">20+</span>
            <span className="amazon-stat-label">Lab Techniques Optimized</span>
          </div>
        </div>
      </div>

      {/* Current Position */}
      <div className="amazon-section">
        <div className="amazon-section-header">
          <h2 className="amazon-section-title">Current Position</h2>
          <p className="amazon-section-description">
            Blood Bank Technologist at NYU Langone Health
          </p>
        </div>
        <div className="amazon-card">
          <h3 style={{ marginBottom: "12px" }}>NYU Langone Health</h3>
          <p className="amazon-badge" style={{ marginBottom: "16px" }}>October 2024 - Present</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li className="amazon-list-bullet">Skilled in blood typing, cross-matching, and antibody screening</li>
            <li className="amazon-list-bullet">Operating advanced laboratory equipment with strict protocol adherence</li>
            <li className="amazon-list-bullet">Ensuring compliance with regulatory standards and quality control</li>
            <li className="amazon-list-bullet">Troubleshooting technical issues for timely, reliable results</li>
          </ul>
        </div>
      </div>

      {/* Research Focus */}
      <div className="amazon-section">
        <div className="amazon-section-header">
          <h2 className="amazon-section-title">Research Focus</h2>
          <p className="amazon-section-description">
            Investigating protein-protein interactions in Giardia lamblia
          </p>
        </div>
        <div className="amazon-card">
          <p className="text-secondary" style={{ fontSize: "14px", marginBottom: "20px", lineHeight: "1.6" }}>
            My current project involves the use of affinity chromatography pull-down assay to characterize the protein-protein interaction in translation initiation of the parasite Giardia lamblia. By understanding the molecular mechanism of translation initiation of the parasite, I may find a drug target selectively toxic to the parasite.
          </p>
          <Link href="/projects" className="amazon-button">
            Explore Research Projects →
          </Link>
        </div>
      </div>

      {/* Skills */}
      <div className="amazon-section">
        <div className="amazon-section-header">
          <h2 className="amazon-section-title">Key Skills</h2>
        </div>
        <div className="amazon-grid amazon-grid-3">
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px" }}>Aseptic Technique</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Advanced sterile procedures for laboratory operations
            </p>
          </div>
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px" }}>Bacterial Cell Culture</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Expert cultivation and maintenance of bacterial cultures
            </p>
          </div>
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px" }}>Translational Research</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Bridging laboratory discoveries to clinical applications
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="amazon-card-elevated" style={{ textAlign: "center", padding: "40px" }}>
        <h2 style={{ marginBottom: "12px" }}>Ready to Collaborate?</h2>
        <p className="text-muted" style={{ marginBottom: "24px", fontSize: "14px" }}>
          Interested in biomedical research partnerships or discussing laboratory science? Let&apos;s connect.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Link href="/contact" className="amazon-button-primary amazon-button">
            Contact Francis
          </Link>
          <Link href="mailto:kwartengfo@warhawks.ulm.edu" className="amazon-button">
            Send Email
          </Link>
        </div>
      </div>
    </div>
  );
}

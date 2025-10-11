import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div>
      <div className="amazon-section-header" style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>Research Projects</h1>
        <p className="text-muted" style={{ fontSize: "14px", maxWidth: "800px" }}>
          Precision research with transformative ambitions in molecular medicine and laboratory science
        </p>
      </div>

      {/* Current Research */}
      <div className="amazon-section">
        <h2 className="amazon-section-title">Current Research</h2>
        <div className="amazon-card-elevated">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "16px" }}>
            <h3 style={{ fontSize: "21px" }}>Giardia lamblia Translation Initiative</h3>
            <span className="amazon-badge">Active</span>
          </div>
          <p className="text-secondary" style={{ fontSize: "14px", marginBottom: "20px", lineHeight: "1.6" }}>
            Interrogating translation initiation complexes to uncover selective drug targets that neutralize Giardia lamblia without harming host cells.
          </p>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "13px", color: "var(--amazon-text-muted)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Methodology</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="amazon-list-bullet">Affinity chromatography pull-down assays</li>
              <li className="amazon-list-bullet">Protein interaction mapping (GleIF4E2 ↔ GleIF2B)</li>
              <li className="amazon-list-bullet">Target-driven molecular modelling</li>
            </ul>
          </div>
          <div className="amazon-card" style={{ background: "var(--amazon-bg-base)" }}>
            <p style={{ fontSize: "12px", color: "var(--amazon-text-muted)", marginBottom: "8px", textTransform: "uppercase" }}>Impact</p>
            <p className="text-secondary" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              Aiming to deliver therapeutics that are both parasite-specific and clinically deployable, reducing collateral damage often associated with antiparasitic agents.
            </p>
          </div>
        </div>
      </div>

      {/* Past Research */}
      <div className="amazon-section">
        <h2 className="amazon-section-title">Past Research</h2>
        <div className="amazon-grid amazon-grid-2">
          <div className="amazon-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
              <h3>Protein Interaction Topology</h3>
              <span className="amazon-badge">Research</span>
            </div>
            <p className="text-muted" style={{ fontSize: "13px", marginBottom: "16px", lineHeight: "1.5" }}>
              Decoding the structural relationship between GleIF4E2 and GleIF2B to chart how parasite translation machinery diverges from human pathways.
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="amazon-list-bullet">Site-directed mutagenesis</li>
              <li className="amazon-list-bullet">Affinity purification</li>
              <li className="amazon-list-bullet">Molecular dynamics validation</li>
            </ul>
          </div>

          <div className="amazon-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
              <h3>Laboratory Systems</h3>
              <span className="amazon-badge">Operational</span>
            </div>
            <p className="text-muted" style={{ fontSize: "13px", marginBottom: "16px", lineHeight: "1.5" }}>
              Elevating blood bank reliability by designing resilient workflows that sustain quality control and rapid decision-making.
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="amazon-list-bullet">Advanced cross-matching protocols</li>
              <li className="amazon-list-bullet">Analyzer automation</li>
              <li className="amazon-list-bullet">Batch antigen screening</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Techniques */}
      <div className="amazon-section">
        <h2 className="amazon-section-title">Methodological Expertise</h2>
        <div className="amazon-grid amazon-grid-4">
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px", fontSize: "15px" }}>Affinity Chromatography</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Tailored purification protocols maintaining molecular integrity
            </p>
          </div>
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px", fontSize: "15px" }}>Gel Diagnostics</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Column and tube methodologies for antibody identification
            </p>
          </div>
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px", fontSize: "15px" }}>Automated Analysis</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Ortho Vision Swift analyzer workflow orchestration
            </p>
          </div>
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px", fontSize: "15px" }}>Data Storytelling</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Translating laboratory data into actionable narratives
            </p>
          </div>
        </div>
      </div>

      <div className="amazon-card" style={{ textAlign: "center", padding: "32px" }}>
        <p className="text-secondary" style={{ fontSize: "14px", marginBottom: "20px" }}>
          Interested in collaborating on biomedical research or discussing these projects?
        </p>
        <Link href="/contact" className="amazon-button-primary amazon-button">
          Contact Francis
        </Link>
      </div>
    </div>
  );
}

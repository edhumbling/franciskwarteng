export default function EssaysPage() {
  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <div className="amazon-section-header" style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>Essays & Blogs</h1>
        <p className="text-muted" style={{ fontSize: "14px", maxWidth: "800px" }}>
          Scientific essays and perspectives on biomedical research, laboratory techniques, and career insights
        </p>
      </div>

      <div className="amazon-card-elevated" style={{ textAlign: "center", padding: "60px 40px" }}>
        <h2 style={{ marginBottom: "16px" }}>Coming Soon</h2>
        <p className="text-secondary" style={{ fontSize: "14px", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          Francis is crafting a collection of immersive essays that traverse parasitology, diagnostics, and human-centered laboratory leadership.
        </p>
      </div>

      <div className="amazon-section">
        <h2 className="amazon-section-title">Forthcoming Essays</h2>
        <div className="amazon-grid amazon-grid-3">
          <div className="amazon-card">
            <span className="amazon-badge" style={{ marginBottom: "12px" }}>In Development</span>
            <h3 style={{ marginBottom: "12px" }}>Decoding Parasite Translation</h3>
            <p className="text-muted" style={{ fontSize: "13px", marginBottom: "16px", lineHeight: "1.5" }}>
              An exploration of why Giardia lamblia&apos;s translation initiation machinery holds the key to selective therapeutic design.
            </p>
            <div>
              <p style={{ fontSize: "11px", color: "var(--amazon-text-muted)", marginBottom: "8px", textTransform: "uppercase" }}>Key Topics</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li className="amazon-list-bullet">Comparative molecular architecture</li>
                <li className="amazon-list-bullet">Targetable residues</li>
                <li className="amazon-list-bullet">Clinical implications</li>
              </ul>
            </div>
          </div>

          <div className="amazon-card">
            <span className="amazon-badge" style={{ marginBottom: "12px" }}>In Development</span>
            <h3 style={{ marginBottom: "12px" }}>The Art of Diagnostic Stewardship</h3>
            <p className="text-muted" style={{ fontSize: "13px", marginBottom: "16px", lineHeight: "1.5" }}>
              A manifesto on protecting patient safety through disciplined blood bank operations and compassionate judgement.
            </p>
            <div>
              <p style={{ fontSize: "11px", color: "var(--amazon-text-muted)", marginBottom: "8px", textTransform: "uppercase" }}>Key Topics</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li className="amazon-list-bullet">Stories from cross-matching</li>
                <li className="amazon-list-bullet">Speed meets scrutiny</li>
                <li className="amazon-list-bullet">Crisis workflows</li>
              </ul>
            </div>
          </div>

          <div className="amazon-card">
            <span className="amazon-badge" style={{ marginBottom: "12px" }}>In Development</span>
            <h3 style={{ marginBottom: "12px" }}>Mentorship Under the Microscope</h3>
            <p className="text-muted" style={{ fontSize: "13px", marginBottom: "16px", lineHeight: "1.5" }}>
              Lessons from guiding future scientists to think critically while retaining empathy inside high-stakes laboratory environments.
            </p>
            <div>
              <p style={{ fontSize: "11px", color: "var(--amazon-text-muted)", marginBottom: "8px", textTransform: "uppercase" }}>Key Topics</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li className="amazon-list-bullet">Cultivating curiosity</li>
                <li className="amazon-list-bullet">Laboratories as classrooms</li>
                <li className="amazon-list-bullet">Beyond the assay</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="amazon-section">
        <h2 className="amazon-section-title">Stay Updated</h2>
        <div className="amazon-card">
          <p className="text-secondary" style={{ fontSize: "14px", marginBottom: "20px", lineHeight: "1.6" }}>
            Sign up to be notified when new essays publish. Expect depth, elegance, and applied wisdom at the intersection of laboratory exactitude and human-centered design.
          </p>
          <form style={{ display: "grid", gap: "12px", maxWidth: "500px" }}>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="amazon-input" 
              required 
            />
            <button type="submit" className="amazon-button-primary amazon-button">
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="amazon-card-elevated" style={{ marginBottom: "40px", padding: "40px" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "200px 1fr", 
          gap: "32px", 
          alignItems: "start" 
        }} className="about-header-responsive">
          <div style={{ 
            position: "relative", 
            width: "200px", 
            height: "200px", 
            borderRadius: "8px", 
            overflow: "hidden" 
          }}>
            <Image src="/photo.jpeg" alt="Francis Kwarteng" fill className="object-cover" />
          </div>
          <div>
            <div className="amazon-badge" style={{ marginBottom: "12px" }}>Biomedical Scientist</div>
            <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>Francis Kwarteng</h1>
            <p className="text-secondary" style={{ fontSize: "16px", marginBottom: "16px" }}>
              BS MLS (ASCPi), MS | NYS Licensed Clinical Laboratory Technologist
            </p>
            <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
              Biomedical Scientist operating at the intersection of molecular parasitology, advanced laboratory science, and clinical diagnostics. Focused on precision diagnostics and translational breakthroughs.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="amazon-section">
        <div className="amazon-section-header">
          <h2 className="amazon-section-title">Professional Summary</h2>
        </div>
        <div className="amazon-card">
          <p className="text-secondary" style={{ fontSize: "14px", marginBottom: "16px", lineHeight: "1.6" }}>
            Highly motivated to make the world a better place through disease elimination and control. Hard-working, diligent and results-oriented individual with extensive experience in medical laboratory science and biomedical research.
          </p>
          <p className="text-secondary" style={{ fontSize: "14px", lineHeight: "1.6" }}>
            My current project involves the use of affinity chromatography pull-down assay to characterize the protein-protein interaction in translation initiation of the parasite Giardia lamblia. By understanding the molecular mechanism of translation initiation of the parasite, I may find a drug target selectively toxic to the parasite.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="amazon-section">
        <div className="amazon-section-header">
          <h2 className="amazon-section-title">Professional Experience</h2>
        </div>
        <div className="amazon-timeline">
          <div className="amazon-timeline-item">
            <div className="amazon-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                <div>
                  <h3>NYU Langone Health</h3>
                  <p className="text-accent" style={{ fontSize: "14px" }}>Blood Bank Technologist</p>
                </div>
                <span className="amazon-badge">Oct 2024 - Present</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li className="amazon-list-bullet">Skilled in blood typing, cross-matching, and antibody screening</li>
                <li className="amazon-list-bullet">Operating advanced laboratory equipment</li>
                <li className="amazon-list-bullet">Ensuring compliance with regulatory standards</li>
                <li className="amazon-list-bullet">Troubleshooting technical issues</li>
              </ul>
            </div>
          </div>

          <div className="amazon-timeline-item">
            <div className="amazon-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                <div>
                  <h3>Westchester Medical Center</h3>
                  <p className="text-accent" style={{ fontSize: "14px" }}>Medical Laboratory Scientist II</p>
                </div>
                <span className="amazon-badge">Jan 2024 - Jul 2024</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li className="amazon-list-bullet">Performed ABO/RH, DAT, IAT and antibody identification</li>
                <li className="amazon-list-bullet">Issued compatible blood products</li>
                <li className="amazon-list-bullet">Operated Ortho Vision Swift Analyzer</li>
              </ul>
            </div>
          </div>

          <div className="amazon-timeline-item">
            <div className="amazon-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                <div>
                  <h3>University of Louisiana Monroe</h3>
                  <p className="text-accent" style={{ fontSize: "14px" }}>Graduate Research Assistant</p>
                </div>
                <span className="amazon-badge">Jan 2021 - May 2023</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li className="amazon-list-bullet">Demonstrated GleIF4E2 interacts with GleIF2B</li>
                <li className="amazon-list-bullet">Identified amino residues required for binding</li>
                <li className="amazon-list-bullet">Optimized affinity purification protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="amazon-section">
        <div className="amazon-section-header">
          <h2 className="amazon-section-title">Education</h2>
        </div>
        <div className="amazon-grid amazon-grid-2">
          <div className="amazon-card">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <h3>Master of Science (MS)</h3>
              <span className="text-muted" style={{ fontSize: "13px" }}>2020 - 2023</span>
            </div>
            <p className="text-accent" style={{ fontSize: "14px", marginBottom: "8px" }}>
              Biology/Biological Sciences
            </p>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              University of Louisiana at Monroe
            </p>
          </div>
          <div className="amazon-card">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <h3>Bachelor of Science (BS)</h3>
              <span className="text-muted" style={{ fontSize: "13px" }}>2015 - 2019</span>
            </div>
            <p className="text-accent" style={{ fontSize: "14px", marginBottom: "8px" }}>
              Medical Laboratory Science
            </p>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              University of Cape Coast
            </p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="amazon-section">
        <div className="amazon-section-header">
          <h2 className="amazon-section-title">Certifications & Credentials</h2>
        </div>
        <div className="amazon-grid amazon-grid-3">
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px" }}>BS MLS (ASCPi)</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              International Medical Laboratory Science credential
            </p>
          </div>
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px" }}>Clinical Laboratory Scientist</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              License #092
            </p>
          </div>
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px" }}>NYS Licensed CLT</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              New York State Clinical Laboratory Technologist
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="amazon-section">
        <div className="amazon-section-header">
          <h2 className="amazon-section-title">Top Skills</h2>
        </div>
        <div className="amazon-card">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <span className="amazon-badge">Aseptic Technique</span>
            <span className="amazon-badge">Bacterial Cell Culture</span>
            <span className="amazon-badge">Translational Research</span>
            <span className="amazon-badge">Blood Banking</span>
            <span className="amazon-badge">Quality Control</span>
            <span className="amazon-badge">Laboratory Equipment</span>
            <span className="amazon-badge">Protein Purification</span>
            <span className="amazon-badge">Molecular Biology</span>
          </div>
        </div>
      </div>
    </div>
  );
}

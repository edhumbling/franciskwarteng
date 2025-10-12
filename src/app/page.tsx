import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImages = [
    { src: "https://ik.imagekit.io/humbling/38d5577a-97f7-4455-b601-ae90e1c05fe6.png", alt: "Laboratory instrumentation montage" },
    { src: "https://ik.imagekit.io/humbling/78bd19d5-9fd3-49ee-9e92-d796d2906886.png", alt: "Clinical diagnostics workflow" },
    { src: "https://ik.imagekit.io/humbling/596e0af0-eced-4228-9153-ba5dec3ec174.png", alt: "Microscopy research collage" },
    { src: "https://ik.imagekit.io/humbling/0d3a9746-2bc4-4e35-9545-4606d6e79fb0.png", alt: "Biomedical innovation visuals" },
    { src: "https://ik.imagekit.io/humbling/d01cc8f4-1142-4c34-93b2-62dddc0640ed.png", alt: "Molecular analytics interface" },
    { src: "https://ik.imagekit.io/humbling/c5c8b27f-2b3e-45c5-87a3-b29cf372092d.png", alt: "Genomic sequencing concept" },
    { src: "https://ik.imagekit.io/humbling/a90d922f-a4e1-4f26-a30c-7d1cc93dc763.png", alt: "Precision medicine dashboard" },
    { src: "https://ik.imagekit.io/humbling/a90d922f-a4e1-4f26-a30c-7d1cc93dc763.png", alt: "Precision medicine dashboard detail" },
    { src: "https://ik.imagekit.io/humbling/f8ad32d4-ab8c-4f96-a665-4e7d264a7339.png", alt: "Clinical data synergy" },
    { src: "https://ik.imagekit.io/humbling/d9ed33a2-aa00-4591-87ca-6029afbb7e92.png", alt: "Translational research pipeline" }
  ];

  const stats = [
    {
      value: '1.2K+',
      label: 'Critical Transfusions Safeguarded',
      background: "https://ik.imagekit.io/humbling/aaf6a897-aa61-4aa6-946d-75467ec3d28f.png"
    },
    {
      value: '7',
      label: 'Research Discoveries',
      background: "https://ik.imagekit.io/humbling/4d195c4b-0b7f-40b7-9c6c-c9c629d35ebd.png"
    },
    {
      value: '20+',
      label: 'Lab Techniques Optimized',
      background: "https://ik.imagekit.io/humbling/8c6dfb86-1cfd-41cf-8b46-d0b466e59640.png"
    }
  ];

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
              <Link href="/research" className="amazon-button-primary amazon-button">
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

      {/* Hero Carousel */}
      <div className="hero-carousel-wrapper">
        <div className="hero-carousel-track">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div className="hero-carousel-segment" key={dup}>
              {heroImages.map(({ src, alt }, index) => (
                <a
                  key={`${dup}-${index}`}
                  href={src}
            target="_blank"
            rel="noopener noreferrer"
                  className="hero-carousel-item"
                >
                  <img src={src} alt={alt} loading="lazy" />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="amazon-grid amazon-grid-3" style={{ marginBottom: "40px" }}>
        {stats.map(({ value, label, background }) => (
          <div
            key={label}
            className="stat-card"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="stat-card-overlay"></div>
            <div className="stat-card-content">
              <span className="amazon-stat-value">{value}</span>
              <span className="amazon-stat-label">{label}</span>
            </div>
          </div>
        ))}
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
          <Link href="/research" className="amazon-button">
            Explore Research Publications →
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

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImages = [
    { src: "https://ik.imagekit.io/humbling/38d5577a-97f7-4455-b601-ae90e1c05fe6.png", alt: "Laboratory instrumentation montage showing advanced biomedical research equipment" },
    { src: "https://ik.imagekit.io/humbling/78bd19d5-9fd3-49ee-9e92-d796d2906886.png", alt: "Clinical diagnostics workflow demonstrating blood bank laboratory procedures" },
    { src: "https://ik.imagekit.io/humbling/596e0af0-eced-4228-9153-ba5dec3ec174.png", alt: "Microscopy research collage featuring cellular analysis and molecular studies" },
    { src: "https://ik.imagekit.io/humbling/0d3a9746-2bc4-4e35-9545-4606d6e79fb0.png", alt: "Biomedical innovation visuals representing cutting-edge research technologies" },
    { src: "https://ik.imagekit.io/humbling/d01cc8f4-1142-4c34-93b2-62dddc0640ed.png", alt: "Molecular analytics interface displaying protein interaction data" },
    { src: "https://ik.imagekit.io/humbling/c5c8b27f-2b3e-45c5-87a3-b29cf372092d.png", alt: "Genomic sequencing concept illustrating DNA analysis techniques" },
    { src: "https://ik.imagekit.io/humbling/a90d922f-a4e1-4f26-a30c-7d1cc93dc763.png", alt: "Precision medicine dashboard showing personalized healthcare analytics" },
    { src: "https://ik.imagekit.io/humbling/a90d922f-a4e1-4f26-a30c-7d1cc93dc763.png", alt: "Precision medicine dashboard detail view of clinical decision support" },
    { src: "https://ik.imagekit.io/humbling/f8ad32d4-ab8c-4f96-a665-4e7d264a7339.png", alt: "Clinical data synergy representing integrated healthcare information systems" },
    { src: "https://ik.imagekit.io/humbling/d9ed33a2-aa00-4591-87ca-6029afbb7e92.png", alt: "Translational research pipeline from laboratory discovery to clinical application" }
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
    <main>
      {/* Hero Section */}
      <section className="amazon-card-elevated" style={{ marginBottom: "40px", padding: "40px" }} aria-labelledby="hero-heading">
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 300px", 
          gap: "40px", 
          alignItems: "center" 
        }} className="hero-grid-responsive">
          <div>
            <div className="amazon-badge" style={{ marginBottom: "16px" }}>Biomedical Scientist</div>
            <h1 id="hero-heading" style={{ fontSize: "36px", marginBottom: "16px" }}>Francis Kwarteng</h1>
            <p className="text-secondary" style={{ fontSize: "16px", marginBottom: "20px", lineHeight: "1.6" }}>
              BS MLS (ASCPi), MS | New York State Licensed Clinical Laboratory Technologist
            </p>
            <p className="text-muted" style={{ fontSize: "14px", marginBottom: "24px", lineHeight: "1.6" }}>
              Biomedical Scientist focused on elucidating molecular mechanisms of physiological and pathological pathways with the aim of finding novel treatments for both infectious and metabolic diseases.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/research" className="amazon-button-primary amazon-button" aria-label="View Francis Kwarteng's research projects and publications">
                View Research
              </Link>
              <Link href="/contact" className="amazon-button" aria-label="Contact Francis Kwarteng for collaboration opportunities">
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
              <Image 
                src="/photo.jpeg" 
                alt="Francis Kwarteng - Biomedical Scientist and Blood Bank Technologist at NYU Langone Health" 
                fill 
                className="object-cover" 
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Carousel */}
      <section className="hero-carousel-wrapper" aria-label="Research and laboratory work gallery">
        <div className="hero-carousel-track">
          {heroImages.concat(heroImages).map(({ src, alt }, index) => (
            <a
              key={index}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-carousel-card"
              aria-label={`View full size: ${alt}`}
            >
              <img src={src} alt={alt} loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="amazon-grid amazon-grid-3" style={{ marginBottom: "40px" }} aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Professional Achievements</h2>
        {stats.map(({ value, label, background }) => (
          <article
            key={label}
            className="stat-card"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="stat-card-overlay"></div>
            <div className="stat-card-content">
              <span className="amazon-stat-value">{value}</span>
              <span className="amazon-stat-label">{label}</span>
            </div>
          </article>
        ))}
      </section>

      {/* Current Position */}
      <section className="amazon-section" aria-labelledby="current-position-heading">
        <div className="amazon-section-header">
          <h2 id="current-position-heading" className="amazon-section-title">Current Position</h2>
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
      </section>

      {/* Research Focus */}
      <section className="amazon-section" aria-labelledby="research-focus-heading">
        <div className="amazon-section-header">
          <h2 id="research-focus-heading" className="amazon-section-title">Research Focus</h2>
          <p className="amazon-section-description">
            Investigating protein-protein interactions in Giardia lamblia
          </p>
        </div>
        <div className="amazon-card">
          <p className="text-secondary" style={{ fontSize: "14px", marginBottom: "20px", lineHeight: "1.6" }}>
            My current project involves the use of affinity chromatography pull-down assay to characterize the protein-protein interaction in translation initiation of the parasite Giardia lamblia. By understanding the molecular mechanism of translation initiation of the parasite, I may find a drug target selectively toxic to the parasite.
          </p>
          <Link href="/research" className="amazon-button" aria-label="Explore Francis Kwarteng's research publications and methodologies">
            Explore Research Publications →
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section className="amazon-section" aria-labelledby="skills-heading">
        <div className="amazon-section-header">
          <h2 id="skills-heading" className="amazon-section-title">Key Skills</h2>
        </div>
        <div className="amazon-grid amazon-grid-3">
          <article className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px" }}>Aseptic Technique</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Advanced sterile procedures for laboratory operations
            </p>
          </article>
          <article className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px" }}>Bacterial Cell Culture</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Expert cultivation and maintenance of bacterial cultures
            </p>
          </article>
          <article className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "8px" }}>Translational Research</h3>
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Bridging laboratory discoveries to clinical applications
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="amazon-card-elevated" style={{ textAlign: "center", padding: "40px" }} aria-labelledby="cta-heading">
        <h2 id="cta-heading" style={{ marginBottom: "12px" }}>Ready to Collaborate?</h2>
        <p className="text-muted" style={{ marginBottom: "24px", fontSize: "14px" }}>
          Interested in biomedical research partnerships or discussing laboratory science? Let&apos;s connect.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Link href="/contact" className="amazon-button-primary amazon-button" aria-label="Contact Francis Kwarteng for professional collaboration">
            Contact Francis
          </Link>
          <Link href="mailto:kwartengfo@warhawks.ulm.edu" className="amazon-button" aria-label="Send email to Francis Kwarteng">
            Send Email
          </Link>
        </div>
      </section>
    </main>
  );
}

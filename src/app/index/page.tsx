import Link from 'next/link';

export default function IndexPage() {
  const pages = [
    {
      title: "Home",
      description: "Overview of Francis's mission, impact, and current initiatives",
      href: "/",
      sections: ["Hero", "Stats", "Current Position", "Research Focus"],
    },
    {
      title: "About",
      description: "Biography, philosophy, experience timeline, and credentials",
      href: "/about",
      sections: ["Summary", "Experience", "Education", "Certifications"],
    },
    {
      title: "Projects",
      description: "In-depth look at ongoing research and laboratory innovations",
      href: "/projects",
      sections: ["Current Research", "Past Research", "Methodologies"],
    },
    {
      title: "Essays",
      description: "Thought leadership bridging science, design, and education",
      href: "/essays",
      sections: ["Forthcoming Essays", "Newsletter Signup"],
    },
    {
      title: "Contact",
      description: "Collaboration pathways and communication channels",
      href: "/contact",
      sections: ["Email", "LinkedIn", "Opportunities", "Location"],
    },
  ];

  return (
    <div>
      <div className="amazon-section-header" style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>Website Index</h1>
        <p className="text-muted" style={{ fontSize: "14px", maxWidth: "800px" }}>
          Complete navigation and overview of all website sections for Francis Kwarteng
        </p>
      </div>

      <div className="amazon-section">
        <h2 className="amazon-section-title">Main Pages</h2>
        <div className="amazon-grid amazon-grid-2">
          {pages.map((page) => (
            <div key={page.title} className="amazon-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                <h3>{page.title}</h3>
                <span className="amazon-badge">Primary</span>
              </div>
              <p className="text-muted" style={{ fontSize: "13px", marginBottom: "16px", lineHeight: "1.5" }}>
                {page.description}
              </p>
              <div style={{ marginBottom: "16px" }}>
                <p style={{ fontSize: "11px", color: "var(--amazon-text-muted)", marginBottom: "8px", textTransform: "uppercase" }}>Highlights</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {page.sections.map((section) => (
                    <span key={section} className="amazon-badge" style={{ fontSize: "10px" }}>
                      {section}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={page.href} className="amazon-button">
                Visit Page →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="amazon-section">
        <h2 className="amazon-section-title">Resources</h2>
        <div className="amazon-grid amazon-grid-3">
          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "12px" }}>Sitemap</h3>
            <p className="text-muted" style={{ fontSize: "13px", marginBottom: "12px" }}>
              XML blueprint for search engines and structured navigation
            </p>
            <Link href="/sitemap.xml" className="text-accent" style={{ fontSize: "13px" }}>
              Open sitemap.xml →
            </Link>
          </div>

          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "12px" }}>LLM Overview</h3>
            <p className="text-muted" style={{ fontSize: "13px", marginBottom: "12px" }}>
              Human-readable synopsis for AI systems
            </p>
            <Link href="/llm.txt" className="text-accent" style={{ fontSize: "13px" }}>
              Open llm.txt →
            </Link>
          </div>

          <div className="amazon-card">
            <h3 style={{ color: "var(--amazon-accent)", marginBottom: "12px" }}>AI Metadata</h3>
            <p className="text-muted" style={{ fontSize: "13px", marginBottom: "12px" }}>
              Machine-readable JSON capturing credentials and structure
            </p>
            <Link href="/ai-metadata.json" className="text-accent" style={{ fontSize: "13px" }}>
              Open ai-metadata.json →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

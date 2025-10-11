import Link from 'next/link';

export default function SitemapPage() {
  const structure = [
    {
      group: "Main Pages",
      items: [
        { href: "/", label: "Home", description: "Experience overview" },
        { href: "/about", label: "About", description: "Biography & credentials" },
        { href: "/projects", label: "Projects", description: "Research pipeline" },
        { href: "/essays", label: "Essays", description: "Thought leadership" },
        { href: "/contact", label: "Contact", description: "Collaboration pathways" },
        { href: "/index", label: "Index", description: "Navigation hub" },
      ],
    },
    {
      group: "Resources",
      items: [
        { href: "/sitemap", label: "Site Map", description: "Current page" },
        { href: "/sitemap.xml", label: "Sitemap XML", description: "Search engine map" },
        { href: "/llm.txt", label: "LLM Overview", description: "AI-friendly summary" },
        { href: "/ai-metadata.json", label: "AI Metadata", description: "Structured data" },
      ],
    },
  ];

  const quickAccess = [
    { href: "/about#experience", label: "Experience Timeline" },
    { href: "/projects#current", label: "Active Research" },
    { href: "/contact", label: "Collaboration Modes" },
    { href: "/essays", label: "Newsletter" },
  ];

  return (
    <div>
      <div className="amazon-section-header" style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>Site Map</h1>
        <p className="text-muted" style={{ fontSize: "14px", maxWidth: "800px" }}>
          Complete website structure and navigation guide for Francis Kwarteng&apos;s website
        </p>
      </div>

      <div className="amazon-section">
        <h2 className="amazon-section-title">Website Structure</h2>
        <div className="amazon-grid amazon-grid-2">
          {structure.map((section) => (
            <div key={section.group} className="amazon-card">
              <h3 style={{ marginBottom: "16px" }}>{section.group}</h3>
              <ul className="amazon-list">
                {section.items.map((item) => (
                  <li key={item.href} className="amazon-list-item">
                    <Link href={item.href} className="text-accent" style={{ fontSize: "14px", display: "block", marginBottom: "4px" }}>
                      {item.label}
                    </Link>
                    <span className="text-muted" style={{ fontSize: "12px" }}>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="amazon-section">
        <h2 className="amazon-section-title">Quick Access</h2>
        <div className="amazon-grid amazon-grid-4">
          {quickAccess.map((item) => (
            <div key={item.href} className="amazon-card">
              <Link href={item.href} className="text-accent" style={{ fontSize: "14px", fontWeight: 500 }}>
                {item.label} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

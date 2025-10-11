import SectionHeading from "../../components/SectionHeading";
import HighlightCard from "../../components/HighlightCard";

const structure = [
  {
    group: "Main",
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
  { href: "/projects#pipeline", label: "Active Research" },
  { href: "/contact#opportunities", label: "Collaboration Modes" },
  { href: "/essays#newsletter", label: "Newsletter" },
];

export default function SitemapPage() {
  return (
    <div className="space-y-16">
      <section className="glass-panel rounded-[2.5rem] p-10">
        <SectionHeading
          eyebrow="Site Map"
          title="Illuminated navigation"
          description="A glass-clear view of the entire experience so you can traverse flawlessly."
          align="left"
        />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Structure"
          title="Pages & resources"
          description="Explore each realm—precision crafted, glass-encased, and purpose-driven."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {structure.map((section) => (
            <div key={section.group} className="glass-panel rounded-3xl p-8">
              <h2 className="text-xl font-semibold text-white md:text-2xl">{section.group}</h2>
              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li key={item.href} className="flex flex-col border-b border-[rgba(94,234,212,0.1)] pb-3 last:border-b-0 last:pb-0">
                    <a
                      className="text-sm text-[rgba(94,234,212,0.95)] transition hover:text-[rgba(20,184,166,1)]"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                    <span className="text-xs text-soft">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Quick Access"
          title="Frequently visited destinations"
          description="Direct pathways into the heart of Francis&apos; scientific experience."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quickAccess.map((item) => (
            <HighlightCard key={item.href} title={item.label} icon="→">
              <a className="mt-2 inline-block text-sm text-[rgba(94,234,212,0.95)]" href={item.href}>
                Enter →
              </a>
            </HighlightCard>
          ))}
        </div>
      </section>
    </div>
  );
}

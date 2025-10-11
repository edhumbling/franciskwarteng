import SectionHeading from "../../components/SectionHeading";
import HighlightCard from "../../components/HighlightCard";

const pages = [
  {
    title: "Home",
    description: "Premium overview of Francis&apos; mission, impact, and current initiatives.",
    href: "/",
    sections: ["Impact Snapshot", "Expertise", "Collaboration"],
  },
  {
    title: "About",
    description: "Biography, philosophy, experience timeline, certifications, and education.",
    href: "/about",
    sections: ["Philosophy", "Experience", "Credentials"],
  },
  {
    title: "Projects",
    description: "In-depth look at ongoing research and laboratory system innovations.",
    href: "/projects",
    sections: ["Pipeline", "Methodology"],
  },
  {
    title: "Essays",
    description: "Emerging thought leadership bridging science, design, and education.",
    href: "/essays",
    sections: ["Forthcoming Essays", "Newsletter"],
  },
  {
    title: "Contact",
    description: "Collaboration pathways, communication channels, and regional availability.",
    href: "/contact",
    sections: ["Opportunities", "Presence"],
  },
  {
    title: "Site Map",
    description: "Structured navigation map for the entire experience ecosystem.",
    href: "/sitemap",
    sections: ["Site Structure", "Quick Access"],
  },
];

export default function IndexPage() {
  return (
    <div className="space-y-16">
      <section className="glass-panel rounded-[2.5rem] p-10">
        <SectionHeading
          eyebrow="Index"
          title="Navigate the glass experience"
          description="This index acts as your illuminated guide, revealing every page, section, and the purpose it serves."
          align="left"
        />
        <p className="mt-6 text-sm text-soft md:text-base">
          Whether you&apos;re here to understand Francis&apos; laboratory philosophy, dive into active research, or connect directly, the index ensures you never lose orientation.
        </p>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Pages"
          title="Core experiences"
          description="Each page is intentionally crafted to feel immersive, precise, and aligned with the dark glass aesthetic."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <div key={page.title} className="glass-panel rounded-3xl p-8">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-white">{page.title}</h2>
                <span className="tag-pill text-[0.68rem]">Primary</span>
              </div>
              <p className="mt-4 text-sm text-soft md:text-base">{page.description}</p>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[rgba(148,163,184,0.78)]">Highlights</p>
                <ul className="mt-2 space-y-2 text-sm text-soft">
                  {page.sections.map((section) => (
                    <li key={section} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[rgba(94,234,212,0.8)]" aria-hidden />
                      <span>{section}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                className="mt-6 inline-block text-sm text-[rgba(94,234,212,0.95)] transition hover:text-[rgba(20,184,166,1)]"
                href={page.href}
              >
                Visit Page →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Resources"
          title="Extended references"
          description="Supporting files curated for search engines, large language models, and collaborators." align="left"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <HighlightCard title="Sitemap" icon="◆">
            <p>XML blueprint of the experience for search engines and structured navigation.</p>
            <a className="mt-4 inline-block text-sm text-[rgba(94,234,212,0.95)]" href="/sitemap.xml">
              Open sitemap.xml →
            </a>
          </HighlightCard>
          <HighlightCard title="LLM Overview" icon="✶" variant="accent">
            <p>Human-readable synopsis to help AI systems contextualise Francis&apos; expertise.</p>
            <a className="mt-4 inline-block text-sm text-[rgba(94,234,212,0.95)]" href="/llm.txt">
              Open llm.txt →
            </a>
          </HighlightCard>
          <HighlightCard title="AI Metadata" icon="⚙">
            <p>Machine-readable JSON capturing credentials, research focus, and structure.</p>
            <a className="mt-4 inline-block text-sm text-[rgba(94,234,212,0.95)]" href="/ai-metadata.json">
              Open ai-metadata.json →
            </a>
          </HighlightCard>
        </div>
      </section>
    </div>
  );
}

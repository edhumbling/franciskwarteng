import Link from "next/link";

const footerLinks = [
  {
    title: "Navigation",
    items: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/essays", label: "Essays" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { href: "/index", label: "Website Index" },
      { href: "/sitemap", label: "Site Map" },
      { href: "/llm.txt", label: "LLM Overview" },
      { href: "/ai-metadata.json", label: "AI Metadata" },
    ],
  },
  {
    title: "Connect",
    items: [
      { href: "mailto:kwartengfo@warhawks.ulm.edu", label: "Email" },
      {
        href: "https://www.linkedin.com/in/franciskwarteng-8711bb1ab",
        label: "LinkedIn",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-[rgba(94,234,212,0.25)]/40">
      <div className="blur-blob" data-position="bottom" aria-hidden />
      <div className="main-container">
        <div className="glass-panel mt-[-3rem] rounded-3xl px-8 py-10">
          <div className="grid gap-10 lg:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="section-heading mb-4 text-xs text-soft">
                  {section.title}
                </p>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-[rgba(226,232,240,0.85)] transition-colors hover:text-[rgba(94,234,212,0.95)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="section-heading mb-4 text-xs text-soft">Signature</p>
              <p className="text-lg font-medium text-white">
                Dedicated to advancing biomedical science through precision, vision, and relentless curiosity.
              </p>
            </div>
          </div>
          <div className="glass-divider my-8" aria-hidden />
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-soft md:flex-row">
            <span>© {new Date().getFullYear()} Francis Kwarteng. All rights reserved.</span>
            <span>Crafted with a glassmorphic aesthetic for modern scientific storytelling.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

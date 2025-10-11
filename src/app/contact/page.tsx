import Link from "next/link";
import SectionHeading from "../../components/SectionHeading";
import HighlightCard from "../../components/HighlightCard";

const channels = [
  {
    title: "Direct Email",
    icon: "✉",
    value: "kwartengfo@warhawks.ulm.edu",
    description: "For research collaborations, speaking engagements, or laboratory consulting.",
    href: "mailto:kwartengfo@warhawks.ulm.edu",
  },
  {
    title: "LinkedIn",
    icon: "in",
    value: "linkedin.com/in/franciskwarteng-8711bb1ab",
    description: "Connect to follow Francis&apos; biomedical projects and professional milestones.",
    href: "https://www.linkedin.com/in/franciskwarteng-8711bb1ab",
  },
];

const collaboration = [
  {
    title: "Biomedical Research Partnerships",
    details: "Collaborate on translational parasitology, protein dynamics, and diagnostic innovation.",
  },
  {
    title: "Clinical Laboratory Optimisation",
    details: "Design resilient blood bank workflows and quality systems grounded in regulatory excellence.",
  },
  {
    title: "Educational Engagements",
    details: "Curate workshops and lectures that make complex science accessible and actionable.",
  },
  {
    title: "Thought Leadership",
    details: "Co-create essays, panels, and publications that illuminate the next frontier of laboratory science.",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="glass-panel rounded-[2.5rem] p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s craft luminous science together"
          description="Reach out to co-create research, clinical excellence, or educational experiences that leave a lasting impact."
          align="left"
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {channels.map((channel) => (
          <div key={channel.title} className="glass-panel rounded-3xl p-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl text-[rgba(94,234,212,0.95)]">{channel.icon}</span>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">{channel.title}</h2>
            </div>
            <Link
              href={channel.href}
              className="mt-5 block text-lg text-[rgba(94,234,212,0.95)] transition hover:text-[rgba(20,184,166,1)]"
            >
              {channel.value}
            </Link>
            <p className="mt-3 text-sm text-soft md:text-base">{channel.description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Opportunities"
          title="Areas of collaboration"
          description="Francis approaches every partnership with glass-like transparency, depth, and polish."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {collaboration.map((item) => (
            <HighlightCard key={item.title} title={item.title} icon="◆">
              <p>{item.details}</p>
            </HighlightCard>
          ))}
        </div>
      </section>

      <section className="glass-panel rounded-3xl p-8">
        <SectionHeading
          eyebrow="Presence"
          title="Based in Bronx, New York"
          description="Serving institutions globally with a grounding in New York&apos;s medical excellence."
          align="left"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <HighlightCard title="Time Zone" icon="🕒">
            <p>Eastern Time (ET) · Flexible scheduling for international collaborations</p>
          </HighlightCard>
          <HighlightCard title="Primary Institution" icon="🏥" variant="accent">
            <p>NYU Langone Health · Blood Bank Technologist</p>
          </HighlightCard>
        </div>
      </section>
    </div>
  );
}

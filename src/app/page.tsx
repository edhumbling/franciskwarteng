'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../components/SectionHeading';
import HighlightCard from '../components/HighlightCard';
import StatisticCluster from '../components/StatisticCluster';

const recentHighlights = [
  {
    title: 'Current Research',
    description:
      'Decoding translation initiation in Giardia lamblia to unveil selective therapeutic targets that spare human cells while neutralising parasites.',
    href: '/projects',
  },
  {
    title: 'Precision Diagnostics',
    description:
      'Delivering critical blood bank decisions at NYU Langone Health with rigorous cross-matching and antibody profiling.',
    href: '/about#experience',
  },
  {
    title: 'Scientific Narrative',
    description:
      'Articulating complex biomedical discoveries with clarity to empower collaboration and translational breakthroughs.',
    href: '/essays',
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[2rem] bg-[rgba(6,12,24,0.65)] p-8 md:p-12">
        <div className="absolute inset-x-[-20%] top-[-60%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.22),transparent_60%)] blur-[80px]" aria-hidden />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="lg:w-1/2 space-y-6">
            <span className="tag-pill w-max">Biomedical Scientist</span>
            <h1 className="text-4xl font-semibold text-white md:text-6xl">
              Advancing molecular medicine through precision laboratory science.
            </h1>
            <p className="text-soft md:text-lg">
              Francis Kwarteng unites rigorous bench science with clinical stewardship, charting pathways that translate molecular insights into life-saving diagnostics and therapeutic strategies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-xl border border-[rgba(94,234,212,0.45)] bg-[rgba(11,28,46,0.8)] px-6 py-3 text-sm font-medium text-[rgba(226,232,240,0.85)] transition hover:shadow-[0_0_28px_rgba(45,212,191,0.32)]"
              >
                Explore Research
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-transparent bg-[rgba(34,197,94,0.18)] px-6 py-3 text-sm font-medium text-[rgba(94,234,212,0.95)] transition hover:border-[rgba(34,197,94,0.4)]"
              >
                Partner with Francis
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="glass-panel relative w-full max-w-sm overflow-hidden rounded-[2.5rem] p-6">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-[rgba(59,222,199,0.3)]">
                <Image src="/photo.jpeg" alt="Francis Kwarteng" fill className="object-cover" priority />
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-xs uppercase tracking-[0.32em] text-[rgba(148,163,184,0.78)]">Bronx, New York</p>
                <p className="text-lg font-semibold text-white">Francis Kwarteng</p>
                <p className="text-sm text-soft">BS MLS (ASCPi), MS — NYS Licensed Clinical Laboratory Technologist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <SectionHeading
          eyebrow="Impact Snapshot"
          title="Precision-driven outcomes"
          description="Each metric reflects measurable progress in biomedical science and the lives it safeguards."
        />
        <StatisticCluster
          items={[
            { label: 'Critical transfusions safeguarded', value: '1.2K+', detail: 'Cross-match validations enabling life-saving interventions daily.' },
            { label: 'Research discoveries', value: '7', detail: 'Peer-reviewed insights into parasitic translation mechanisms.' },
            { label: 'Lab techniques optimised', value: '20+', detail: 'Protocols refined across blood banking and molecular biology.' },
          ]}
        />
      </section>

      <section className="space-y-12">
        <SectionHeading
          eyebrow="Recent Highlights"
          title="Channelling research into clinical reality"
          description="From molecular discovery to patient bedside, every initiative is architected to deliver reliable diagnostics and targeted therapies."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {recentHighlights.map((item) => (
            <HighlightCard key={item.title} title={item.title} icon="◆" variant="accent">
              <p>{item.description}</p>
              <Link href={item.href} className="mt-4 inline-block text-sm text-[rgba(94,234,212,0.95)] transition hover:text-[rgba(20,184,166,1)]">
                Navigate →
              </Link>
            </HighlightCard>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Signature Expertise"
          title="Where scientific rigour meets translational ambition"
          description="Francis blends advanced diagnostics, parasitology, and molecular biology to reveal pathways that redraw our approach to infectious and metabolic diseases."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <HighlightCard title="Translational Parasitology" icon="🧪">
            <p>
              Mapping the protein-protein choreography that underpins Giardia lamblia&apos;s survival strategies to expose vulnerabilities that serve as precise therapeutic entry points.
            </p>
          </HighlightCard>
          <HighlightCard title="Blood Bank Stewardship" icon="🩸">
            <p>
              Safeguarding transfusion medicine at NYU Langone through exacting cross-matching, antibody identification, and rapid problem-solving under critical conditions.
            </p>
          </HighlightCard>
          <HighlightCard title="Laboratory Innovation" icon="⚙️">
            <p>
              Engineering resilient workflows for affinity purification, gel-based diagnostics, and regulatory compliance that uphold reproducibility without compromise.
            </p>
          </HighlightCard>
          <HighlightCard title="Scientific Communication" icon="🧭">
            <p>
              Crafting narratives and mentorship that translate complex biomedical data into actionable strategies for clinicians, researchers, and students alike.
            </p>
          </HighlightCard>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Next Steps"
          title="Collaborate on the future of molecular medicine"
          description="Whether digitally or in the laboratory, Francis is ready to co-design diagnostics and therapies that protect vulnerable populations."
        />
        <div className="glass-panel flex flex-col gap-6 rounded-3xl p-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 md:max-w-xl">
            <p className="text-xl font-semibold text-white">Open to research alliances, high-impact diagnostics, and speaking engagements.</p>
            <p className="text-sm text-soft">
              Share your vision—together we can blueprint scientific breakthroughs that are both elegant and effective.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:kwartengfo@warhawks.ulm.edu"
              className="rounded-xl border border-[rgba(94,234,212,0.35)] px-5 py-3 text-sm font-medium text-[rgba(226,232,240,0.85)] transition hover:shadow-[0_0_22px_rgba(45,212,191,0.32)]"
            >
              Email Francis
            </Link>
            <Link
              href="https://www.linkedin.com/in/franciskwarteng-8711bb1ab"
              className="rounded-xl border border-transparent bg-[rgba(8,47,73,0.6)] px-5 py-3 text-sm font-medium text-[rgba(94,234,212,0.95)] transition hover:border-[rgba(34,211,238,0.4)]"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
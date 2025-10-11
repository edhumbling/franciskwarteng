import SectionHeading from "../../components/SectionHeading";

const forthcoming = [
  {
    title: "Decoding Parasite Translation",
    synopsis:
      "An exploration of why Giardia lamblia&apos;s translation initiation machinery holds the key to selective therapeutic design.",
    pillars: [
      "Comparative molecular architecture",
      "Targetable residues that spare host systems",
      "Beyond the microscope: clinical implications",
    ],
  },
  {
    title: "The Art of Diagnostic Stewardship",
    synopsis:
      "A manifesto on protecting patient safety through disciplined blood bank operations and compassionate judgement.",
    pillars: [
      "Stories from the midnight cross-match",
      "When speed meets scrutiny",
      "Designing glass-like workflows for crisis moments",
    ],
  },
  {
    title: "Mentorship Under the Microscope",
    synopsis:
      "Lessons from guiding future scientists to think critically while retaining empathy inside high-stakes laboratory environments.",
    pillars: [
      "Cultivating curiosity",
      "Designing laboratories as classrooms",
      "Helping students see beyond the assay",
    ],
  },
];

export default function EssaysPage() {
  return (
    <div className="space-y-16">
      <section className="glass-panel rounded-[2.5rem] p-10">
        <SectionHeading
          eyebrow="Essays & Essays"
          title="Illuminating the hidden narratives of science"
          description="Francis is sculpting a collection of immersive essays that traverse parasitology, diagnostics, and human-centred laboratory leadership—all wrapped in glassmorphic storytelling."
          align="left"
        />
        <p className="mt-6 text-sm text-soft md:text-base">
          Each piece is engineered to provide clarity, nuance, and actionable insight—helping readers understand not just what was discovered, but how it feels to pursue discovery at the edge of possibility.
        </p>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Coming Soon"
          title="Essays in the glassworks"
          description="Select a forthcoming essay to preview its thematic blueprint and tonal direction."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {forthcoming.map((essay) => (
            <div key={essay.title} className="glass-panel rounded-3xl p-8">
              <span className="tag-pill mb-4 inline-flex">In Development</span>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">{essay.title}</h2>
              <p className="mt-4 text-sm text-soft md:text-base">{essay.synopsis}</p>
              <div className="mt-5 space-y-2 text-xs uppercase tracking-[0.28em] text-[rgba(148,163,184,0.78)]">
                Key Pillars
              </div>
              <ul className="mt-3 space-y-2 text-sm text-soft">
                {essay.pillars.map((pillar) => (
                  <li key={pillar} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgba(34,197,94,0.75)]" aria-hidden />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Newsletter"
          title="Receive essays the moment they crystallise"
          description="Sign up to be notified when new essays publish. Expect depth, elegance, and applied wisdom."
          align="left"
        />
        <div className="glass-panel grid gap-6 rounded-3xl p-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="space-y-3 text-sm text-soft md:text-base">
            <p>
              Francis writes at the intersection of laboratory exactitude and human-centred design. Subscribe to receive first editions and invitations to private briefings.
            </p>
            <p>
              Content themes include translational parasitology, diagnostic resilience, mentorship, and modern laboratory aesthetics.
            </p>
          </div>
          <form className="glass-outline flex flex-col gap-3 rounded-2xl p-5">
            <label htmlFor="email" className="text-xs uppercase tracking-[0.28em] text-[rgba(148,163,184,0.78)]">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="rounded-xl border border-[rgba(94,234,212,0.35)] bg-[rgba(4,14,28,0.6)] px-4 py-3 text-sm text-[rgba(226,232,240,0.85)] outline-none transition focus:border-[rgba(34,211,238,0.45)]"
              required
            />
            <button
              type="submit"
              className="rounded-xl border border-transparent bg-[rgba(34,197,94,0.18)] px-5 py-3 text-sm font-medium text-[rgba(94,234,212,0.95)] transition hover:border-[rgba(34,197,94,0.4)]"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

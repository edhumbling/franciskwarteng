import SectionHeading from "../../components/SectionHeading";
import HighlightCard from "../../components/HighlightCard";

const projects = [
  {
    title: "Giardia lamblia Translation Initiative",
    badge: "Active",
    summary:
      "Interrogating translation initiation complexes to uncover selective drug targets that neutralise Giardia lamblia without harming host cells.",
    methods: [
      "Affinity chromatography pull-down assays",
      "Protein interaction mapping (GleIF4E2 ↔ GleIF2B)",
      "Target-driven molecular modelling",
    ],
    impact:
      "Aiming to deliver therapeutics that are both parasite-specific and clinically deployable, reducing the collateral damage often associated with antiparasitic agents.",
  },
  {
    title: "Protein Interaction Topology",
    badge: "Research",
    summary:
      "Decoding the structural relationship between GleIF4E2 and GleIF2B to chart how parasite translation machinery diverges from human pathways.",
    methods: [
      "Site-directed mutagenesis",
      "Affinity purification (GST, His-tag fusion proteins)",
      "Molecular dynamics to validate residue binding requirements",
    ],
    impact:
      "Clarifies druggable residues unique to parasitic proteomes, accelerating design of targeted inhibitors for translational regulation.",
  },
  {
    title: "Laboratory Systems Reinvention",
    badge: "Operational",
    summary:
      "Elevating blood bank reliability by designing resilient workflows that sustain quality control and rapid decision-making under pressure.",
    methods: [
      "Advanced cross-matching protocols",
      "Ortho Vision Swift analyser automation",
      "Batch antigen screening optimisation",
    ],
    impact:
      "Improves patient safety through consistent product compatibility, minimizing transfusion risks across high-volume hospital ecosystems.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-16">
      <section className="glass-panel rounded-[2.5rem] p-10">
        <SectionHeading
          eyebrow="Research Portfolio"
          title="Precision projects with transformative ambitions"
          description="Each study is designed to merge molecular finesse with scalable clinical outcomes—framed within the clarity of a glass aesthetic."
          align="left"
        />
        <p className="mt-6 text-sm text-soft md:text-base">
          Francis orchestrates end-to-end research experiences—from experimental design to communicable results—ensuring laboratories operate as elegantly as the insights they produce.
        </p>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Pipeline"
          title="Immersive research experiences"
          description="Dark glass environments, meticulous protocols, luminous outcomes."
          align="left"
        />
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="glass-panel rounded-3xl p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-4 md:max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="tag-pill">{project.badge}</span>
                    <h2 className="text-2xl font-semibold text-white md:text-3xl">{project.title}</h2>
                  </div>
                  <p className="text-sm text-soft md:text-base">{project.summary}</p>

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[rgba(148,163,184,0.78)]">
                      Methodology
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-soft">
                      {project.methods.map((method) => (
                        <li key={method} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[rgba(94,234,212,0.8)]" aria-hidden />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="rounded-2xl border border-[rgba(34,211,238,0.25)] bg-[rgba(6,12,24,0.55)] p-6 md:w-80">
                  <p className="text-xs uppercase tracking-[0.28em] text-[rgba(148,163,184,0.78)]">Impact</p>
                  <p className="mt-3 text-sm text-[rgba(226,232,240,0.85)]">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Methodological Edge"
          title="Toolset for illuminated discovery"
          description="A curated suite of techniques designed to reveal the unseen layers of biological systems."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <HighlightCard title="Affinity chromatography calibration" icon="⚗" variant="accent">
            <p>
              Tailored purification protocols that maintain molecular integrity, enabling high-fidelity interaction studies across complex proteomes.
            </p>
          </HighlightCard>
          <HighlightCard title="Gel + tube diagnostics symphony" icon="🧬">
            <p>
              Harmonising column and tube methodologies to deliver granular antibody identification with reproducibility.
            </p>
          </HighlightCard>
          <HighlightCard title="Automated analyser mastery" icon="🛠">
            <p>
              Orchestrating Ortho Vision Swift analyser workflows to accelerate compatibility decisions without compromising safety.
            </p>
          </HighlightCard>
          <HighlightCard title="Data storytelling" icon="🗂">
            <p>
              Translating raw laboratory data into luminous narratives that guide clinicians, researchers, and stakeholders.
            </p>
          </HighlightCard>
        </div>
      </section>
    </div>
  );
}

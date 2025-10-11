import SectionHeading from "../../components/SectionHeading";
import HighlightCard from "../../components/HighlightCard";
import StatisticCluster from "../../components/StatisticCluster";
import ExperienceTimeline from "../../components/ExperienceTimeline";

const timeline = [
  {
    organisation: "NYU Langone Health",
    role: "Blood Bank Technologist",
    duration: "Oct 2024 – Present",
    location: "United States",
    highlights: [
      "Safeguarding transfusion services with rigorous cross-matching and antibody profiling",
      "Orchestrating advanced equipment operations and preventive maintenance",
      "Driving quality assurance to uphold regulatory benchmarks",
      "Navigating critical troubleshooting to deliver timely, dependable diagnostics",
    ],
  },
  {
    organisation: "Westchester Medical Center",
    role: "Medical Laboratory Scientist II",
    duration: "Jan 2024 – Jul 2024",
    location: "Westchester County, New York",
    highlights: [
      "Delivered ABO/RH, DAT, IAT, and antibody identification with gel and tube methodologies",
      "Issued compatible blood products, enabling life-sustaining interventions",
      "Managed Ortho Vision Swift Analyser operations and preventive QC",
      "Performed batch antigen screening and complex transfusion reaction workups",
    ],
  },
  {
    organisation: "UAMS - University of Arkansas for Medical Sciences",
    role: "Medical Laboratory Scientist",
    duration: "Jun 2023 – Dec 2023",
    highlights: [
      "Executed precise diagnostics across chemistry, hematology, and serology",
      "Maintained stringent quality controls to deliver reliable laboratory data",
    ],
  },
  {
    organisation: "University of Louisiana Monroe",
    role: "Graduate Teaching & Research Assistant",
    duration: "Jan 2021 – May 2023",
    location: "Monroe, Louisiana",
    highlights: [
      "Demonstrated GleIF4E2 interplay with GleIF2B, revealing novel molecular interactions",
      "Optimised affinity purification workflows for GST and His-tag proteins",
      "Designed assessments and guided cohorts in anatomy and physiology",
    ],
  },
  {
    organisation: "University of Cape Coast",
    role: "Research & Teaching Assistant",
    duration: "Sep 2019 – Sep 2020",
    location: "Cape Coast, Ghana",
    highlights: [
      "Coordinated microbiology practicals and undergraduate research initiatives",
      "Bridged gaps between theoretical instruction and clinical application",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="glass-panel overflow-hidden rounded-[2.5rem] p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr]">
          <div className="space-y-6">
            <span className="tag-pill w-max">About Francis</span>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">
              Architecting precision diagnostics and translational breakthroughs.
            </h1>
            <p className="text-soft md:text-lg">
              Francis Kwarteng operates at the intersection of molecular parasitology, advanced laboratory science, and clinical diagnostics. With a relentless focus on fidelity and empathy, he designs repeatable systems that protect patients, empower clinicians, and decode complex biological behaviours.
            </p>
            <StatisticCluster
              items={[
                { label: 'Clinical disciplines mastered', value: '4', detail: 'Blood bank, chemistry, hematology, serology' },
                { label: 'Educational reach', value: '200+', detail: 'Students mentored across anatomy, physiology, and lab science' },
                { label: 'Protein interactions elucidated', value: '3', detail: 'GleIF4E2 / GleIF2B molecular discoveries' },
              ]}
            />
          </div>
          <div className="glass-panel rounded-3xl p-8" data-variant="accent">
            <SectionHeading
              align="left"
              eyebrow="Professional Focus"
              title="Biomedical scientist, educator, and systems architect."
              description="Francis blends dark glass aesthetics, intuitive workflows, and scientific clarity to deliver experiences that feel as polished as they are powerful."
            />
            <div className="mt-6 space-y-3 text-sm text-soft">
              <p>
                • Steering laboratory excellence at NYU Langone Health with unwavering integrity
              </p>
              <p>
                • Translating parasitic molecular choreography into targeted medical opportunities
              </p>
              <p>
                • Mentoring future scientists to think critically, act decisively, and serve humanity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Philosophy"
          title="Why glass?"
          description="Glass embodies transparency, refraction, and protection—the same qualities Francis instils in every clinical decision, experiment, and collaboration."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-3">
          <HighlightCard title="Clarity of Purpose" icon="✶">
            <p>
              Every protocol is rooted in calm precision. Francis cultivates understanding—not just results—ensuring teams align around shared purpose and hard evidence.
            </p>
          </HighlightCard>
          <HighlightCard title="Depth with Empathy" icon="❤">
            <p>
              From bench to bedside, decisions are human-centric. Francis designs experiments and systems that protect dignity while pursuing groundbreaking outcomes.
            </p>
          </HighlightCard>
          <HighlightCard title="Resilient Innovation" icon="⚡">
            <p>
              Facing complex biological puzzles, he iterates with intention, refining workflows that withstand scrutiny and adapt gracefully to emerging challenges.
            </p>
          </HighlightCard>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Experience"
          title="Trail of precision"
          description="A disciplined journey across continents and disciplines, delivering laboratory stability while decoding molecular frontiers."
          align="left"
        />
        <ExperienceTimeline items={timeline} />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Academic Foundation"
          title="Education"
          description="Structured academia forged a mindset that balances theoretical mastery with hands-on scientific craftsmanship."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <HighlightCard title="Master of Science (MS), Biology" icon="🎓" variant="accent">
            <p>University of Louisiana at Monroe · 2020 – 2023</p>
            <p className="mt-3 text-sm text-soft">
              Expanded molecular research repertoire, refined translational strategies, and mentored cohorts in anatomy and physiology.
            </p>
          </HighlightCard>
          <HighlightCard title="Bachelor of Science (BS), Medical Laboratory Science" icon="🎓">
            <p>University of Cape Coast · 2015 – 2019</p>
            <p className="mt-3 text-sm text-soft">
              Established foundations in diagnostics, microbial ecosystems, and the critical ethics of laboratory operation.
            </p>
          </HighlightCard>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials"
          description="Rigorous qualifications ensure every decision stands on validated expertise."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-3">
          <HighlightCard title="BS MLS (ASCPi)" icon="✔">
            <p>International credential affirming advanced proficiency in medical laboratory science.</p>
          </HighlightCard>
          <HighlightCard title="Clinical Laboratory Scientist (092)" icon="✔" variant="accent">
            <p>Authorised to lead complex diagnostic environments with confidence and compliance.</p>
          </HighlightCard>
          <HighlightCard title="NYS Licensed Clinical Laboratory Technologist" icon="✔">
            <p>Accredited to practise across New York, delivering safe and regulated patient care.</p>
          </HighlightCard>
        </div>
      </section>
    </div>
  );
}

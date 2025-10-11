import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Francis Kwarteng',
  description: 'Explore the research projects and scientific work of Francis Kwarteng, including Giardia lamblia research, protein-protein interactions, and biomedical laboratory projects.',
  keywords: 'Francis Kwarteng, Research Projects, Giardia lamblia, Protein Interactions, Biomedical Research, Laboratory Science',
  openGraph: {
    title: 'Projects - Francis Kwarteng',
    description: 'Research projects and scientific work in biomedical laboratory science',
    images: ['/photo.jpeg'],
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10">
              <Image
                src="/photo.jpeg"
                alt="Francis Kwarteng"
                fill
                className="rounded-full object-cover border-2 border-emerald-400/50"
              />
            </div>
            <Link href="/" className="text-2xl font-bold text-emerald-400 hover:text-emerald-300">
              Francis Kwarteng
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-300 hover:text-emerald-400">Home</Link>
            <Link href="/about" className="text-slate-300 hover:text-emerald-400">About</Link>
            <Link href="/projects" className="text-emerald-400">Projects</Link>
            <Link href="/essays" className="text-slate-300 hover:text-emerald-400">Essays</Link>
            <Link href="/contact" className="text-slate-300 hover:text-emerald-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-8 text-center">Research Projects</h1>
            
            {/* Current Research */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Current Research</h2>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Giardia lamblia Translation Initiation Study</h3>
                <p className="text-slate-300 mb-4">
                  Investigating protein-protein interactions in translation initiation of the parasite Giardia lamblia 
                  using affinity chromatography pull-down assays to characterize molecular mechanisms.
                </p>
                <div className="space-y-2">
                  <p className="text-slate-300"><strong>Objective:</strong> Find drug targets selectively toxic to the parasite</p>
                  <p className="text-slate-300"><strong>Method:</strong> Affinity chromatography pull-down assay</p>
                  <p className="text-slate-300"><strong>Focus:</strong> GleIF4E2 and GleIF2B protein interactions</p>
                </div>
              </div>
            </div>

            {/* Past Research */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Past Research</h2>
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">GleIF4E2-GleIF2B Interaction Study</h3>
                  <p className="text-slate-300 mb-4">
                    Demonstrated protein-protein interactions between GleIF4E2 and GleIF2B in Giardia lamblia.
                  </p>
                  <div className="space-y-2">
                    <p className="text-slate-300">• Identified GleIF4E2 amino residues L12 and F45-F46 as required for binding</p>
                    <p className="text-slate-300">• Demonstrated conserved lysine stretches of GleIF2B are required for interaction</p>
                    <p className="text-slate-300">• Optimized affinity purification protocols for GST and His-tagged fusion proteins</p>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Laboratory Techniques Development</h3>
                  <p className="text-slate-300 mb-4">
                    Developed and optimized various laboratory techniques for biomedical research.
                  </p>
                  <div className="space-y-2">
                    <p className="text-slate-300">• Aseptic technique protocols</p>
                    <p className="text-slate-300">• Bacterial cell culture methods</p>
                    <p className="text-slate-300">• Protein purification techniques</p>
                    <p className="text-slate-300">• Quality control procedures</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Projects */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Future Research Directions</h2>
              <div className="glass-card rounded-xl p-6">
                <p className="text-slate-300 mb-4">
                  Continuing to explore novel therapeutic targets for parasitic diseases and advancing 
                  translational research in medical laboratory science.
                </p>
                <div className="space-y-2">
                  <p className="text-slate-300">• Expanding research on parasitic disease mechanisms</p>
                  <p className="text-slate-300">• Developing new diagnostic methods</p>
                  <p className="text-slate-300">• Collaborating on infectious disease research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

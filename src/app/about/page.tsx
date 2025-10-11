import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Francis Kwarteng - Biomedical Scientist',
  description: 'Learn about Francis Kwarteng, a Biomedical Scientist focused on molecular mechanisms of physiological and pathological pathways. BS MLS (ASCPi), MS with extensive experience in medical laboratory science.',
  keywords: 'Francis Kwarteng, Biomedical Scientist, Medical Laboratory Science, NYU Langone, Research, ASCPi, Clinical Laboratory',
  openGraph: {
    title: 'About Francis Kwarteng - Biomedical Scientist',
    description: 'Biomedical Scientist with extensive experience in medical laboratory science and research',
    images: ['/photo.jpeg'],
    type: 'profile',
  },
};

export default function AboutPage() {
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
            <Link href="/about" className="text-emerald-400">About</Link>
            <Link href="/projects" className="text-slate-300 hover:text-emerald-400">Projects</Link>
            <Link href="/essays" className="text-slate-300 hover:text-emerald-400">Essays</Link>
            <Link href="/contact" className="text-slate-300 hover:text-emerald-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="mb-8">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/photo.jpeg"
                  alt="Francis Kwarteng"
                  fill
                  className="rounded-full object-cover border-4 border-emerald-400/30 shadow-2xl"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              About Francis Kwarteng
            </h1>
            <p className="text-xl text-emerald-400 mb-6">
              BS MLS (ASCPi), MS | New York State Licensed Clinical Laboratory Technologist
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Biomedical Scientist, focused on elucidating the molecular mechanism of various 
              physiological and pathological pathways with the aim of finding novel treatments 
              for both infectious and metabolic diseases.
            </p>
          </div>

          {/* Summary */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6">Professional Summary</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Highly motivated to make the world a better place through disease elimination and control. 
              Hard-working, diligent and results-oriented individual with extensive experience in 
              medical laboratory science and biomedical research.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My current project involves the use of affinity chromatography pull-down assay to 
              characterize the protein-protein interaction in translation initiation of the parasite 
              Giardia lamblia. By understanding the molecular mechanism of translation initiation of 
              the parasite, I may find a drug target selectively toxic to the parasite.
            </p>
          </div>

          {/* Top Skills */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6">Top Skills</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center">
                <h3 className="text-emerald-400 font-semibold">Aseptic Technique</h3>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center">
                <h3 className="text-emerald-400 font-semibold">Bacterial Cell Culture</h3>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center">
                <h3 className="text-emerald-400 font-semibold">Translational Research</h3>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6">Certifications</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-300">BSc Medical Laboratory Science</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-300">Medical Laboratory Scientist (ASCPi)CM</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-300">Clinical Laboratory Scientist (092)</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6">Professional Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-400 pl-6">
                <h3 className="text-xl font-semibold text-white">NYU Langone Health</h3>
                <p className="text-emerald-400">Blood Bank Technologist | October 2024 - Present</p>
                <ul className="text-slate-300 mt-3 space-y-2">
                  <li>• Skilled in blood typing, cross-matching, and antibody screening for safe and efficient blood transfusion services</li>
                  <li>• Experienced in operating advanced laboratory equipment and maintaining strict adherence to protocols</li>
                  <li>• Ensure compliance with regulatory standards and participate in quality control</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-emerald-400 pl-6">
                <h3 className="text-xl font-semibold text-white">Westchester Medical Center</h3>
                <p className="text-emerald-400">Medical Laboratory Scientist II | January 2024 - July 2024</p>
                <ul className="text-slate-300 mt-3 space-y-2">
                  <li>• Performs ABO/RH, DAT, IAT and antibody Identification</li>
                  <li>• Issues compatible blood products and components to enhance patient care</li>
                  <li>• Operates and performs QC on Ortho Vision Swift Analyzer</li>
                </ul>
              </div>

              <div className="border-l-4 border-emerald-400 pl-6">
                <h3 className="text-xl font-semibold text-white">UAMS - University of Arkansas</h3>
                <p className="text-emerald-400">Medical Laboratory Scientist | June 2023 - December 2023</p>
              </div>

              <div className="border-l-4 border-emerald-400 pl-6">
                <h3 className="text-xl font-semibold text-white">University of Louisiana Monroe</h3>
                <p className="text-emerald-400">Graduate Teaching Assistant | August 2022 - May 2023</p>
                <ul className="text-slate-300 mt-3 space-y-2">
                  <li>• Taught Fundamentals of Anatomy and Physiology lab 1, an undergraduate course averaging 70 students per semester</li>
                  <li>• Developed quizzes, exams, and homework</li>
                  <li>• Coordinated grading and labs with a team of 3 teaching assistants</li>
                </ul>
              </div>

              <div className="border-l-4 border-emerald-400 pl-6">
                <h3 className="text-xl font-semibold text-white">University of Louisiana Monroe</h3>
                <p className="text-emerald-400">Graduate Research Assistant | January 2021 - May 2023</p>
                <ul className="text-slate-300 mt-3 space-y-2">
                  <li>• Demonstrated that GleIF4E2 interacts with GleIF2B</li>
                  <li>• Found that GleIF4E2 amino residues L12 and F45-F46 are required for binding to GleIF2B</li>
                  <li>• Optimized affinity purification of GST fusion proteins and His tag fusion proteins</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6">Education</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white">University of Louisiana at Monroe</h3>
                  <p className="text-emerald-400">Master of Science - MS, Biology/Biological Sciences</p>
                </div>
                <span className="text-slate-300">2020 - 2023</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white">University of Cape Coast</h3>
                  <p className="text-emerald-400">Bachelor of Science - BS, Medical Laboratory Science</p>
                </div>
                <span className="text-slate-300">2015 - 2019</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

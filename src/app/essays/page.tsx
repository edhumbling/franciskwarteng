import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Essays & Blogs - Francis Kwarteng',
  description: 'Read essays and blog posts by Francis Kwarteng on biomedical research, medical laboratory science, and scientific discoveries.',
  keywords: 'Francis Kwarteng, Essays, Blog, Biomedical Research, Medical Laboratory Science, Scientific Writing',
  openGraph: {
    title: 'Essays & Blogs - Francis Kwarteng',
    description: 'Scientific essays and blog posts on biomedical research',
    images: ['/photo.jpeg'],
  },
};

export default function EssaysPage() {
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
            <Link href="/projects" className="text-slate-300 hover:text-emerald-400">Projects</Link>
            <Link href="/essays" className="text-emerald-400">Essays</Link>
            <Link href="/contact" className="text-slate-300 hover:text-emerald-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-8 text-center">Essays & Blogs</h1>
            
            <div className="text-center">
              <div className="mb-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="/photo.jpeg"
                    alt="Francis Kwarteng"
                    fill
                    className="rounded-full object-cover border-4 border-emerald-400/30 shadow-2xl"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
                <p className="text-slate-300 text-lg mb-6">
                  I&apos;m currently working on sharing my insights and experiences in biomedical research 
                  through essays and blog posts. Check back soon for content on:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Research Insights</h3>
                  <p className="text-slate-300">
                    Deep dives into my research on Giardia lamblia and protein-protein interactions, 
                    sharing the scientific process and discoveries.
                  </p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Laboratory Techniques</h3>
                  <p className="text-slate-300">
                    Practical guides and insights on medical laboratory techniques, 
                    quality control, and best practices in clinical laboratory science.
                  </p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Career Journey</h3>
                  <p className="text-slate-300">
                    Reflections on my path from Ghana to the United States, 
                    experiences in different healthcare systems, and professional growth.
                  </p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Scientific Communication</h3>
                  <p className="text-slate-300">
                    Thoughts on translating complex scientific concepts for broader audiences 
                    and the importance of science communication in healthcare.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Stay Updated</h3>
                <p className="text-slate-300 mb-4">
                  Follow my research journey and read my latest thoughts on biomedical science, 
                  laboratory medicine, and the future of healthcare.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="/contact" 
                    className="bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="/about" 
                    className="bg-slate-700/50 text-slate-300 px-6 py-3 rounded-lg border border-slate-600/30 hover:bg-slate-600/50 transition-colors"
                  >
                    Learn More About Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

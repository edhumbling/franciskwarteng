import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Francis Kwarteng',
  description: 'Get in touch with Francis Kwarteng, Biomedical Scientist. Contact information, email, and LinkedIn profile for collaborations and research opportunities.',
  keywords: 'Contact Francis Kwarteng, Email, LinkedIn, Biomedical Scientist, Research Collaboration, Medical Laboratory Science',
  openGraph: {
    title: 'Contact Francis Kwarteng',
    description: 'Get in touch for collaborations and research opportunities',
    images: ['/photo.jpeg'],
  },
};

export default function ContactPage() {
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
            <Link href="/essays" className="text-slate-300 hover:text-emerald-400">Essays</Link>
            <Link href="/contact" className="text-emerald-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-8 text-center">Contact Francis Kwarteng</h1>
            
            <div className="text-center mb-8">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="/photo.jpeg"
                  alt="Francis Kwarteng"
                  fill
                  className="rounded-full object-cover border-4 border-emerald-400/30 shadow-2xl"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Feel free to reach out for collaborations, research opportunities, 
                  or just to connect! I&apos;m always interested in discussing biomedical research, 
                  laboratory science, and potential partnerships.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Email Contact */}
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-emerald-400">@</span>
              </div>
                <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
                <a 
                  href="mailto:kwartengfo@warhawks.ulm.edu"
                  className="text-emerald-400 hover:text-emerald-300 text-lg break-all"
                >
                  kwartengfo@warhawks.ulm.edu
                </a>
                <p className="text-slate-400 text-sm mt-2">
                  Professional inquiries and research collaborations
                </p>
              </div>

              {/* LinkedIn Contact */}
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-emerald-400">in</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/franciskwarteng-8711bb1ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 text-lg"
                >
                  Francis Kwarteng
                </a>
                <p className="text-slate-400 text-sm mt-2">
                  Professional networking and career opportunities
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card rounded-xl p-6 text-center mb-8">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-emerald-400">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-slate-300 text-lg">Bronx, New York, United States</p>
            </div>

            {/* Professional Interests */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4 text-center">Professional Interests</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Research Areas</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Parasitic disease research</li>
                    <li>• Protein-protein interactions</li>
                    <li>• Translation initiation mechanisms</li>
                    <li>• Drug target identification</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Collaboration Opportunities</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Biomedical research partnerships</li>
                    <li>• Laboratory technique development</li>
                    <li>• Scientific writing and communication</li>
                    <li>• Educational initiatives</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8">
              <p className="text-slate-300 mb-6">
                I&apos;m always excited to discuss new research opportunities and collaborations. 
                Don&apos;t hesitate to reach out!
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:kwartengfo@warhawks.ulm.edu"
                  className="bg-emerald-500/20 text-emerald-400 px-8 py-3 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                >
                  Send Email
                </a>
                <a 
                  href="/about"
                  className="bg-slate-700/50 text-slate-300 px-8 py-3 rounded-lg border border-slate-600/30 hover:bg-slate-600/50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

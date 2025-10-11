import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Index - Francis Kwarteng Website',
  description: 'Complete index of Francis Kwarteng\'s website including About, Projects, Essays, and Contact pages.',
  keywords: 'Francis Kwarteng, Website Index, Biomedical Scientist, Medical Laboratory Science, Research',
  openGraph: {
    title: 'Index - Francis Kwarteng Website',
    description: 'Complete website index and navigation',
    images: ['/photo.jpeg'],
  },
};

export default function IndexPage() {
  const pages = [
    {
      title: 'About Francis Kwarteng',
      description: 'Learn about Francis Kwarteng, a Biomedical Scientist with extensive experience in medical laboratory science and research.',
      url: '/about',
      icon: '👨‍🔬',
      sections: ['Professional Summary', 'Top Skills', 'Certifications', 'Experience', 'Education']
    },
    {
      title: 'Research Projects',
      description: 'Explore current and past research projects including Giardia lamblia studies and protein-protein interactions.',
      url: '/projects',
      icon: '🔬',
      sections: ['Current Research', 'Past Research', 'Future Directions']
    },
    {
      title: 'Essays & Blogs',
      description: 'Read scientific essays and blog posts on biomedical research, laboratory techniques, and career insights.',
      url: '/essays',
      icon: '📝',
      sections: ['Research Insights', 'Laboratory Techniques', 'Career Journey', 'Scientific Communication']
    },
    {
      title: 'Contact Information',
      description: 'Get in touch with Francis Kwarteng for collaborations, research opportunities, and professional networking.',
      url: '/contact',
      icon: '📧',
      sections: ['Email Contact', 'LinkedIn Profile', 'Location', 'Professional Interests']
    }
  ];

  const quickLinks = [
    { title: 'NYU Langone Health', description: 'Current position as Blood Bank Technologist', url: '/about#experience' },
    { title: 'Giardia lamblia Research', description: 'Current research on parasitic disease mechanisms', url: '/projects#current' },
    { title: 'Education Background', description: 'MS Biology and BS Medical Laboratory Science', url: '/about#education' },
    { title: 'Professional Skills', description: 'Aseptic Technique, Cell Culture, Translational Research', url: '/about#skills' },
    { title: 'Research Publications', description: 'Protein-protein interaction studies', url: '/projects#past' },
    { title: 'Collaboration Opportunities', description: 'Partnerships in biomedical research', url: '/contact#collaboration' }
  ];

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
            <Link href="/contact" className="text-slate-300 hover:text-emerald-400">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="glass-card rounded-2xl p-8 text-center mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/photo.jpeg"
                alt="Francis Kwarteng"
                fill
                className="rounded-full object-cover border-4 border-emerald-400/30 shadow-2xl"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Website Index</h1>
            <p className="text-xl text-emerald-400 mb-4">Francis Kwarteng - Biomedical Scientist</p>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Complete navigation and overview of all website sections. 
              Explore my research, experience, and professional journey in biomedical science.
            </p>
          </div>

          {/* Main Pages */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald-400 mb-8 text-center">Main Pages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pages.map((page, index) => (
                <Link key={index} href={page.url} className="group">
                  <div className="glass-card rounded-xl p-6 hover:bg-emerald-500/10 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{page.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors mb-2">
                          {page.title}
                        </h3>
                        <p className="text-slate-300 mb-4">{page.description}</p>
                        <div className="space-y-1">
                          <p className="text-sm text-emerald-400 font-medium">Sections:</p>
                          <div className="flex flex-wrap gap-2">
                            {page.sections.map((section, idx) => (
                              <span key={idx} className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">
                                {section}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald-400 mb-8 text-center">Quick Links</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.url} className="group">
                  <div className="glass-card rounded-lg p-4 hover:bg-emerald-500/10 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40">
                    <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors mb-2">
                      {link.title}
                    </h4>
                    <p className="text-slate-300 text-sm">{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Professional Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Current Position</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">Blood Bank Technologist at NYU Langone Health</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">New York State Licensed Clinical Laboratory Technologist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">BS MLS (ASCPi), MS Biology</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Research Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">Giardia lamblia parasite research</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">Protein-protein interaction studies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">Drug target identification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Help */}
          <div className="glass-card rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Navigation Guide</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Website Structure</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• <strong>Home:</strong> Main landing page with overview</li>
                  <li>• <strong>About:</strong> Detailed professional information</li>
                  <li>• <strong>Projects:</strong> Research work and studies</li>
                  <li>• <strong>Essays:</strong> Blog posts and articles</li>
                  <li>• <strong>Contact:</strong> Professional contact information</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Quick Access</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Use the navigation menu at the top</li>
                  <li>• Click on page cards for detailed content</li>
                  <li>• Use quick links for specific topics</li>
                  <li>• Contact information is always accessible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

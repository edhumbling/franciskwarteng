import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Map - Francis Kwarteng',
  description: 'Complete site map and navigation structure of Francis Kwarteng\'s website.',
  keywords: 'Francis Kwarteng, Site Map, Website Navigation, Biomedical Scientist',
  openGraph: {
    title: 'Site Map - Francis Kwarteng',
    description: 'Complete website navigation and structure',
    images: ['/photo.jpeg'],
  },
};

export default function SitemapPage() {
  const siteStructure = {
    'Main Pages': [
      { title: 'Home', url: '/', description: 'Main landing page with overview' },
      { title: 'About', url: '/about', description: 'Professional information and background' },
      { title: 'Projects', url: '/projects', description: 'Research projects and scientific work' },
      { title: 'Essays', url: '/essays', description: 'Blog posts and scientific essays' },
      { title: 'Contact', url: '/contact', description: 'Professional contact information' },
      { title: 'Index', url: '/index', description: 'Complete website index and navigation' },
      { title: 'Site Map', url: '/sitemap', description: 'This page - complete site structure' }
    ],
    'About Page Sections': [
      { title: 'Professional Summary', url: '/about#summary', description: 'Overview of professional background' },
      { title: 'Top Skills', url: '/about#skills', description: 'Aseptic Technique, Cell Culture, Research' },
      { title: 'Certifications', url: '/about#certifications', description: 'BS MLS, ASCPi, Clinical Laboratory Scientist' },
      { title: 'Work Experience', url: '/about#experience', description: 'NYU Langone, Westchester Medical, UAMS' },
      { title: 'Education', url: '/about#education', description: 'MS Biology, BS Medical Laboratory Science' }
    ],
    'Projects Page Sections': [
      { title: 'Current Research', url: '/projects#current', description: 'Giardia lamblia translation initiation study' },
      { title: 'Past Research', url: '/projects#past', description: 'GleIF4E2-GleIF2B interaction studies' },
      { title: 'Future Directions', url: '/projects#future', description: 'Upcoming research and collaborations' }
    ],
    'Contact Page Sections': [
      { title: 'Email Contact', url: '/contact#email', description: 'kwartengfo@warhawks.ulm.edu' },
      { title: 'LinkedIn Profile', url: '/contact#linkedin', description: 'Professional networking' },
      { title: 'Location', url: '/contact#location', description: 'Bronx, New York, United States' },
      { title: 'Professional Interests', url: '/contact#interests', description: 'Research areas and collaboration opportunities' }
    ]
  };

  const quickAccess = [
    { title: 'Professional Summary', url: '/about', category: 'About' },
    { title: 'Current Research', url: '/projects', category: 'Projects' },
    { title: 'Contact Information', url: '/contact', category: 'Contact' },
    { title: 'Work Experience', url: '/about#experience', category: 'About' },
    { title: 'Education Background', url: '/about#education', category: 'About' },
    { title: 'Research Skills', url: '/about#skills', category: 'About' },
    { title: 'Collaboration Opportunities', url: '/contact#interests', category: 'Contact' },
    { title: 'Scientific Publications', url: '/projects#past', category: 'Projects' }
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
            <h1 className="text-4xl font-bold text-white mb-4">Site Map</h1>
            <p className="text-xl text-emerald-400 mb-4">Complete Website Structure</p>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Navigate through all sections of Francis Kwarteng&apos;s website. 
              Find specific information quickly with this comprehensive site map.
            </p>
          </div>

          {/* Site Structure */}
          <div className="space-y-8">
            {Object.entries(siteStructure).map(([category, pages], categoryIndex) => (
              <div key={categoryIndex} className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-emerald-400 mb-6">{category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pages.map((page, pageIndex) => (
                    <Link key={pageIndex} href={page.url} className="group">
                      <div className="glass-card rounded-lg p-4 hover:bg-emerald-500/10 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40">
                        <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors mb-2">
                          {page.title}
                        </h3>
                        <p className="text-slate-300 text-sm">{page.description}</p>
                        <div className="mt-2">
                          <span className="text-xs text-emerald-400 font-medium">Visit Page →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Access */}
          <div className="glass-card rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Quick Access</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickAccess.map((item, index) => (
                <Link key={index} href={item.url} className="group">
                  <div className="glass-card rounded-lg p-4 hover:bg-emerald-500/10 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs text-emerald-400">{item.category}</span>
                    </div>
                    <div className="text-xs text-slate-400">
                      {item.url}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Help */}
          <div className="glass-card rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Navigation Tips</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">How to Navigate</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Use the main navigation menu at the top of each page</li>
                  <li>• Click on page titles to visit specific sections</li>
                  <li>• Use the search function to find specific content</li>
                  <li>• Bookmark important pages for quick access</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Content Organization</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• <strong>About:</strong> Professional background and credentials</li>
                  <li>• <strong>Projects:</strong> Research work and scientific studies</li>
                  <li>• <strong>Essays:</strong> Blog posts and scientific writing</li>
                  <li>• <strong>Contact:</strong> Professional contact and collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

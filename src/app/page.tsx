'use client';

import Image from 'next/image';
import Link from 'next/link';
import SearchComponent from '../components/SearchComponent';

export default function Home() {
  return (
    <div className="min-h-screen">
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
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="px-4 py-2 rounded-lg transition-all duration-300 text-emerald-400 bg-emerald-500/20 border border-emerald-500/30"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 rounded-lg transition-all duration-300 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="px-4 py-2 rounded-lg transition-all duration-300 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10"
            >
              Projects
            </Link>
            <Link 
              href="/essays" 
              className="px-4 py-2 rounded-lg transition-all duration-300 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10"
            >
              Essays
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 rounded-lg transition-all duration-300 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10"
            >
              Contact
            </Link>
            <div className="w-64">
              <SearchComponent />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="glass-card rounded-2xl p-8 text-center mb-8">
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
              Francis Kwarteng
            </h1>
            <p className="text-xl text-emerald-400 mb-6">
              BS MLS (ASCPi), MS | New York State Licensed Clinical Laboratory Technologist
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
              Biomedical Scientist, focused on elucidating the molecular mechanism of various 
              physiological and pathological pathways with the aim of finding novel treatments 
              for both infectious and metabolic diseases.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/about" 
                className="bg-emerald-500/20 text-emerald-400 px-8 py-3 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
              >
                Learn More
              </Link>
              <Link 
                href="/contact" 
                className="bg-slate-700/50 text-slate-300 px-8 py-3 rounded-lg border border-slate-600/30 hover:bg-slate-600/50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Quick Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Current Research</h3>
              <p className="text-slate-300 text-sm mb-4">
                Investigating Giardia lamblia parasite mechanisms and protein-protein interactions 
                to identify novel drug targets.
              </p>
              <Link href="/projects" className="text-emerald-400 hover:text-emerald-300 text-sm">
                View Projects →
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Professional Role</h3>
              <p className="text-slate-300 text-sm mb-4">
                Blood Bank Technologist at NYU Langone Health, specializing in blood typing, 
                cross-matching, and transfusion services.
              </p>
              <Link href="/about" className="text-emerald-400 hover:text-emerald-300 text-sm">
                Learn More →
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Education</h3>
              <p className="text-slate-300 text-sm mb-4">
                MS Biology from University of Louisiana at Monroe, BS Medical Laboratory Science 
                from University of Cape Coast.
              </p>
              <Link href="/about#education" className="text-emerald-400 hover:text-emerald-300 text-sm">
                View Education →
              </Link>
            </div>
          </div>

          {/* Key Skills */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Key Skills</h2>
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

          {/* Current Position */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Current Position</h2>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">NYU Langone Health</h3>
              <p className="text-xl text-emerald-400 mb-4">Blood Bank Technologist</p>
              <p className="text-slate-300 mb-6">
                Skilled in blood typing, cross-matching, and antibody screening for safe and 
                efficient blood transfusion services. Experienced in operating advanced laboratory 
                equipment and maintaining strict adherence to protocols.
              </p>
              <Link 
                href="/about#experience" 
                className="bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
              >
                View Full Experience
              </Link>
            </div>
          </div>

          {/* Research Focus */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Research Focus</h2>
            <div className="text-center">
              <p className="text-slate-300 text-lg mb-6 max-w-4xl mx-auto">
                My current project involves the use of affinity chromatography pull-down assay to 
                characterize the protein-protein interaction in translation initiation of the parasite 
                Giardia lamblia. By understanding the molecular mechanism of translation initiation 
                of the parasite, I may find a drug target selectively toxic to the parasite.
              </p>
              <Link 
                href="/projects" 
                className="bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
              >
                Explore Research Projects
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">Let&apos;s Connect</h2>
            <p className="text-slate-300 text-lg mb-6">
              Interested in collaborating on biomedical research or discussing laboratory science? 
              I&apos;m always excited to connect with fellow researchers and healthcare professionals.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/contact" 
                className="bg-emerald-500/20 text-emerald-400 px-8 py-3 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
              >
                Get in Touch
              </Link>
              <Link 
                href="mailto:kwartengfo@warhawks.ulm.edu" 
                className="bg-slate-700/50 text-slate-300 px-8 py-3 rounded-lg border border-slate-600/30 hover:bg-slate-600/50 transition-colors"
              >
                Send Email
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
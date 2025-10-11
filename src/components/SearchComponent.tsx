'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'page' | 'section' | 'content';
}

export default function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const searchData: SearchResult[] = [
    // Main Pages
    {
      title: 'About Francis Kwarteng',
      description: 'Professional summary, skills, certifications, and experience',
      url: '/about',
      type: 'page'
    },
    {
      title: 'Research Projects',
      description: 'Current and past research including Giardia lamblia studies',
      url: '/projects',
      type: 'page'
    },
    {
      title: 'Essays & Blogs',
      description: 'Scientific essays and blog posts on biomedical research',
      url: '/essays',
      type: 'page'
    },
    {
      title: 'Contact Information',
      description: 'Professional contact details and collaboration opportunities',
      url: '/contact',
      type: 'page'
    },
    
    // About Sections
    {
      title: 'Professional Summary',
      description: 'Overview of Francis Kwarteng\'s professional background',
      url: '/about#summary',
      type: 'section'
    },
    {
      title: 'Top Skills',
      description: 'Aseptic Technique, Bacterial Cell Culture, Translational Research',
      url: '/about#skills',
      type: 'section'
    },
    {
      title: 'Certifications',
      description: 'BS MLS, ASCPi, Clinical Laboratory Scientist credentials',
      url: '/about#certifications',
      type: 'section'
    },
    {
      title: 'Work Experience',
      description: 'NYU Langone, Westchester Medical Center, UAMS experience',
      url: '/about#experience',
      type: 'section'
    },
    {
      title: 'Education',
      description: 'MS Biology from ULM, BS Medical Laboratory Science from UCC',
      url: '/about#education',
      type: 'section'
    },
    
    // Project Sections
    {
      title: 'Giardia lamblia Research',
      description: 'Current research on parasitic disease mechanisms and protein interactions',
      url: '/projects#current',
      type: 'section'
    },
    {
      title: 'Protein-Protein Interactions',
      description: 'Studies on GleIF4E2 and GleIF2B interactions',
      url: '/projects#past',
      type: 'section'
    },
    {
      title: 'Laboratory Techniques',
      description: 'Aseptic technique, cell culture, and purification methods',
      url: '/projects#techniques',
      type: 'section'
    },
    
    // Contact Sections
    {
      title: 'Email Contact',
      description: 'kwartengfo@warhawks.ulm.edu for professional inquiries',
      url: '/contact#email',
      type: 'section'
    },
    {
      title: 'LinkedIn Profile',
      description: 'Professional networking and career opportunities',
      url: '/contact#linkedin',
      type: 'section'
    },
    {
      title: 'Location',
      description: 'Bronx, New York, United States',
      url: '/contact#location',
      type: 'section'
    },
    
    // Content Topics
    {
      title: 'Biomedical Research',
      description: 'Research in molecular mechanisms and disease pathways',
      url: '/about',
      type: 'content'
    },
    {
      title: 'Medical Laboratory Science',
      description: 'Clinical laboratory techniques and quality control',
      url: '/about',
      type: 'content'
    },
    {
      title: 'Blood Bank Technology',
      description: 'Blood typing, cross-matching, and transfusion services',
      url: '/about',
      type: 'content'
    },
    {
      title: 'Parasitic Disease Research',
      description: 'Studies on Giardia lamblia and drug target identification',
      url: '/projects',
      type: 'content'
    },
    {
      title: 'Research Collaboration',
      description: 'Opportunities for biomedical research partnerships',
      url: '/contact',
      type: 'content'
    }
  ];

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 8)); // Limit to 8 results
    } else {
      setResults([]);
    }
  }, [query, searchData]);

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search website content..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="w-full px-4 py-2 bg-slate-800/50 border border-emerald-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:bg-slate-800/70"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <span className="text-slate-400">🔍</span>
        </div>
      </div>

      {/* Search Results */}
      {isOpen && (query.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-lg border border-emerald-500/30 rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  className="block p-3 hover:bg-emerald-500/10 rounded-lg transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {result.type === 'page' && <span className="text-emerald-400">📄</span>}
                      {result.type === 'section' && <span className="text-blue-400">📍</span>}
                      {result.type === 'content' && <span className="text-purple-400">💡</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm truncate">
                        {result.title}
                      </h4>
                      <p className="text-slate-300 text-xs mt-1 line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-slate-400">
              No results found for &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}

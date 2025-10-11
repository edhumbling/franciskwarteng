'use client';

import { useState, useEffect, useMemo } from 'react';
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

  const searchData = useMemo<SearchResult[]>(() => [
    {
      title: 'About Francis Kwarteng',
      description: 'Professional summary, skills, certifications, and experience',
      url: '/about',
      type: 'page',
    },
    {
      title: 'Research Projects',
      description: 'Current and past research including Giardia lamblia studies',
      url: '/projects',
      type: 'page',
    },
    {
      title: 'Essays & Blogs',
      description: 'Scientific essays and perspectives on biomedical research',
      url: '/essays',
      type: 'page',
    },
    {
      title: 'Contact Francis',
      description: 'Professional contact details and collaboration opportunities',
      url: '/contact',
      type: 'page',
    },
    {
      title: 'Website Index',
      description: 'Complete navigation map for every section',
      url: '/index',
      type: 'page',
    },
    {
      title: 'Site Map',
      description: 'Structured view of all pages and subsections',
      url: '/sitemap',
      type: 'page',
    },
    {
      title: 'Professional Summary',
      description: 'Overview of research focus and biomedical mission',
      url: '/about#summary',
      type: 'section',
    },
    {
      title: 'Top Skills',
      description: 'Aseptic technique, cell culture, translational research',
      url: '/about#skills',
      type: 'section',
    },
    {
      title: 'Certifications',
      description: 'Professional credentials and laboratory licenses',
      url: '/about#certifications',
      type: 'section',
    },
    {
      title: 'Experience Timeline',
      description: 'Chronological journey across leading institutions',
      url: '/about#experience',
      type: 'section',
    },
    {
      title: 'Education',
      description: 'Academic foundation and advanced studies',
      url: '/about#education',
      type: 'section',
    },
    {
      title: 'Current Research',
      description: 'Giardia lamblia translation initiation study',
      url: '/projects#current',
      type: 'section',
    },
    {
      title: 'Protein Interaction Findings',
      description: 'Insights into GleIF4E2 and GleIF2B interplay',
      url: '/projects#discoveries',
      type: 'section',
    },
    {
      title: 'Laboratory Methodologies',
      description: 'Optimised purification and diagnostic techniques',
      url: '/projects#techniques',
      type: 'section',
    },
    {
      title: 'Email Contact',
      description: 'Direct correspondence with Francis',
      url: '/contact#email',
      type: 'section',
    },
    {
      title: 'LinkedIn Profile',
      description: 'Professional network and achievements',
      url: '/contact#linkedin',
      type: 'section',
    },
    {
      title: 'Biomedical Research',
      description: 'Molecular pathways and translational science focus',
      url: '/projects',
      type: 'content',
    },
    {
      title: 'Medical Laboratory Science',
      description: 'Clinical diagnostics, blood banking, and QC',
      url: '/about',
      type: 'content',
    },
    {
      title: 'Parasitic Disease Research',
      description: 'Strategies to combat infectious agents',
      url: '/projects',
      type: 'content',
    },
    {
      title: 'Collaborative Opportunities',
      description: 'Partnerships spanning research and education',
      url: '/contact',
      type: 'content',
    },
  ], []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowered = query.toLowerCase();
    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(lowered) ||
        item.description.toLowerCase().includes(lowered)
    );
    setResults(filtered.slice(0, 8));
  }, [query, searchData]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search the experience..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="w-full rounded-xl border border-[rgba(34,211,238,0.25)] bg-[rgba(4,14,28,0.65)] px-4 py-2 text-sm text-[rgba(226,232,240,0.85)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] outline-none transition border-transparent focus:border-[rgba(94,234,212,0.45)] focus:shadow-[0_0_25px_rgba(45,212,191,0.28)]"
        />
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[rgba(148,163,184,0.8)]">
          ⌕
        </div>
      </div>

      {isOpen && query.length > 0 && (
        <div className="absolute top-[calc(100%+0.75rem)] left-0 right-0 z-30 overflow-hidden rounded-2xl border border-[rgba(34,211,238,0.25)] bg-[rgba(6,12,24,0.92)] backdrop-blur-2xl">
          {results.length ? (
            <div className="divide-y divide-[rgba(94,234,212,0.08)]">
              {results.map((result) => (
                <Link
                  key={`${result.url}-${result.title}`}
                  href={result.url}
                  className="flex items-start gap-3 px-4 py-3 text-sm text-[rgba(226,232,240,0.85)] transition-colors hover:bg-[rgba(34,197,94,0.12)]"
                >
                  <span className="mt-1 text-xs text-[rgba(16,185,129,0.8)]">
                    {result.type === 'page' && '◆'}
                    {result.type === 'section' && '▸'}
                    {result.type === 'content' && '✶'}
                  </span>
                  <span className="flex-1">
                    <span className="block font-medium text-white">{result.title}</span>
                    <span className="mt-1 block text-[rgba(148,163,184,0.85)]">
                      {result.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-5 text-center text-sm text-[rgba(148,163,184,0.7)]">
              No results found for &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}

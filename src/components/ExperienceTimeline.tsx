interface TimelineItem {
  organisation: string;
  role: string;
  duration: string;
  location?: string;
  highlights: string[];
}

interface ExperienceTimelineProps {
  items: TimelineItem[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[rgba(59,222,199,0.45)] via-[rgba(59,222,199,0.15)] to-transparent" aria-hidden />
      <div className="space-y-8">
        {items.map((item) => (
          <div key={`${item.organisation}-${item.role}`} className="relative">
            <div className="glass-panel p-6 md:p-8">
              <div className="absolute left-[-1.375rem] top-8 flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(59,222,199,0.8)] bg-[rgba(6,14,26,0.9)] text-xs text-[rgba(94,234,212,0.95)]">
                ◆
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-white md:text-2xl">{item.organisation}</h3>
                  <span className="tag-pill">{item.duration}</span>
                </div>
                <p className="text-sm uppercase tracking-[0.26em] text-[rgba(148,163,184,0.78)]">{item.role}</p>
                {item.location && <p className="text-xs text-soft">{item.location}</p>}
                <ul className="grid gap-2 text-sm text-soft md:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-[0.4rem] inline-block h-1.5 w-1.5 rounded-full bg-[rgba(94,234,212,0.8)]" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

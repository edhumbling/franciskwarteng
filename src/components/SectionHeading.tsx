import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <span className="section-heading text-xs">{eyebrow}</span>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-sm text-soft md:text-base">{description}</p>}
    </div>
  );
}

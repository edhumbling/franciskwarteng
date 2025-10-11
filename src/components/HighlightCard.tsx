import type { ReactNode } from "react";

interface HighlightCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  variant?: 'default' | 'accent';
}

export default function HighlightCard({ title, icon, children, variant = 'default' }: HighlightCardProps) {
  return (
    <div className={`glass-panel p-6 md:p-8 ${variant === 'accent' ? 'shadow-accent' : ''}`} data-variant={variant === 'accent' ? 'accent' : undefined}>
      <div className="flex items-start gap-4">
        {icon && <div className="text-2xl text-[rgba(94,234,212,0.95)]">{icon}</div>}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white md:text-2xl">{title}</h3>
          <div className="text-sm text-soft md:text-base">{children}</div>
        </div>
      </div>
    </div>
  );
}

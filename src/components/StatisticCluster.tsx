interface Statistic {
  label: string;
  value: string;
  detail?: string;
}

interface StatisticClusterProps {
  items: Statistic[];
}

export default function StatisticCluster({ items }: StatisticClusterProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="stat-card">
          <strong>{item.value}</strong>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(94,234,212,0.7)]">{item.label}</p>
          {item.detail && <p className="mt-2 text-xs text-soft">{item.detail}</p>}
        </div>
      ))}
    </div>
  );
}

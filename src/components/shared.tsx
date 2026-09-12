import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function MetricCard({
  icon: Icon,
  label,
  value,
  detail,
  tone = "blue"
}: {
  icon: LucideIcon;
  label: string;
  value: string | number;
  detail: string;
  tone?: "blue" | "green" | "amber" | "violet" | "red";
}) {
  return (
    <article className={`metric-card metric-card--${tone}`}>
      <span className="metric-icon">
        <Icon size={20} />
      </span>
      <span className="metric-label">{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </article>
  );
}

export function Panel({
  title,
  eyebrow,
  action,
  children,
  className = ""
}: {
  title: string;
  eyebrow?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`panel ${className}`}>
      <header className="panel-header">
        <div>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
        </div>
        {action}
      </header>
      {children}
    </section>
  );
}

export function StatusBadge({
  label,
  tone = "neutral"
}: {
  label: string;
  tone?: "neutral" | "success" | "warning" | "danger" | "info";
}) {
  return <span className={`status status--${tone}`}>{label}</span>;
}

export function ProgressBar({ value }: { value: number }) {
  const safeValue = Math.max(0, Math.min(100, value));
  return (
    <span className="progress" aria-label={`${safeValue}%`}>
      <span style={{ width: `${safeValue}%` }} />
    </span>
  );
}

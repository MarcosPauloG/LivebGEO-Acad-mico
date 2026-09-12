import { Compass } from "lucide-react";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand ${compact ? "brand--compact" : ""}`}>
      <span className="brand-mark" aria-hidden="true">
        <Compass size={compact ? 18 : 22} strokeWidth={2.4} />
      </span>
      <span className="brand-copy">
        <strong>LIVEB</strong>
        <span>GEO</span>
      </span>
      <em>ACADÊMICO</em>
    </div>
  );
}

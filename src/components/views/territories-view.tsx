import { MapPinned } from "lucide-react";
import { municipalities, territories } from "@/data/academic";
import { coveragePercentage, representativeDeficit } from "@/lib/metrics";
import { Panel, ProgressBar, StatusBadge } from "../shared";

export function TerritoriesView() {
  return (
    <Panel
      eyebrow="ORGANIZAÇÃO TERRITORIAL"
      title="Territórios da amostra"
      action={<span className="scope-chip">6 atuais · quantidade final pendente</span>}
    >
      <div className="territory-cards">
        {territories.map((territory) => {
          const items = municipalities.filter(
            (municipality) => municipality.territoryId === territory.id
          );
          const deficit = representativeDeficit(
            territory.approvedRepresentatives,
            territory.activeRepresentatives
          );
          const coverage = coveragePercentage(items);
          return (
            <article className="territory-card" key={territory.id}>
              <span className="territory-card-code" style={{ background: territory.color }}>
                {territory.code}
              </span>
              <div className="territory-card-heading">
                <span className="territory-card-icon"><MapPinned size={18} /></span>
                <span>
                  <strong>{territory.name}</strong>
                  <small>{items.length} municípios-modelo</small>
                </span>
                <StatusBadge
                  label={deficit ? `${deficit} vaga de cobertura` : "Meta coberta"}
                  tone={deficit ? "warning" : "success"}
                />
              </div>
              <p>{territory.decisionNote}</p>
              <dl className="territory-stats">
                <div><dt>Cobertura</dt><dd>{coverage}%</dd></div>
                <div><dt>Ativos</dt><dd>{territory.activeRepresentatives}</dd></div>
                <div><dt>Meta</dt><dd>{territory.approvedRepresentatives}</dd></div>
              </dl>
              <ProgressBar value={coverage} />
              <div className="tag-list">
                {items.map((municipality) => (
                  <span key={municipality.id}>{municipality.name.replace("Município Modelo ", "")}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Panel>
  );
}

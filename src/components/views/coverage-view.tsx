import { AlertTriangle, Copy, MapPinOff, UserRoundX } from "lucide-react";
import { municipalities, pointsOfInterest, representatives, territories } from "@/data/academic";
import { municipalityById, territoryById } from "@/lib/labels";
import { coveredMunicipalityIds, findDuplicatePointGroups } from "@/lib/metrics";
import { Panel, StatusBadge } from "../shared";

export function CoverageView() {
  const duplicateGroups = findDuplicatePointGroups(pointsOfInterest);
  const coveredIds = coveredMunicipalityIds(representatives);
  const uncovered = municipalities.filter((municipality) => !coveredIds.has(municipality.id));
  const activeTerritoryIds = new Set(
    representatives
      .filter((representative) => representative.status === "active")
      .flatMap((representative) => representative.territoryIds)
  );
  const territoriesWithoutRepresentative = territories.filter(
    (territory) => !activeTerritoryIds.has(territory.id)
  );

  return (
    <div className="view-stack">
      <section className="finding-summary-grid">
        <article><Copy size={21} /><span><strong>{duplicateGroups.length}</strong><small>grupo duplicado</small></span></article>
        <article><MapPinOff size={21} /><span><strong>{uncovered.length}</strong><small>municípios sem atribuição</small></span></article>
        <article><UserRoundX size={21} /><span><strong>{territoriesWithoutRepresentative.length}</strong><small>territórios sem representante ativo</small></span></article>
      </section>

      <div className="content-grid">
        <Panel eyebrow="DETECÇÃO POR NOME" title="Possíveis duplicidades">
          <div className="issue-list">
            {duplicateGroups.map((group, index) => (
              <article key={index}>
                <span className="issue-icon issue-icon--warning"><Copy size={18} /></span>
                <div>
                  <strong>{group[0].name}</strong>
                  <p>{group.length} cadastros fictícios com o mesmo nome normalizado.</p>
                  <div className="tag-list">
                    {group.map((point) => <span key={point.id}>{point.id.toUpperCase()} · {municipalityById(point.municipalityId)?.code}</span>)}
                  </div>
                </div>
                <StatusBadge label="Revisão humana" tone="warning" />
              </article>
            ))}
          </div>
        </Panel>

        <Panel eyebrow="COBERTURA DECLARADA" title="Lacunas da amostra">
          <div className="issue-list issue-list--scroll">
            {uncovered.map((municipality) => (
              <article key={municipality.id}>
                <span className="issue-icon issue-icon--danger"><MapPinOff size={18} /></span>
                <div>
                  <strong>{municipality.name}</strong>
                  <p>{municipality.code} · {territoryById(municipality.territoryId)?.name}</p>
                </div>
                <StatusBadge label="Sem atribuição" tone="danger" />
              </article>
            ))}
          </div>
        </Panel>
      </div>

      <div className="info-callout info-callout--warning">
        <AlertTriangle size={19} />
        <span>Os alertas existem para validar requisitos e navegação; não descrevem falhas, duplicidades ou áreas reais da empresa.</span>
      </div>
    </div>
  );
}

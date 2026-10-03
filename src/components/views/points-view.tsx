"use client";

import { Building2, CircleAlert, Filter } from "lucide-react";
import { useMemo, useState } from "react";
import { pointsOfInterest } from "@/data/academic";
import {
  municipalityById,
  pointCategoryLabels,
  pointStatusLabels,
  territoryById
} from "@/lib/labels";
import { findDuplicatePointGroups } from "@/lib/metrics";
import type { PointOfInterest } from "@/lib/types";
import { Panel, StatusBadge } from "../shared";

export function PointsView({ onPlanVisit, canWrite }: { onPlanVisit: (id: string) => void; canWrite: boolean }) {
  const [category, setCategory] = useState<"all" | PointOfInterest["category"]>("all");
  const duplicates = findDuplicatePointGroups(pointsOfInterest);
  const duplicateIds = new Set(duplicates.flatMap((group) => group.map((point) => point.id)));
  const filtered = useMemo(
    () =>
      category === "all"
        ? pointsOfInterest
        : pointsOfInterest.filter((point) => point.category === category),
    [category]
  );

  return (
    <div className="view-stack">
      <div className="page-toolbar">
        <div>
          <span className="eyebrow">PONTOS DE INTERESSE</span>
          <h2>Imobiliárias e referências fictícias</h2>
        </div>
        <label className="select-field">
          <Filter size={16} />
          <select
            onChange={(event) => setCategory(event.target.value as typeof category)}
            value={category}
          >
            <option value="all">Todas as categorias</option>
            <option value="real-estate">Imobiliárias fictícias</option>
            <option value="commercial">Pontos comerciais</option>
            <option value="reference">Referências acadêmicas</option>
          </select>
        </label>
      </div>

      <Panel
        action={<span className="scope-chip">{filtered.length} registros sintéticos</span>}
        title="Cadastro demonstrativo"
      >
        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Ponto</th>
                <th>Categoria</th>
                <th>Município</th>
                <th>Território</th>
                <th>Situação</th>
                <th>Qualidade</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((point) => {
                const municipality = municipalityById(point.municipalityId);
                const territory = municipality ? territoryById(municipality.territoryId) : null;
                return (
                  <tr key={point.id}>
                    <td>
                      <span className="table-entity">
                        <i><Building2 size={16} /></i>
                        <span><strong>{point.name}</strong><small>{point.id.toUpperCase()}</small></span>
                      </span>
                    </td>
                    <td>{pointCategoryLabels[point.category]}</td>
                    <td>{municipality?.name}</td>
                    <td><span className="territory-inline"><i style={{ background: territory?.color }} />{territory?.code}</span></td>
                    <td>{pointStatusLabels[point.status]}</td>
                    <td>
                      {duplicateIds.has(point.id) ? (
                        <StatusBadge label="Revisar duplicidade" tone="warning" />
                      ) : (
                        <StatusBadge label="Sem alerta" tone="success" />
                      )}
                    </td>
                    <td><button className="secondary-button" disabled={!canWrite} onClick={() => onPlanVisit(point.id)}>Planejar visita</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Panel>

      <div className="info-callout info-callout--warning">
        <CircleAlert size={19} />
        <span>
          <strong>Regra demonstrada:</strong> nomes normalizados iguais são sinalizados para revisão humana; o protótipo não apaga nem mescla registros automaticamente.
        </span>
      </div>
    </div>
  );
}

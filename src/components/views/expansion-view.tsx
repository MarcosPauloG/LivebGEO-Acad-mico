import { ArrowUpRight, BarChart3, MapPinned, Sparkles } from "lucide-react";
import { municipalities, pointsOfInterest } from "@/data/academic";
import { coverageLabels, territoryById } from "@/lib/labels";
import { Panel, ProgressBar, StatusBadge } from "../shared";

export function ExpansionView() {
  const ranking = [...municipalities].sort(
    (left, right) => right.expansionScore - left.expansionScore
  );

  return (
    <div className="view-stack">
      <Panel
        action={<StatusBadge label="Índice didático 0–100" tone="info" />}
        eyebrow="INDICADORES DE EXPANSÃO"
        title="Priorização da amostra"
      >
        <div className="expansion-hero">
          <span className="expansion-icon"><Sparkles size={24} /></span>
          <div>
            <span>Maior oportunidade simulada</span>
            <strong>{ranking[0]?.name}</strong>
            <small>{territoryById(ranking[0]?.territoryId ?? "")?.name}</small>
          </div>
          <b>{ranking[0]?.expansionScore}</b>
        </div>

        <div className="data-table-wrap">
          <table className="data-table expansion-table">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Município-modelo</th>
                <th>Território</th>
                <th>Cobertura</th>
                <th>Pontos</th>
                <th>Índice populacional</th>
                <th>Expansão</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((municipality, index) => (
                <tr key={municipality.id}>
                  <td><span className="rank-pill">{index + 1}</span></td>
                  <td><strong>{municipality.name}</strong><small className="table-subline">{municipality.code}</small></td>
                  <td><span className="territory-inline"><MapPinned size={14} />{territoryById(municipality.territoryId)?.code}</span></td>
                  <td>{coverageLabels[municipality.coverage]}</td>
                  <td>{pointsOfInterest.filter((point) => point.municipalityId === municipality.id).length}</td>
                  <td>{municipality.populationIndex}</td>
                  <td><span className="score-cell"><b>{municipality.expansionScore}</b><ProgressBar value={municipality.expansionScore} /></span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <div className="method-grid">
        <article><BarChart3 size={20} /><div><strong>População sintética</strong><p>Índice relativo, sem habitantes ou fonte empresarial.</p></div></article>
        <article><MapPinned size={20} /><div><strong>Lacuna de cobertura</strong><p>Maior peso quando não há representante atribuído.</p></div></article>
        <article><ArrowUpRight size={20} /><div><strong>Pontos mapeados</strong><p>Menor saturação aumenta a oportunidade simulada.</p></div></article>
      </div>
    </div>
  );
}

import {
  Building2,
  MapPin,
  Route,
  ShieldCheck,
  TrendingUp,
  Users
} from "lucide-react";
import {
  municipalities,
  pointsOfInterest,
  representatives,
  routeScenarios,
  territories
} from "@/data/academic";
import {
  coveragePercentage,
  findDuplicatePointGroups,
  totalRepresentativeDeficit
} from "@/lib/metrics";
import type { ViewId } from "@/lib/types";
import { municipalityById, territoryById } from "@/lib/labels";
import { AcademicMap } from "../academic-map";
import { MetricCard, Panel, ProgressBar, StatusBadge } from "../shared";

export function OverviewView({
  onNavigate
}: {
  onNavigate: (view: ViewId) => void;
}) {
  const coverage = coveragePercentage(municipalities);
  const gaps = municipalities.filter(
    (municipality) => municipality.coverage === "uncovered"
  );
  const duplicates = findDuplicatePointGroups(pointsOfInterest);
  const topExpansion = [...municipalities]
    .sort((left, right) => right.expansionScore - left.expansionScore)
    .slice(0, 5);
  const recommendedRoute = routeScenarios.find((route) => route.recommended);

  return (
    <div className="view-stack">
      <section className="metric-grid">
        <MetricCard
          detail={`${municipalities.length} municípios-modelo`}
          icon={MapPin}
          label="Territórios sintéticos"
          value={territories.length}
        />
        <MetricCard
          detail={`${gaps.length} municípios-modelo sem cobertura`}
          icon={Users}
          label="Cobertura ponderada"
          tone="amber"
          value={`${coverage}%`}
        />
        <MetricCard
          detail={`${duplicates.length} possível duplicidade`}
          icon={Building2}
          label="Pontos fictícios"
          tone="violet"
          value={pointsOfInterest.length}
        />
        <MetricCard
          detail={`${representatives.filter((item) => item.status === "active").length} ativos no mock`}
          icon={ShieldCheck}
          label="Déficit de representantes"
          tone="red"
          value={totalRepresentativeDeficit(territories)}
        />
        <MetricCard
          detail="Comparação determinística local"
          icon={Route}
          label="Melhor rota simulada"
          tone="green"
          value={`${recommendedRoute?.distanceKm ?? 0} km`}
        />
        <MetricCard
          detail="Maior pontuação da amostra"
          icon={TrendingUp}
          label="Índice de expansão"
          tone="green"
          value={topExpansion[0]?.expansionScore ?? 0}
        />
      </section>

      <div className="content-grid content-grid--wide">
        <Panel
          action={
            <button className="link-button" onClick={() => onNavigate("map")}>
              Abrir mapa
            </button>
          }
          eyebrow="VISÃO TERRITORIAL"
          title="Amostra acadêmica"
        >
          <AcademicMap compact />
        </Panel>

        <Panel
          action={
            <button className="link-button" onClick={() => onNavigate("expansion")}>
              Ver indicadores
            </button>
          }
          eyebrow="PRIORIZAÇÃO"
          title="Potencial de expansão"
        >
          <div className="ranking-list">
            {topExpansion.map((municipality, index) => (
              <article className="ranking-row" key={municipality.id}>
                <span className="rank-number">{index + 1}</span>
                <span className="ranking-copy">
                  <strong>{municipality.name}</strong>
                  <small>{territoryById(municipality.territoryId)?.name}</small>
                </span>
                <span className="ranking-score">
                  <b>{municipality.expansionScore}</b>
                  <ProgressBar value={municipality.expansionScore} />
                </span>
              </article>
            ))}
          </div>
        </Panel>
      </div>

      <div className="content-grid">
        <Panel
          action={
            <button className="link-button" onClick={() => onNavigate("coverage")}>
              Analisar cobertura
            </button>
          }
          eyebrow="QUALIDADE DO RECORTE"
          title="Alertas demonstrativos"
        >
          <div className="finding-list">
            <article>
              <span className="finding-count finding-count--danger">{gaps.length}</span>
              <span>
                <strong>Regiões sem cobertura</strong>
                <small>{gaps.slice(0, 2).map((item) => item.name).join(" · ")}</small>
              </span>
            </article>
            <article>
              <span className="finding-count finding-count--warning">{duplicates.length}</span>
              <span>
                <strong>Grupo possivelmente duplicado</strong>
                <small>Comparação por nome normalizado</small>
              </span>
            </article>
            <article>
              <span className="finding-count">1</span>
              <span>
                <strong>Decisão de escopo pendente</strong>
                <small>Quantidade final de territórios ainda não confirmada</small>
              </span>
            </article>
          </div>
        </Panel>

        <Panel
          action={
            <button className="link-button" onClick={() => onNavigate("routes")}>
              Comparar rotas
            </button>
          }
          eyebrow="PLANEJAMENTO"
          title="Rota sugerida pelo mock"
        >
          {recommendedRoute ? (
            <div className="route-summary-card">
              <div>
                <StatusBadge label="Sugestão acadêmica" tone="success" />
                <h3>{recommendedRoute.name}</h3>
                <p>{recommendedRoute.description}</p>
              </div>
              <dl>
                <div><dt>Distância</dt><dd>{recommendedRoute.distanceKm} km</dd></div>
                <div><dt>Duração</dt><dd>{recommendedRoute.durationMinutes} min</dd></div>
                <div><dt>Paradas</dt><dd>{recommendedRoute.municipalityIds.length}</dd></div>
              </dl>
              <ol className="stop-sequence">
                {recommendedRoute.municipalityIds.map((id) => (
                  <li key={id}>{municipalityById(id)?.name}</li>
                ))}
              </ol>
            </div>
          ) : null}
        </Panel>
      </div>
    </div>
  );
}

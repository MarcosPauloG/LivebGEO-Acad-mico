"use client";

import { ArrowRight, Clock3, Fuel, Route, WandSparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { routeScenarios } from "@/data/academic";
import { municipalityById } from "@/lib/labels";
import {
  buildNearestNeighborOrder,
  routeMatrixKey,
  sumRouteOrder,
  type MatrixValue
} from "@/lib/route-logistics";
import type { RouteScenario } from "@/lib/types";
import { Panel, ProgressBar, StatusBadge } from "../shared";

const academicMatrix = new Map<string, MatrixValue>([
  [routeMatrixKey("m01", "m02"), { distanceKm: 20, durationMinutes: 31 }],
  [routeMatrixKey("m01", "m03"), { distanceKm: 40, durationMinutes: 55 }],
  [routeMatrixKey("m01", "m04"), { distanceKm: 80, durationMinutes: 98 }],
  [routeMatrixKey("m02", "m03"), { distanceKm: 18, durationMinutes: 27 }],
  [routeMatrixKey("m02", "m04"), { distanceKm: 60, durationMinutes: 77 }],
  [routeMatrixKey("m03", "m04"), { distanceKm: 42, durationMinutes: 61 }]
]);

export function RoutesView({ canCompare }: { canCompare: boolean }) {
  const [baselineId, setBaselineId] = useState(routeScenarios[0].id);
  const [comparisonId, setComparisonId] = useState(routeScenarios[1].id);
  const [generatedRoute, setGeneratedRoute] = useState<RouteScenario | null>(null);
  const baseline = routeScenarios.find((route) => route.id === baselineId) ?? routeScenarios[0];
  const comparisonFixture =
    routeScenarios.find((route) => route.id === comparisonId) ?? routeScenarios[1];
  const comparison =
    generatedRoute && comparisonFixture.id === "route-suggested"
      ? generatedRoute
      : comparisonFixture;
  const savings = useMemo(
    () => ({
      distance: baseline.distanceKm - comparison.distanceKm,
      duration: baseline.durationMinutes - comparison.durationMinutes,
      cost: baseline.costIndex - comparison.costIndex
    }),
    [baseline, comparison]
  );

  function generateSuggestion() {
    if (!canCompare) return;
    const reference = routeScenarios[0];
    const origin = reference.municipalityIds[0];
    const suggestion = buildNearestNeighborOrder(
      origin,
      reference.municipalityIds.slice(1),
      academicMatrix
    );
    if (!suggestion) return;
    const municipalityIds = [origin, ...suggestion];
    const totals = sumRouteOrder(municipalityIds, academicMatrix);
    if (!totals) return;

    setBaselineId(reference.id);
    setComparisonId("route-suggested");
    setGeneratedRoute({
      ...routeScenarios[1],
      municipalityIds,
      distanceKm: totals.distanceKm,
      durationMinutes: totals.durationMinutes,
      costIndex: Math.round(
        (totals.distanceKm / reference.distanceKm) * reference.costIndex
      ),
      description: "Ordem e métricas recalculadas agora sobre a matriz fictícia local."
    });
  }

  return (
    <div className="view-stack">
      <Panel
        action={
          <span className="territory-inline">
            <StatusBadge
              label={generatedRoute ? "Sugestão gerada localmente" : "Matriz local determinística"}
              tone={generatedRoute ? "success" : "info"}
            />
            <button className="primary-button" disabled={!canCompare} onClick={generateSuggestion}>
              <WandSparkles size={16} /> Gerar sugestão
            </button>
          </span>
        }
        eyebrow="COMPARAÇÃO DE CENÁRIOS"
        title="Rotas simuladas"
      >
        <div className="route-selectors">
          <label>
            <span>Rota de referência</span>
            <select disabled={!canCompare} onChange={(event) => setBaselineId(event.target.value)} value={baselineId}>
              {routeScenarios.map((route) => <option key={route.id} value={route.id}>{route.name}</option>)}
            </select>
          </label>
          <ArrowRight className="route-arrow" size={22} />
          <label>
            <span>Rota comparada</span>
            <select
              disabled={!canCompare}
              onChange={(event) => {
                setComparisonId(event.target.value);
                setGeneratedRoute(null);
              }}
              value={comparisonId}
            >
              {routeScenarios.map((route) => <option key={route.id} value={route.id}>{route.name}</option>)}
            </select>
          </label>
        </div>

        <div className="route-comparison-grid">
          {[baseline, comparison].map((route, index) => (
            <article className={route.recommended ? "route-card route-card--recommended" : "route-card"} key={`${route.id}-${index}`}>
              <header>
                <span className="route-icon"><Route size={20} /></span>
                <span><strong>{route.name}</strong><small>{index === 0 ? "Referência" : "Comparada"}</small></span>
                {route.recommended ? <StatusBadge label="Recomendada" tone="success" /> : null}
              </header>
              <p>{route.description}</p>
              <dl className="route-metrics">
                <div><dt><Route size={15} /> Distância</dt><dd>{route.distanceKm} km</dd></div>
                <div><dt><Clock3 size={15} /> Duração</dt><dd>{route.durationMinutes} min</dd></div>
                <div><dt><Fuel size={15} /> Índice de custo</dt><dd>{route.costIndex}</dd></div>
              </dl>
              <ol className="route-stops">
                {route.municipalityIds.map((id, stopIndex) => (
                  <li key={id}><span>{stopIndex + 1}</span>{municipalityById(id)?.name}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </Panel>

      <div className="savings-panel">
        <div><span>Diferença de distância</span><strong className={savings.distance >= 0 ? "positive" : "negative"}>{savings.distance >= 0 ? "−" : "+"}{Math.abs(savings.distance)} km</strong><ProgressBar value={Math.max(0, Math.min(100, 50 + savings.distance))} /></div>
        <div><span>Diferença de tempo</span><strong className={savings.duration >= 0 ? "positive" : "negative"}>{savings.duration >= 0 ? "−" : "+"}{Math.abs(savings.duration)} min</strong><ProgressBar value={Math.max(0, Math.min(100, 50 + savings.duration / 2))} /></div>
        <div><span>Diferença de custo</span><strong className={savings.cost >= 0 ? "positive" : "negative"}>{savings.cost >= 0 ? "−" : "+"}{Math.abs(savings.cost)} pontos</strong><ProgressBar value={Math.max(0, Math.min(100, 50 + savings.cost))} /></div>
      </div>

      <div className="info-callout">
        <Route size={19} />
        <span>Distâncias, tempos e custos são fictícios. Nenhuma requisição é enviada a Google Maps, geocodificador ou serviço externo.</span>
      </div>
    </div>
  );
}

"use client";

import { CalendarPlus, CheckCircle2, MapPin, Plus, UserRound } from "lucide-react";
import type { Dispatch, FormEvent, SetStateAction } from "react";
import { useState } from "react";
import { pointsOfInterest, representatives } from "@/data/academic";
import { formatDate, municipalityById, pointById, representativeById } from "@/lib/labels";
import type { Visit } from "@/lib/types";
import { Panel, StatusBadge } from "../shared";

export function VisitsView({
  visits,
  setVisits,
  canWrite
}: {
  visits: Visit[];
  setVisits: Dispatch<SetStateAction<Visit[]>>;
  canWrite: boolean;
}) {
  const [pointId, setPointId] = useState(pointsOfInterest[0].id);
  const [representativeId, setRepresentativeId] = useState(
    representatives.find((item) => item.status === "active")?.id ?? representatives[0].id
  );
  const [scheduledDate, setScheduledDate] = useState("2026-09-25");
  const [objective, setObjective] = useState("Validar hipótese acadêmica de cobertura");

  function addVisit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canWrite || !pointId || !representativeId || !scheduledDate || !objective.trim()) {
      return;
    }
    setVisits((current) => [
      ...current,
      {
        id: `v-academic-${current.length + 1}`,
        pointId,
        representativeId,
        scheduledDate,
        objective: objective.trim(),
        status: "planned"
      }
    ]);
  }

  function completeVisit(id: string) {
    if (!canWrite) return;
    setVisits((current) =>
      current.map((visit) =>
        visit.id === id ? { ...visit, status: "completed" } : visit
      )
    );
  }

  return (
    <div className="content-grid content-grid--visits">
      <Panel eyebrow="PLANEJAMENTO DE CAMPO" title="Agenda simulada">
        <div className="visit-list">
          {visits.map((visit) => {
            const point = pointById(visit.pointId);
            const municipality = point ? municipalityById(point.municipalityId) : null;
            const representative = representativeById(visit.representativeId);
            return (
              <article className="visit-card" key={visit.id}>
                <div className="visit-date">
                  <strong>{formatDate(visit.scheduledDate).slice(0, 5)}</strong>
                  <small>{visit.scheduledDate.slice(0, 4)}</small>
                </div>
                <div className="visit-copy">
                  <div>
                    <strong>{point?.name}</strong>
                    <StatusBadge
                      label={visit.status === "completed" ? "Concluída" : "Planejada"}
                      tone={visit.status === "completed" ? "success" : "info"}
                    />
                  </div>
                  <p>{visit.objective}</p>
                  <small><MapPin size={13} /> {municipality?.name}</small>
                  <small><UserRound size={13} /> {representative?.name}</small>
                </div>
                {canWrite && visit.status !== "completed" ? (
                  <button
                    aria-label="Marcar visita como concluída"
                    className="icon-button"
                    onClick={() => completeVisit(visit.id)}
                    title="Concluir no estado local"
                  >
                    <CheckCircle2 size={19} />
                  </button>
                ) : null}
              </article>
            );
          })}
        </div>
      </Panel>

      <Panel eyebrow="NOVO REGISTRO LOCAL" title="Planejar visita">
        <form className="visit-form" onSubmit={addVisit}>
          <label>
            <span>Ponto fictício</span>
            <select onChange={(event) => setPointId(event.target.value)} value={pointId}>
              {pointsOfInterest.map((point) => (
                <option key={point.id} value={point.id}>{point.name}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Representante fictício</span>
            <select
              onChange={(event) => setRepresentativeId(event.target.value)}
              value={representativeId}
            >
              {representatives
                .filter((representative) => representative.status === "active")
                .map((representative) => (
                  <option key={representative.id} value={representative.id}>{representative.name}</option>
                ))}
            </select>
          </label>
          <label>
            <span>Data da simulação</span>
            <input
              onChange={(event) => setScheduledDate(event.target.value)}
              type="date"
              value={scheduledDate}
            />
          </label>
          <label>
            <span>Objetivo</span>
            <textarea
              onChange={(event) => setObjective(event.target.value)}
              rows={4}
              value={objective}
            />
          </label>
          <button className="primary-button" disabled={!canWrite}>
            <Plus size={17} /> Adicionar ao estado local
          </button>
          <p className="form-helper">
            <CalendarPlus size={15} /> {canWrite
              ? "A alteração existe só nesta sessão e some ao recarregar."
              : "Este perfil demonstra acesso somente para leitura."}
          </p>
        </form>
      </Panel>
    </div>
  );
}

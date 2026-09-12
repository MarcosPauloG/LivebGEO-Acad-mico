"use client";

import { Layers3, MapPin, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { municipalities, pointsOfInterest, territories } from "@/data/academic";
import { coverageLabels, coverageTones, territoryById } from "@/lib/labels";
import type { AcademicMapLayers } from "../academic-map";
import { AcademicMap } from "../academic-map";
import { Panel, StatusBadge } from "../shared";

export function MapView({
  selectedMunicipalityId,
  onSelectMunicipality
}: {
  selectedMunicipalityId: string | null;
  onSelectMunicipality: (id: string | null) => void;
}) {
  const [selectedTerritoryId, setSelectedTerritoryId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [layers, setLayers] = useState<AcademicMapLayers>({
    municipalities: true,
    points: true,
    uncovered: true
  });

  const selectedMunicipality = municipalities.find(
    (municipality) => municipality.id === selectedMunicipalityId
  );
  const selectedTerritory = territories.find(
    (territory) => territory.id === selectedTerritoryId
  );
  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    if (normalized.length < 2) return [];
    return municipalities
      .filter(
        (municipality) =>
          municipality.name.toLocaleLowerCase("pt-BR").includes(normalized) ||
          municipality.code.toLocaleLowerCase("pt-BR").includes(normalized)
      )
      .slice(0, 6);
  }, [query]);

  function selectMunicipality(id: string) {
    const municipality = municipalities.find((item) => item.id === id);
    onSelectMunicipality(id);
    setSelectedTerritoryId(municipality?.territoryId ?? null);
    setQuery(municipality?.name ?? "");
  }

  function selectTerritory(id: string) {
    setSelectedTerritoryId(id);
    onSelectMunicipality(null);
    setQuery("");
  }

  return (
    <div className="view-stack">
      <div className="map-toolbar">
        <label className="search-field">
          <Search size={18} />
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar nome ou código SIM-*"
            value={query}
          />
          {results.length ? (
            <span className="search-popover">
              {results.map((municipality) => (
                <button key={municipality.id} onClick={() => selectMunicipality(municipality.id)}>
                  <span><strong>{municipality.name}</strong><small>{municipality.code}</small></span>
                  <span>{territoryById(municipality.territoryId)?.code}</span>
                </button>
              ))}
            </span>
          ) : null}
        </label>
        <div className="layer-switches">
          <span><Layers3 size={17} /> Camadas</span>
          {(Object.keys(layers) as Array<keyof AcademicMapLayers>).map((layer) => (
            <label key={layer}>
              <input
                checked={layers[layer]}
                onChange={(event) =>
                  setLayers((current) => ({ ...current, [layer]: event.target.checked }))
                }
                type="checkbox"
              />
              {layer === "municipalities"
                ? "Municípios"
                : layer === "points"
                  ? "Pontos"
                  : "Lacunas"}
            </label>
          ))}
        </div>
      </div>

      <div className="map-layout">
        <Panel className="map-panel" eyebrow="RECORTE SINTÉTICO" title="Mapa de territórios">
          <AcademicMap
            layers={layers}
            onSelectMunicipality={selectMunicipality}
            onSelectTerritory={selectTerritory}
            selectedMunicipalityId={selectedMunicipalityId}
            selectedTerritoryId={selectedTerritoryId}
          />
        </Panel>

        <aside className="map-inspector panel">
          <span className="eyebrow">DETALHES DA SELEÇÃO</span>
          {selectedMunicipality ? (
            <>
              <span className="inspector-icon"><MapPin size={22} /></span>
              <h2>{selectedMunicipality.name}</h2>
              <p>{selectedMunicipality.code} · código sintético, sem relação com IBGE</p>
              <dl className="detail-list">
                <div><dt>Território</dt><dd>{territoryById(selectedMunicipality.territoryId)?.name}</dd></div>
                <div><dt>Cobertura</dt><dd><StatusBadge label={coverageLabels[selectedMunicipality.coverage]} tone={coverageTones[selectedMunicipality.coverage]} /></dd></div>
                <div><dt>Índice populacional</dt><dd>{selectedMunicipality.populationIndex}/100</dd></div>
                <div><dt>Expansão</dt><dd>{selectedMunicipality.expansionScore}/100</dd></div>
                <div><dt>Pontos fictícios</dt><dd>{pointsOfInterest.filter((point) => point.municipalityId === selectedMunicipality.id).length}</dd></div>
              </dl>
              <button className="secondary-button full-button" onClick={() => onSelectMunicipality(null)}>
                Limpar seleção
              </button>
            </>
          ) : selectedTerritory ? (
            <>
              <span className="territory-color" style={{ background: selectedTerritory.color }} />
              <h2>{selectedTerritory.name}</h2>
              <p>{selectedTerritory.code} · agrupamento acadêmico fictício</p>
              <dl className="detail-list">
                <div><dt>Municípios</dt><dd>{municipalities.filter((item) => item.territoryId === selectedTerritory.id).length}</dd></div>
                <div><dt>Representantes ativos</dt><dd>{selectedTerritory.activeRepresentatives}</dd></div>
                <div><dt>Meta simulada</dt><dd>{selectedTerritory.approvedRepresentatives}</dd></div>
              </dl>
            </>
          ) : (
            <div className="empty-inspector">
              <MapPin size={28} />
              <h2>Selecione uma área</h2>
              <p>Clique em um território ou município para ver seus indicadores fictícios.</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

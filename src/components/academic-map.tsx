"use client";

import { pointsOfInterest, municipalities, territories } from "@/data/academic";

export type AcademicMapLayers = {
  municipalities: boolean;
  points: boolean;
  uncovered: boolean;
};

function isActivationKey(key: string) {
  return key === "Enter" || key === " ";
}

export function AcademicMap({
  layers = { municipalities: true, points: true, uncovered: true },
  selectedTerritoryId,
  selectedMunicipalityId,
  onSelectTerritory,
  onSelectMunicipality,
  compact = false
}: {
  layers?: AcademicMapLayers;
  selectedTerritoryId?: string | null;
  selectedMunicipalityId?: string | null;
  onSelectTerritory?: (id: string) => void;
  onSelectMunicipality?: (id: string) => void;
  compact?: boolean;
}) {
  return (
    <div className={`academic-map ${compact ? "academic-map--compact" : ""}`}>
      <div className="map-watermark">
        MAPA ESQUEMÁTICO · POSIÇÕES SINTÉTICAS
      </div>
      <svg
        aria-label="Mapa esquemático de territórios acadêmicos"
        role="img"
        viewBox="0 0 100 78"
      >
        <defs>
          <pattern id="map-grid" height="5" patternUnits="userSpaceOnUse" width="5">
            <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#dbe5f0" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect fill="url(#map-grid)" height="78" width="100" />

        {territories.map((territory) => (
          <polygon
            aria-label={territory.name}
            className={
              selectedTerritoryId === territory.id
                ? "territory-shape territory-shape--selected"
                : "territory-shape"
            }
            fill={territory.color}
            key={territory.id}
            onClick={() => onSelectTerritory?.(territory.id)}
            onKeyDown={(event) => {
              if (onSelectTerritory && isActivationKey(event.key)) {
                event.preventDefault();
                onSelectTerritory(territory.id);
              }
            }}
            points={territory.polygon}
            role={onSelectTerritory ? "button" : undefined}
            stroke={territory.color}
            tabIndex={onSelectTerritory ? 0 : undefined}
          >
            <title>{`${territory.code} · ${territory.name}`}</title>
          </polygon>
        ))}

        {layers.municipalities
          ? municipalities.map((municipality) => {
              const isUncovered = municipality.coverage === "uncovered";
              if (isUncovered && !layers.uncovered) return null;
              return (
                <g
                  className="municipality-marker"
                  key={municipality.id}
                  onClick={() => onSelectMunicipality?.(municipality.id)}
                  onKeyDown={(event) => {
                    if (onSelectMunicipality && isActivationKey(event.key)) {
                      event.preventDefault();
                      onSelectMunicipality(municipality.id);
                    }
                  }}
                  role={onSelectMunicipality ? "button" : undefined}
                  tabIndex={onSelectMunicipality ? 0 : undefined}
                >
                  <circle
                    className={
                      selectedMunicipalityId === municipality.id
                        ? "municipality-dot municipality-dot--selected"
                        : isUncovered
                          ? "municipality-dot municipality-dot--uncovered"
                          : "municipality-dot"
                    }
                    cx={municipality.point.x}
                    cy={municipality.point.y}
                    r={compact ? 1.2 : 1.5}
                  />
                  <title>{`${municipality.code} · ${municipality.name}`}</title>
                </g>
              );
            })
          : null}

        {layers.points
          ? pointsOfInterest.map((point) => (
              <g className="poi-marker" key={point.id}>
                <rect
                  height={compact ? 2 : 2.6}
                  rx="0.5"
                  width={compact ? 2 : 2.6}
                  x={point.point.x - (compact ? 1 : 1.3)}
                  y={point.point.y - (compact ? 1 : 1.3)}
                />
                <title>{point.name}</title>
              </g>
            ))
          : null}
      </svg>
      <div className="map-legend">
        <span><i className="legend-dot" /> Município</span>
        <span><i className="legend-dot legend-dot--gap" /> Sem cobertura</span>
        <span><i className="legend-square" /> Ponto fictício</span>
      </div>
    </div>
  );
}

import { normalizeName } from "./normalize";
import type {
  Municipality,
  PointOfInterest,
  Representative,
  Territory
} from "./types";

export function representativeDeficit(
  approvedRepresentatives: number,
  activeRepresentatives: number
) {
  return Math.max(approvedRepresentatives - activeRepresentatives, 0);
}

export function coveragePercentage(municipalities: Municipality[]) {
  if (!municipalities.length) return 0;
  const coverageUnits = municipalities.reduce((total, municipality) => {
    if (municipality.coverage === "covered") return total + 1;
    if (municipality.coverage === "partial") return total + 0.5;
    return total;
  }, 0);
  return Math.round((coverageUnits / municipalities.length) * 100);
}

export function findDuplicatePointGroups(points: PointOfInterest[]) {
  const grouped = new Map<string, PointOfInterest[]>();
  for (const point of points) {
    const key = normalizeName(point.name);
    grouped.set(key, [...(grouped.get(key) ?? []), point]);
  }
  return [...grouped.values()].filter((group) => group.length > 1);
}

export function totalRepresentativeDeficit(territories: Territory[]) {
  return territories.reduce(
    (total, territory) =>
      total +
      representativeDeficit(
        territory.approvedRepresentatives,
        territory.activeRepresentatives
      ),
    0
  );
}

export function coveredMunicipalityIds(representatives: Representative[]) {
  return new Set(
    representatives
      .filter((representative) => representative.status === "active")
      .flatMap((representative) => representative.municipalityIds)
  );
}

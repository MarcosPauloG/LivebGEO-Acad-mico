export type AcademicRole =
  | "coordination"
  | "analysis"
  | "representation"
  | "observation";

export type ViewId =
  | "overview"
  | "map"
  | "territories"
  | "points"
  | "representatives"
  | "visits"
  | "routes"
  | "coverage"
  | "expansion"
  | "access";

export type Permission =
  | "overview:read"
  | "map:read"
  | "territories:read"
  | "points:read"
  | "representatives:read"
  | "visits:read"
  | "visits:write"
  | "routes:read"
  | "routes:compare"
  | "coverage:read"
  | "expansion:read"
  | "access:read";

export type AcademicSession = {
  id: string;
  displayName: string;
  email: string;
  role: AcademicRole;
  source: "gestao-mock";
  expiresAt: string;
};

export type MapPoint = {
  x: number;
  y: number;
};

export type Territory = {
  id: string;
  code: string;
  name: string;
  color: string;
  polygon: string;
  approvedRepresentatives: number;
  activeRepresentatives: number;
  decisionNote: string;
};

export type MunicipalityCoverage = "covered" | "partial" | "uncovered";

export type Municipality = {
  id: string;
  code: string;
  name: string;
  territoryId: string;
  point: MapPoint;
  populationIndex: number;
  coverage: MunicipalityCoverage;
  expansionScore: number;
};

export type PointOfInterest = {
  id: string;
  name: string;
  category: "real-estate" | "commercial" | "reference";
  municipalityId: string;
  point: MapPoint;
  status: "prospect" | "mapped" | "visit-planned";
};

export type Representative = {
  id: string;
  name: string;
  email: string;
  status: "active" | "planned";
  territoryIds: string[];
  municipalityIds: string[];
};

export type Visit = {
  id: string;
  pointId: string;
  representativeId: string;
  scheduledDate: string;
  objective: string;
  status: "planned" | "completed" | "pending";
};

export type RouteScenario = {
  id: string;
  name: string;
  description: string;
  municipalityIds: string[];
  distanceKm: number;
  durationMinutes: number;
  costIndex: number;
  recommended: boolean;
};

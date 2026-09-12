import type {
  Municipality,
  PointOfInterest,
  Representative,
  RouteScenario,
  Territory,
  Visit
} from "@/lib/types";

export const academicDatasetNotice =
  "Amostra 100% sintética: nomes, posições, vínculos e indicadores não representam a operação real da Liveb.";

export const territories: Territory[] = [
  {
    id: "t-alpha",
    code: "T01",
    name: "Território Alfa",
    color: "#155eef",
    polygon: "5,8 32,5 35,30 10,34",
    approvedRepresentatives: 2,
    activeRepresentatives: 1,
    decisionNote: "Amostra acadêmica com cobertura consolidada."
  },
  {
    id: "t-beta",
    code: "T02",
    name: "Território Beta",
    color: "#7f56d9",
    polygon: "34,6 62,8 59,35 36,30",
    approvedRepresentatives: 2,
    activeRepresentatives: 1,
    decisionNote: "Amostra acadêmica com cobertura parcial."
  },
  {
    id: "t-gamma",
    code: "T03",
    name: "Território Gama",
    color: "#0e9384",
    polygon: "64,9 92,14 88,39 60,35",
    approvedRepresentatives: 1,
    activeRepresentatives: 1,
    decisionNote: "Amostra acadêmica com pontos dispersos."
  },
  {
    id: "t-delta",
    code: "T04",
    name: "Território Delta",
    color: "#dc6803",
    polygon: "9,36 36,32 40,64 13,70",
    approvedRepresentatives: 2,
    activeRepresentatives: 1,
    decisionNote: "Amostra acadêmica priorizada para visitas."
  },
  {
    id: "t-epsilon",
    code: "T05",
    name: "Território Épsilon",
    color: "#d92d20",
    polygon: "38,34 60,37 65,70 40,64",
    approvedRepresentatives: 1,
    activeRepresentatives: 0,
    decisionNote: "Amostra acadêmica sem cobertura ativa."
  },
  {
    id: "t-zeta",
    code: "T06",
    name: "Território Zeta",
    color: "#039855",
    polygon: "61,38 88,41 92,70 66,71",
    approvedRepresentatives: 2,
    activeRepresentatives: 0,
    decisionNote: "Amostra acadêmica para hipótese de expansão."
  }
];

export const municipalities: Municipality[] = [
  {
    id: "m01",
    code: "SIM-001",
    name: "Município Modelo Aurora",
    territoryId: "t-alpha",
    point: { x: 17, y: 16 },
    populationIndex: 82,
    coverage: "covered",
    expansionScore: 71
  },
  {
    id: "m02",
    code: "SIM-002",
    name: "Município Modelo Brisa",
    territoryId: "t-alpha",
    point: { x: 26, y: 25 },
    populationIndex: 55,
    coverage: "covered",
    expansionScore: 52
  },
  {
    id: "m03",
    code: "SIM-003",
    name: "Município Modelo Cedro",
    territoryId: "t-alpha",
    point: { x: 13, y: 28 },
    populationIndex: 39,
    coverage: "partial",
    expansionScore: 64
  },
  {
    id: "m04",
    code: "SIM-004",
    name: "Município Modelo Duna",
    territoryId: "t-beta",
    point: { x: 44, y: 17 },
    populationIndex: 76,
    coverage: "covered",
    expansionScore: 58
  },
  {
    id: "m05",
    code: "SIM-005",
    name: "Município Modelo Estrela",
    territoryId: "t-beta",
    point: { x: 53, y: 27 },
    populationIndex: 67,
    coverage: "partial",
    expansionScore: 76
  },
  {
    id: "m06",
    code: "SIM-006",
    name: "Município Modelo Fonte",
    territoryId: "t-beta",
    point: { x: 40, y: 29 },
    populationIndex: 44,
    coverage: "uncovered",
    expansionScore: 81
  },
  {
    id: "m07",
    code: "SIM-007",
    name: "Município Modelo Girassol",
    territoryId: "t-gamma",
    point: { x: 73, y: 20 },
    populationIndex: 62,
    coverage: "covered",
    expansionScore: 49
  },
  {
    id: "m08",
    code: "SIM-008",
    name: "Município Modelo Horizonte",
    territoryId: "t-gamma",
    point: { x: 84, y: 28 },
    populationIndex: 89,
    coverage: "covered",
    expansionScore: 66
  },
  {
    id: "m09",
    code: "SIM-009",
    name: "Município Modelo Íris",
    territoryId: "t-gamma",
    point: { x: 68, y: 32 },
    populationIndex: 33,
    coverage: "partial",
    expansionScore: 57
  },
  {
    id: "m10",
    code: "SIM-010",
    name: "Município Modelo Jasmim",
    territoryId: "t-delta",
    point: { x: 20, y: 48 },
    populationIndex: 70,
    coverage: "partial",
    expansionScore: 78
  },
  {
    id: "m11",
    code: "SIM-011",
    name: "Município Modelo Lago",
    territoryId: "t-delta",
    point: { x: 30, y: 58 },
    populationIndex: 51,
    coverage: "covered",
    expansionScore: 55
  },
  {
    id: "m12",
    code: "SIM-012",
    name: "Município Modelo Mirante",
    territoryId: "t-delta",
    point: { x: 15, y: 63 },
    populationIndex: 46,
    coverage: "uncovered",
    expansionScore: 84
  },
  {
    id: "m13",
    code: "SIM-013",
    name: "Município Modelo Nascente",
    territoryId: "t-epsilon",
    point: { x: 48, y: 47 },
    populationIndex: 93,
    coverage: "uncovered",
    expansionScore: 94
  },
  {
    id: "m14",
    code: "SIM-014",
    name: "Município Modelo Orvalho",
    territoryId: "t-epsilon",
    point: { x: 56, y: 59 },
    populationIndex: 59,
    coverage: "uncovered",
    expansionScore: 87
  },
  {
    id: "m15",
    code: "SIM-015",
    name: "Município Modelo Pétala",
    territoryId: "t-epsilon",
    point: { x: 43, y: 61 },
    populationIndex: 42,
    coverage: "uncovered",
    expansionScore: 69
  },
  {
    id: "m16",
    code: "SIM-016",
    name: "Município Modelo Quartzo",
    territoryId: "t-zeta",
    point: { x: 72, y: 48 },
    populationIndex: 85,
    coverage: "uncovered",
    expansionScore: 91
  },
  {
    id: "m17",
    code: "SIM-017",
    name: "Município Modelo Raio",
    territoryId: "t-zeta",
    point: { x: 84, y: 57 },
    populationIndex: 64,
    coverage: "uncovered",
    expansionScore: 82
  },
  {
    id: "m18",
    code: "SIM-018",
    name: "Município Modelo Semente",
    territoryId: "t-zeta",
    point: { x: 75, y: 66 },
    populationIndex: 48,
    coverage: "uncovered",
    expansionScore: 73
  }
];

export const pointsOfInterest: PointOfInterest[] = [
  {
    id: "p01",
    name: "Imobiliária Modelo Horizonte",
    category: "real-estate",
    municipalityId: "m01",
    point: { x: 19, y: 18 },
    status: "mapped"
  },
  {
    id: "p02",
    name: "Imobiliária Modelo Horizonte",
    category: "real-estate",
    municipalityId: "m01",
    point: { x: 20, y: 19 },
    status: "prospect"
  },
  {
    id: "p03",
    name: "Imobiliária Escola Aurora",
    category: "real-estate",
    municipalityId: "m02",
    point: { x: 27, y: 23 },
    status: "visit-planned"
  },
  {
    id: "p04",
    name: "Ponto Comercial Didático Beta",
    category: "commercial",
    municipalityId: "m04",
    point: { x: 46, y: 19 },
    status: "mapped"
  },
  {
    id: "p05",
    name: "Imobiliária Escola Cedro",
    category: "real-estate",
    municipalityId: "m05",
    point: { x: 51, y: 25 },
    status: "prospect"
  },
  {
    id: "p06",
    name: "Referência Acadêmica Gama",
    category: "reference",
    municipalityId: "m08",
    point: { x: 82, y: 30 },
    status: "mapped"
  },
  {
    id: "p07",
    name: "Imobiliária Escola Delta",
    category: "real-estate",
    municipalityId: "m10",
    point: { x: 22, y: 50 },
    status: "visit-planned"
  },
  {
    id: "p08",
    name: "Imobiliária Escola Mirante",
    category: "real-estate",
    municipalityId: "m12",
    point: { x: 17, y: 61 },
    status: "prospect"
  },
  {
    id: "p09",
    name: "Ponto Comercial Didático Épsilon",
    category: "commercial",
    municipalityId: "m13",
    point: { x: 50, y: 49 },
    status: "prospect"
  },
  {
    id: "p10",
    name: "Imobiliária Escola Orvalho",
    category: "real-estate",
    municipalityId: "m14",
    point: { x: 58, y: 57 },
    status: "prospect"
  },
  {
    id: "p11",
    name: "Referência Acadêmica Zeta",
    category: "reference",
    municipalityId: "m16",
    point: { x: 70, y: 50 },
    status: "mapped"
  },
  {
    id: "p12",
    name: "Imobiliária Escola Raio",
    category: "real-estate",
    municipalityId: "m17",
    point: { x: 85, y: 55 },
    status: "prospect"
  }
];

export const representatives: Representative[] = [
  {
    id: "r01",
    name: "Representante Acadêmico A",
    email: "representante.a@example.invalid",
    status: "active",
    territoryIds: ["t-alpha"],
    municipalityIds: ["m01", "m02", "m03"]
  },
  {
    id: "r02",
    name: "Representante Acadêmico B",
    email: "representante.b@example.invalid",
    status: "active",
    territoryIds: ["t-beta", "t-gamma"],
    municipalityIds: ["m04", "m05", "m07", "m08", "m09"]
  },
  {
    id: "r03",
    name: "Representante Acadêmico C",
    email: "representante.c@example.invalid",
    status: "active",
    territoryIds: ["t-delta"],
    municipalityIds: ["m10", "m11"]
  },
  {
    id: "r04",
    name: "Representante Acadêmico D",
    email: "representante.d@example.invalid",
    status: "planned",
    territoryIds: ["t-epsilon", "t-zeta"],
    municipalityIds: []
  }
];

export const initialVisits: Visit[] = [
  {
    id: "v01",
    pointId: "p03",
    representativeId: "r01",
    scheduledDate: "2026-09-18",
    objective: "Validar interesse no cenário fictício",
    status: "planned"
  },
  {
    id: "v02",
    pointId: "p07",
    representativeId: "r03",
    scheduledDate: "2026-09-19",
    objective: "Apresentar fluxo acadêmico",
    status: "planned"
  },
  {
    id: "v03",
    pointId: "p04",
    representativeId: "r02",
    scheduledDate: "2026-09-12",
    objective: "Mapear hipótese de expansão",
    status: "completed"
  }
];

export const routeScenarios: RouteScenario[] = [
  {
    id: "route-current",
    name: "Sequência de referência",
    description: "Ordem manual usada como base para a comparação didática.",
    municipalityIds: ["m01", "m03", "m02", "m04"],
    distanceKm: 146,
    durationMinutes: 218,
    costIndex: 100,
    recommended: false
  },
  {
    id: "route-suggested",
    name: "Sugestão simulada",
    description: "Ordem calculada sobre uma matriz fictícia e determinística.",
    municipalityIds: ["m01", "m02", "m03", "m04"],
    distanceKm: 119,
    durationMinutes: 181,
    costIndex: 82,
    recommended: true
  },
  {
    id: "route-coverage",
    name: "Prioridade de cobertura",
    description: "Alternativa que inclui uma região sem representante ativo.",
    municipalityIds: ["m01", "m04", "m06", "m13"],
    distanceKm: 164,
    durationMinutes: 244,
    costIndex: 112,
    recommended: false
  }
];

import type { AcademicRole, Permission, ViewId } from "./types";

export const roleLabels: Record<AcademicRole, string> = {
  coordination: "Coordenação acadêmica",
  analysis: "Análise territorial",
  representation: "Representação de campo",
  observation: "Observação"
};

const allPermissions: Permission[] = [
  "overview:read",
  "map:read",
  "territories:read",
  "points:read",
  "representatives:read",
  "visits:read",
  "visits:write",
  "routes:read",
  "routes:compare",
  "coverage:read",
  "expansion:read",
  "access:read"
];

export const rolePermissions: Record<AcademicRole, Permission[]> = {
  coordination: allPermissions,
  analysis: allPermissions.filter(
    (permission) => permission !== "access:read"
  ),
  representation: [
    "map:read",
    "territories:read",
    "points:read",
    "visits:read",
    "visits:write",
    "routes:read",
    "routes:compare",
    "coverage:read"
  ],
  observation: [
    "overview:read",
    "map:read",
    "territories:read",
    "points:read",
    "representatives:read",
    "visits:read",
    "routes:read",
    "coverage:read",
    "expansion:read"
  ]
};

export const viewPermissions: Record<ViewId, Permission> = {
  overview: "overview:read",
  map: "map:read",
  territories: "territories:read",
  points: "points:read",
  representatives: "representatives:read",
  visits: "visits:read",
  routes: "routes:read",
  coverage: "coverage:read",
  expansion: "expansion:read",
  access: "access:read"
};

export function hasPermission(role: AcademicRole, permission: Permission) {
  return rolePermissions[role].includes(permission);
}

export function canOpenView(role: AcademicRole, view: ViewId) {
  return hasPermission(role, viewPermissions[view]);
}

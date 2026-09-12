import { municipalities, pointsOfInterest, representatives, territories } from "@/data/academic";
import type { MunicipalityCoverage, PointOfInterest } from "./types";

export function territoryById(id: string) {
  return territories.find((territory) => territory.id === id);
}

export function municipalityById(id: string) {
  return municipalities.find((municipality) => municipality.id === id);
}

export function pointById(id: string) {
  return pointsOfInterest.find((point) => point.id === id);
}

export function representativeById(id: string) {
  return representatives.find((representative) => representative.id === id);
}

export const coverageLabels: Record<MunicipalityCoverage, string> = {
  covered: "Coberta",
  partial: "Parcial",
  uncovered: "Sem cobertura"
};

export const coverageTones: Record<
  MunicipalityCoverage,
  "success" | "warning" | "danger"
> = {
  covered: "success",
  partial: "warning",
  uncovered: "danger"
};

export const pointCategoryLabels: Record<PointOfInterest["category"], string> = {
  "real-estate": "Imobiliária fictícia",
  commercial: "Ponto comercial fictício",
  reference: "Referência acadêmica"
};

export const pointStatusLabels: Record<PointOfInterest["status"], string> = {
  prospect: "Mapeado para análise",
  mapped: "Validado no mock",
  "visit-planned": "Visita planejada"
};

export function formatNumber(value: number) {
  return new Intl.NumberFormat("pt-BR").format(value);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(
    new Date(`${value}T12:00:00Z`)
  );
}

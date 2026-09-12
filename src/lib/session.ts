import type { AcademicRole, AcademicSession } from "./types";

const sessionKey = "liveb-geo-academico/session-v1";
const academicRoles = new Set<AcademicRole>([
  "coordination",
  "analysis",
  "representation",
  "observation"
]);

function isAcademicSession(value: unknown): value is AcademicSession {
  if (!value || typeof value !== "object") return false;
  const session = value as Partial<AcademicSession>;
  const expiresAt =
    typeof session.expiresAt === "string"
      ? Date.parse(session.expiresAt)
      : Number.NaN;

  return (
    typeof session.id === "string" &&
    typeof session.displayName === "string" &&
    typeof session.email === "string" &&
    session.email.endsWith("@example.invalid") &&
    session.source === "gestao-mock" &&
    typeof session.role === "string" &&
    academicRoles.has(session.role as AcademicRole) &&
    Number.isFinite(expiresAt) &&
    expiresAt > Date.now()
  );
}

export function saveAcademicSession(session: AcademicSession) {
  window.localStorage.setItem(sessionKey, JSON.stringify(session));
}

export function readAcademicSession(): AcademicSession | null {
  const raw = window.localStorage.getItem(sessionKey);
  if (!raw) return null;

  try {
    const session: unknown = JSON.parse(raw);
    if (!isAcademicSession(session)) {
      clearAcademicSession();
      return null;
    }
    return session;
  } catch {
    clearAcademicSession();
    return null;
  }
}

export function clearAcademicSession() {
  window.localStorage.removeItem(sessionKey);
}

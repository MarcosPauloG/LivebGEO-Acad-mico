import { afterEach, describe, expect, it, vi } from "vitest";
import { readAcademicSession } from "./session";

const sessionKey = "liveb-geo-academico/session-v1";

function useStoredSession(value: unknown) {
  const entries = new Map([[sessionKey, JSON.stringify(value)]]);
  vi.stubGlobal("window", {
    localStorage: {
      getItem: (key: string) => entries.get(key) ?? null,
      setItem: (key: string, next: string) => entries.set(key, next),
      removeItem: (key: string) => entries.delete(key)
    }
  });
}

afterEach(() => vi.unstubAllGlobals());

describe("sessão acadêmica", () => {
  it("rejeita perfil adulterado", () => {
    useStoredSession({
      id: "academic-invalid",
      displayName: "Perfil inválido",
      email: "aluno@example.invalid",
      role: "administrator",
      source: "gestao-mock",
      expiresAt: new Date(Date.now() + 60_000).toISOString()
    });
    expect(readAcademicSession()).toBeNull();
  });

  it("rejeita expiração inválida", () => {
    useStoredSession({
      id: "academic-analysis",
      displayName: "Análise territorial",
      email: "aluno@example.invalid",
      role: "analysis",
      source: "gestao-mock",
      expiresAt: "não-é-data"
    });
    expect(readAcademicSession()).toBeNull();
  });

  it("aceita somente uma sessão fictícia válida e vigente", () => {
    useStoredSession({
      id: "academic-analysis",
      displayName: "Análise territorial",
      email: "aluno@example.invalid",
      role: "analysis",
      source: "gestao-mock",
      expiresAt: new Date(Date.now() + 60_000).toISOString()
    });
    expect(readAcademicSession()?.role).toBe("analysis");
  });
});

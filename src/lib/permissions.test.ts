import { describe, expect, it } from "vitest";
import { hasPermission } from "./permissions";

describe("permissões simuladas", () => {
  it("permite planejamento à representação, mas não mostra matriz de acesso", () => {
    expect(hasPermission("representation", "visits:write")).toBe(true);
    expect(hasPermission("representation", "access:read")).toBe(false);
  });

  it("mantém observação sem operações de escrita", () => {
    expect(hasPermission("observation", "visits:read")).toBe(true);
    expect(hasPermission("observation", "visits:write")).toBe(false);
  });
});

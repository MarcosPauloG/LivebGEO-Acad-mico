import { describe, expect, it } from "vitest";
import { normalizeName } from "./normalize";

describe("normalizeName", () => {
  it("normaliza acentos e separadores para comparação acadêmica", () => {
    expect(normalizeName("Imobiliária  Modelo—Aurora")).toBe(
      "imobiliaria modelo aurora"
    );
  });
});

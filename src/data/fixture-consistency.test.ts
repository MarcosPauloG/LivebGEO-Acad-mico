import { describe, expect, it } from "vitest";
import { representatives, territories } from "./academic";

describe("consistência dos indicadores sintéticos", () => {
  it("alinha representantes ativos declarados e atribuídos", () => {
    for (const territory of territories) {
      const activeAssignments = representatives.filter(
        (representative) =>
          representative.status === "active" &&
          representative.territoryIds.includes(territory.id)
      ).length;
      expect(territory.activeRepresentatives).toBe(activeAssignments);
    }
  });
});

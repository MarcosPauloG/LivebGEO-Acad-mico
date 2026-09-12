import { describe, expect, it } from "vitest";
import { coveragePercentage, representativeDeficit } from "./metrics";
import type { Municipality } from "./types";

function municipality(
  id: string,
  coverage: Municipality["coverage"]
): Municipality {
  return {
    id,
    code: `SIM-${id}`,
    name: `Município ${id}`,
    territoryId: "t1",
    point: { x: 1, y: 1 },
    populationIndex: 1,
    coverage,
    expansionScore: 1
  };
}

describe("representativeDeficit", () => {
  it("nunca retorna déficit negativo", () => {
    expect(representativeDeficit(1, 2)).toBe(0);
    expect(representativeDeficit(3, 1)).toBe(2);
  });
});

describe("coveragePercentage", () => {
  it("pondera cobertura parcial pela metade", () => {
    expect(
      coveragePercentage([
        municipality("1", "covered"),
        municipality("2", "partial"),
        municipality("3", "uncovered")
      ])
    ).toBe(50);
  });
});

import { describe, expect, it } from "vitest";
import {
  buildNearestNeighborOrder,
  routeMatrixKey,
  sumRouteOrder,
  type MatrixValue
} from "./route-logistics";

function matrix(entries: Array<[string, string, number, number]>) {
  return new Map<string, MatrixValue>(
    entries.map(([origin, destination, distanceKm, durationMinutes]) => [
      routeMatrixKey(origin, destination),
      { distanceKm, durationMinutes }
    ])
  );
}

describe("logística de rotas simuladas", () => {
  it("soma somente a sequência informada", () => {
    const values = matrix([
      ["base", "a", 10, 20],
      ["a", "b", 20, 30]
    ]);
    expect(sumRouteOrder(["base", "a", "b"], values)).toEqual({
      distanceKm: 30,
      durationMinutes: 50
    });
  });

  it("sugere vizinho mais próximo sem alterar a ordem original", () => {
    const approved = ["a", "b", "c"];
    const values = matrix([
      ["base", "a", 30, 30],
      ["base", "b", 10, 10],
      ["base", "c", 20, 20],
      ["b", "a", 5, 5],
      ["b", "c", 15, 15],
      ["a", "c", 4, 4]
    ]);
    expect(buildNearestNeighborOrder("base", approved, values)).toEqual([
      "b",
      "a",
      "c"
    ]);
    expect(approved).toEqual(["a", "b", "c"]);
  });
});

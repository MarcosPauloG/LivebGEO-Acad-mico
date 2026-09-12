import { describe, expect, it } from "vitest";
import {
  municipalities,
  pointsOfInterest,
  representatives,
  territories
} from "./academic";

describe("fixtures acadêmicas", () => {
  it("usa somente códigos municipais sintéticos", () => {
    expect(municipalities.every((item) => item.code.startsWith("SIM-"))).toBe(true);
  });

  it("usa somente e-mails do domínio reservado", () => {
    expect(
      representatives.every((item) => item.email.endsWith("@example.invalid"))
    ).toBe(true);
  });

  it("mantém todas as referências internas válidas", () => {
    const territoryIds = new Set(territories.map((item) => item.id));
    const municipalityIds = new Set(municipalities.map((item) => item.id));

    expect(
      municipalities.every((item) => territoryIds.has(item.territoryId))
    ).toBe(true);
    expect(
      pointsOfInterest.every((item) => municipalityIds.has(item.municipalityId))
    ).toBe(true);
  });
});

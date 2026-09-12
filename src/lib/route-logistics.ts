export type MatrixValue = {
  distanceKm: number;
  durationMinutes: number;
};

export function routeMatrixKey(originId: string, destinationId: string) {
  return `${originId}:${destinationId}`;
}

export function sumRouteOrder(
  order: string[],
  matrix: Map<string, MatrixValue>
) {
  let distanceKm = 0;
  let durationMinutes = 0;
  for (let index = 0; index < order.length - 1; index += 1) {
    const value = matrix.get(routeMatrixKey(order[index], order[index + 1]));
    if (!value) return null;
    distanceKm += value.distanceKm;
    durationMinutes += value.durationMinutes;
  }
  return { distanceKm, durationMinutes };
}

export function buildNearestNeighborOrder(
  originId: string,
  municipalityIds: string[],
  matrix: Map<string, MatrixValue>
) {
  const remaining = new Set(municipalityIds);
  const order: string[] = [];
  let current = originId;

  while (remaining.size) {
    let closest: { id: string; distance: number } | null = null;
    for (const candidate of remaining) {
      const value = matrix.get(routeMatrixKey(current, candidate));
      if (value && (!closest || value.distanceKm < closest.distance)) {
        closest = { id: candidate, distance: value.distanceKm };
      }
    }
    if (!closest) return null;
    order.push(closest.id);
    remaining.delete(closest.id);
    current = closest.id;
  }

  return order;
}

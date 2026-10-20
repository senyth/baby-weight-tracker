import { useEffect, useState } from "react";
import type { Weight } from "../types/Weight";
import { loadWeights, saveWeights } from "../storage";

export function useWeights() {
  const [weights, setWeights] = useState<Weight[]>(loadWeights);

  useEffect(() => saveWeights(weights), [weights]);

  const add = (e: Omit<Weight, "id">) =>
    setWeights(prev =>
      [...prev, { ...e, id: crypto.randomUUID() }]
        .sort((a, b) => a.date.localeCompare(b.date))
    );

  const remove = (id: string) =>
    setWeights(prev => prev.filter(e => e.id !== id));

  return { weights, add, remove };
}
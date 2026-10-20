import { KEY } from "./constants/key";
import type { Weight } from "./types/Weight";

export function loadWeights(): Weight[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Weight[]) : [];
  } catch {
    return [];
  }
}

export function saveWeights(entries: Weight[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(entries));
  } catch {
    /* quota exceeded / private mode */
  }
}
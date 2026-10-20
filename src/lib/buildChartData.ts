import { PERCENTILES } from "../constants/percentiles";
import type Percentile from "../types/Percentile";
import type { Weight } from "../types/Weight";

const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.4375;

const ageInMonths = (dateOfBirth: string, date: string) =>
  (new Date(date).getTime() - new Date(dateOfBirth).getTime()) / MS_PER_MONTH;

// Blend the two WHO rows surrounding a fractional age
function referenceAt(table: Percentile[], age: number): Percentile {
  const last = table.length - 1;
  const clamped = Math.min(Math.max(age, 0), last);
  const lo = Math.floor(clamped);
  const a = table[lo];
  const b = table[Math.min(lo + 1, last)];
  const t = clamped - lo; // how far between the two rows, 0 to 1

  const row: Percentile = { ageMonths: age };
  for (const { key } of PERCENTILES) {
    const va = a[key];
    const vb = b[key];
    if (va !== undefined && vb !== undefined) {
      row[key] = va + (vb - va) * t;
    }
  }
  return row;
}

export function buildChartData(
  entries: Weight[],
  dateOfBirth: string,
  table: Percentile[]
): Percentile[] {
  const entryRows: Percentile[] = entries.map(e => {
    const age = Number(ageInMonths(dateOfBirth, e.date).toFixed(2));
    return { ...referenceAt(table, age), ageMonths: age, weight: e.weightKg, date: e.date };
  });

  return [...table, ...entryRows].sort((a, b) => a.ageMonths - b.ageMonths);
}
export default interface Percentile {
  ageMonths: number;
  weight?: number; // the child's entries
  p1?: number;
  p3?: number;
  p5?: number;
  p15?: number;
  p25?: number;
  p50?: number;
  p75?: number;
  p85?: number;
  p95?: number;
  p97?: number;
  p99?: number;
}
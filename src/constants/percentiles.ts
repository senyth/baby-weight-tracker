export const PERCENTILES = [
  { key: "p1",  label: "1st",  color: "#dc2626" },
  { key: "p3",  label: "3rd",  color: "#ea580c", core: true },
  { key: "p5",  label: "5th",  color: "#d97706" },
  { key: "p15", label: "15th", color: "#ca8a04", core: true },
  { key: "p25", label: "25th", color: "#65a30d" },
  { key: "p50", label: "50th", color: "#16a34a", core: true, main: true },
  { key: "p75", label: "75th", color: "#65a30d" },
  { key: "p85", label: "85th", color: "#ca8a04", core: true },
  { key: "p95", label: "95th", color: "#d97706" },
  { key: "p97", label: "97th", color: "#ea580c", core: true },
  { key: "p99", label: "99th", color: "#dc2626" },
] as const;
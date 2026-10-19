import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import type Percentile from "../types/Percentile";

export default function GrowthChart({ data }: { data: Percentile[] }) {
    
const PERCENTILES = [
//   { key: "p1",  label: "1st",  color: "#dc2626" },
  { key: "p3",  label: "3rd",  color: "#ea580c" },
//   { key: "p5",  label: "5th",  color: "#ca8a04" },
  { key: "p15", label: "15th", color: "#65a30d" },
//   { key: "p25", label: "25th", color: "#16a34a" },
  { key: "p50", label: "50th", color: "#16a34a", main: true },
//   { key: "p75", label: "75th", color: "#16a34a" },
  { key: "p85", label: "85th", color: "#65a30d" },
//   { key: "p95", label: "95th", color: "#ca8a04" },
  { key: "p97", label: "97th", color: "#ea580c" },
//   { key: "p99", label: "99th", color: "#dc2626" },
] as const;

  return (
    <div className="h-120 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
          <CartesianGrid strokeDasharray="1 1" stroke="#94a3b8" />
          <XAxis ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]} dataKey="ageMonths" type="number" domain={[0, 16]} unit="mo" />
          <YAxis unit=" kg" ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16]} />
          <Tooltip />
          <Legend itemSorter={null} />
          
          {PERCENTILES.map(({ key, label, color, ...rest }) => (
            <Line
                key={key}
                dataKey={key}
                name={label}
                stroke={color}
                dot={false}
                strokeWidth={"main" in rest ? 2 : 1}
                strokeDasharray={"main" in rest ? undefined : "4 4"}
            />
        ))}

          <Line type="monotone" dataKey="weight" name="Weight" stroke="#06719e"
                strokeWidth={2.5} dot={{ r: 4 }} connectNulls />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
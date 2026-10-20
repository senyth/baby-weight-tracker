import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import type Percentile from "../types/Percentile";
import { PERCENTILES } from "../constants/percentiles";
import Toggle from "./Toggle";
import { useState } from "react";

export default function WeightChart({ data }: { data: Percentile[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = PERCENTILES.filter(p => showAll || "core" in p);
  const LEGEND_ORDER: string[] = [...PERCENTILES.map(p => p.key), "weight"];
  
  return (
    <div className="h-120 w-full">
      <div className="mb-3 flex justify-end">
        <Toggle checked={showAll} onChange={setShowAll} label="Show all percentiles" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
          <CartesianGrid strokeDasharray="1 1" stroke="#94a3b8" />
          <XAxis ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]} dataKey="ageMonths" type="number" domain={[0, 16]} unit="mo" />
          <YAxis unit="kg" ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16]} />
          <Tooltip
            labelFormatter={(value) => `${Math.round(Number(value) * 10) / 10} months`}
            itemSorter={(item) =>
              item.name === "Weight" ? -1 : parseInt(String(item.name), 10)
            }
            formatter={(value, name) => [`${value} kg`, name]}
          />
          <Legend
            itemSorter={(item) => LEGEND_ORDER.indexOf(String(item.dataKey))}
          />
          
          {visible.map(({ key, label, color, ...rest }) => (
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
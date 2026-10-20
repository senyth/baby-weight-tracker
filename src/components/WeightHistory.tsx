import { useMemo } from "react";
import type { Weight } from "../types/Weight";
import { formatDate } from "../lib/formatDate";
import { ageInMonths, formatAge } from "../lib/age";

interface WeightHistoryProps {
  weights: Weight[];
  dateOfBirth: string;
  onRemove: (id: string) => void;
}

export default function WeightHistory({ weights, dateOfBirth, onRemove }: WeightHistoryProps) {
  const rows = useMemo(() => {
    const ascending = [...weights].sort((a, b) => a.date.localeCompare(b.date));
    return ascending
      .map((entry, i) => ({
        ...entry,
        age: formatAge(ageInMonths(dateOfBirth, entry.date)),
        delta: i === 0 ? null : entry.weightKg - ascending[i - 1].weightKg,
      }))
      .reverse();
  }, [weights, dateOfBirth]);

  function handleRemove(id: string, date: string) {
    if (window.confirm(`Delete the entry from ${formatDate(date)}?`)) {
      onRemove(id);
    }
  }

  return (
    <section
      id="entries"
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-slate-900">
        History
        <span className="ml-2 text-sm font-normal text-slate-500">
          ({rows.length} {rows.length === 1 ? "entry" : "entries"})
        </span>
      </h2>

      {rows.length === 0 ? (
        <p className="py-6 text-center text-sm text-slate-500">
          No entries yet. Add the first weight above.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th scope="col" className="py-2 pr-4 font-medium">Date</th>
                <th scope="col" className="py-2 pr-4 font-medium">Age</th>
                <th scope="col" className="py-2 pr-4 text-right font-medium">Weight</th>
                <th scope="col" className="py-2 pr-4 text-right font-medium">Change</th>
                <th scope="col" className="py-2 text-right font-medium">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-3 pr-4 text-slate-900">{formatDate(row.date)}</td>
                  <td className="py-3 pr-4 text-slate-600">{row.age}</td>
                  <td className="py-3 pr-4 text-right font-medium text-slate-900">
                    {row.weightKg.toFixed(2)} kg
                  </td>
                  <td className="py-3 pr-4 text-right">
                    {row.delta === null ? (
                      <span className="text-slate-400">—</span>
                    ) : (
                      <span
                        className={
                          row.delta >= 0 ? "text-green-700" : "text-red-700"
                        }
                      >
                        {row.delta >= 0 ? "+" : "−"}
                        {Math.abs(row.delta).toFixed(2)} kg
                      </span>
                    )}
                  </td>
                  <td className="py-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleRemove(row.id, row.date)}
                      aria-label={`Delete entry from ${formatDate(row.date)}`}
                      className="rounded-md px-2 py-1 text-slate-500 transition hover:bg-red-50 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
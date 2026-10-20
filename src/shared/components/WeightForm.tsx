import { useState, type FormEvent } from "react";
import type { Weight } from "../../types/Weight";

interface EntryFormProps {
  onAdd: (entry: Omit<Weight, "id">) => void;
  dateOfBirth: string;        // ISO "YYYY-MM-DD"
  existingDates?: string[];   // to block duplicate dates
}

// Local-time ISO date (toISOString() uses UTC and can return tomorrow)
const toLocalISODate = (d: Date) =>
  new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

export default function WeightForm({ onAdd, dateOfBirth, existingDates = [] }: EntryFormProps) {
  const today = toLocalISODate(new Date());

  const [date, setDate] = useState(today);
  const [weight, setWeight] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const weightKg = parseFloat(weight);

    if (!date) return setError("Please choose a date.");
    if (date > today) return setError("The date can't be in the future.");
    if (date < dateOfBirth) return setError("The date can't be before the birth date.");
    if (existingDates.includes(date)) return setError("There's already an entry for this date.");
    if (Number.isNaN(weightKg) || weightKg <= 0) return setError("Enter a weight greater than 0.");
    if (weightKg > 40) return setError("That weight looks too high. Please check the value.");

    onAdd({ date, weightKg });
    setWeight("");
    setError(null);
  }

  return (
    <form
      id="add"
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Add entry</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="entry-date" className="mb-1 block text-sm font-medium text-slate-700">
            Date
          </label>
          <input
            id="entry-date"
            type="date"
            value={date}
            min={dateOfBirth}
            max={today}
            onChange={e => setDate(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
          />
        </div>

        <div>
          <label htmlFor="entry-weight" className="mb-1 block text-sm font-medium text-slate-700">
            Weight (kg)
          </label>
          <input
            id="entry-weight"
            type="number"
            inputMode="decimal"
            step="0.01"
            min="0"
            placeholder="e.g. 9.9"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            aria-invalid={error !== null}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        Add entry
      </button>
    </form>
  );
}
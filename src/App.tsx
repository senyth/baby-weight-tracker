import './App.css';
import Header from './shared/theme/Header';
import Footer from './shared/theme/Footer';
import WeightChart from './components/WeightChart';
import { useWeights } from './hooks/useEntries';
import WeightForm from './shared/components/WeightForm';
import type { Child } from './types/Child';
import { whoWeightForAgeBoys } from './data/whoWeightForAgeBoys';
import { useMemo } from 'react';
import { buildChartData } from './lib/buildChartData';

const child: Child = {
  id: "child-1",
  name: "Jereth Atticus",
  dateOfBirth: "2025-07-20",
  gender: "M",
};

export default function App() {
  const { weights, add } = useWeights();
  
  // const table = child.gender === "M" ? whoWeightForAgeBoys : whoWeightForAgeGirls;
  const table = whoWeightForAgeBoys;
  const data = useMemo(
    () => buildChartData(weights, child.dateOfBirth, table),
    [weights, table]
  );
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
    <Header />
    <WeightForm
      onAdd={add}
      dateOfBirth={child.dateOfBirth}
      existingDates={weights.map(e => e.date)}
    />
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6">
      <WeightChart data={data} />
    </main>
    <Footer />
    </div>
  )
}

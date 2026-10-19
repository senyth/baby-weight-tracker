import './App.css';
import Header from './shared/theme/Header';
import Footer from './shared/theme/Footer';
import WeightChart from './components/WeightChart';
import { weightForAgeBoys } from './data/weightForAgeBoys';

function App() {
  


  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
    <Header />

    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6">
      
      <WeightChart data={weightForAgeBoys} />
    </main>

    <Footer />
    </div>
  )
}

export default App

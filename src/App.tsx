import './App.css'
import Header from './shared/theme/Header'
import Footer from './shared/theme/Footer'

function App() {

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
    <Header />

    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6">
      {/* chart, form, entries list */}
    </main>

    <Footer />
    </div>
  )
}

export default App

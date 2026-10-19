function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <span>Growth Tracker</span>
        </a>

        <nav aria-label="Main" className="flex items-center gap-1 text-sm font-medium text-slate-600">
          <a href="#chart" className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            Chart
          </a>
          <a href="#entries" className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900">
            Entries
          </a>
          <a
            href="#add"
            className="ml-2 rounded-md bg-indigo-600 px-3 py-2 text-white transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Add entry
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
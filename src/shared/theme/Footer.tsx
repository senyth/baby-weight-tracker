function Footer() {
	return (
		<footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6">
        <p>&copy; {new Date().getFullYear()} Growth Tracker. Data is stored only in your browser.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/senyth/baby-weight-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-slate-900"
          >
            GitHub
          </a>
          <a
            href="https://www.who.int/tools/child-growth-standards"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-slate-900"
          >
            WHO Growth Standards
          </a>
        </div>
      </div>
    </footer>
	);
}

export default Footer;
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-6 py-7 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
        <a
          className="font-display text-base font-bold tracking-tight text-white"
          href="#home"
        >
          zaid<span className="text-lime">.</span>
        </a>
        <p>© 2026 Zaid. Built with Next.js &amp; Tailwind CSS.</p>
        <div aria-label="Social links" className="flex items-center gap-4">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/zaid-saleem-aa8609257/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="nav-link"
            href="https://github.com/Zaid2694"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="nav-link"
            href="https://www.facebook.com/profile.php?id=100010298379656"
            rel="noreferrer"
            target="_blank"
          >
            Facebook
          </a>
        </div>
        <a className="nav-link" href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

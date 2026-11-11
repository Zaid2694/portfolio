export default function Header() {
  return (
    <header className="site-header">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-10"
      >
        <a
          aria-label="Zaid, home"
          className="font-display text-xl font-bold tracking-tight text-white"
          href="#home"
        >
          zaid<span className="text-lime">.</span>
        </a>
        <div className="flex items-center gap-3 overflow-x-auto text-xs text-slate-400 sm:gap-6 sm:text-sm">
          <a className="nav-link" href="#home">
            Home
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

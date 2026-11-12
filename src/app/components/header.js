"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-10 min-[992px]:flex-nowrap"
      >
        <a
          aria-label="Zaid, home"
          className="font-display text-xl font-bold tracking-tight text-white"
          href="#home"
          onClick={() => setIsMenuOpen(false)}
        >
          zaid<span className="text-lime">.</span>
        </a>
        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-transparent px-3 text-xs text-slate-300 min-[992px]:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span aria-hidden="true" className="grid gap-[3px]">
            <span className="h-px w-4 bg-current" />
            <span className="h-px w-4 bg-current" />
            <span className="h-px w-4 bg-current" />
          </span>
          Menu
        </button>
        <div
          className={`site-nav-links w-full flex-col text-xs text-slate-400 sm:text-sm min-[992px]:flex min-[992px]:w-auto min-[992px]:flex-row min-[992px]:items-center${isMenuOpen ? " flex" : " hidden"}`}
          id="primary-navigation"
        >
          <a
            className="nav-link border-t border-white/[0.07] py-3 min-[992px]:border-t-0 min-[992px]:py-0"
            href="#home"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            className="nav-link border-t border-white/[0.07] py-3 min-[992px]:border-t-0 min-[992px]:py-0"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            className="nav-link border-t border-white/[0.07] py-3 min-[992px]:border-t-0 min-[992px]:py-0"
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            className="nav-link border-t border-white/[0.07] py-3 min-[992px]:border-t-0 min-[992px]:py-0"
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            className="nav-link border-t border-white/[0.07] py-3 min-[992px]:border-t-0 min-[992px]:py-0"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

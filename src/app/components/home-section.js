import Image from "next/image";
import ArrowIcon from "./arrow-icon";

export default function HomeSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero-section relative overflow-hidden px-6 sm:px-10"
      id="home"
    >
      <div aria-hidden="true" className="hero-glow" />
      <div className="relative mx-auto grid min-h-[690px] w-full max-w-6xl items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow mb-7">
            <span className="status-dot" />
            AVAILABLE FOR NEW OPPORTUNITIES
          </p>
          <h1
            className="font-display text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.5rem]"
            id="hero-title"
          >
            Hi, I&apos;m Zaid.
            <br />
            <span className="text-lime">Full-Stack AI</span>
            <br />
            Developer
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I&apos;m a Full-Stack AI Developer building intelligent,
            end-to-end applications and delivering polished digital
            experiences across a range of projects.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a className="button-primary" href="#projects">
              View My Work <ArrowIcon />
            </a>
            <a className="button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="mt-14 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            <span className="h-px w-10 bg-slate-700" />
            SCROLL TO EXPLORE
          </div>
        </div>

        <div className="hero-profile mx-auto">
          <div className="hero-profile-image">
            <Image
              alt="Zaid Saleem, Full-Stack AI Developer"
              className="h-full w-full object-cover"
              height={420}
              priority
              src="/zaid-saleem.png"
              width={420}
            />
          </div>
          <p className="mt-5 text-center font-display text-lg font-semibold text-white">
            Zaid <span className="text-lime">/</span> Full-Stack AI Developer
          </p>
          <p className="mt-2 text-center text-sm text-slate-500">
            Building intelligent products from idea to launch.
          </p>
        </div>
      </div>
    </section>
  );
}

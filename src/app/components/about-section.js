import Image from "next/image";
import ArrowIcon from "./arrow-icon";

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="section-wrap border-t border-white/[0.07]"
      id="about"
    >
      <div className="section-grid">
        <div>
          <p className="section-kicker">01 / A LITTLE ABOUT ME</p>
          <h2 className="section-title" id="about-title">
            Curious mind.
            <br />
            <span className="text-slate-500">Careful maker.</span>
          </h2>
        </div>
        <div className="about-content max-w-xl pt-2">
          <Image
            alt="Profile photo of Zaid Saleem"
            className="about-portrait"
            height={112}
            src="/zaid-saleem.png"
            width={112}
          />
          <p className="text-base leading-8 text-slate-400">
            I&apos;m a Full-Stack AI Developer building intelligent, end-to-end
            applications and delivering polished digital experiences across a
            range of projects.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-400">
            From the first sketch to the final details, I care about
            accessibility, performance, and the small touches that make a
            digital product feel considered.
          </p>
          <a className="text-link mt-7" href="#contact">
            Get to know me <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

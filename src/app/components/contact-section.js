import ContactForm from "../contact-form";
import ArrowIcon from "./arrow-icon";

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="contact-section px-6 py-20 sm:px-10 sm:py-28"
      id="contact"
    >
      <div className="contact-panel mx-auto grid max-w-6xl gap-10 px-7 py-12 sm:px-14 sm:py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div aria-hidden="true" className="contact-glow" />
        <div className="relative">
          <p className="section-kicker">04 / WHAT&apos;S NEXT?</p>
          <h2
            className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl"
            id="contact-title"
          >
            Have a good idea?
            <br />
            <span className="text-lime">Let&apos;s make it real.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">
            Send me a message about a project, an idea, or an opportunity.
          </p>
          <a
            className="text-link mt-7"
            href="mailto:zaidsaleem375@gmail.com"
          >
            Email me at zaidsaleem375@gmail.com <ArrowIcon diagonal />
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Python",
  "C++",
  "C#",
  "MySQL",
  "MongoDB",
  "AI Developer",
];

export default function SkillsSection() {
  return (
    <section
      aria-labelledby="skills-title"
      className="section-wrap border-t border-white/[0.07]"
      id="skills"
    >
      <div className="section-grid">
        <div>
          <p className="section-kicker">03 / MY TOOLKIT</p>
          <h2 className="section-title" id="skills-title">
            Tools for
            <br />
            <span className="text-slate-500">good ideas.</span>
          </h2>
        </div>
        <div className="flex flex-wrap content-start gap-3 pt-2">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              <span className="mr-2 text-lime">✳</span>
              {skill}
            </span>
          ))}
          <p className="mt-5 w-full max-w-lg text-sm leading-7 text-slate-500">
            Frontend development, Python, C++, C#, MySQL, MongoDB, and AI
            development.
          </p>
        </div>
      </div>
    </section>
  );
}

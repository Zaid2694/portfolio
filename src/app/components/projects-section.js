import ArrowIcon from "./arrow-icon";

const projects = [
  {
    number: "01",
    category: "STUDENT MANAGEMENT",
    title: "Student Management System",
    description:
      "A student management project for organizing student information and related records.",
    stack: ["Student Management", "Web Application"],
    github: "https://github.com/Zaid2694/Student-Management-System",
    accent: "lime",
  },
  {
    number: "02",
    category: "PERSONAL PORTFOLIO",
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my background, skills, and projects, with a responsive design and a contact form for new opportunities.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Zaid2694/Portfolio",
    accent: "violet",
  },
  {
    number: "03",
    category: "WEATHER APPLICATION",
    title: "Weather App Using React",
    description:
      "A weather application built with React to explore current weather information.",
    stack: ["React", "Weather App"],
    github: "https://github.com/Zaid2694/WeatherAppUsingReact",
    accent: "orange",
  },
];

export default function ProjectsSection() {
  return (
    <section
      aria-labelledby="work-title"
      className="section-wrap border-t border-white/[0.07]"
      id="projects"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="section-kicker">02 / SELECTED WORK</p>
          <h2 className="section-title" id="work-title">
            Things I&apos;ve <span className="text-slate-500">worked on.</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-slate-500">
          A few examples of the interfaces and application features I enjoy
          building.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            className={`project-card project-card-${project.accent}`}
            key={project.number}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500">
                / {project.number}
              </span>
              <ArrowIcon diagonal />
            </div>
            <div aria-hidden="true" className="project-preview">
              <div className="preview-window">
                <div className="flex gap-1.5">
                  <span className="window-dot bg-white/20" />
                  <span className="window-dot bg-white/20" />
                  <span className="window-dot bg-white/20" />
                </div>
                <div className="preview-content">
                  <span className="preview-line preview-line-long" />
                  <span className="preview-line preview-line-medium" />
                  <span className="preview-block" />
                </div>
              </div>
            </div>
            <p className="project-category">{project.category}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
              {project.description}
            </p>
            <ul
              aria-label={`${project.title} technologies`}
              className="mt-6 flex flex-wrap gap-2"
            >
              {project.stack.map((item) => (
                <li className="tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <a
              className="text-link mt-6"
              href={project.github}
              rel="noreferrer"
              target="_blank"
            >
              Explore project <ArrowIcon diagonal />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { projects, projectCategories } from "../constants/index";

gsap.registerPlugin(ScrollTrigger);

const PER_PAGE = 3;

const ProjectImage = ({ project }) => (
  <div className={`image-wrapper ${project.bg}`}>
    {project.image ? (
      <img src={project.image} alt={project.title} />
    ) : (
      <div className="project-placeholder">
        <span>{project.title.charAt(0)}</span>
      </div>
    )}
  </div>
);

const ProjectLinks = ({ project, className = "" }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    {project.github && (
      <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
        Code
      </a>
    )}
    {project.live && (
      <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
        Live Demo ↗
      </a>
    )}
  </div>
);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(0);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageItems = filtered.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const featured = pageItems[0];
  const rest = pageItems.slice(1);

  const countFor = (cat) =>
    cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;

  const selectCategory = (cat) => {
    setActive(cat);
    setPage(0);
  };

  // Stagger the cards in on first view and whenever the category or page changes.
  useGSAP(
    () => {
      gsap.fromTo(
        ".js-project",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" }
      );
    },
    { dependencies: [active, page], scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full flex flex-col gap-10">
        <TitleHeader title="A Showcase of My Work" sub="🚀 Projects I've Built" />

        {/* category filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                active === cat
                  ? "bg-white text-black"
                  : "border border-white/15 text-white-50 hover:border-white/40"
              }`}
            >
              {cat} <span className="opacity-60 text-xs">{countFor(cat)}</span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="project-empty js-project">
            <div className="text-2xl mb-2">Coming soon 🚧</div>
            <p className="text-white-50">
              {active} projects are on the way — I'm building them now.
            </p>
          </div>
        ) : (
          <>
            <div className="showcaselayout">
              {/* Featured project (fills the row when it's the only one on the page) */}
              <div
                className={`first-project-wrapper js-project ${
                  rest.length ? "xl:w-[60%]" : "xl:w-full"
                }`}
              >
                <ProjectImage project={featured} />
                <div className="text-content">
                  <h2>{featured.title}</h2>
                  <p className="text-white-50 md:text-xl">{featured.desc}</p>
                  <ProjectLinks project={featured} className="pt-2" />
                </div>
              </div>

              {/* Remaining projects on this page */}
              {rest.length > 0 && (
                <div className="project-list-wrapper overflow-hidden">
                  {rest.map((project) => (
                    <div className="project js-project" key={project.id}>
                      <ProjectImage project={project} />
                      <h2>{project.title}</h2>
                      <ProjectLinks project={project} className="mt-4" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pager — only when a category has more than one page of projects */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-5">
                <button
                  className="project-arrow"
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  aria-label="Previous projects"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`project-dot ${i === page ? "active" : ""}`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  className="project-arrow"
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={page === totalPages - 1}
                  aria-label="Next projects"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ShowcaseSection;

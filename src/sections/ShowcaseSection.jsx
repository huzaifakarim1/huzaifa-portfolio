import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { projects, projectCategories } from "../constants/index";

gsap.registerPlugin(ScrollTrigger);

const PER_PAGE = 3;

const ProjectImage = ({ project }) => (
  <div className="w-full overflow-hidden rounded-xl">
    {project.image ? (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto block"
      />
    ) : (
      <div className="min-h-48 bg-black-200 rounded-xl flex items-center justify-center">
        <span className="text-7xl font-bold text-white/10 select-none">
          {project.title.charAt(0)}
        </span>
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

const Arrow = ({ dir, onClick, disabled, className = "" }) => (
  <button
    className={`carousel-arrow ${className}`}
    onClick={onClick}
    disabled={disabled}
    aria-label={dir === "prev" ? "Previous projects" : "Next projects"}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d={dir === "prev" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  </button>
);

const Dots = ({ total, page, onSelect, className = "" }) => (
  <div className={`flex gap-2 ${className}`}>
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onSelect(i)}
        className={`project-dot ${i === page ? "active" : ""}`}
        aria-label={`Go to page ${i + 1}`}
      />
    ))}
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

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

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
            {/* Mobile / tablet controls — sit above the projects so paging never
                requires scrolling down to reach the arrows. */}
            {totalPages > 1 && (
              <div className="flex xl:hidden items-center justify-center gap-5">
                <Arrow dir="prev" onClick={goPrev} disabled={page === 0} />
                <Dots total={totalPages} page={page} onSelect={setPage} />
                <Arrow dir="next" onClick={goNext} disabled={page === totalPages - 1} />
              </div>
            )}

            {/* Desktop arrows flank the projects (vertically centered in the
                side gutters) so there is nothing to scroll to. */}
            <div className="relative xl:px-16">
              {totalPages > 1 && (
                <>
                  <Arrow
                    dir="prev"
                    onClick={goPrev}
                    disabled={page === 0}
                    className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 z-20"
                  />
                  <Arrow
                    dir="next"
                    onClick={goNext}
                    disabled={page === totalPages - 1}
                    className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 z-20"
                  />
                </>
              )}

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
            </div>

            {/* Desktop page indicator */}
            {totalPages > 1 && (
              <Dots
                total={totalPages}
                page={page}
                onSelect={setPage}
                className="hidden xl:flex justify-center"
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ShowcaseSection;

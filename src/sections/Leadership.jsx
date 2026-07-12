import { Fragment } from "react";
import TitleHeader from "../components/TitleHeader";
import { leadership } from "../constants/index";

// Same interactive border-glow the testimonial cards use.
const handleMouseMove = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const mouseX = e.clientX - rect.left - rect.width / 2;
  const mouseY = e.clientY - rect.top - rect.height / 2;
  let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
  angle = (angle + 360) % 360;
  el.style.setProperty("--start", angle + 60);
};

const Leadership = () => {
  return (
    <section id="leadership" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Beyond the Code" sub="🏆 Leadership & Achievements" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT — photo with the glow-border effect */}
          <div
            className="card card-border rounded-xl lead-photo-card"
            onMouseMove={handleMouseMove}
          >
            <div className="glow" />
            <div className="lead-photo-inner">
              <div className="lead-photo-fallback">
                <div className="ico">🖼️</div>
                <small>
                  Add your SMEC award / ceremony photo (a landscape shot works
                  best).
                </small>
              </div>
              <img
                src={leadership.image}
                alt={leadership.imageAlt}
                className="lead-photo-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="lead-ribbon">{leadership.ribbon}</span>
              <div className="lead-caption">
                <b>{leadership.captionHighlight}</b> {leadership.caption}
              </div>
            </div>
          </div>

          {/* RIGHT — details */}
          <div className="card-border rounded-xl p-8 md:p-10 flex flex-col gap-5">
            <p className="lead-eyebrow">{leadership.eyebrow}</p>
            <h3 className="text-2xl md:text-3xl font-semibold">
              {leadership.role}
            </h3>

            <div className="lead-editions">
              {leadership.editions.map((yr, i) => (
                <Fragment key={yr}>
                  {i > 0 && <span className="lead-edition-link" />}
                  <span className="lead-edition">
                    <span className="node" />
                    <span className="yr">{yr}</span>
                  </span>
                </Fragment>
              ))}
            </div>

            <p className="text-white-50 text-lg leading-relaxed">
              {leadership.blurb}
            </p>

            <div className="lead-stats">
              {leadership.stats.map((s) => (
                <div className="lead-stat" key={s.l}>
                  <div className="n">{s.n}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>

            <ul className="lead-list">
              {leadership.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

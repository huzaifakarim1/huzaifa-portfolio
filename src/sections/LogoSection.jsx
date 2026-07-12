import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import TitleHeader from "../components/TitleHeader";
import { certifications } from "../constants/index";

const SPEED = 70; // px per second — constant scroll speed regardless of set width

// Inline the SVG markup so the wordmarks render in Mona Sans (an <img> would not).
const Logo = ({ svg, scale }) => (
  <span
    className="cert-logo"
    style={{ "--logo-scale": scale ?? 1 }}
    dangerouslySetInnerHTML={{ __html: svg }}
  />
);

// Shrink an svg's viewBox to its real ink so gaps read evenly and nothing clips.
// Idempotent: getBBox returns geometry in user units (independent of the viewBox),
// so re-running it never changes the result — safe to call on every render.
const tighten = (svg) => {
  if (!svg) return;
  try {
    const b = svg.getBBox();
    if (!(b.width > 0 && b.height > 0)) return; // not laid out yet — try later
    const p = 2;
    svg.setAttribute(
      "viewBox",
      `${b.x - p} ${b.y - p} ${b.width + p * 2} ${b.height + p * 2}`
    );
    svg.removeAttribute("width");
    svg.removeAttribute("height");
  } catch {
    /* getBBox throws if the node isn't rendered yet — ignore */
  }
};

const Item = ({ iss, onOpen, focusable }) => {
  const count = iss.certs.length;
  return (
    <button
      className="cert-item"
      tabIndex={focusable ? 0 : -1}
      onClick={onOpen}
      aria-label={`${iss.name} — ${count} credential${
        count > 1 ? "s" : ""
      }, view details`}
    >
      <span className="cert-tip">
        {count === 1 ? (
          iss.certs[0].title
        ) : (
          <>
            {iss.name} · <b>{count} credentials</b>
          </>
        )}
      </span>
      <Logo svg={iss.logo} scale={iss.scale} />
    </button>
  );
};

const LogoSection = () => {
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);
  const [active, setActive] = useState(null);
  // Start with a few copies; we grow this to whatever fills the viewport + 1 set.
  const [copies, setCopies] = useState(3);

  const fit = useCallback(() => {
    trackRef.current?.querySelectorAll(".cert-logo svg").forEach(tighten);
  }, []);

  // Measure one set's real width, then: (a) shift the loop by exactly one set,
  // (b) render enough copies that the strip always overflows the viewport.
  const measure = useCallback(() => {
    const track = trackRef.current;
    const marquee = marqueeRef.current;
    if (!track || !marquee) return;
    const sets = track.querySelectorAll(".cert-set");
    if (sets.length < 2) return;
    const setW =
      sets[1].getBoundingClientRect().left - sets[0].getBoundingClientRect().left;
    if (!(setW > 0)) return;
    track.style.setProperty("--cert-shift", `${setW}px`);
    track.style.setProperty("--cert-dur", `${Math.max(18, setW / SPEED)}s`);
    const need = Math.max(3, Math.ceil(marquee.offsetWidth / setW) + 2);
    setCopies((c) => (c !== need ? need : c));
  }, []);

  // Re-fit on every render (cheap + idempotent). This keeps the logos at their
  // correct size even after re-renders — e.g. opening the credential panel —
  // so they can never get left in a shrunken state.
  useLayoutEffect(() => {
    fit();
  });

  // Fit + measure once the font is ready, and re-measure on resize.
  useEffect(() => {
    const run = () => {
      fit();
      measure();
    };
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(run);
    } else {
      run();
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [fit, measure]);

  // Panel: fit its logo + close on Escape.
  useEffect(() => {
    if (active == null) return;
    tighten(document.querySelector(".cert-modal-head .cert-logo svg"));
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const issuer = active != null ? certifications[active] : null;

  return (
    <section id="certifications" className="cert-section">
      <TitleHeader title="Certifications & Credentials" sub="🎓 Verified & Ongoing" />

      <div className="cert-marquee" data-paused={active != null} ref={marqueeRef}>
        <div className="cert-track" ref={trackRef}>
          {Array.from({ length: copies }).map((_, k) => (
            <div className="cert-set" key={k} aria-hidden={k > 0 ? "true" : undefined}>
              {certifications.map((iss, i) => (
                <Item
                  key={iss.name}
                  iss={iss}
                  focusable={k === 0}
                  onOpen={() => setActive(i)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {issuer && (
        <div
          className="cert-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${issuer.name} credentials`}
          onClick={() => setActive(null)}
        >
          <div
            className="cert-modal-panel card-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-head">
              <Logo svg={issuer.logo} scale={issuer.scale} />
              <button
                className="cert-modal-close"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div>
              {issuer.certs.map((c) => (
                <div className="cert-row" key={c.title}>
                  <div className="cert-row-info">
                    <p className="cert-row-title">{c.title}</p>
                    <p className="cert-row-meta">
                      Issued {c.date}
                      {c.id ? ` · ID ${c.id}` : ""}
                    </p>
                  </div>
                  <a
                    className="cert-verify"
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LogoSection;

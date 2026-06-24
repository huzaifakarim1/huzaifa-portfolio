import { useEffect, useRef, useState } from "react";
import { counterItems } from "../constants/index";
import CountUp from "react-countup";

const GITHUB_USER = "huzaifakarim1";
const GITHUB_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}`;

// Replace the "GitHub Contributions" card's value with the live total.
const withGithubTotal = (list, total) =>
  list.map((item) =>
    item.label === "GitHub Contributions" ? { ...item, value: total } : item
  );

const AnimatedCounter = () => {
  const [items, setItems] = useState(counterItems);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Keep the "GitHub Contributions" card in sync with the live profile — the
  // all-time total across every year — so the number updates itself and never
  // needs manual editing. Falls back to the static value in constants on error.
  useEffect(() => {
    let active = true;

    const syncGithub = async () => {
      try {
        const res = await fetch(GITHUB_API);
        if (!res.ok) return;
        const data = await res.json();
        const total = data?.total
          ? Object.values(data.total).reduce((sum, n) => sum + (n || 0), 0)
          : null;
        if (active && typeof total === "number" && total > 0) {
          setItems((prev) => withGithubTotal(prev, total));
        }
      } catch {
        /* keep the static fallback value from constants */
      }
    };

    syncGithub();
    return () => {
      active = false;
    };
  }, []);

  // Only start the count-up once the section is actually scrolled into view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="counter" ref={sectionRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {items.map((item) => (
          <div
            key={item.label}
            className="group relative overflow-hidden bg-black-50 rounded-xl border border-white/5 p-10 flex flex-col justify-center items-center text-center md:items-start md:text-left transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.9)]"
          >
            {/* slate accent line: full-width & static on mobile, grows on hover on desktop */}
            <span className="absolute top-0 left-0 h-0.5 w-full md:w-9 bg-blue-50/60 transition-all duration-500 ease-out group-hover:w-full group-hover:bg-blue-50" />

            <div className="counter-number text-white text-5xl font-bold mb-2">
              {inView ? <CountUp end={item.value} separator="," /> : 0}
              {item.suffix && <span className="text-blue-50">{item.suffix}</span>}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;

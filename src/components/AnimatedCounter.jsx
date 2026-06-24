import { useEffect, useState } from "react";
import { counterItems } from "../constants/index";
import CountUp from "react-countup";

const GITHUB_USER = "huzaifakarim1";
const GITHUB_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`;

// Replace the "GitHub Contributions" card's value with the live total.
const withGithubTotal = (list, total) =>
  list.map((item) =>
    item.label === "GitHub Contributions" ? { ...item, value: total } : item
  );

const AnimatedCounter = () => {
  const [items, setItems] = useState(counterItems);

  // Keep the "GitHub Contributions" card in sync with the live profile so the
  // number updates itself and never needs manual editing. Falls back to the
  // static value in constants if the request fails.
  useEffect(() => {
    let active = true;

    const syncGithub = async () => {
      try {
        const res = await fetch(GITHUB_API);
        if (!res.ok) return;
        const data = await res.json();
        const total = data?.total?.lastYear;
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

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {items.map((item) => (
          <div
            key={item.label}
            className="group relative overflow-hidden bg-black-50 rounded-xl border border-white/5 p-10 flex flex-col justify-center transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.9)]"
          >
            {/* thin slate accent line that grows across the card on hover */}
            <span className="absolute top-0 left-0 h-0.5 w-9 bg-blue-50/60 transition-all duration-500 ease-out group-hover:w-full group-hover:bg-blue-50" />

            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp end={item.value} separator="," enableScrollSpy scrollSpyOnce />
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

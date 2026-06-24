import { counterItems } from "../constants/index";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
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

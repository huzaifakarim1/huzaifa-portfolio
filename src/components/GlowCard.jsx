import { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    // Get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Calculate the angle from the center of the card
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      {card.techStack && (
        // Experience cards: show the tech used.
        <div className="mb-5">
          <p className="text-[#839cb5] italic mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {card.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border border-black-50 bg-black-100 text-white-50 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default GlowCard;

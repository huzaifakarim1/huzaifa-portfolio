import { useEffect, useRef, useState } from "react";

/**
 * Gates a heavy 3D <Canvas> on viewport visibility, without changing layout —
 * the root div always keeps the same className/size.
 *
 * - Mounts its children only once they first scroll near the viewport, so the
 *   Canvas (and its model downloads) don't run on initial page load.
 * - Passes a live `visible` flag to children (render-prop) so the Canvas can
 *   set frameloop="never" while off-screen and stop burning the GPU — then
 *   resume when it scrolls back into view. The pause happens off-screen, so
 *   it's never visible.
 *
 * Pass `eager` for above-the-fold canvases (e.g. Hero) so they render
 * immediately on load, but still pause once scrolled past.
 */
const LazyView = ({ children, className, rootMargin = "200px", eager = false }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(eager);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setMounted(true);
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {mounted ? children(visible) : null}
    </div>
  );
};

export default LazyView;

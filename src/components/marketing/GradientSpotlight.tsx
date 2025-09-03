import React from "react";

interface GradientSpotlightProps {
  className?: string;
}

// A subtle radial gradient spotlight that follows the cursor.
// Respects reduced-motion preferences.
export const GradientSpotlight: React.FC<React.PropsWithChildren<GradientSpotlightProps>> = ({
  className,
  children,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = React.useState(true);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setEnabled(!mq.matches);
    const handler = () => setEnabled(!mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!enabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const spotlightStyle: React.CSSProperties = enabled
    ? {
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, hsl(var(--brand-end) / 0.25), transparent 60%)`,
      }
    : {};

  return (
    <div ref={ref} onMouseMove={onMouseMove} className={className}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={spotlightStyle}
      />
      {children}
    </div>
  );
};

export default GradientSpotlight;

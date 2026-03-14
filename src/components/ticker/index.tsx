import React, { useState, useEffect, useRef } from "react";
import CountUp, { CountUpProps } from "react-countup";

export interface TickerProps extends CountUpProps {
  className?: string;
}

/**
 * Ticker component: animated number counter using react-countup.
 * Starts animation when visible in viewport.
 */
const Ticker: React.FC<TickerProps> = ({ className = "", ...rest }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <h4 className={className} ref={ref}>
      <CountUp {...rest} start={hasStarted ? 0 : undefined} />
    </h4>
  );
};

export default Ticker;

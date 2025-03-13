import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Ticker = ({ className, ...rest }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

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
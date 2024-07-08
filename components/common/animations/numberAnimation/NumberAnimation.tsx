import { motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";

interface AnimatedNumbersProps {
  value: number;
  duration: number;
}

const AnimatedNumbers = ({ value, duration }: AnimatedNumbersProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const increment = Math.ceil((value - prevCount) / 100);
        return prevCount + increment;
      });
    }, duration / 10);
    return () => clearInterval(interval);
  }, [value, duration]);

  return (
    <m.span
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      style={{
        display: "inline-block",
        minWidth: "2.5ch",
        fontWeight: "bold",
      }}
    >
      {count}
    </m.span>
  );
};

export default AnimatedNumbers;

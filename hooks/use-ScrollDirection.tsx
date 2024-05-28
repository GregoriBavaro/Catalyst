import { useState, useEffect } from "react";

const SCROLL_DIRECTIONS = {
  UP: "up",
  DOWN: "down",
};

const useScrollDirection = () => {
  const [direction, setDirection] = useState<string>(SCROLL_DIRECTIONS.UP);

  useEffect(() => {
    let oldScrollY = window.scrollY;

    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setDirection(newScrollY > oldScrollY ? SCROLL_DIRECTIONS.DOWN : SCROLL_DIRECTIONS.UP);
      oldScrollY = newScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
};

export default useScrollDirection;
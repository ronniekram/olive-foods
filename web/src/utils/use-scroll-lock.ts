import { createContext, useState, useEffect } from "react";

export const useScrollListener = () => {
  const [scrollData, setScrollData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prev) => ({
        x: window?.scrollX,
        y: window?.scrollY,
        lastX: prev.x,
        lastY: prev.y,
      }));
    };

    // handleScroll();
    window?.addEventListener(`scroll`, handleScroll);

    return () => window?.removeEventListener(`scroll`, handleScroll);
  }, []);

  return scrollData;
};

export const ScrollContext = createContext(null);

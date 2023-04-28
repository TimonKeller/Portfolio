import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed bottom-5 right-5 w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer z-50 hidden md:flex"
      onClick={scrollToTop}
    >
      <div className="absolute pointer-events-none">
        <svg className="transform -rotate-90 w-16 h-16">
          <circle
            cx="32"
            cy="32"
            r="30"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="188.4"
            style={{ strokeDashoffset: 188.4 - (scrollProgress * 188.4) / 100 }}
          />
        </svg>
      </div>
      <img
        src="/arrow.png"
        className="rotate-90 h-6  pointer-events-none"
        alt="upArrow"
      />
    </div>
  );
};

export default ScrollToTop;

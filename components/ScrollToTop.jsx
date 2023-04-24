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
      className="fixed bottom-5 right-5 w-32 h-32 bg-gray-800 rounded-full flex justify-center items-center cursor-pointer z-50"
      onClick={scrollToTop}
    >
      <div className="absolute pointer-events-none">
        <svg className="transform -rotate-90 w-32 h-32">
          <circle
            cx="64"
            cy="64"
            r="60"
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="376.8"
            style={{ strokeDashoffset: 376.8 - (scrollProgress * 376.8) / 100 }}
          />
        </svg>
      </div>
      <img
        src="/arrow.png"
        className="rotate-90 w-20 w-auto pointer-events-none"
        alt="upArrow"
      />
    </div>
  );
};

export default ScrollToTop;

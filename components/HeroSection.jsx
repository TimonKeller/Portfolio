import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const showBlob = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      console.log("light");
      return (
        <img
          className="absolute md:m-8 bg-transparent bg-contain self-center "
          src="/portfolioImageDark.png"
          alt="portfolio_test"
        />
      );
    } else {
      return (
        <img
          className="absolute md:m-8 bg-transparent bg-contain self-center  "
          src="/portfolioImageLight.png"
          alt="portfolio_test"
        />
      );
    }
  };

  const github = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      console.log("light");
      return (
        <img
          className="w-8 cursor-pointer"
          src="/github_profile_light.png"
          alt="github"
          href="https://github.com/TimonKeller"
        />
      );
    } else {
      return (
        <img
          className="w-8 cursor-pointer"
          src="/github_profile_dark.png"
          alt="github"
          href="https://github.com/TimonKeller"
        />
      );
    }
  };

  const linkedIn = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      console.log("light");
      return (
        <img
          className="w-8 cursor-pointer"
          src="/linkedin_profile.png"
          alt="github"
          href="https://www.linkedin.com/in/timon-keller-364308206/"
        />
      );
    } else {
      return (
        <img
          className="w-8 cursor-pointer"
          src="/linkedin_profile_pink.png"
          alt="github"
          href="https://www.linkedin.com/in/timon-keller-364308206/"
        />
      );
    }
  };
  return (
    <div className="container pt-12 px-8 md:py-48 flex md:flex-row gap-x-8 items-center">
      <div className="text-section flex flex-col gap-y-4 tex-center">
        <a className="text-center md:text-start font-caveat text-2xl text-text_light dark:text-text">
          Hi there, I&apos;m Timon
        </a>
        <p className="text-center md:text-start text-5xl md:text-6xl text-text_light dark:text-text">
          Creating experiences, building digital products
        </p>
        <p className="text-center md:text-start text-xl text-pink dark:text-blue">
          Currently enjoying my job
        </p>
        <a
          href="mailto:timon.keller@bluewin.ch"
          className="self-center md:self-start"
        >
          <button className="font-caveat text-text_light dark:text-text  border-text_light dark:border-text font-bold text-2xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in">
            Contact me
          </button>
        </a>
      </div>
      <div className="image-section w-[80%] hidden scale-100 w-full mt-24 md:mt-0  md:flex flex-col justify-center gap-y-64 md:gap-y-64 lg:gap-y-40 mb-12">
        {showBlob()}
      </div>
    </div>
  );
};

export default HeroSection;

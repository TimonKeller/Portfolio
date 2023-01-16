import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7 fill-text md:hover:fill-blue cursor-pointer transform md:hover:scale-125 transition-transform duration-200 ease-in"
          onClick={() => setTheme("light")}
        ></SunIcon>
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7 fill-text_light md:hover:fill-pink cursor-pointer transform md:hover:scale-125 transition-transform duration-200 ease-in"
          onClick={() => setTheme("dark")}
        ></MoonIcon>
      );
    }
  };

  return (
    <div className=" sticky top-0 z-50 bg-background-light dark:bg-background px-4 md:px-0 z-100 ">
      <div className="container mx-auto px-4 md:px-0 py-6">
        <div className="w-full inline-block">
          <div className="md-float-left block flex justify-between items-center">
            <Link href="/">
              <span className="font-caveat text-pink dark:text-blue cursor-pointer font-bold text-4xl">
                Timon.
              </span>
            </Link>
            <div className=" hidden md:inline-block text-md self-center">
              <Link href="#about" smooth>
                <span className="cursor-pointer font-bold text-text_light dark:text-text hover:text-pink hover:dark:text-blue pr-4 self-center">
                  About me
                </span>
              </Link>
              <Link href="#projects" smooth={true}>
                <span className="cursor-pointer font-bold text-text_light dark:text-text hover:text-pink hover:dark:text-blue pr-4">
                  Projects
                </span>
              </Link>
            </div>
            <div className=" text-text_light dark:text-text flex flex-row ">
              <div className="self-center justify-center md:pr-8">
                {renderThemeChanger()}
              </div>
              <a
                className="hidden md:inline-block"
                href="mailto:timon.keller@bluewin.ch"
              >
                <button className="font-caveat text-text_light dark:text-text border-text_light dark:border-text font-bold text-xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in">
                  Contact me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

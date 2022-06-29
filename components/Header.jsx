import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" sticky top-0 z-50 bg-background px-4 md:px-0 z-100">
      <div className="container mx-auto mb-12 px-4 md:px-0 py-6">
        <div className="w-full inline-block">
          <div className="md-float-left block flex justify-between items-center">
            <Link href="/">
              <span className="font-caveat text-blue cursor-pointer font-bold text-4xl">
                Timon.
              </span>
            </Link>
            <div className=" hidden md:inline-block text-md">
              <Link href="#about" smooth>
                <span className="cursor-pointer font-bold  text-gray-400 hover:text-blue pr-4">
                  About me
                </span>
              </Link>
              <Link href="#projects" smooth={true}>
                <span className="cursor-pointer font-bold text-gray-400 hover:text-blue pr-4">
                  Projects
                </span>
              </Link>
            </div>
            <div className="hidden md:inline-block">
              <a href="mailto:timon.keller@bluewin.ch">
                <button className="font-caveat text-text font-bold text-xl mt-2 border-2 rounded-md p-2 hover:bg-blue hover:border-blue hover:-translate-y-2 transition-transform duration-200 ease-in">
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

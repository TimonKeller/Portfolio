import React from "react";
import Image from "next/image";

const TopPart = () => {
  return (
    <div className="container px-16 mt-16 md:py-16 md:flex md:flex-row gap-x-8 items-center ">
      <div className="flex flex-col gap-y-4 tex-center">
        <a className="text-center md:text-start font-caveat text-2xl text-text">
          {" "}
          {"Hi, I'm Timon Keller"}{" "}
        </a>
        <p className="text-center md:text-start text-5xl md:text-6xl text-text">
          Creating experiences, building digital products{" "}
        </p>
        <p className="text-center md:text-start text-xl text-blue">
          Looking for my first opportunity
        </p>
        <a
          href="mailto:timon.keller@bluewin.ch"
          className="self-center md:self-start"
        >
          <button className="font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-md p-4 hover:bg-blue hover:border-blue transform hover:-translate-y-2 transition-transform duration-200 ease-in">
            Contact me
          </button>
        </a>
      </div>
      <div className="hidden scale-100 w-full mt-24 md:mt-0 md:w-3/5 md:flex flex-col justify-center gap-y-64 md:gap-y-64 lg:gap-y-80">
        <a
          className="w-14 inline-block opacity-60 hover:opacity-100 mb-16 relative fill-white bg-none transform hover:-translate-y-2 transition-transform duration-200 ease-in"
          href="https://github.com/TimonKeller"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/github_profile.png" alt="github" />
        </a>
        <img
          className='absolute md:m-8 bg-transparent bg-[url("/blob_about.png")] bg-no-repeat bg-contain '
          src="/portfolio_test.png"
          alt="portfolio_test"
        ></img>
        <a
          className="w-14 inline-block self-end opacity-60 hover:opacity-100 relative transform hover:-translate-y-2 transition-transform duration-200 ease-in"
          href="https://www.linkedin.com/in/timon-keller-364308206/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/linkedin_profile.png" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default TopPart;

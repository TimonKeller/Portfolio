import React from "react";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div
      className="container mt-24 px-8 md:px-0 md:flex md:flex-row w-full scroll-mt-24 md:scroll-mt-48"
      id="about"
    >
      <div className=" flex mb-16 flex-col gap-y-2 tex-center md:w-2/3">
        <span className="text-center text-7xl md:text-start font-caveat md:text-9xl text-text_light dark:text-text font-black">
          {" "}
          This is
          <br />
          <a className="text-center md:text-start font-caveat text-7xl md:text-9xl text-pink dark:text-blue font-black md:ml-52">
            {" "}
            Me
          </a>
        </span>
      </div>
      <div className="w-full flex flex-col">
        <p className="text-center md:text-start text-4xl text-pink dark:text-blue pb-4">
          What I&apos;ve been doing
        </p>
        <span className="text-center md:text-start text-xl text-text_light dark:text-text pb-8 md:pb-4">
          I&apos;ve been studying iCompetence at the FHNW since 2019. I love
          creating cool designed projects and letting the user experience
          digital products.
          <br />
          <br />
          Currently, I&apos;m gaining my first experience in the working world
          as a software engineer. I love learning new technologies, expanding my
          skills and getting practical experience.
        </span>
        {/* <a
          href="/CV.pdf"
          download
          target="_blank"
          className="self-center md:self-start "
        >
          <button className="font-caveat text-text_light dark:text-text border-text_light dark:border-text font-bold text-xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in">
            Download CV
          </button>
        </a> */}
      </div>
    </div>
  );
};

export default AboutMe;

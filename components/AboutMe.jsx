import React from "react";

const AboutMe = () => {
  return (
    <div
      className="container mt-24 px-8 md:px-0 py-16 md:flex md:flex-row w-full scroll-mt-24 md:scroll-mt-24"
      id="about"
    >
      <div className=" flex mb-16 flex-col gap-y-2 tex-center md:w-2/3">
        <a className="text-center text-7xl md:text-start font-caveat md:text-9xl text-text font-black">
          {" "}
          This is
          <br />
          <a className="text-center md:text-start font-caveat text-7xl md:text-9xl text-blue font-black md:ml-52">
            {" "}
            Me
          </a>
        </a>
      </div>
      <div className="w-full flex flex-col">
        <p className="text-center md:text-start text-4xl text-blue pb-4">
          {"What I've been doing"}
        </p>
        <p className="text-center md:text-start text-xl text-text pb-8 md:pb-4">
          I’ve been studying iCompetence at the FHNW since 2019. I love creating
          cool designed projects and letting the user experience digital
          products.
          <br />
          <br />
          Currently, I’m in the transferring phase into the working world. I’m
          looking forward to getting practical experience and learning new
          things.
        </p>
        <a
          className="font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-md p-4 hover:bg-blue hover:border-blue self-center md:self-start hover:-translate-y-2 hover:duration-200 hover:ease-in"
          href="/lebenslauf.pdf"
          download
          target="_blank"
        >
          <button>Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;

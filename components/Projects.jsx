import React from "react";
import Link from "next/link";
import Tilt from "react-vanilla-tilt";

const Projects = () => {
  return (
    <div className="container mt-24 md:mt-48 lg:px-24 px-8" id="projects">
      <div className="text-center text-6xl text-text">My recent Work</div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="lg:col-span-5 text-center">
          <Tilt className="tilt">
            <a href="/leadTool">
              <img src="/leadTool.png" className="justify-center rounded-md" />
            </a>
          </Tilt>
        </div>
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2">
          <p className="mt-4 text-center md:mt-0 md:text-start text-text text-xl mb-4 opacity-60">
            Web Application
          </p>
          <p className="text-center md:text-start font-caveat text-blue text-5xl md:text-6xl mb-2">
            Lead Tool
          </p>
          <p className="text-center md:text-start text-text text-xl mb-4">
            LeadTool is a lead management tool I developed with fellow students
            for Allianz Suisse in the third and fourth semesters.
          </p>
          <Link href="/leadTool">
            <a className="font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-full p-4 hover:bg-blue hover:border-blue self-center md:self-start">
              Read More
            </a>
          </Link>
        </div>
      </div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2 order-2 lg:order-1">
          <p className="mt-4 md:mt-0 text-center md:text-start text-text text-xl mb-4 opacity-60">
            Landing Page/Nudging Research
          </p>
          <p className="text-center md:text-start font-caveat text-blue text-5xl md:text-6xl mb-2">
            GEIGER
          </p>
          <p className="text-center md:text-start text-text text-xl mb-4">
            In the fifth semester of my studies, I was allowed to create a
            landing page with a fellow student and the GEIGER project. The page
            should convince the user to buy the product using nudges.
          </p>
          <Link href="/geiger">
            <a className="font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-full p-4 hover:bg-blue hover:border-blue self-center md:self-start">
              Read More
            </a>
          </Link>
        </div>
        <div className="lg:col-span-5 text-center order-1 lg:order-2">
          <Tilt className="tilt">
            <a href="/geiger">
              <img src="/geiger.png" className="justify-center rounded-md" />
            </a>
          </Tilt>
        </div>
      </div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="lg:col-span-5 text-center">
          <Tilt className="tilt">
            <a href="goldenGoose">
              <img
                src="/goldenGoose.png"
                className="justify-center rounded-md"
              />
            </a>
          </Tilt>
        </div>
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2">
          <p className=" mt-4 text-center md:mt-0 md:text-start text-text text-xl mb-4 opacity-60">
            Landing Page
          </p>
          <p className="text-center md:text-start font-caveat text-blue text-5xl md:text-6xl mb-2">
            Golden Goose
          </p>
          <p className="text-center md:text-start text-text text-xl mb-4">
            The Golden Goose landing page is a freelancing order I received via
            Fiverr. It was a landing page for a stock market information server
            that should link to the discord server and the packages.
          </p>
          <Link href="/goldenGoose">
            <a className="font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-full p-4 hover:bg-blue hover:border-blue self-center md:self-start">
              Read More
            </a>
          </Link>
        </div>
      </div>
      <div className="md:px-0 py-8 md:py-16 grid  md:grid-cols-12 mt-12 gap-x-16">
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2 order-2 lg:order-1">
          <p className="mt-4 md:mt-0 text-center md:text-start text-text text-xl mb-4 opacity-60">
            Website
          </p>
          <p className="text-center md:text-start font-caveat text-blue text-5xl md:text-6xl mb-2">
            Blog
          </p>
          <p className="text-center md:text-start text-text text-xl mb-4">
            The blog is a private project. For this, I decided to develop the
            website myself and deepen my first knowledge with Next.js and
            graphcms.
          </p>
          <Link href="/blog">
            <a className="font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-full p-4 hover:bg-blue hover:border-blue self-center md:self-start">
              Read More
            </a>
          </Link>
        </div>
        <div className="lg:col-span-5 text-center order-1 lg:order-2">
          <Tilt className="tilt">
            <a href="/blog">
              <img src="/blog.png" className="justify-center rounded-md" />
            </a>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Link from "next/link";
import Tilt from "react-vanilla-tilt";

const Projects = () => {
  return (
    <div
      className="container mt-24 md:mt-48 px-8 scroll-mt-24 lg:scroll-mt-24"
      id="projects"
    >
      <div className="text-center text-6xl text-text font-caveat">
        My recent Work
      </div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="lg:col-span-5 text-center">
          <Tilt className="tilt">
            <Link href="/leadTool">
              <img
                src="/leadTool.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 hover:scale-[110%] hover:ease-out"
              />
            </Link>
          </Tilt>
        </div>
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2">
          <p className="mt-4 text-center md:mt-0 md:text-start text-text text-xl mb-4 opacity-60">
            Web Application
          </p>
          <p className="text-center md:text-start font-caveat text-blue text-5xl md:text-6xl mb-2">
            Lead Tool
          </p>
          <p className="text-center md:text-start text-text text-xl mb-2">
            LeadTool is a CRUD web application that I was allowed to develop for
            Allianz Suisse in my third and fourth semester at the FHNW together
            with fellow students.
          </p>
          <div className="flex flex-row">
            <a className="border-2 p-2 rounded-md text-text text-sm mb-4 opacity-60 mr-4">
              React
            </a>
            <a className="border-2 p-2 rounded-md text-text text-sm mb-4 opacity-60 mr-4">
              Java Spring
            </a>
            <a className="border-b-2 p-2 text-text text-sm mb-4 opacity-60">
              Java Spring
            </a>
          </div>
          <Link href="/leadTool">
            <a className="font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-md p-4 hover:bg-blue hover:border-blue self-center md:self-start transform hover:-translate-y-2 transition-transform duration-200 ease-in">
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
            <a className="font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-full p-4 hover:bg-blue hover:border-blue self-center md:self-start transform hover:-translate-y-2 transition-transform duration-200 ease-in">
              Read More
            </a>
          </Link>
        </div>
        <div className="lg:col-span-5 text-center order-1 lg:order-2">
          <Tilt className="tilt">
            <Link href="/geiger">
              <img
                src="/geiger.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 hover:scale-[110%] hover:ease-out"
              />
            </Link>
          </Tilt>
        </div>
      </div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="lg:col-span-5 text-center">
          <Tilt className="tilt">
            <Link href="goldenGoose">
              <img
                src="/goldenGoose.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 hover:scale-[110%] hover:ease-out"
              />
            </Link>
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
            <a className="font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-full p-4 hover:bg-blue hover:border-blue self-center md:self-start transform hover:-translate-y-2 transition-transform duration-200 ease-in">
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
            <a className="font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-full p-4 hover:bg-blue hover:border-blue self-center md:self-start transform hover:-translate-y-2 transition-transform duration-200 ease-in">
              Read More
            </a>
          </Link>
        </div>
        <div className="lg:col-span-5 text-center order-1 lg:order-2">
          <Tilt className="tilt">
            <Link href="/blog">
              <img
                src="/blog.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 hover:scale-[110%] hover:ease-out"
              />
            </Link>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Projects;

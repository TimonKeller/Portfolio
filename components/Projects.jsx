import React from "react";
import Link from "next/link";
import Tilt from "react-vanilla-tilt";

const Projects = () => {
  return (
    <div
      className="container mt-24 md:mt-48 px-8 scroll-mt-24 md:scroll-mt-48"
      id="projects"
    >
      <div className="text-center text-6xl text-text_light dark:text-text font-caveat">
        My recent Work
      </div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="lg:col-span-5 text-center place-self-center ">
          <Tilt className="tilt">
            <Link href="https://neasbakery.vercel.app/">
              <img
                src="/bakery.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 md:scale-[110%] md:hover:scale-[115%] hover:ease-out"
              />
            </Link>
          </Tilt>
        </div>
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2">
          <p className="mt-4 md:mt-0 text-center md:text-start text-text_light dark:text-text text-xl mb-4 opacity-60">
            Bakery Website Project
          </p>
          <p className="text-center md:text-start font-caveat text-pink dark:text-blue text-5xl md:text-6xl mb-2">
            Design and Implementation of a Modern Bakery Website
          </p>
          <p className="text-center md:text-start text-text_light dark:text-text text-xl mb-4">
            This project involved creating a fully functioning, appealing
            website for a bakery. The website offers an intuitive shopping
            experience, a product detail page with SEO optimization, and a
            shopping cart. A highlight is the dynamically updated shopping cart
            that reflects stock in real-time.
          </p>
          <div className="flex flex-row self-center md:self-start">
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              Next.js
            </a>
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              MongoDB
            </a>
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60">
              Tailwind CSS
            </a>
          </div>
          <Link href="https://neasbakery.vercel.app/">
            <a className="font-caveat text-text_light dark:text-text border-text_light dark:border-text font-bold text-xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in self-center md:self-start">
              The Site
            </a>
          </Link>
        </div>
      </div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="lg:col-span-5 text-center place-self-center lg:order-1">
          <Tilt className="tilt">
            <Link href="/bachelor">
              <img
                src="/bachelor.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 md:scale-[110%] md:hover:scale-[115%] hover:ease-out"
              />
            </Link>
          </Tilt>
        </div>
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2">
          <p className="mt-4 md:mt-0 text-center md:text-start text-text_light dark:text-text text-xl mb-4 opacity-60">
            Bachelor Thesis
          </p>
          <p className="text-center md:text-start font-caveat text-pink dark:text-blue text-5xl md:text-6xl mb-2">
            Real-time synchronization with an immersive, digital showroom
          </p>
          <p className="text-center md:text-start text-text_light dark:text-text text-xl mb-4">
            The focus of this work is on the interface between a provider of a
            technical product and a provider of immersive showrooms. Using an
            exemplary product, the interactive presentation of this product in
            combination with a real-time interface to the immersive solution
            will be investigated. Thus, a local exploration can be transformed
            into a space-based group experience - with possibilities of
            large-scale displays, real-time sharing and moderation.
          </p>
          <div className="flex flex-row self-center md:self-start">
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              Unity
            </a>
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              Javascript
            </a>
            <a className="border-2 p-2 rounded-md p-2 text-text_light dark:text-text text-sm mb-4 opacity-60">
              C#
            </a>
          </div>
          <Link href="/bachelor">
            <a className="font-caveat text-text_light dark:text-text border-text_light dark:border-text font-bold text-xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in self-center md:self-start">
              Read More
            </a>
          </Link>
        </div>
      </div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="lg:col-span-5 text-center place-self-center">
          <Tilt className="tilt">
            <Link href="/leadTool">
              <img
                src="/leadTool.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 md:scale-[110%] md:hover:scale-[115%] hover:ease-out"
              />
            </Link>
          </Tilt>
        </div>
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2">
          <p className="mt-4 text-center md:mt-0 md:text-start text-text_light dark:text-text text-xl mb-4 opacity-60">
            Web Application
          </p>
          <p className="text-center md:text-start font-caveat text-pink dark:text-blue text-5xl md:text-6xl mb-2">
            Lead Tool
          </p>
          <p className="text-center md:text-start text-text_light dark:text-text text-xl mb-2">
            LeadTool is a CRUD web application that I was allowed to develop for
            Allianz Suisse in my third and fourth semester at the FHNW together
            with fellow students.
          </p>
          <div className="flex flex-row self-center md:self-start">
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              React
            </a>
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              Java Spring
            </a>
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              MySQL
            </a>
          </div>
          <Link href="/leadTool">
            <a className="font-caveat text-text_light dark:text-text border-text_light dark:border-text font-bold text-xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in self-center md:self-start">
              Read More
            </a>
          </Link>
        </div>
      </div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2 order-2 lg:order-1">
          <p className="mt-4 md:mt-0 text-center md:text-start text-text_light dark:text-text text-xl mb-4 opacity-60">
            Landing Page/Nudging Research
          </p>
          <p className="text-center md:text-start font-caveat text-pink dark:text-blue text-5xl md:text-6xl mb-2">
            GEIGER
          </p>
          <p className="text-center md:text-start text-text_light dark:text-text text-xl mb-4">
            In the fifth semester of my studies, I was allowed to create a
            landing page with a fellow student and the GEIGER project. The page
            should convince the user to buy the product using nudges.
          </p>
          <div className="flex flex-row self-center md:self-start">
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              React
            </a>
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              Google Optimize
            </a>
            <a className="border-2 p-2 rounded-md p-2 text-text_light dark:text-text text-sm mb-4 opacity-60">
              HTML5 fetch API
            </a>
          </div>
          <Link href="https://cyberniinja.github.io/geiger-nudging/">
            <a className="font-caveat text-text_light dark:text-text border-text_light dark:border-text font-bold text-xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in self-center md:self-start">
              The Site
            </a>
          </Link>
        </div>
        <div className="lg:col-span-5 text-center order-1 lg:order-2 place-self-center">
          <Tilt className="tilt">
            <Link href="https://cyberniinja.github.io/geiger-nudging/">
              <img
                src="/geiger.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 md:scale-[110%] md:hover:scale-[115%] hover:ease-out"
              />
            </Link>
          </Tilt>
        </div>
      </div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="lg:col-span-5 text-center place-self-center">
          <Tilt className="tilt">
            <Link href="https://golden-goose-v2.vercel.app/">
              <img
                src="/goldenGoose.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 md:scale-[110%] md:hover:scale-[115%] hover:ease-out"
              />
            </Link>
          </Tilt>
        </div>
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2">
          <p className=" mt-4 text-center md:mt-0 md:text-start text-text_light dark:text-text text-xl mb-4 opacity-60">
            Landing Page
          </p>
          <p className="text-center md:text-start font-caveat text-pink dark:text-blue text-5xl md:text-6xl mb-2">
            Golden Goose
          </p>
          <p className="text-center md:text-start text-text_light dark:text-text text-xl mb-4">
            The Golden Goose landing page is a freelancing order I received via
            Fiverr. It was a landing page for a stock market information server
            that should link to the discord server and the packages.
          </p>
          <div className="flex flex-row self-center md:self-start">
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              Next.js
            </a>
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              Tailwind
            </a>
          </div>
          <a
            href="https://golden-goose-v2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-caveat text-text_light dark:text-text border-text_light dark:border-text font-bold text-xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in self-center md:self-start"
          >
            The Landingpage
          </a>
        </div>
      </div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2 order-2 lg:order-1">
          <p className="mt-4 md:mt-0 text-center md:text-start text-text_light dark:text-text text-xl mb-4 opacity-60">
            Website
          </p>
          <p className="text-center md:text-start font-caveat text-pink dark:text-blue text-5xl md:text-6xl mb-2">
            Blog
          </p>
          <p className="text-center md:text-start text-text_light dark:text-text text-xl mb-4">
            The blog is a private project. For this, I decided to develop the
            website myself and deepen my first knowledge with Next.js and
            Graphcms.
          </p>
          <div className="flex flex-row self-center md:self-start">
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              Next.js
            </a>
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              Graphcms
            </a>
            <a className="border-2 p-2 rounded-md p-2 text-text_light dark:text-text text-sm mb-4 opacity-60">
              Tailwind
            </a>
          </div>
          <a
            href="https://www.akihi.ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-caveat text-text_light dark:text-text border-text_light dark:border-text font-bold text-xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in self-center md:self-start"
          >
            The Blog
          </a>
        </div>
        <div className="lg:col-span-5 text-center order-1 lg:order-2 place-self-center">
          <Tilt className="tilt">
            <Link href="https://www.akihi.ch/">
              <img
                src="/blog.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 md:scale-[110%] md:hover:scale-[115%] hover:ease-out"
              />
            </Link>
          </Tilt>
        </div>
      </div>
      <div className="md:px-0 py-8 md:py-16 grid md:grid-cols-12 mt-12 gap-x-16">
        <div className="lg:col-span-5 text-center place-self-center">
          <Tilt className="tilt">
            <Link href="https://timonkeller.github.io/ivis/">
              <img
                src="/championsleague.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 md:scale-[110%] md:hover:scale-[115%] hover:ease-out"
              />
            </Link>
          </Tilt>
        </div>
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2 order-2 lg:order-1">
          <p className="mt-4 md:mt-0 text-center md:text-start text-text_light dark:text-text text-xl mb-4 opacity-60">
            Data Visualization
          </p>
          <p className="text-center md:text-start font-caveat text-pink dark:text-blue text-5xl md:text-6xl mb-2">
            Championsleague
          </p>
          <p className="text-center md:text-start text-text_light dark:text-text text-xl mb-4">
            In one of our classes at the FHNW, it was our task to develop a data
            visualization page using D3.js, HTML, and CSS. As a big football
            fan, I decided to create a football-inspired website.
          </p>
          <div className="flex flex-row self-center md:self-start">
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              D3.js
            </a>
            <a className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4">
              HTML
            </a>
            <a className="border-2 p-2 rounded-md p-2 text-text_light dark:text-text text-sm mb-4 opacity-60">
              CSS
            </a>
          </div>
          <a
            href="https://timonkeller.github.io/ivis/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-caveat text-text_light dark:text-text border-text_light dark:border-text font-bold text-xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in self-center md:self-start"
          >
            The Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

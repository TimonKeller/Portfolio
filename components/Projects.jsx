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
        <div className="lg:col-span-5 text-center place-self-center lg:order-1">
          <Tilt className="tilt">
            <Link href="https://www.doppelpass-shop.ch/">
              <img
                src="/doppelpass.png"
                className="justify-center rounded-md cursor-pointer hover:duration-200 md:scale-[110%] md:hover:scale-[115%] hover:ease-out"
              />
            </Link>
          </Tilt>
        </div>
        <div className="justify-center lg:col-span-7 flex flex-col gap-y-2">
          <p className="mt-4 md:mt-0 text-center md:text-start text-text_light dark:text-text text-xl mb-4 opacity-60">
            Shopify Store
          </p>
          <p className="text-center md:text-start font-caveat text-pink dark:text-blue text-5xl md:text-6xl mb-2">
            Customize a Shopify Store
          </p>
          <p className="text-center md:text-start text-text_light dark:text-text text-xl mb-4">
          The focus of this work is on enhancing the user experience and functionality of a Shopify store. By adapting the design, developing custom components, and modifying the theme, the project creates a unique, interactive platform. This tailored solution seamlessly combines visual appeal with technical innovation, allowing for dynamic updates and improved navigation.
          </p>
          <div className="flex flex-row self-center md:self-start">
            <a
              href="https://www.shopify.com/partners/blog/115244038-an-overview-of-liquid-shopifys-templating-language"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              Liquid
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=de"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              Javascript
            </a>
          </div>
          <Link href="https://www.doppelpass-shop.ch/">
            <a className="font-caveat text-text_light dark:text-text border-text_light dark:border-text font-bold text-xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in self-center md:self-start">
              The Store
            </a>
          </Link>
        </div>
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
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
              rel="noreferrer"
            >
              Next.js
            </a>
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              MongoDB
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60"
            >
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
            <a
              href="https://unity.com/pages/unity-pro-buy-now?utm_source=google&utm_medium=cpc&utm_campaign=cc_dd_upr_emea_emea-t2_en_pu_sem-gg_acq_br-pr_2023-01_brand-et2_cc3022_ev-br_id:71700000105990829&utm_content=cc_dd_upr_emea_pu_sem_gg_ev-br_pros_x_npd_cpc_kw_sd_all_x_x_brand_id:58700008262875240&utm_term=unity&&&gclid=CjwKCAjwrranBhAEEiwAzbhNtZ5eEJkoCGdsKJSmS3_vK6kIZ3vwlxKveCExu_Xz53lmzHhqrmlQYRoCh04QAvD_BwE&gclsrc=aw.ds"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              Unity
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=de"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              Javascript
            </a>
            <a
              href="https://learn.microsoft.com/de-de/dotnet/csharp/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md p-2 text-text_light dark:text-text text-sm mb-4 opacity-60"
            >
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
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              React
            </a>
            <a
              href="https://spring.io/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              Java Spring
            </a>
            <a
              href="https://www.mysql.com/de/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
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
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              React
            </a>
            <a
              href="https://optimize.withgoogle.com/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              Google Optimize
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md p-2 text-text_light dark:text-text text-sm mb-4 opacity-60"
            >
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
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              Next.js
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              Tailwind CSS
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
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              Next.js
            </a>
            <a
              href="https://hygraph.com/?utm_campaign=brand&utm_source=gads&utm_medium=paid&utm_term=graphcms&utm_campaign=EN_GL_Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=2816788452&hsa_cam=10388867013&hsa_grp=106998344847&hsa_ad=648925742365&hsa_src=g&hsa_tgt=kwd-815138469251&hsa_kw=graphcms&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad=1&gclid=CjwKCAjwrranBhAEEiwAzbhNtfjUC-Bgre-tY9z3KFQZgivbsU6zM7v6SUhnAdhDkdXuA30pxoTZXhoCuHMQAvD_BwE"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              Graphcms
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md p-2 text-text_light dark:text-text text-sm mb-4 opacity-60"
            >
              Tailwind
            </a>
          </div>
          <a
            href="https://blog-685y12fsi-timonkeller.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-caveat text-text_light dark:text-text border-text_light dark:border-text font-bold text-xl  border-2 rounded-md p-4 hover:bg-pink hover:border-pink hover:dark:bg-blue hover:dark:border-blue transform hover:-translate-y-2 hover:text-text transition-transform duration-200 ease-in self-center md:self-start"
          >
            The Blog
          </a>
        </div>
        <div className="lg:col-span-5 text-center order-1 lg:order-2 place-self-center">
          <Tilt className="tilt">
            <Link href="https://blog-685y12fsi-timonkeller.vercel.app/">
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
            <a
              href="https://d3js.org/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              D3.js
            </a>
            <a
              href="https://de.wikipedia.org/wiki/HTML5#:~:text=HTML5%20ist%20die%20f%C3%BCnfte%20Fassung,vorwiegend%20im%20World%20Wide%20Web."
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md text-text_light dark:text-text text-sm mb-4 opacity-60 mr-4"
            >
              HTML5
            </a>
            <a
              href="https://de.wikipedia.org/wiki/CSS3"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-md p-2 text-text_light dark:text-text text-sm mb-4 opacity-60"
            >
              CSS3
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

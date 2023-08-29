import { ThemeProvider } from "next-themes";
import Head from "next/head";
import {
  AboutMe,
  Layout,
  Projects,
  HeroSection,
  ScrollToTop,
} from "../components";

export default function Home() {
  return (
    <div className=" bg-background-light dark:bg-background overflow-hidden">
      <div className="container mx-auto mb-8">
        <Head>
          <title>
            Timon Keller | Software Engineer & Projekte aus der Schweiz
          </title>
          <meta
            name="description"
            content="Timon Keller, erfahrener Software Engineer aus der Schweiz, präsentiert seine Softwareentwicklungsprojekte und Fähigkeiten. Entdecken Sie meine Arbeit und meinen Werdegang auf meiner offiziellen Website."
          />
          <link rel="icon" href="/TK_Logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            property="og:title"
            content="Timon Keller | Software Engineer & Projekte aus der Schweiz"
          />
          <meta
            property="og:description"
            content="Timon Keller, erfahrener Software Engineer aus der Schweiz, präsentiert seine Softwareentwicklungsprojekte und Fähigkeiten. Entdecken Sie meine Arbeit und meinen Werdegang auf meiner offiziellen Website."
          />
          <meta property="og:image" content="/TK_Logo.png" />{" "}
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <Projects></Projects>
        {/* <ScrollToTop className="hidden md:block"></ScrollToTop> */}
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <ThemeProvider attribute="class">
      <Layout>{page}</Layout>
    </ThemeProvider>
  );
};

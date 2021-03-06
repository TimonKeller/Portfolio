import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { AboutMe, Layout, Projects, TopPart } from '../components'



export default function Home() {
  return (
    <div className=' bg-background-light dark:bg-background overflow-hidden'>
      <div className="container mx-auto mb-8">
        <Head>
          <title>Timon Keller</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/TK_Logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>
          <TopPart></TopPart>
          <AboutMe></AboutMe>
          <Projects></Projects>
      </div>
    </div>
    
  )
}

Home.getLayout = function getLayout(page) {
    return (
      <ThemeProvider attribute='class'>
        <Layout>
          {page}
        </Layout>
      </ThemeProvider>
    )
}

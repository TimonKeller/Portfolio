import React from 'react'
import Head from 'next/head'
import Link from "next/link";

const ivis = () => {
 return (
    <div className='container mx-auto mb-8 px-10 md:px-0'>
      <Head>
        <title>Timon Keller</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/TK_Logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <div className='flex flex-col md:shadow-md md:shadow-black md:rounded-md mt-16 md:mt-24'>
        {<img src='/ivis_cropped.png' className='rounded-md self-start'/>}
        <div className='md:px-20  mt-10 md:mt-20'>
          <h1 className='text-center md:text-start font-caveat text-orange dark:text-blue text-5xl md:text-6xl mb-10'>Championsleague</h1>
          <p className='text-center md:text-start text-text_light dark:text-text text-lg mb-24'>
            In the module data visualization, it was our task to design a website with d3.js, HMTL, and CSS in one semester, on which we could display data of a data bank or similar. The goal was to make the data visually appealing and wrap it in a story.              
            <br/>
            <br/>
            {"The work should be group work, but I dared to do this task alone. Not because I didn't want to work in a team, but I just wanted to prove that I could handle such projects on my own towards the end of my studies."}             
          </p>
          <h1 className='text-center md:text-start text-orange dark:text-blue text-3xl mb-4'>
            Project Difficulties
          </h1>
          <p className='text-center md:text-start text-text_light dark:text-text text-lg mb-24'>
            The difficulty in this project was how to package this very simple data about football into a nice looking graph. These graphs should be understandable at first sight and should not have to be explained.     
            <br/>
            <br/>
            As you can see below, I solved it by first showing a graph, where you can see all the places where the trophy was won. These I have decided to draw in circles. The circles are also shown in different colors and sizes, which is explained by the legend on the left. Then, on the 2nd page, I demonstrated the teams with the most wins in a simple bar chart. Finally, in the third display, I have again chosen the European map, on which you can follow the progress of the trophies with a slider and an input field.         
          </p>
          <div className='justify-center align-center gap-x-10'>
            <div>
              <img src='/ivis_1.png' className='mb-10 rounded-md bg-blend-blur'/>
            </div>
            <div>
              <img src='/ivis_2.png' className='mb-10 rounded-md bg-blend-blur'/>
            </div>
            <div>
              <img src='/ivis_3.png' className='mb-10 rounded-md bg-blend-blur'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ivis


ivis.getLayout = function getLayout(page) {
    return (
      <div>
        <Link href='javascript:history.back()'>
          <img src='/close_red.png' className='h-16 w-16 absolute top-8 md:top-16 right-[2%] md:right-0 lg:right-[6%] cursor-pointer'></img>
        </Link>
        {page}
      </div>
    )
}
import React from 'react'
import Image from 'next/image'

const TopPart = () => {
  return (
    <div className='container px-16 md:py-16 md:flex md:flex-row gap-x-8 items-center'>
        <div className='flex flex-col gap-y-4 tex-center'>
            <a className='text-center md:text-start font-caveat text-2xl text-text'> {"Hi, I'm Timon Keller"} </a>
            <p className='text-center md:text-start text-4xl md:text-6xl text-text'>Creating experiences, building digital products </p>
            <a href="mailto:timon.keller@bluewin.ch" className='self-center md:self-start'>
                <button className='font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-full p-4 hover:bg-white hover:text-black'>
                    Contact me
                </button>
            </a>
        </div>
        <div className='scale-100 w-full mt-24 md:mt-0 md:w-3/5 flex flex-col'>
            <a 
            className='w-14 inline-block opacity-60 hover:opacity-100'
            href="https://github.com/TimonKeller" 
            target="_blank"
            rel='noreferrer'>
                <img 
                src='/github_profile.png' 
                alt="github"/>
            </a>
            <img 
            className='mx-6'
            src='/blob_about.png'
            alt='about_blob'
            ></img>
            <a 
            className='w-14 inline-block self-end opacity-60 hover:opacity-100'
            href="https://www.linkedin.com/in/timon-keller-364308206/" 
            target="_blank"
            rel='noreferrer'>
                <img 
                className='w-14 inline-block self-end opacity-60 hover:opacity-100'
                src='/linkedin_profile.png' 
                alt="github"/>
            </a>
        </div>
    </div>
  )
}

export default TopPart
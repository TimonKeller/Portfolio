import React from 'react'

const Projects = () => {
  return (
    <div className='container mt-24 lg:px-24 px-8' id='projects'>
      <div className='text-center text-6xl text-text'>
          My recent Work
      </div>
      <div className='md:px-0 py-16 grid md:grid-cols-12 mt-12 gap-x-16'>
        <div className='lg:col-span-5 text-center'>
            <img src='/leadTool.png' className='justify-center rounded-md'></img>
        </div>
        <div className='justify-center lg:col-span-7 flex flex-col gap-y-2'>
          <p className=' mt-4 text-center md:mt-0 md:text-start text-text text-xl mb-4 opacity-60'>Web Application</p>
          <p className='text-center md:text-start font-caveat text-blue text-6xl mb-2'>Lead Tool</p>
          <p className='text-center md:text-start text-text text-xl mb-4'>LeadTool is a lead management tool that I have developed with some fellow students for Allianz Suisse. </p>
          <a className='font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-full p-4 hover:bg-blue hover:border-blue self-center md:self-start' href="/lebenslauf.pdf" download target="_blank">
              <button>
                  Read More
              </button>
          </a>
        </div>
      </div> 
      <div className='md:px-0 py-16 grid  md:grid-cols-12 mt-12 gap-x-16'>
        <div className='justify-center lg:col-span-7 flex flex-col gap-y-2 order-2 lg:order-1'>
          <p className='mt-4 md:mt-0 text-center md:text-start text-text text-xl mb-4 opacity-60'>Web Application</p>
          <p className='text-center md:text-start font-caveat text-blue text-6xl mb-2'>Lead Tool</p>
          <p className='text-center md:text-start text-text text-xl mb-4'>LeadTool is a lead management tool that I developed with some fellow students for Allianz Suisse. </p>
          <a className='font-caveat text-text font-bold text-2xl mt-6 border-2 rounded-full p-4 hover:bg-blue hover:border-blue self-center md:self-start' href="/lebenslauf.pdf" download target="_blank">
              <button>
                  Read More
              </button>
          </a>
        </div>
        <div className='lg:col-span-5 text-center order-1 lg:order-2'>
            <img src='/leadTool.png' className='justify-center rounded-md'></img>
        </div>
      </div>   
    </div>
  )
}

export default Projects
import React from 'react'

const leadTool = () => {
  return (
    <div className='container mx-auto mb-8 px-10 md:px-0'>
      <div className='flex flex-col shadow-md shadow-black rounded-md'>
        {<img src='/leadTool_cropped.png' className='rounded-md self-start'/>}
        <div className='px-20 mt-20'>
          <h1 className=' text-center md:text-start font-caveat text-blue text-5xl md:text-6xl mb-8'>Lead Tool</h1>
          <p className='text-center md:text-start text-text text-xl mb-4 '>LeadTool is a CRUD web application I was allowed to develop for Allianz Suisse in my third and fourth semester at the FHNW with fellow students.</p>
        </div>
         
       

      </div>
    </div>
  )
}

export default leadTool
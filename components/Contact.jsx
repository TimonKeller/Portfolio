import React from 'react'

const Contact = () => {
  return (
    <div className='container mt-48' id='contact'>
      <div className='flex flex-col gap-y-8'>
        <p className='text-blue text-9xl font-caveat text-center'>Ready to Work</p>
        <a href="mailto:timon.keller@bluewin.ch" className='mt-6 border-2 rounded-full p-4 hover:bg-blue hover:border-blue self-center justify-center mb-24'>
          <p className='font-bold font-caveat text-2xl text-text '>{"Let's talk"}</p>
        </a>
      </div>
    </div>
  )
}

export default Contact
import React, {useState} from 'react'
import Link from 'next/link';
import { Transition } from '@headlessui/react';

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className=' sticky top-0 z-50 bg-background px-4 md:px-0 z-100'>
        <div className='container mx-auto mb-12 px-4 md:px-0 py-6'>
            <div className='w-full inline-block'>
                <div className='md-float-left block flex justify-between items-center'>
                    <Link href='/'>
                        <span className='font-caveat text-blue cursor-pointer font-bold text-4xl'>
                            Timon.
                        </span>
                    </Link>
                    <div className=' hidden md:inline-block text-md'>
                        <Link href='#about' smooth>
                            <span className='cursor-pointer font-bold  text-gray-400 hover:text-blue pr-4'>
                                About me
                            </span>
                        </Link>
                        <Link href='#projects' smooth={true}>
                            <span className='cursor-pointer font-bold text-gray-400 hover:text-blue pr-4'>
                                Projects
                            </span>
                        </Link>
                        <Link href='#contact' smooth={true}>
                            <span className='cursor-pointer font-bold text-gray-400 hover:text-blue'>
                                Contact
                            </span>
                        </Link>
                    </div>
                    <div className='hidden md:inline-block'>
                        <a href="mailto:timon.keller@bluewin.ch">
                            <button className='font-caveat text-text font-bold text-xl mt-2 border-2 rounded-full p-2 hover:bg-blue hover:border-blue'>
                                Contact me
                            </button>
                        </a>
                    </div>
                    <div className='md:hidden flex'>
                        <button onClick={() => setIsOpen(!isOpen)} type='button' className='bg-none inline-flex items-center justify-center rounded-md text-text'
                        aria-expanded='false'>  
                            <span className='sr-only'>
                                Open main menu
                            </span>
                            {!isOpen ?(
                                <svg className='block h-6 w-6' xmlns='http:www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'/>
                                </svg>
                            ) : (
                                <svg className='block h-6 w-6' xmlns='http:www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'/>
                             </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
           <Transition 
           show={isOpen} 
           enter='transition ease-out duration-100 transform'
           enterFrom='opacity-0 scale-95'
           enterTo='opacity-100 scale-100'
           leave='transition ease-in duration-75 transform'
           leaveFrom='opacity-100 scale-100'
           leaveTo='opacity-0 scale-95'>
            {(ref) => (
                <div className='md:hidden id=mobile-menu flex justify-center'>
                    <div ref={ref} className='text-2xl bg-background px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-y-6 justify-center align-center cursor-pointer font-bold text-gray-400 hover:text-text min-h-screen'>
                        <Link href='#about' smooth={true}>
                            <a onClick= {() => setIsOpen(!isOpen)}> About me</a>
                        </Link>
                        <Link href='#projects' smooth={true}>
                            <a onClick= {() => setIsOpen(!isOpen)}>Projects</a>                          
                        </Link>
                        <Link href='#contact' smooth={true}>
                            <a onClick= {() => setIsOpen(!isOpen)}>Contact</a>
                        </Link>
                    </div>
                </div>
            )}
            </Transition>                         
        </div>
    </div>
  )
}

export default Header
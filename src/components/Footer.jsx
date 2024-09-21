import React from 'react'
import github from '../assets/github.png'
import npm from '../assets/npm-icon.svg.png'
const Footer = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row  w-screen bg-white border-t-2 border-slate-200 justify-between'>
       <div className='flex flex-col w-screen lg:w-[15%] h-full items-center lg:justify-center justify-start gap-10 mt-24 lg:px-0 px-5'>
         <img src={npm} alt='gitlogo' className='h-8 w-20' />
         <img src={github} alt='gitlogo' className='h-16 w-16' />
        </div> {/*logo */}
       <div className='flex flex-col w-screen lg:w-[25%] h-full my-8 lg:my-16 lg:px-0 px-10'>
         <h1 className='font-bold text-lg'>Support</h1>
         <div className='flex flex-col gap-5 mt-7 text-gray-500'>
            <p>Help</p>
            <p>Advisories</p>
            <p>Status</p>
            <p>Contact npm</p>
         </div>
        </div> {/* support */}
        <div className='flex flex-col w-screen lg:w-[25%] h-full my-8 lg:my-16 lg:px-0 px-10'>
         <h1 className='font-bold text-lg'>Company</h1>
         <div className='flex flex-col gap-5 mt-7 text-gray-500'>
            <a>About</a>
            <a>Blog</a>
            <a>Press</a>
         </div>
         </div> {/* comapny */}
         <div className='flex flex-col w-screen lg:w-[25%] h-full my-8 lg:my-16 lg:px-0 px-10'>
         <h1 className='font-bold text-lg'>Terms & Policies</h1>
         <div className='flex flex-col gap-5 mt-7 text-gray-500'>
            <p>Policies</p>
            <p>Terms of Use</p>
            <p>Code of Conduct</p>
            <p>Privacy</p>
         </div>
         </div> 
    </div>
   
    </>
  )
}

export default Footer
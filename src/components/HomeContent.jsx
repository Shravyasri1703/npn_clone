import React from 'react'
import Footer from './Footer'
import pattern from '../assets/pattern.png'

const HomeContent = () => {
  return (
    <div className='w-screen flex flex-col items-center bg-gradient-to-br from-pink-600 to-orange-600'>
        <div className='w-screen lg:max-w-[50%]  flex flex-col items-center mt-14 lg:mt-14 gap-8 lg:gap-20 p-3 lg:p-0'>
            <h1 className='text-[55px] lg:text-8xl text-orange-50 font-bold text-center'>Build amazing things</h1>
            <div className='max-w-[95%] lg:max-w-[85%]'>
            <p className='text-center text-orange-50 text-lg'>We&apos;re Github, the company behind the npm Registry and npn CLI. We offer those the community for free, but our day job is building and selling useful tools for developers like you.</p>
            </div>
        </div>
        <div className='w-screen  flex flex-col items-center mt-4 lg:mt-8 gap-8'>
          <div className='max-w-screen lg:max-w-[35%]'> 
          <h1 className='text-3xl lg:text-4xl text-center font-bold text-orange-50'>Take Your Javascript development up a notch</h1>
          </div>
          <div className='w-[90%] lg:max-w-[38%]'>
          <p className='text-center text-orange-50 text-lg'>Get started today for free, or step up to npm Pro to enjoy a premeium Javascript development experience, with features like private packages.</p>
          </div>
          <div className='flex flex-col lg:flex-row w-screen h-40 lg:h-16 items-center justify-center gap-10 mt-8 mb-10'>
            <button className='w-[80%] lg:w-60 h-16 lg:h-14 rounded-full font-bold bg-yellow-400'>Sign Up for free</button>
            <button className='w-[80%] lg:w-60 h-16  lg:h-14 rounded-full font-bold bg-pink-600 text-white border-2 border-white'>Learn About Pro</button>
          </div>
        </div>
         <div className='flex flex-col w-screen bg-white items-center gap-10'>
          <img src={pattern} alt='pattern' className='mt-24'/>
          <div className='w-[90%] lg:max-w-[35%] '>
            <h1 className='text-gray-900 font-bold text-3xl lg:text-4xl text-center'>Bring the best of open sourse to you, your team, and your company</h1>
          </div>
          <div className='w-[85%] lg:max-w-[38%] mb-32 lg:mb-36'>
            <p className='text-center text-slate-800'>Relied upon by more than 17 million developers worldwide, npm is committed to making Javascript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript Code sharing, and with more than 2 million packages, and largest softare registry in the world. Our other tools ans services take the Registry, and the work you do around it, to the next level.</p>
          </div>
         </div>
         <Footer />
    </div>
  )
}

export default HomeContent
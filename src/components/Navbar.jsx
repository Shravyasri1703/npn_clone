import React from 'react'
import { FaHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className='max-w-screen h-16 border-b-2 border-slate-100 flex flex-row items-center p-5 gap-6 lg:gap-10 font-semibold bg-white'>
      <FaHeart size={20}/>  
      <a href='https://www.npmjs.com/products/pro'>Pro</a>
      <a href='https://www.npmjs.com/products/teams'>Teams</a>
      <a href='https://www.npmjs.com/products/teams'>Pricing</a>
      <a href='https://docs.npmjs.com/'>Documnetation</a>
    </nav>
  )
}

export default Navbar
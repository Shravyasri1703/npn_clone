import React, { useState } from 'react'
import { searchPackages } from '../API/npmService'
import icon from '../assets/npm-icon.svg.png'
const Search = () => {
    const [query, setQuery] = useState('')
    const [packages, setPackages] = useState([])


    const handleSearch = async () => {
        const results = await searchPackages(query)
        setPackages(results)
    }

    const timeAgo = (dateString) => {
        const date = new Date(dateString)
        const now = new Date()
        const difference = Math.abs(now - date)

        const secs = Math.floor(difference / 1000)
        const mins = Math.floor(secs / 60)
        const hrs = Math.floor(mins / 60)
        const days = Math.floor(hrs / 24)
        const weeks = Math.floor(days / 7)
        const months = Math.floor(days / 30)
        const years = Math.floor(days / 365)

        if (years > 0) {
            return `${years} year${years > 1 ? 's' : ''} ago`;
        } else if (months > 0) {
            return `${months} month${months > 1 ? 's' : ''} ago`;
        } else if (weeks > 0) {
            return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
        } else if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else {
            return 'Today';
        }
    }
  return (
    <div className=' max-w-screen flex flex-col items-center  bg-white shadow-md'>
        <div className='flex flex-col lg:flex-row w-screen h-28 items-center lg:gap-0 gap-3'>
          <img src={icon} alt='icon' className='w-20 h-6 ml-0 lg:ml-10' onClick={() => window.location.href='/'} /> 
          <div className='flex flex-row w-screen'>
          <input 
           type='text'
           className='border w-[85%]  lg:h-14 bg-gray-100 text-black font-semibold px-5 ml-8'
           value={query}
           onChange={(e) => setQuery(e.target.value)}
           placeholder='Search npm packages...' />
           <button onClick={handleSearch} className='w-20 lg:w-28 h-10 lg:h-14  bg-black text-white font-bold'>Search</button>
           </div> 
           <div className='flex flex-row ml-10'>
            <button className='w-28 h-10 lg:h-14  bg-white text-black border-2 border-slate-200 font-semibold'>Sign Up</button>
            <button className='w-24 h-10 lg:h-14  bg-white text-black  font-semibold'>Sign In</button>
        </div>
           
        </div>
        
        <ul className='p-5'>
            {packages.map( pkg => (
                <li key ={pkg.package.name} className='border-b p-3'>
                 <a href={`/package/${pkg.package.name}`} className='font-bold text-xl'>{pkg.package.name}</a>
                 <p className='text-gray-500 py-3'>{pkg.package.description}</p>
                  
                 {pkg.package.keywords && pkg.package.keywords.length > 0 ? (
                       <div className='flex flex-wrap py-2'>
                            <p className='h-7  bg-slate-100 font-bold'>{pkg.package.keywords.slice(0, 5).map((keyword, index) => (
                                <span key={index} className='px-2 py-1 bg-slate-100 text-slate-500 text-sm font-medium '>
                                    {keyword}
                                </span>
                            ))}</p>
                        </div>    
                        ) : (
                            <p>No keywords available</p>
                        )}
                <div className='flex flex-row gap-4 mt-3'>
                 <p className='font-bold text-slate-600'>{pkg.package.publisher.username}</p>
                 <p>{pkg.package.version}</p>
                 <p className='text-gray-500'>{timeAgo(pkg.package.date)}</p>
                </div>     
              
                 
                </li>  
            ))}
        </ul>
        
       <a></a>
    </div>
  )
}

export default Search
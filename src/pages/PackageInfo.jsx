import React, { useEffect, useState, version } from 'react'
import { useParams } from 'react-router-dom'
import { getPackageDetail } from '../API/npmService'
import Search from './Search'
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaBugSlash } from "react-icons/fa6";
import { TbLicense } from "react-icons/tb";
import { FaCrown } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import Footer from '../components/Footer';

const PackageInfo = () => {
    const { packageName } = useParams()
    const [pkg, setPkg] = useState(null)
    const [showVersions, setShowVersions] = useState(false);

    const toggleVersions = () => {
      setShowVersions(prev => !prev); 
  }

    useEffect(() => {
        const fetchPackageDetail = async () =>{
            const data = await getPackageDetail(packageName)
            console.log(data)
            setPkg(data)
        }
        fetchPackageDetail()
    },[packageName])

    

  return (
    <>
    <div className='p-4'>
    <Search />
    {pkg ? (
        <div className='mt-14'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
               
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col p-5 border-2'>
                        <div className='flex flex-row gap-3 items-center'>
                         <FaCrown size={25} color='#FFD700'/> 
                        <h1 className='text-2xl font-semibold text-red-500'>{pkg.name}</h1>
                        </div>
                        <p className='text-slate-600'>{pkg.description}</p>
                    </div>
                    <div className='flex flex-col p-5 border-2 gap-4'>
                       <div className='flex flex-row gap-3 items-center'>
                        <GiGears size={25}/>
                        <h3 className="text-xl font-semibold text-blue-600">Maintainers</h3>
                       </div> 
                        {pkg.maintainers && pkg.maintainers.length > 0 ? (
                            <ul className="list-disc pl-5">
                                {pkg.maintainers.map((maintainer, index) => (
                                    <li key={index} className='gap-2'>
                                       
                                        <span className="font-bold mr-3"> {maintainer.name}</span>
                                        <span className="text-gray-600">📧 {maintainer.email}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No maintainers available</p>
                        )}
                    </div>
                    <div className='flex flex-col p-5 border-2 gap-4'>
                       <div className='flex flex-row items-center gap-3'>
                        <RiTeamFill size={25}/>
                        <h3 className="text-xl font-semibold text-blue-600">Contributors</h3>
                       </div> 
                        {pkg.contributors && pkg.contributors.length > 0 ? (
                            <ul className="list-disc pl-5">
                                {pkg.contributors.map((contributor, index) => (
                                    <li key={index}>
                                        <span className="font-bold mr-3">{contributor.name}</span>
                                        <span className="text-gray-600">📧 {contributor.email}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No contributors available</p>
                        )}
                    </div>
                </div>

                
                <div className='flex flex-col'>
                    <div className='flex flex-col p-5 border-2 gap-4'>
                        <div className='flex flex-row items-center gap-3'>
                        <h3 className="text-xl font-semibold text-green-700">Repository</h3>
                        <FaGithub  size={25}/>
                        </div>
                        {pkg.repository && pkg.repository.url ? (
                          <div className='flex flex-row items-center gap-3'>
                            <IoIosLink size={22}/>
                            <p>
                                <a href={pkg.repository.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    {pkg.repository.url}
                                </a>
                            </p>
                            </div>
                        ) : (
                            <p>No repository information available</p>
                        )}
                    </div>
                    <div className='flex flex-col p-5 border-2 gap-4'>
                        <div className='flex flex-row gap-3 items-center'>
                        <h3 className="text-xl font-semibold">Bugs</h3>
                        <FaBugSlash size={25}/>
                        </div>
                        {pkg.bugs && pkg.bugs.url ? (
                          <div className='flex flex-row gap-3 items-center'>
                            <IoIosLink />
                            <p>
                                <a href={pkg.bugs.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    {pkg.bugs.url}
                                </a>
                            </p>
                            </div>
                        ) : (
                            <p>No bugs information available</p>
                        )}
                    </div>
                    <div className='flex flex-col p-5 border-2'>
                        <button onClick={toggleVersions} className="text-blue-500 hover:underline">
                            {showVersions ? 'Hide Versions' : 'Show Versions'}
                        </button>
                        {showVersions && (
                                        <div className="mt-4">
                                            <h3 className="text-xl font-semibold">Versions</h3>
                                            <table className="min-w-full border-collapse border border-gray-200 mt-2">
                                                <thead>
                                                    <tr>
                                                        <th className="border border-gray-300 p-2">Version</th>
                                                        <th className="border border-gray-300 p-2">Link</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Object.keys(pkg.versions).reverse().map(version => (
                                                        <tr key={version} className="border border-gray-300">
                                                            <td className="border border-gray-300 p-2">
                                                                <a href={`/package/${pkg.name}/${version}`} className="text-blue-500 hover:underline">
                                                                    {version}
                                                                </a>
                                                            </td>
                                                            <td className="border border-gray-300 p-2">
                                                                <a href={`/package/${pkg.name}/${version}`} className="text-blue-500 hover:underline">View</a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>
                </div>

            
            <div className='flex flex-col p-5 border-2 mt-4 gap-4'>
              <div className='flex flex-row gap-3 items-center'>
                <TbLicense size={25}/>
                <h3 className="text-xl font-semibold">License</h3>
              </div>  
                {pkg.license ? (
                    <p>{pkg.license}</p>
                ) : (
                    <p>No license information available</p>
                )}
            </div>
            <div className='flex flex-col p-5 border-2 mt-4'>
                <h3 className="text-xl font-semibold">Readme</h3>
                {pkg.readme ? (
                    <pre className="bg-gray-100 p-4 rounded overflow-auto">{pkg.readme}</pre>
                ) : (
                    <p>No README available</p>
                )}
            </div>

            <div className='flex flex-col p-5 border-2 mt-4'>
                <h3 className="text-xl font-semibold">KeyWords</h3>
                {pkg.keywords ? (
                    <p className='h-7  bg-slate-100 font-bold mt-2'>{pkg.keywords.slice(0, 5).map((keyword, index) => (
                      <span key={index} className='px-2 py-1 bg-slate-100 text-slate-500 text-sm font-medium '>
                          {keyword}
                      </span>
                  ))}</p>
                ) : (
                    <p>No license information available</p>
                )}
            </div>

            
        </div>
    ) : (
        <p>Loading..</p>
    )}
</div>
 <Footer />
</>
  )
}

export default PackageInfo
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPackageVersionDetail } from '../API/npmService';
import Search from './Search';
import Footer from '../components/Footer';

const Version = () => {
    const { packageName, version } = useParams();
    const [pkgVersion, setPkgVersion] = useState(null);

    useEffect(() => {
        const fetchVersion = async () => {
            const data = await getPackageVersionDetail(packageName, version);
            setPkgVersion(data);
            console.log(data);
        };
        fetchVersion();
    }, [packageName, version]);

    return (
        <>
            <div className='p-4'>
                <Search />

                {pkgVersion ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                        
                        <div className="border p-4 rounded-lg shadow-lg">
                            <h1 className="text-2xl font-bold">
                                {pkgVersion.name} - {pkgVersion.version}
                            </h1>
                            {pkgVersion.description && (
                                <p className="text-gray-600 my-2">{pkgVersion.description}</p>
                            )}
                            
                            
                            {pkgVersion.author && (
                                <div className="my-4">
                                    <h3 className="text-xl font-semibold">Author</h3>
                                    <p>Name: {pkgVersion.author.name}</p>
                                    {pkgVersion.author.email && <p>Email: {pkgVersion.author.email}</p>}
                                    {pkgVersion.author.url && (
                                        <p>
                                            Website:{" "}
                                            <a
                                                href={pkgVersion.author.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline"
                                            >
                                                {pkgVersion.author.url}
                                            </a>
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                    
                        <div className="border p-4 rounded-lg shadow-lg">
                            
                            {pkgVersion.main && (
                                <p className="my-2">
                                    <strong>Main File:</strong> {pkgVersion.main}
                                </p>
                            )}

                            
                            {pkgVersion.dist && (
                                <div className="my-4">
                                    <h3 className="text-xl font-semibold">Distribution</h3>
                                    
                                    <p>
                                        Tarball:{" "}
                                        <a
                                            href={pkgVersion.dist.tarball}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            {pkgVersion.dist.tarball}
                                        </a>
                                    </p>
                                </div>
                            )}
                        </div>

                        
                        <div className="col-span-2">
                            <div className="border p-4 rounded-lg shadow-lg my-4">
                                
                                {pkgVersion.directories && (
                                    <div>
                                        <h3 className="text-xl font-semibold">Directories</h3>
                                        <pre>{JSON.stringify(pkgVersion.directories, null, 2)}</pre>
                                    </div>
                                )}

                            
                                {pkgVersion.modules && (
                                    <div>
                                        <h3 className="text-xl font-semibold">Modules</h3>
                                        <pre>{JSON.stringify(pkgVersion.modules, null, 2)}</pre>
                                    </div>
                                )}

                                
                                {pkgVersion.dependencies && (
                                    <div>
                                        <h3 className="text-xl font-semibold">Dependencies</h3>
                                        <pre>{JSON.stringify(pkgVersion.dependencies, null, 2)}</pre>
                                    </div>
                                )}

                                
                                {pkgVersion.engines && (
                                    <div>
                                        <h3 className="text-xl font-semibold">Engines</h3>
                                        <pre>{JSON.stringify(pkgVersion.engines, null, 2)}</pre>
                                    </div>
                                )}

                                
                                {pkgVersion.repository && (
                                    <div>
                                        <h3 className="text-xl font-semibold">Repository</h3>
                                        <p>
                                            URL:{" "}
                                            <a
                                                href={pkgVersion.repository.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline"
                                            >
                                                {pkgVersion.repository.url}
                                            </a>
                                        </p>
                                        <p>Type: {pkgVersion.repository.type}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Version;

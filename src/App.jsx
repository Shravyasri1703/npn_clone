import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Search from './pages/Search'
import PackageInfo from './pages/PackageInfo'
import Version from './pages/Version'
import Navbar from './components/Navbar'
import HomeContent from './components/HomeContent'

function App() {
  
const location = useLocation()
  return (
    
      <div className='max-w-screen min-h-screen'>
        <div className='h-3 w-screen bg-gradient-to-r from-orange-600 to-pink-600'></div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/package/:packageName' element={<PackageInfo />} />
          <Route path='/package/:packageName/:version' element={<Version />} />
        </Routes>
        
        {location.pathname === '/' && <HomeContent />}
        <div className='h-3 w-screen bg-gradient-to-r from-orange-600 to-pink-600'></div>
      </div>
    
  )
}



function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

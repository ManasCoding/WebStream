import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Navbar/Sidebar'
import Homepage from './Homepage'

const Home = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className='h-full bg-[#0f1115]'>
        <Navbar sidebarToggle={sidebarToggle} />
        <div className='w-full h-full relative'>
            <Sidebar sidebarToggle={sidebarToggle} />
            <Homepage />
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Navbar/Sidebar'
import Homepage from './Homepage'
import { useState } from 'react'
const Home = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className='h-full'>
        <div><Navbar sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle} /></div>
        <div className='w-full h-full relative bg-zinc-900'>
            <div><Sidebar sidebarToggle={sidebarToggle} /></div>
            <div><Homepage sidebarToggle={sidebarToggle}/></div>
        </div>
    </div>
  )
}

export default Home
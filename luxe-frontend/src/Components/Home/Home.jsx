import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Navbar/Sidebar'
import Homepage from './Homepage'
// import { useState } from 'react'
const Home = () => {
    // const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className='h-full bg-zinc-600'>
        <div><Navbar/></div>
        <div className='w-full h-full relative bg-gradient-to-r from-slate-900 to-slate-700'>
            <div><Sidebar /></div>
            <div><Homepage /></div>
        </div>
    </div>
  )
}

export default Home
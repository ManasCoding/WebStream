import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Navbar/Sidebar'
import ShortPage from '../Home/ShortPage'
const ShortHome = () => {
  return (
    <div className='h-full bg-zinc-900'>
        <div><Navbar /></div>
        <div className='w-full h-full relative'>
            <div><Sidebar /></div>
            <div><ShortPage /></div>
        </div>
    </div>
  )
}

export default ShortHome
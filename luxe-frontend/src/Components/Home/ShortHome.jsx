import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Navbar/Sidebar'
import Short from '../Short/Short'
const ShortHome = () => {
  return (
    <div className='h-full bg-zinc-900'>
        <div><Navbar /></div>
        <div className='w-full h-full relative'>
            <div><Sidebar /></div>
            <div><Short /></div>
        </div>
    </div>
  )
}

export default ShortHome
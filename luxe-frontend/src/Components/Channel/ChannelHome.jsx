import React from 'react'
import ChannelPage from './ChannelPage'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Navbar/Sidebar'
const ChannelHome = () => {
  return (
    <div>
        <div className='h-full w-full bg-zinc-900'>
            <div className='absolute text-white z-10'><Navbar /></div>
            <div className='w-full h-full relative bg-zinc-900'>
                <div><Sidebar /></div>
                <div><ChannelPage /></div>
            </div>
        </div>
    </div>
  )
}

export default ChannelHome
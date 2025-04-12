import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import Video from './Video'
import Navbar from '../Navbar/Navbar'

const Videos = () => {
  return (
    <div>
        <div>
            <div className='absolute text-white z-10'><Navbar /></div>
            <div>
                <div><Sidebar /></div>
                <div><Video /></div>
            </div>
        </div>
    </div>
  )
}

export default Videos
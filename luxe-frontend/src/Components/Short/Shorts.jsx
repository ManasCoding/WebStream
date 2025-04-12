import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import Short from './Short'
import Navbar from '../Navbar/Navbar'

const Shorts = () => {
  return (
    <div>
        <div>
            <div className='absolute text-white z-10'><Navbar /></div>
            <div>
                <div><Sidebar /></div>
                <div><Short /></div>
            </div>
        </div>
    </div>
  )
}

export default Shorts
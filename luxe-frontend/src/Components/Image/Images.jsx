import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Navbar/Sidebar'
import Image from './Image'

const Images = () => {
  return (
    <div>
        <div>
            <div className='absolute text-white z-10'><Navbar /></div>
            <div>
                <div><Sidebar /></div>
                <div><Image /></div>
            </div>
        </div>
    </div>
  )
}

export default Images
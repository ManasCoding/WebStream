import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Image from '../Image/Image'
const ImageHome = () => {
  return (
    <div className='h-full'>
        <div ><Navbar /></div>
        <div>
            <div><Sidebar /></div>
            <div><Image /></div>
        </div>
    </div>
  )
}

export default ImageHome
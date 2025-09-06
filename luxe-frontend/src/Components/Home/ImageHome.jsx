import React from 'react'
import Sidebar from '../Navbar/Sidebar'
import Navbar from '../Navbar/Navbar'
// import Image from '../Image/Image'
import ImagePage from './ImagePage'
const ImageHome = () => {
  
  return (
    <div className='h-full'>
        <div ><Navbar /></div>
        <div>
            <div><Sidebar /></div>
            <div><ImagePage /></div>
        </div>
    </div>
  )
}

export default ImageHome
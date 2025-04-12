import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
const UploadImages = () => {
  return (
    <div className='h-screen bg-zinc-900 relative backdrop-filter backdrop-blur-lg'>
      <div><Navbar /></div>
      <div className=' text-white w-[50%] border-[2px] border-zinc-400 absolute top-[15%] left-[25%] flex flex-col justify-center items-center gap-5 py-5'>
        <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span className='text-red-600'><FaYoutube /></span><span>Upload Images</span></div>
        <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Title of Image' /></div>
        <div><input className='w-96 px-4 rounded-lg py-3 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Description' /></div>
        <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Category' /></div>
        <div className='flex justify-evenly'> <span><input type="file" name="" id="" /></span></div>
        <div className='flex justify-center items-center gap-5'><Button title='Upload'/><Link to={'/'}><Button title='Home Page'/></Link></div>
      </div>
    </div>
  )
}

export default UploadImages
import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
const UploadShorts = () => {
  return (
    <div>
        <div className='h-screen bg-gradient-to-r from-slate-900 to-slate-700 relative backdrop-filter backdrop-blur-lg'>
      <div><Navbar /></div>
      <div className=' text-white w-[50%] border-[2px] border-zinc-400 absolute top-[15%] left-[25%] flex flex-col justify-center items-center gap-5 py-5'>
        <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span className='text-red-600'><FaYoutube /></span><span>Edit Shorts</span></div>
        <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Title of Shorts' /></div>
        <div><input className='w-96 px-4 rounded-lg py-3 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Description' /></div>
        <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Category' /></div>
        <div className='flex justify-evenly'>Thumbnail <span><input type="file" name="" id="" /></span></div>
        <div className='flex justify-evenly'>Shorts <span><input type="file" name="" id="" /></span></div>
        <div className='flex justify-center items-center gap-5'><Button title='Upload'/><Link to={'/'}><Button title='Home Page'/></Link></div>
      </div>
      </div>
    </div>
  )
}

export default UploadShorts
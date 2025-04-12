import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
const Signup = () => {
  return (
    <div className='h-screen bg-zinc-900 relative backdrop-filter backdrop-blur-lg'>
      <div><Navbar /></div>
      <div className=' text-white w-[50%] border-[2px] border-zinc-400 absolute top-[15%] left-[25%] flex flex-col justify-center items-center gap-5 py-5'>
        <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span className='text-red-600'><FaYoutube /></span><span>SignUp</span></div>
        <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Channel name' /></div>
        <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Username' /></div>
        <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="password" placeholder='Password' /></div>
        <div><input className='w-96 px-4 rounded-lg py-3 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='About Your Channel' /></div>
        <div className='flex justify-evenly'><span><input type="file" name="" id="" /></span><span className='w-20 h-20 rounded-full bg-zinc-600 border-[1px] border-zinc-400'></span></div>
        <div className='flex justify-center items-center gap-5'><Button title='SignUp'/><Link to={'/'}><Button title='Home Page'/></Link></div>
      </div>
      </div>
    
  )
}

export default Signup
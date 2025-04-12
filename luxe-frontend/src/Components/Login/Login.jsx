import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
const Login = () => {
  return (
    <div className='h-screen bg-zinc-900 relative backdrop-filter backdrop-blur-lg'>
      <div><Navbar /></div>
      <div className=' text-white w-[40%] border-[2px] border-zinc-400 absolute top-[15%] left-[30%] flex flex-col justify-center items-center gap-10 py-16'>
        <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span className='text-red-600'><FaYoutube /></span><span>LogIn</span></div>
        <div><input className='w-80 px-4 rounded-lg py-2 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Username' /></div>
        <div><input className='w-80 px-4 rounded-lg py-2 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="password" placeholder='Password' /></div>
        <div className='flex justify-center items-center gap-5'><Button title='LogIn'/><Link to={'/signup'}><Button title='SignUp'/></Link><Button title='Cancel' /></div>
      </div>
      </div>
  )
}

export default Login
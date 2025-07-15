import React from 'react'
import { Link } from 'react-router-dom'

const Options = () => {
  return (
    <div className="absolute top-24 right-2 z-10 text-white">
        <div className='flex flex-col justify-first items-center gap-4 bg-zinc-900 rounded-lg'>
            <div className='hover:bg-zinc-800 py-1 px-5 rounded-t-lg'><Link to={'/home'}>Home</Link></div>
            <div className='hover:bg-zinc-800 py-1 px-5'><Link to={'https://portfolio-projects-x68b.vercel.app/'}>Profile</Link></div>
            <div className='hover:bg-zinc-800 py-1 px-5'><Link to={'/login'}>Login</Link></div>
            <div className='hover:bg-zinc-800 py-1 px-5 rounded-b-lg'><Link to={'/signup'}>Signup</Link></div>
        </div>
    </div>
  )
}

export default Options
import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-4 bg-zinc-900 rounded-lg h-screen text-white'>
            <div><Link to={'/login'}>Login</Link></div>
            <div><Link to={'/signup'}>Sign up</Link></div>
            <div><Link to={'/home'}>Home</Link></div>
        </div>
    </div>
  )
}

export default LandingPage
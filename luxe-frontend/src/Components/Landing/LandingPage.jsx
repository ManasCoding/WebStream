import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div>
        <div className="relative w-screen h-screen bg-[#111827]">
          {/* <div><video src="/videos/2257259-hd_1920_1080_20fps.mp4" autoPlay={true} loop={true} playsInline={true} muted={true} className='w-screen h-screen object-cover absolute z-10'></video></div> */}
          {/* <div className='w-screen h-screen object-cover fixed z-10 bg-gradient-to-r from-slate-900 to-slate-700'></div> */}
          {/* <div className='w-screen h-screen object-cover fixed z-10 bg-[#111827]'></div> */}
          <header className='absolute top-0 left-0 opacity-100 z-20 text-white w-screen flex justify-between items-center px-20 py-4 gap-4 items-center text-xl border-b-[0.5px] border-zinc-600 bg-[#1F2937]'>
            <h1 className="text-2xl font-bold">WebStream</h1>
            <ul className="flex gap-8 text-sm md:text-base text-zinc-300 text-white font-semibold tracking-wide">
              <li className="cursor-pointer hover:text-white transition hover:text-[#4338CA]">Home</li>
              <li className="cursor-pointer hover:text-white transition hover:text-slate-400">About</li>
              <li className="cursor-pointer hover:text-white transition hover:text-slate-400">Services</li>
              <li className="cursor-pointer hover:text-white transition hover:text-slate-400">Contact</li>
            </ul>
          </header>
          
          <main className="flex flex-col justify-center items-center h-full text-center text-white z-10 relative">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg mt-20">
              Welcome To{" "}
              <span className="text-[#6366F1] drop-shadow-lg hover:text-[#4338CA]">Web Stream</span>
            </h2>

            <p className="text-lg md:text-2xl text-zinc-300 max-w-xl mb-8">
              Stream, share, and explore videos like never before.
            </p> 

            <div className="flex gap-6 mt-4">
              <Link
                to="/login"
                className="px-6 py-2 rounded-lg bg-[#6366F1] hover:bg-[#4338CA] transition font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition font-medium"
              >
                Sign Up
              </Link>
            </div>
          </main>

        </div>
    </div>
  )
}

export default LandingPage
import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div>
        <div>
          <div><video src="/videos/2257259-hd_1920_1080_20fps.mp4" autoPlay={true} loop={true} playsInline={true} muted={true} className='w-screen h-screen object-cover absolute z-10'></video></div>
          <div className='absolute opacity-100 z-20 text-white w-screen flex justify-between gap-4 items-center p-16 text-xl '>
            <div className='text-2xl font-bold'>Luxe</div>
            <div className='flex gap-10 text-thin text-zinc-200 text-sm'>
              <div>home</div>
              <div>about</div>
              <div>services</div>
              <div>blog</div>
              <div>portfolio</div>
            </div>
            <div>Contact Us</div>
          </div>
          <div className='absolute opacity-100 z-20 text-white w-screen flex flex-col justify-between gap-4 items-center p-16 text-xl '>
            <div className='relative z-30 top-60 flex justify-center items-center gap-4
             text-2xl text-white'>
              Wellcome To Luxe ,  A Video Streaming Web Application !
            </div>
            <div className='relative z-30 flex justify-center items-center gap-10
              rounded-lg h-screen text-white'>
              <div><Link to={'/login'}>Login</Link></div>
              <div><Link to={'/signup'}>Sign up</Link></div>
            {/* <div><Link to={'/home'}>Home</Link></div> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage
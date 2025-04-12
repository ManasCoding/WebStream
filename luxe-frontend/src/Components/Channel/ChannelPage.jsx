import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import Video from '../Video/Video'
const ChannelPage = () => {
  return (
    <div>
        <div className='w-[82%] absolute right-0 top-12 text-white h-screen bg-zinc-900'>
            <div className='w-full h-[25%] bg-red-600 rounded-lg mt-2'></div>
            <div className='bg-zinc-900 flex justify-first items-center px-8 gap-5'>
                <div className='bg-zinc-800 h-[10rem] w-[10rem] rounded-full mt-4'></div>
                <div className='flex flex-col gap-1 mt-2'>
                    <h1>Channel Name</h1>
                    <h1><span>User ID</span></h1>
                    <h1 className='flex gap-6 items-center'><span><span>25k </span>Subscribers</span><span><span>213 </span><span>Videos</span></span></h1>
                    <h1>About your channel</h1>
                    <Button title='Subscribe' color='bg-red-600'/>
                </div>
            </div>
            <div className='flex justify-first items-center gap-4 px-8 mt-4'>
                <Link className='hover:text-red-600'>Home</Link>
                <Link className='hover:text-red-600'>Videos</Link>
                <Link className='hover:text-red-600'>Shorts</Link>
                <Link className='hover:text-red-600'>Images</Link>
                <Link className='hover:text-red-600'>Profile</Link>
                <Link className='hover:text-red-600'>About</Link>
            </div>
            <div className='border-b-[2px] border-zinc-700'><br /></div>
        </div>
        <div><Video top='top-96'/></div>
    </div>
  )
}

export default ChannelPage
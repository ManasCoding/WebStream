import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import HomeEdit from '../Edit/HomeEdit'
import { Link } from 'react-router-dom'
const Short = ({top = "top-12"}) => {
  return (
    <div>
        <div className={`w-[82%] absolute right-0 ${top} text-white h-screen bg-zinc-900`}>
            <div className='h-full pt-2'>
                <div className='hidden'><HomeEdit /></div>
                <div className='py-2 px-8 flex flex-wrap gap-4 gap-y-12'>
                    <Link to = "/ShortDetails"><div className='h-[18rem] w-[10rem] rounded-lg'>
                        <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

                        <div className='flex justify-between items-center px-2'>
                                <div>
                                    <div className='text-xs'>A random day in Dubai | Dubai Vlog</div>
                                    <div className='text-xs'>rajendra prasad</div>
                                    <div className='text-xs'><span>336k views</span><span>3 days ago</span></div>
                                </div>
                            <div><BsThreeDotsVertical /></div>
                        </div>
                    </div></Link>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default Short
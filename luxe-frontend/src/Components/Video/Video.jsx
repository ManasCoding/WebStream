import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CgProfile } from "react-icons/cg";
import HomeEdit from '../Edit/HomeEdit'

const Video = ({top = "top-12"}) => {
  return (
    <div>
        <div className={`w-[82%] absolute right-0 ${top} text-white h-full bg-gradient-to-r from-slate-900 to-slate-700`}>
            <div className='h-full pt-2'>
                <div className='hidden'><HomeEdit /></div>
                <div className='py-2 px-8 flex flex-wrap gap-4 gap-y-12'>
                    <div className='h-[12rem] w-[14rem] rounded-lg'>
                        <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

                        <div className='flex justify-between items-center'>
                            <div className='flex justify-first items-center gap-2 pt-2'>
                                <div className='text-2xl mb-6'><CgProfile /></div>
                                <div>
                                    <div className='text-xs'>A random day in Dubai | Dubai Vlog</div>
                                    <div className='text-xs'>rajendra prasad</div>
                                    <div className='text-xs'><span>336k views</span><span>3 days ago</span></div>
                                </div>
                            </div>
                            <div><BsThreeDotsVertical /></div>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default Video
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import HomeEdit from '../Edit/HomeEdit'
const ImagePage = () => {
  return (
    <div>
        <div className='w-[82%] absolute right-0 top-12 text-black h-full bg-zinc-200'>
            <div className='h-full'>
                <div className='hidden'><HomeEdit /></div>

                <div className='py-6 px-8 flex flex-wrap gap-4 gap-y-12'>
                    <div className='h-[14rem] w-[14rem] rounded-lg'>
                        <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

                        <div className='flex justify-between items-center px-2'>
                                <div>
                                    <div className='text-sm'>A random day in Dubai | Dubai Vlog</div>
                                    <div className='text-sm'>rajendra prasad</div>
                                    <div className='text-sm'><span>336k views</span><span>3 days ago</span></div>
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

export default ImagePage
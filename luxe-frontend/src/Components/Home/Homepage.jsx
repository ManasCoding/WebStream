import React from 'react'
import Homebar from '../Navbar/Homebar'
import { CgProfile } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";
import HomeEdit from '../Edit/HomeEdit';
import { useState } from 'react';
const Homepage = ({sidebarToggle}) => {

    const [handleEdit, setHandleEdit] = useState(false);
  return (
    <div>
        <div className={`${sidebarToggle ? 'w-[96%]' : 'w-[82%]'} absolute right-0 top-24 text-white h-screen bg-zinc-900`}>
            <div className='w-full'><Homebar /></div>
            <div className='h-full'>
                <div className={`${handleEdit ? 'block' : 'hidden'}`}><HomeEdit /></div>

                <div className='py-6 px-8 flex flex-wrap gap-4 gap-y-12'>


                    <div className='h-[17rem] w-[32%] rounded-lg'>
                        <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

                        <div className='flex justify-between items-center'>
                            <div className='flex justify-first items-center px-2 gap-4 pt-2'>
                                <div className='text-3xl mb-12'><CgProfile /></div>
                                <div>
                                    <div>A random day in Dubai | Dubai Vlog</div>
                                    <div>rajendra prasad</div>
                                    <div><span>336k views</span><span>3 days ago</span></div>
                                </div>
                            </div>
                            <div onClick={() => setHandleEdit(!handleEdit)}><BsThreeDotsVertical /></div>
                        </div>
                    </div>
                    <div className='h-[17rem] w-[32%] rounded-lg'>
                        <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

                        <div className='flex justify-between items-center'>
                            <div className='flex justify-first items-center px-2 gap-4 pt-2'>
                                <div className='text-3xl mb-12'><CgProfile /></div>
                                <div>
                                    <div>A random day in Dubai | Dubai Vlog</div>
                                    <div>rajendra prasad</div>
                                    <div><span>336k views</span><span>3 days ago</span></div>
                                </div>
                            </div>
                            <div><BsThreeDotsVertical /></div>
                        </div>
                    </div>
                    <div className='h-[17rem] w-[32%] rounded-lg'>
                        <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

                        <div className='flex justify-between items-center'>
                            <div className='flex justify-first items-center px-2 gap-4 pt-2'>
                                <div className='text-3xl mb-12'><CgProfile /></div>
                                <div>
                                    <div>A random day in Dubai | Dubai Vlog</div>
                                    <div>rajendra prasad</div>
                                    <div><span>336k views</span><span>3 days ago</span></div>
                                </div>
                            </div>
                            <div><BsThreeDotsVertical /></div>
                        </div>
                    </div>
                    <div className='h-[17rem] w-[32%] rounded-lg'>
                        <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

                        <div className='flex justify-between items-center'>
                            <div className='flex justify-first items-center px-2 gap-4 pt-2'>
                                <div className='text-3xl mb-12'><CgProfile /></div>
                                <div>
                                    <div>A random day in Dubai | Dubai Vlog</div>
                                    <div>rajendra prasad</div>
                                    <div><span>336k views</span><span>3 days ago</span></div>
                                </div>
                            </div>
                            <div><BsThreeDotsVertical /></div>
                        </div>
                    </div>
                    <div className='h-[17rem] w-[32%] rounded-lg'>
                        <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

                        <div className='flex justify-between items-center'>
                            <div className='flex justify-first items-center px-2 gap-4 pt-2'>
                                <div className='text-3xl mb-12'><CgProfile /></div>
                                <div>
                                    <div>A random day in Dubai | Dubai Vlog</div>
                                    <div>rajendra prasad</div>
                                    <div><span>336k views</span><span>3 days ago</span></div>
                                </div>
                            </div>
                            <div><BsThreeDotsVertical /></div>
                        </div>
                    </div>
                    <div className='h-[17rem] w-[32%] rounded-lg'>
                        <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

                        <div className='flex justify-between items-center'>
                            <div className='flex justify-first items-center px-2 gap-4 pt-2'>
                                <div className='text-3xl mb-12'><CgProfile /></div>
                                <div>
                                    <div>A random day in Dubai | Dubai Vlog</div>
                                    <div>rajendra prasad</div>
                                    <div><span>336k views</span><span>3 days ago</span></div>
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

export default Homepage
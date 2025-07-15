import React, { useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
const Homepage = () => {
    const [handleEdit, setHandleEdit] = React.useState(false);
    const connect = () => {
        axios.get('http://localhost:5000/').then((res) => {
            console.log(res);
            setHandleEdit(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        connect();
    }, [])

  return (
    <div>
        <div className='w-[82%] absolute right-0 top-0 text-white h-screen bg-gradient-to-r from-slate-900 to-slate-700'>
            <div className='h-full'>
                {/* <div className={`${handleEdit ? 'block' : 'hidden'}`}><HomeEdit /></div> */}

                <div className='py-6 px-8 flex flex-wrap gap-4 gap-y-12 mt-20'>



                    
                    
                    
                    <div className='h-[17rem] w-[32%] rounded-lg'>
                        <div className='h-[70%] bg-blue-500 rounded-lg'>{handleEdit}</div>

                        <div className='flex justify-between items-center'>
                            <div className='flex justify-first items-center px-2 gap-4 pt-2'>
                                <div className='text-3xl mb-12'><CgProfile /></div>
                                <div>
                                    <div>A random day in Dubai | Dubai Vlog</div>
                                    <div>rajendra prasad</div>
                                    <div><span>336k views</span><span>3 days ago</span></div>
                                </div>
                            </div>
                            {/* <div><BsThreeDotsVertical /></div> */}
                        </div>
                    </div>
                    
                



                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage
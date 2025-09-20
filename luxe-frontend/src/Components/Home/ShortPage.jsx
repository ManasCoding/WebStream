import React from 'react'
import { useState, useEffect,  } from 'react';
// import { BsThreeDotsVertical } from "react-icons/bs";
// import HomeEdit from '../Edit/HomeEdit';
import { Link } from 'react-router-dom';
import axios from 'axios';
const ShortPage = ({top = "top-12"}) => {

    const [allShorts, setAllShorts] = useState([])
    // console.log(`http://localhost:5000${allShorts.images}`);

    const getAllShorts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/users/getallshorts", { withCredentials: true });
            console.log(response.data);
            setAllShorts(response.data);
        } catch (error) {
            console.error(`System error happens: ${error.message}`);
            return res.status(500).json({ message: "Internal server error...", error });
        }
    };

    useEffect(() => {
        getAllShorts();
    }, []);
  return (
    <div>
        <div className={`w-[82%] absolute right-0 ${top} text-white h-screen bg-zinc-900`}>
            <div className='h-full'>
                {/* <div className='hidden'><HomeEdit /></div> */}

                {/* <div className='py-6 px-8 flex flex-wrap gap-4 gap-y-12'>
                    <div className='h-[22rem] w-[12rem] rounded-lg'>
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
                </div> */}


                <div className="py-2 px-8 flex flex-wrap gap-4 gap-y-12">
                    {allShorts.length > 0 ? (
                        allShorts.map((short, index) => (
                        <Link to={`/ShortDetails/${short._id}`} key={index}>
                            <div className="h-[18rem] w-[10rem] rounded-lg">
                            <div className="h-[70%] bg-blue-900 rounded-lg flex items-center justify-center">
                                {/* If you have thumbnail/video preview */}
                                {/* {short.thumbnail ? (
                                <img
                                    src={short.thumbnail}
                                    alt={short.title}
                                    className="h-full w-full object-cover rounded-lg"
                                />
                                ) : (
                                <span className="text-sm">No Preview</span>
                                )} */}
                                <img src={`http://localhost:5000${short.shorts}`} alt=""/>
                            </div>
                            </div>
                        </Link>
                        ))
                    ) : (
                        <p className="text-gray-400">No shorts available</p>
                    )}
                    </div>


            </div>
        </div>
    </div>
  )
}

export default ShortPage
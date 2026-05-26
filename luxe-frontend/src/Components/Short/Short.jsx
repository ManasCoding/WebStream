import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Short = ({ top = "top-12" }) => {
    const [usershort, setUsershort] = useState([]);

    const getUserShort = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/getusershorts`, { withCredentials: true });
            setUsershort(response.data);
        } catch (error) {
            console.error(`Error fetching shorts: ${error.message}`);
        }
    };

    useEffect(() => {
        getUserShort();
    }, []);

    return (
        <div className={`w-[82%] absolute right-0 ${top} text-white h-screen bg-[#0f0f0f] overflow-y-auto scrollbar-hide`}>
            <div className="h-full px-6 pt-24 pb-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
                    {usershort.map((short, index) => (
                        <Link 
                            to={`/ShortDetails/${short._id}`} 
                            key={index}
                            className="flex flex-col gap-3 group"
                        >
                            <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-zinc-800">
                                <video
                                    src={`${import.meta.env.VITE_API_URL}${short.shorts}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[11px] font-medium">
                                    0:15
                                </div>
                            </div>

                            <div className="flex justify-between items-start px-1">
                                <h3 className="font-semibold text-[14px] leading-snug line-clamp-2">
                                    {short.title}
                                </h3>
                                <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                                    <BsThreeDotsVertical />
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

                {usershort.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-[50vh] text-center">
                        <p className="text-gray-500">No shorts found.</p>
                        <Link to="/uploadshorts" className="mt-4 text-purple-500 hover:underline text-sm font-medium">
                            Upload your first Short
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Short;
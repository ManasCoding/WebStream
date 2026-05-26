import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Video = ({ top = "top-12" }) => {
    const [uservideo, setUservideo] = useState([]);

    const getUserVideo = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:7000'}/users/getuservideos`, { withCredentials: true });
            setUservideo(response.data);
        } catch (error) {
            console.error(`System error happens: ${error.message}`);
        }
    };

    useEffect(() => {
        getUserVideo();
    }, []);

    return (
        <div className={`w-[82%] absolute right-0 ${top} text-white h-full bg-transparent overflow-y-auto scrollbar-hide`}>
            <div className="h-full px-8 pt-20 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                    {uservideo.map((video) => (
                        <Link 
                            to={`/VideoDetails/${video._id}`} 
                            key={video._id}
                            className="group"
                        >
                            <div className="relative bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(168,85,247,0.1)] hover:scale-[1.02] flex flex-col h-full">
                                {/* Thumbnail Container */}
                                <div className="relative aspect-video overflow-hidden">
                                    <video
                                        src={`${import.meta.env.VITE_API_URL || 'http://localhost:7000'}${video.videos}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Play Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-purple-600/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500">
                                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>
                                    {/* Category Tag */}
                                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 text-gray-300">
                                        {video.category}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-5 flex gap-4 flex-1">
                                    {/* Text Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-[13px] leading-tight mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                                            {video.title}
                                        </h3>
                                        <div className="flex flex-col gap-0.5">
                                            <p className="text-gray-500 text-[11px] font-medium mb-2 line-clamp-1 italic">
                                                "{video.description}"
                                            </p>
                                            <p className="text-gray-600 text-[10px] flex items-center gap-2">
                                                <span>842k views</span>
                                                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                                                <span>1 week ago</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <button className="text-gray-600 hover:text-white transition-colors h-fit p-1">
                                        <BsThreeDotsVertical />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {uservideo.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-[50vh] opacity-30">
                        <div className="w-20 h-20 border-2 border-dashed border-gray-600 rounded-full mb-4"></div>
                        <p className="text-gray-500 font-bold tracking-widest uppercase text-xs text-center">Your creative gallery is empty.<br/>Upload your first masterpiece!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Video;
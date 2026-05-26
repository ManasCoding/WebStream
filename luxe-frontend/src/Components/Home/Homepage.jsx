import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical, BsCheckCircleFill } from 'react-icons/bs';

const Homepage = () => {
    const [allVideos, setAllVideos] = useState([]);

    const getAllVideo = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/getallvideos`, { withCredentials: true });
            setAllVideos(response.data);
        } catch (error) {
            console.error(`Error fetching videos: ${error.message}`);
        }
    };

    useEffect(() => {
        getAllVideo();
    }, []);

    return (
        <div className="w-[82%] h-screen absolute right-0 top-0 text-white bg-[#0f0f0f] overflow-y-auto scrollbar-hide">
            <div className="h-full px-6 pt-24 pb-20">
                {/* Simplified Header */}
                <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
                    <h2 className="text-2xl font-bold">Videos</h2>
                    <div className="flex gap-4 text-sm font-medium text-gray-400">
                        <span className="text-white cursor-pointer">All</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Trending</span>
                        <span className="hover:text-white cursor-pointer transition-colors">New</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                    {allVideos.map((video) => (
                        <Link 
                            to={`/VideoDetails/${video._id}`} 
                            key={video._id}
                            className="flex flex-col gap-3 group"
                        >
                            <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-800">
                                <video
                                    src={`${import.meta.env.VITE_API_URL}${video.videos}`}
                                    className="w-full h-full object-cover"
                                    muted
                                    onMouseOver={(e) => e.target.play()}
                                    onMouseOut={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                                />
                                <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[11px] font-medium">
                                    12:34
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex-shrink-0">
                                    <div className="h-10 w-10 rounded-full overflow-hidden bg-zinc-800">
                                        {video.userId?.image && video.userId.image !== "0" ? (
                                            <img
                                                src={`${import.meta.env.VITE_API_URL}${video.userId.image}`}
                                                alt="Channel"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                                                <CgProfile className="w-6 h-6" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-[16px] leading-snug line-clamp-2">
                                        {video.title}
                                    </h3>
                                    <div className="mt-1 flex flex-col text-sm text-gray-400">
                                        <div className="flex items-center gap-1 hover:text-white transition-colors">
                                            <span>{video.userId?.channel || "Creator"}</span>
                                            <BsCheckCircleFill className="text-[10px]" />
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span>243K views</span>
                                            <span>•</span>
                                            <span>2 days ago</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <BsThreeDotsVertical />
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

                {allVideos.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-[50vh] text-center">
                        <p className="text-gray-500">No videos found in this sector.</p>
                        <Link to="/uploadvideo" className="mt-4 text-purple-500 hover:underline text-sm font-medium">
                            Upload your first video
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Homepage;
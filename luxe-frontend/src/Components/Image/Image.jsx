import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Image = ({ top = "top-12" }) => {
    const [userimage, setUserimage] = useState([]);

    const getUserImage = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:7000'}/users/getuserimages`, { withCredentials: true });
            setUserimage(response.data);
        } catch (error) {
            console.error(`Error fetching images: ${error.message}`);
        }
    };

    useEffect(() => {
        getUserImage();
    }, []);

    return (
        <div className={`w-[82%] absolute right-0 ${top} text-white h-full bg-[#0f0f0f] overflow-y-auto scrollbar-hide`}>
            <div className="h-full px-6 pt-24 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                    {userimage.map((img) => (
                        <Link 
                            to={`/ImageDetails/${img._id}`} 
                            key={img._id}
                            className="flex flex-col gap-3 group"
                        >
                            <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-800">
                                <img
                                    src={`${import.meta.env.VITE_API_URL || 'http://localhost:7000'}${img.images}`}
                                    alt={img.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[11px] font-medium">
                                    {img.category || "Image"}
                                </div>
                            </div>

                            <div className="flex justify-between items-start px-1">
                                <div className="flex-1 min-w-0 pr-2">
                                    <h3 className="font-bold text-[16px] leading-snug line-clamp-2">
                                        {img.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1 line-clamp-1">
                                        {img.description}
                                    </p>
                                </div>
                                <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                                    <BsThreeDotsVertical />
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

                {userimage.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-[50vh] text-center">
                        <p className="text-gray-500">No images found.</p>
                        <Link to="/uploadimages" className="mt-4 text-purple-500 hover:underline text-sm font-medium">
                            Upload your first image
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Image;
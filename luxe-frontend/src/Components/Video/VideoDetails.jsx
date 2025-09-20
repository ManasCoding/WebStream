import React, { use } from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { BsThreeDotsVertical } from 'react-icons/bs'
import axios from "axios";
const VideoDetails = () => {

  const { id } = useParams(); // get video id from URL
  const [video, setVideo] = useState(null);
  const [allVideos, setAllVideos] = useState([]);



  const getVideoDetails = async () => {
    try {
        const res = await axios.get(`http://localhost:5000/users/details/video/${id}`, { withCredentials: true });
        setVideo(res.data);
      } catch (err) {
        console.error(err);
      }
  };


    const getAllVideo = async () => {
        try {
            const response = await axios.get("http://localhost:5000/users/getallvideos", { withCredentials: true });
            console.log(response.data);
            // console.log(response.data.userId.image);
            setAllVideos(response.data);
        } catch (error) {
            console.error(`System error happens: ${error.message}`);
            return res.status(500).json({ message: "Internal server error...", error });
        }
    };

    useEffect(() => {
        getAllVideo();
    }, []);

    useEffect(() => {
      if (id) {
      getVideoDetails();
    }
    }, [id]);

  if (!video) return <p className="text-white">Loading...</p>;

  // const [isSubscribed, setIsSubscribed] = useState(false);

  // const handleSubscribe = () => {
  //   setIsSubscribed((prev) => !prev);
  // };

  return (
    <div>
      <div><Navbar /></div>


      <div>
        <div className='w-[70%] absolute left-0 top-12 text-white h-full bg-gradient-to-r from-slate-900 to-slate-700 border-r-[1px] border-zinc-200'>
          <div className='flex flex-col justify-between items-center mt-8'>
            <div className='w-[80%] bg-zinc-800 h-[28rem]'>
              <video
                src={`http://localhost:5000${video.videos}`} // videos saved as `/videos/filename.mp4`
                className="w-full h-full object-cover"
                controls
              />
            </div>
            <div className='w-[80%] bg-zinc-800 h-[7rem]'>
              <div className="text-2xl font-semibold mt-1 mb-2 ml-6">
                {video.title}
              </div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-2 pt-2">
                    <div className="text-2xl pl-6 pr-2">
                      {video.userId?.image && video.userId.image !== "0" ? (
                        <img
                            src={`http://localhost:5000${video.userId.image}`}
                            alt="Uploader"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        ) : (
                        <CgProfile className="w-8 h-8 text-gray-400 rounded-full" />
                        )}
                    </div>
                    <div>
                      <div className="text-md">
                        {video.userId.channel}
                      </div>
                      <div className="text-xs text-gray-500 truncate max-w-[100px]">
                        25k Subscribe
                      </div>
                    </div>
                    <div>
                      {/* <button onClick={handleSubscribe} className='text-white border-[1px] border-zinc-700 px-3 py-1 rounded-lg hover:bg-zinc-700 bg-red-600'>{isSubscribed ? "Unsubscribe" : "Subscribe"}</button> */}
                      <button className='text-white border-[1px] border-zinc-700 px-3 py-1 rounded-lg hover:bg-zinc-700 bg-red-600 ml-2'>Subscribe</button>
                    </div>
                  </div>
                  <div className='flex justify-end items-center gap-4'>
                    <div className='text-white border-[1px] border-zinc-700 px-3 py-1 rounded-lg hover:bg-zinc-700 ml-2'>like</div>
                    <div className='text-white border-[1px] border-zinc-700 px-3 py-1 rounded-lg hover:bg-zinc-700 ml-2'>dislike</div>
                    <div className='text-white border-[1px] border-zinc-700 px-3 py-1 rounded-lg hover:bg-zinc-700 ml-2'>sare</div>
                    <div className='text-white border-[1px] border-zinc-700 px-3 py-1 rounded-lg hover:bg-zinc-700 ml-2'>save</div>
                  </div>
                  <div className="text-2xl mr-2">
                    <BsThreeDotsVertical />
                  </div>
                </div>
            </div>
            <h className='text-2xl font-semibold mt-4'>Comments</h>
            <div></div>
          </div>
        </div>















        <div className='fixed overflow-y-scroll scrollbar-hide w-[30%] absolute right-0 top-12 text-white h-full bg-gradient-to-r from-slate-900 to-slate-700'>
          <div className="py-2 px-8 flex flex-col justify-between items-center gap-y-6 mt-4">
              {allVideos.map((video) => (
                <Link to={`/VideoDetails/${video._id}`} key={video._id}>
                  <div className="h-[14rem] w-[18rem] rounded-lg bg-zinc-800 shadow-lg">
                    {/* Video player */}
                    <div className="h-[70%] bg-black rounded-lg overflow-hidden">
                      <video
                        src={`http://localhost:5000${video.videos}`} // videos saved as `/videos/filename.mp4`
                        className="w-full h-full object-cover"
                        controls
                      />
                    </div>
  
                    {/* Video info */}
                    <div className="flex justify-between items-center">
                      <div className="flex justify-start items-center gap-2 ">
                        <div className="text-xl px-4">
                          {video.userId?.image && video.userId.image !== "0" ? (
                          <img
                              src={`http://localhost:5000${video.userId.image}`}
                              alt="Uploader"
                              className="w-8 h-8 rounded-full object-cover"
                          />
                          ) : (
                          <CgProfile className="w-8 h-8 text-gray-400 rounded-full" />
                          )}
                        </div>
                        <div>
                          <div className="text-md font-semibold">
                            {video.title}
                          </div>
                          <div className="text-xs text-gray-400">
                            {video.category}
                          </div>
                          <div className="text-xs text-gray-500 truncate max-w-[100px]">
                            {video.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
  
              {allVideos.length === 0 && (
                <div className="text-gray-400 text-sm">No videos uploaded yet.</div>
              )}
            </div>
        </div>
      </div>
    </div>
    // <div className="p-6 text-white">
    //   <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
    //   <video
    //     src={`http://localhost:5000${video.videos}`}
    //     controls
    //     className="w-full max-w-4xl rounded-lg shadow-lg"
    //   />
    //   <p className="mt-4 text-zinc-300">{video.description}</p>
    // </div>
  )
}

export default VideoDetails
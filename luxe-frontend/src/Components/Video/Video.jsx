import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CgProfile } from "react-icons/cg";
import HomeEdit from '../Edit/HomeEdit'
import { Link } from 'react-router-dom';

const Video = ({top = "top-12"}) => {
    const [uservideo, setUservideo] = useState([]);

    const getUserVideo = async () => {
        try {
            const response = await axios.get("https://webstream-server.onrender.com/users/getuservideos", { withCredentials: true });
            console.log(response.data);
            setUservideo(response.data);
        } catch (error) {
            console.error(`System error happens: ${error.message}`);
            
        }
    }

    useEffect(() => {
        getUserVideo();
    }, []);

  return (
    // <div>
    //     <div className={`w-[82%] absolute right-0 ${top} text-white h-full bg-gradient-to-r from-slate-900 to-slate-700`}>
    //         <div className='h-full pt-2'>
    //             <div className='hidden'><HomeEdit /></div>
    //             <div className='py-2 px-8 flex flex-wrap gap-4 gap-y-12'>
    //                 <Link to = "/VideoDetails"><div className='h-[12rem] w-[14rem] rounded-lg'>
    //                     <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

    //                     <div className='flex justify-between items-center'>
    //                         <div className='flex justify-first items-center gap-2 pt-2'>
    //                             <div className='text-2xl mb-6'><CgProfile /></div>
    //                             <div>
    //                                 <div className='text-xs'>A random day in Dubai | Dubai Vlog</div>
    //                                 <div className='text-xs'>rajendra prasad</div>
    //                                 <div className='text-xs'><span>336k views</span><span>3 days ago</span></div>
    //                             </div>
    //                         </div>
    //                         <div><BsThreeDotsVertical /></div>
    //                     </div>
    //                 </div></Link>
    //             </div>     
    //         </div>
    //     </div>
    // </div>

    <div>
      <div
        className={`w-[82%] absolute right-0 ${top} text-white h-full bg-gradient-to-r from-slate-900 to-slate-700`}
      >
        <div className="h-full pt-2">
          <div className="hidden">
            <HomeEdit />
          </div>
          <div className="py-2 px-8 flex flex-wrap gap-6 gap-y-12">
            {uservideo.map((video) => (
              <Link to={`/VideoDetails/${video._id}`} key={video._id}>
                <div className="h-[14rem] w-[15rem] rounded-lg bg-zinc-800 shadow-lg">
                  {/* Video player */}
                  <div className="h-[70%] bg-black rounded-lg overflow-hidden">
                    <video
                      src={`https://webstream-server.onrender.com${video.videos}`} // videos saved as `/videos/filename.mp4`
                      className="w-full h-full object-cover"
                      controls
                    />
                  </div>

                  {/* Video info */}
                  <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2 pt-2">
                      {/* <div className="text-2xl mb-6">
                        {video.userId?.image && video.userId.image !== "0" ? (
                          <img
                              src={`http://localhost:5000${video.userId.image}`}
                              alt="Uploader"
                              className="w-8 h-8 rounded-full object-cover"
                          />
                          ) : (
                          <CgProfile className="w-8 h-8 text-gray-400 rounded-full" />
                          )}
                      </div> */}
                      <div>
                        <div className="text-xs font-semibold">
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
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {uservideo.length === 0 && (
              <div className="text-gray-400 text-sm">No videos uploaded yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
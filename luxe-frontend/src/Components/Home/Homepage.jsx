import React, { useState, useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Homepage = () => {
    const [handleEdit, setHandleEdit] = useState(false);
    const [allVideos, setAllVideos] = useState([]);

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


    

  return (

    <div>
      <div className="w-[82%] h-screen absolute right-0 top-0 text-white bg-gradient-to-r from-slate-900 to-slate-700 overflow-y-auto">
        <div className="h-full">
          <div className="py-6 px-8 flex flex-wrap gap-8 gap-y-12 mt-20">
            {allVideos.map((video) => (
              <Link to={`/VideoDetails/${video._id}`} key={video._id}><div
                key={video._id}
                className="h-[14rem] w-[15rem] rounded-lg bg-zinc-800 shadow-lg"
              >
                {/* Video player */}
                <div className="h-[70%] bg-black rounded-lg overflow-hidden">
                  <video
                    src={`http://localhost:5000${video.videos}`} // backend saves as `/videos/filename.mp4`
                    controls
                    className="w-full h-full object-cover"/>
                </div>

                {/* Video info */}
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center px-2 gap-4 pt-2">
                    <div className="text-3xl mb-6">
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
                      <div className="font-semibold text-xs">{video.title}</div>
                      <div className="text-sm text-gray-400">{video.category}</div>
                      <div className="text-xs text-gray-500">
                        <span>{video.description}</span>
                      </div>
                    </div>
                  </div>
                  {/* future menu button here */}
                </div>
              </div></Link>
            ))}

            {allVideos.length === 0 && (
              <div className="text-gray-400">No videos uploaded yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
    // <div>
    //     <div className='w-[82%] h-screen absolute right-0 top-0 text-white bg-gradient-to-r from-slate-900 to-slate-700'>
    //         <div className='h-full'>
    //             {/* <div className={`${handleEdit ? 'block' : 'hidden'}`}><HomeEdit /></div> */}

    //             <div className='py-6 px-8 flex flex-wrap gap-4 gap-y-12 mt-20'>
                    
    //                 <div className='h-[17rem] w-[32%] rounded-lg'>
    //                     <div className='h-[70%] bg-blue-500 rounded-lg'>{handleEdit}</div>

    //                     <div className='flex justify-between items-center'>
    //                         <div className='flex justify-first items-center px-2 gap-4 pt-2'>
    //                             <div className='text-3xl mb-12'><CgProfile /></div>
    //                             <div>
    //                                 <div>A random day in Dubai | Dubai Vlog</div>
    //                                 <div>rajendra prasad</div>
    //                                 <div><span>336k views</span><span>3 days ago</span></div>
    //                             </div>
    //                         </div>
    //                         {/* <div><BsThreeDotsVertical /></div> */}
    //                     </div>
    //                 </div>
                    
                



    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Homepage
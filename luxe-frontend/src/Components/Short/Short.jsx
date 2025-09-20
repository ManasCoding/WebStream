import React from 'react'
import { useState, useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
// import HomeEdit from '../Edit/HomeEdit'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Short = ({top = "top-12"}) => {

    const [usershort, setUsershort] = useState([]);
    
    const getUserShort = async () => {
        try {
            const response = await axios.get("https://webstream-server.onrender.com/users/getusershorts", { withCredentials: true });
            console.log(response.data);
            setUsershort(response.data);
        } catch (error) {
            console.error(`System error happens: ${error.message}`);
            
        }
    }

    useEffect(() => {
        getUserShort();
    }, []);

  return (
    // <div>
    //     <div className={`w-[82%] absolute right-0 ${top} text-white h-screen bg-zinc-900`}>
    //         <div className='h-full pt-2'>
    //             <div className='hidden'><HomeEdit /></div>
    //             <div className='py-2 px-8 flex flex-wrap gap-4 gap-y-12'>
    //                 <Link to = "/ShortDetails"><div className='h-[18rem] w-[10rem] rounded-lg'>
    //                     <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

    //                     <div className='flex justify-between items-center px-2'>
    //                             <div>
    //                                 <div className='text-xs'>A random day in Dubai | Dubai Vlog</div>
    //                                 <div className='text-xs'>rajendra prasad</div>
    //                                 <div className='text-xs'><span>336k views</span><span>3 days ago</span></div>
    //                             </div>
    //                         <div><BsThreeDotsVertical /></div>
    //                     </div>
    //                 </div></Link>
    //             </div>     
    //         </div>
    //     </div>
    // </div>



    <div>
      <div className={`w-[82%] absolute right-0 ${top} text-white h-screen bg-zinc-900`}>
        <div className="h-full pt-2">
          {/* <div className="hidden"><HomeEdit /></div> */}

          <div className="py-2 px-8 flex flex-wrap gap-4 gap-y-12">
            {usershort.length > 0 ? (
              usershort.map((short, index) => (
                <Link to={`/ShortDetails/${short._id}`} key={index}>
                  <div className="h-[18rem] w-[10rem] rounded-lg">
                    <div className="h-[70%] bg-blue-500 rounded-lg flex items-center justify-center">
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
                      <video src={`https://webstream-server.onrender.com${short.shorts}`} alt=""/>
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

export default Short
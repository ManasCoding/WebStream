import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BsThreeDotsVertical } from 'react-icons/bs'
import HomeEdit from '../Edit/HomeEdit'
import { Link } from 'react-router-dom'
const Image = ({top = "top-12"}) => {
    
    const [userimage, setUserimage] = useState([]);

    const getUserImage = async () => {
        try {
            const response = await axios.get("https://webstream-server.onrender.com/users/getuserimages", { withCredentials: true });
            console.log(response.data);
            setUserimage(response.data);
        } catch (error) {
            console.error(`System error happens: ${error.message}`);
            
        }
    }

    useEffect(() => {
        getUserImage();
    }, []);


  return (
    // <div>
    //     <Link to = "/ImageDetails"><div className={`w-[82%] absolute right-0 ${top} text-white h-full bg-zinc-900`}>
    //         <div className='h-full pt-2'>
    //             <div className='hidden'><HomeEdit /></div>
    //             <div className='py-2 px-8 flex flex-wrap gap-4 gap-y-12'>
    //                 <div className='h-[14rem] w-[14rem] rounded-lg'>
    //                     <div className='h-[70%] bg-blue-500 rounded-lg'>hello</div>

    //                     <div className='flex justify-between items-center px-2'>
    //                         <div>
    //                             <div className='text-xs'>A aergseb random day in Dubai | Dubai Vlog</div>
    //                             <div className='text-xs'>rajendra prasad</div>
    //                             <div className='text-xs'><span>336k views</span><span>3 days ago</span></div>
    //                         </div>
    //                         <div><BsThreeDotsVertical /></div>
    //                     </div>
    //                 </div>
    //             </div>     
    //         </div>
    //     </div></Link>
    // </div>

    <div className={`w-[82%] absolute right-0 ${top} text-white h-full bg-zinc-900`}>
      <div className="h-full pt-2">
        <div className="hidden">
          <HomeEdit />
        </div>
        <div className="py-2 px-8 flex flex-wrap gap-4 gap-y-12">
          {userimage.map((img) => (
            <Link to={`/ImageDetails/${img._id}`} key={img._id}>
              <div className="h-[14rem] w-[14rem] rounded-lg bg-zinc-800 shadow-lg">
                {/* Image preview */}
                <div className="h-[70%] bg-black rounded-lg overflow-hidden">
                  <img
                    src={`https://webstream-server.onrender.com${img.images}`} // backend saves as `/images/filename.ext`
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image info */}
                <div className="flex justify-between items-center px-2">
                  <div>
                    <div className="text-xs font-semibold">{img.title}</div>
                    <div className="text-xs text-gray-400">{img.category}</div>
                    <div className="text-xs text-gray-500 truncate max-w-[100px]">
                      {img.description}
                    </div>
                  </div>
                  <div>
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {userimage.length === 0 && (
            <div className="text-gray-400 text-sm">No images uploaded yet.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Image
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BsThreeDotsVertical } from 'react-icons/bs'
import HomeEdit from '../Edit/HomeEdit'
const ImagePage = () => {

    const [allImages, setAllImages] = useState([])
    console.log(`http://localhost:5000${allImages.images}`);

    const getAllImages = async () => {
        try {
            const response = await axios.get("http://localhost:5000/users/getallimages", { withCredentials: true });
            console.log(response.data);
            setAllImages(response.data);
        } catch (error) {
            console.error(`System error happens: ${error.message}`);
            return res.status(500).json({ message: "Internal server error...", error });
        }
    };

    useEffect(() => {
        getAllImages();
    }, []);

  return (
    <div>
      <div className="w-[82%] absolute right-0 top-12 text-white h-full bg-zinc-900">
        <div className="h-full">
          <div className="hidden">
            <HomeEdit />
          </div>

          <div className="py-6 px-8 flex flex-wrap gap-4 gap-y-12">
            {allImages.length > 0 ? (
              allImages.map((img) => (
                <div
                  key={img._id} // important for React list rendering
                  className="h-[14rem] w-[14rem] rounded-lg bg-zinc-800 shadow-md">
                  {/* Image Section */}
                  <div className="h-[70%] rounded-t-lg overflow-hidden">
                    <img
                      src={`http://localhost:5000${img.images}`} // adjust according to backend response
                      alt={img.title}
                      className="w-full h-full object-cover" />
                  </div>

                  {/* Details Section */}
                  <div className="flex justify-between items-start px-2 py-1">
                    <div>
                      <div className="text-sm font-semibold truncate">
                        {img.title}
                      </div>
                      <div className="text-xs text-gray-300">
                        {img.description}
                      </div>
                      <div className="text-xs text-gray-400">
                        <span>{img.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No images found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagePage
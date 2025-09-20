import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const UploadVideo = () => {
  const navigate = useNavigate();
  const [allVideo, setAllVideo] = useState({
      videos: "",
      title: "",
      description: "",
      category: "",
  });
  const inputVideoChangeHandler = (e) => {
      const { name, value, files } = e.target;
  
      if (name === "videos") {
        setAllVideo({ ...allVideo, videos: files[0] }); // file input
      } else {
        setAllVideo({ ...allVideo, [name]: value }); // text input
      }
    };
  
    const handleVideoSubmit = async (e) => {
      e.preventDefault();
      console.log("userImage");
      console.log(allVideo.videos);
      console.log(allVideo);
      try {
        const formData = new FormData();
        formData.append("videos", allVideo.videos);
        formData.append("title", allVideo.title);
        formData.append("description", allVideo.description);
        formData.append("category", allVideo.category);
        console.log(formData);
        const ress = await axios.post("https://webstream-server.onrender.com/users/uploadvideo", formData, { withCredentials: true });
        console.log("response", ress.data);
        navigate("/home");
        toast.success("You've been successfully updated...");
      } catch (err) {
        console.error("Error fetching data:");
      }
    };
  return (
    <div className='h-screen bg-gradient-to-r from-slate-900 to-slate-700 relative backdrop-filter backdrop-blur-lg'>
      <div><Navbar /></div>
      <div className=' text-white w-[50%] border-[2px] border-zinc-400 absolute top-[15%] left-[25%] flex flex-col justify-center items-center gap-5 py-5'>
        <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span>Upload Videos</span></div>
        <form method='post' className='flex flex-col justify-center items-center gap-5' enctype='multipart/form-data' onSubmit={handleVideoSubmit}>
          <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Title of Video' name='title' onChange={inputVideoChangeHandler}/></div>
          <div><input className='w-96 px-4 rounded-lg py-3 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Description' name='description' onChange={inputVideoChangeHandler}/></div>
          <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Category' name='category' onChange={inputVideoChangeHandler}/></div>
          {/* <div className='flex justify-evenly'>Thumbnail <span><input type="file" name="" id="" /></span></div> */}
          <div className='flex justify-evenly'>Video <span><input type="file" name="videos" accept='videos/*' onChange={inputVideoChangeHandler}/></span></div>
          <div className='flex justify-center items-center gap-5'><Button title='Upload' type='submit'/><Link to={'/uploadshorts'}><Button title='Shorts'/></Link><Link to={'/'}><Button title='Home Page'/></Link></div>
        </form>
      </div>
    </div>
  )
}

export default UploadVideo
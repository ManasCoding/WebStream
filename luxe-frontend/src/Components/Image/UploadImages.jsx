import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const UploadImages = () => {
  const navigate = useNavigate();
  const [allImage, setAllImage] = useState({
    images: "",
    title: "",
    description: "",
    category: "",
  });

  const inputImageChangeHandler = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      setAllImage({ ...allImage, images: files[0] }); // file input
    } else {
      setAllImage({ ...allImage, [name]: value }); // text input
    }
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    console.log("userImage");
    console.log(allImage.images);
    console.log(allImage);
    try {
      const formData = new FormData();
      formData.append("images", allImage.images);
      formData.append("title", allImage.title);
      formData.append("description", allImage.description);
      formData.append("category", allImage.category);
      console.log(formData);
      const ress = await axios.post("http://localhost:5000/users/uploadimage", formData, { withCredentials: true });
      console.log("response", ress.data);
      navigate("/imagehome");
      toast.success("You've been successfully updated...");
    } catch (err) {
      console.error("Error fetching data:");
    }
  };


  return (
    <div className='h-screen bg-gradient-to-r from-slate-900 to-slate-700 relative backdrop-filter backdrop-blur-lg'>
      <div><Navbar /></div>
      <div className=' text-white w-[50%] border-[2px] border-zinc-400 absolute top-[15%] left-[25%] flex flex-col justify-center items-center gap-5 py-5'>
        <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span>Upload Images</span></div>
        <form method="post" enctype="multipart/form-data" onSubmit={handleImageSubmit} className='flex flex-col justify-center items-center gap-5'>
          <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Title of Image' name='title' onChange={inputImageChangeHandler}/></div>
          <div><input className='w-96 px-4 rounded-lg py-3 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Description' name='description' onChange={inputImageChangeHandler}/></div>
          <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Category' name='category' onChange={inputImageChangeHandler}/></div>
          <div className='flex justify-evenly'> <span><input type="file" name="images" onChange={inputImageChangeHandler} /></span></div>
          <div className='flex justify-center items-center gap-5'><Button type='submit' title='Upload' /><Link to={'/'}><Button title='Home Page'/></Link></div>
        </form>
        
        
      </div>
    </div>
  )
}

export default UploadImages
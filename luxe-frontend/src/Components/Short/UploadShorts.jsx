import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const UploadShorts = () => {
  const navigate = useNavigate();
  const [allShorts, setAllShorts] = useState({
        shorts: "",
        title: "",
        description: "",
        category: "",
    });
    const inputShortsChangeHandler = (e) => {
        const { name, value, files } = e.target;
    
        if (name === "shorts") {
          setAllShorts({ ...allShorts, shorts: files[0] }); // file input
        } else {
          setAllShorts({ ...allShorts, [name]: value }); // text input
        }
      };
    
      const handleShortsSubmit = async (e) => {
        e.preventDefault();
        console.log("userImage");
        console.log(allShorts.shorts);
        console.log(allShorts);
        try {
          const formData = new FormData();
          formData.append("shorts", allShorts.shorts);
          formData.append("title", allShorts.title);
          formData.append("description", allShorts.description);
          formData.append("category", allShorts.category);
          console.log(formData);
          console.log("dbakcskdjvb");
          const ress = await axios.post("http://localhost:5000/users/uploadshort", formData, { withCredentials: true });
          console.log("response", ress.data);
          navigate("/shorthome");
          toast.success("You've been successfully updated...");
        } catch (err) {
          console.error("Error fetching data:");
        }
      };
  return (
    <div>
        <div className='h-screen bg-gradient-to-r from-slate-900 to-slate-700 relative backdrop-filter backdrop-blur-lg'>
      <div><Navbar /></div>
      <div className=' text-white w-[50%] border-[2px] border-zinc-400 absolute top-[15%] left-[25%] flex flex-col justify-center items-center gap-5 py-5'>
        <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span>Upload Shorts</span></div>
          <form enctype='multipart/form-data' className='flex flex-col justify-center items-center gap-5' method='post' onSubmit={handleShortsSubmit}>
            <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Title of Shorts' name='title' onChange={inputShortsChangeHandler} /></div>
            <div><input className='w-96 px-4 rounded-lg py-3 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Description' name='description' onChange={inputShortsChangeHandler} /></div>
            <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Category' name='category' onChange={inputShortsChangeHandler}/></div>
            {/* <div className='flex justify-evenly'>Thumbnail <span><input type="file" name="" id="" /></span></div> */}
            <div className='flex justify-evenly'>Shorts <span><input type="file" name="shorts" id="" onChange={inputShortsChangeHandler}/></span></div>
            <div className='flex justify-center items-center gap-5'><Button title='Upload'/><Link to={'/'}><Button title='Home Page'/></Link></div>
          </form>
      </div>
      </div>
    </div>
  )
}

export default UploadShorts
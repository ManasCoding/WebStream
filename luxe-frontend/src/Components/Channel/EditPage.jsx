import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom';
import Button from '../Button/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const EditPage = () => {
      const navigate = useNavigate();
      const [user, setUser] = useState({
        channel: "",
        name: "",
        about:"",
        // profile: "",
      });
    
      // console.log(user);
    
    
      // let { channel, email, password, confirmPassword } = user;
    
      // const [profile, setProfile] = useState("");
      // const [coverImage, setCoverImage] = React.useState("");
      // const [loading, setLoading] = React.useState("");
    
      function handleChange(e) {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      }
      
      const handleRegister = async function (e) {
        e.preventDefault();
        // setLoading(true);
        // form.append("profilePic", profile);
        // form.append("coverImage", coverImage);
        console.log("hello");
        console.log(user);
        try {
          const channel = user.channel;
          const name = user.name;
          const about = user.about;
          
          const response = await axios.post("http://localhost:5000/users/updateProfile", {
            channel,
            name,
            about,
          }, { withCredentials: true });
    
          // setSuccess(true);
          console.log("Registered:", response.data);
          // Optionally reset form:
          setUser({ channel: "", name: "", about: "" });
          // setUser(response.data);
          toast.success("Registration successful!");
          navigate("/channelhome");
          
        } catch (err) {
          // setError(err.response.data);
          console.log("error", err.massage);
        } 
      }
    
  return (
    <div className=' realative h-screen bg-gradient-to-r from-slate-900 to-slate-700 relative backdrop-filter backdrop-blur-lg'>
          {/* <div><Navbar /></div> */}
        <div className=' text-white w-[50%] border-[2px] border-zinc-400 absolute top-[15%] left-[25%] flex flex-col justify-between items-center gap-5 py-5'>
            <form onSubmit={handleRegister}
              // action="/signup"
              className='flex flex-col justify-between items-center gap-5'>
              <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span className='text-red-600'></span><span>Edit Channel</span></div>
              <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Channel name' name='channel' required={true} value={user.channel} onChange={handleChange}/></div>
              <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Full Name' name='name' required={true} value={user.name} onChange={handleChange}/></div>
              {/* <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="email" placeholder='email' name='email' required={true} value={user.email} onChange={handleChange}/></div> */}
              {/* <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="number" placeholder='number' name='number' required={true} value={user.number} onChange={handleChange}/></div> */}
              <div><input className='w-96 px-4 rounded-lg py-3 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='About Your Channel' name='about' required={true} value={user.about} onChange={handleChange}/></div>
              <div className='flex justify-center items-center gap-5'><Button title='Update' type='submit' style='active:text-red-600'/></div>
            </form>  
        </div>
    </div>
  )
}

export default EditPage
import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    channel: "",
    email: "",
    password: "",
    confirmPassword: "",
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
  // let form = new FormData();
  // form.append("channel", channel);
  // form.append("email", email);
  // form.append("password", password);
  // form.append("about", about);
  // form.append("confirmPassword", confirmPassword);
  
  const handleRegister = async function (e) {
    e.preventDefault();
    // setLoading(true);
    // form.append("profilePic", profile);
    // form.append("coverImage", coverImage);
    console.log("hello");
    console.log(user);
    try {
      const name = user.name;
      const channel = user.channel;
      const email = user.email;
      const password = user.password;
      const about = user.about;
      
      const response = await axios.post("https://webstream-server.onrender.com/users/signup", {
        name,
        channel,
        email,
        password,
        about,
      }, { withCredentials: true });

      // setSuccess(true);
      console.log("Registered:", response.data);
      // Optionally reset form:
      setUser({ name: "", channel: "", email: "", password: "", confirmPassword: "", about: "" });
      // setUser(response.data);
      navigate("/home");
      toast.success("Registration successful!");
      
    } catch (err) {
      // setError(err.response.data);
      console.log("error", err.massage);
    } 
  }

    

  // useEffect(() => {
  //   connect();
  // }, []);

  return (
    <div className=' realative h-screen bg-gradient-to-r from-slate-900 to-slate-700 relative backdrop-filter backdrop-blur-lg'>
      {/* <div><Navbar /></div> */}
      <div className=' text-white w-[50%] border-[2px] border-zinc-400 absolute top-[15%] left-[25%] flex flex-col justify-between items-center gap-5 py-5'>
        <form onSubmit={handleRegister}
          // action="/signup"
          className='flex flex-col justify-between items-center gap-5'>
          <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span>Sign Up</span></div>
          <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Full Name' name='name' required={true} value={user.name} onChange={handleChange}/></div>
          <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Channel name' name='channel' required={true} value={user.channel} onChange={handleChange}/></div>
          <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="email" placeholder='email' name='email' required={true} value={user.email} onChange={handleChange}/></div>
          <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="password" placeholder='Password' name='password' required={true} value={user.password} onChange={handleChange}/></div>
          <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="password" placeholder='confirmPassword' name='confirmPassword' required={true} value={user.confirmPassword} onChange={handleChange}/></div>
          <div><input className='w-96 px-4 rounded-lg py-3 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='About Your Channel' name='about' required={true} value={user.about} onChange={handleChange}/></div>
          {/* <div className='flex justify-evenly'><span><input type="file" name="profile" value={profile} onChange={handleChange} id="" /></span></div> */}
          <div className='flex justify-center items-center gap-5'><Link to={'/'}><Button title='Home Page'/></Link><Button title='Sign Up' type='submit' style='active:text-red-600'/></div>
        </form>  
      </div>
      </div>
    
  )
}

export default Signup
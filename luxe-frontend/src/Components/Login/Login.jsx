import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { FcVideoProjector } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }


  // const isFormValid = () => {
  //   const { username: email, password } = user;
  //   if (!email || !password) {
  //     toast.error("Enter all the fields!!!");
  //     return false;
  //   }
  //   const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  //   if (!emailRegex.test(email)) {
  //     toast.error("Invalid email format.");
  //     return false;
  //   }
  //   return true;
  // }; 



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    // try {
    //   if (isFormValid()) {
    //     const loginAPIresponse = await dispatch(
    //       logInUserAPI({ email: user.username, password: user.password })
    //     ).unwrap();

    //     if (loginAPIresponse) {
    //       navigate("/user/dashboard", {
    //         state: {
    //           message: "You'hv been successfully loggedin...",
    //         },
    //       });
    //     }
    //   }
    // } catch (error) {
    //   console.log(error.message);
    //   toast.error("Invalid credentials");
    // }

    try {
      const email = user.email;
      const password = user.password;
      const res = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      }, { withCredentials: true });
      console.log("response", res.data);
      // toast.success("You've been successfully loggedin...");
      navigate("/home");
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  };


  return (
    <div className='h-screen bg-gradient-to-r from-slate-900 to-slate-700 relative backdrop-filter backdrop-blur-lg'>
      {/* <div><Navbar /></div> */}
      <div className=' text-white w-[40%] border-[2px] border-zinc-400 absolute top-[15%] left-[30%] flex flex-col justify-center items-center gap-5 py-16'>
        <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span className='text-red-600'><FcVideoProjector /></span><span>LogIn</span></div>
        <form action="" className='flex flex-col justify-center items-center gap-5' onSubmit={handleSubmit}>
          <div><input className='w-80 px-4 rounded-lg py-2 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="text" placeholder='Username' name='email' value={user.email} onChange={handleChange}/></div>
          <div><input className='w-80 px-4 rounded-lg py-2 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="password" placeholder='Password' name='password' value={user.password} onChange={handleChange}/></div>
          <div className='flex justify-center items-center gap-5'><Button title='LogIn' type='submit'/><Link to={'/signup'}><Button title='SignUp'/></Link><Button title='Cancel' /></div>
        </form>
      </div>
      </div>
  )
}

export default Login
import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ChangePassword = () => {
    const navigate = useNavigate();
          const [user, setUser] = useState({
            oldPassword: "",
            newPassword: "",
          });
        
        
          function handleChange(e) {
            setUser({
              ...user,
              [e.target.name]: e.target.value,
            });
          }
          
          const handleRegister = async function (e) {
            e.preventDefault();
            console.log("hello");
            console.log(user);
            try {
              const oldPassword = user.oldPassword;
              const newPassword = user.newPassword;
              
              const response = await axios.post("http://localhost:5000/users/updatePassword", {
                oldPassword,
                newPassword,
              }, { withCredentials: true });
        
              console.log("Registered:", response.data);
              setUser({ oldPassword: "", newPassword: ""});
              toast.success("Password Update successful!");
              navigate("/channelhome");
              
            } catch (err) {
              console.log("error", err.massage);
            } 
          }


  return (
    <div className=' realative h-screen bg-gradient-to-r from-slate-900 to-slate-700 relative backdrop-filter backdrop-blur-lg'>
        <div className=' text-white w-[50%] border-[2px] border-zinc-400 absolute top-[15%] left-[25%] flex flex-col justify-between items-center gap-5 py-5'>
            <form onSubmit={handleRegister}
              className='flex flex-col justify-between items-center gap-5'>
              <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span className='text-red-600'></span><span>Change Password</span></div>
              <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="password" placeholder='old password' name='oldPassword' required={true} value={user.oldPassword} onChange={handleChange}/></div>
              <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="password" placeholder='new password' name='newPassword' required={true} value={user.newPassword} onChange={handleChange}/></div>
              <div className='flex justify-center items-center gap-5'><Button title='Update' type='submit' style='active:text-red-600'/></div>
            </form>  
        </div>
    </div>
  )
}

export default ChangePassword
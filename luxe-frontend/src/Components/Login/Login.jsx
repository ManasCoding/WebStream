import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Logo from '../Logo';
import { FaPlay, FaStar, FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:7000'}/users/login`, {
        email: user.email,
        password: user.password,
      }, { withCredentials: true });

      toast.success("Welcome back, Citizen!");
      navigate("/home");
    } catch (err) {
      toast.error(err.response?.data?.message || "Protocol rejection!");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative flex items-center justify-center p-8 bg-[#050608]">
      {/* Cinematic Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/5 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-[500px] bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-12 md:p-16 shadow-2xl relative group overflow-hidden z-10">
        {/* Elite Branding Accent */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
        
        {/* Internal Glow */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600/5 blur-[80px] rounded-full group-hover:bg-purple-600/10 transition-all duration-700"></div>

        <div className="flex flex-col items-center mb-12 text-center relative z-10">
          <Link to="/" className="mb-10 hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
          
          <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">Resume <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Access</span></h1>
          <p className="text-gray-500 text-[11px] font-black uppercase tracking-[0.3em] opacity-60">Authorize your session</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Secure Protocol (Email)</label>
            <div className="relative group/input">
              <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-700 group-focus-within/input:text-purple-500 transition-colors" />
              <input 
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4.5 pl-12 pr-6 outline-none focus:border-purple-500/30 transition-all text-[13px] font-bold placeholder:text-gray-800" 
                type="email" 
                placeholder="protocol@universe.com" 
                name="email" 
                required 
                value={user.email} 
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Encryption</label>
              <Link to="/forgot-password" size="sm" className="text-[10px] text-purple-500 hover:text-purple-400 font-black uppercase tracking-[0.2em] transition-colors border-b border-purple-500/20">Recovery</Link>
            </div>
            <div className="relative group/input">
              <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-700 group-focus-within/input:text-purple-500 transition-colors" />
              <input 
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4.5 pl-12 pr-14 outline-none focus:border-purple-500/30 transition-all text-[13px] font-bold placeholder:text-gray-800" 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                name="password" 
                required 
                value={user.password} 
                onChange={handleChange}
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-700 hover:text-purple-500 transition-colors"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-500 text-white py-5 rounded-2xl font-black shadow-[0_15px_40px_rgba(147,51,234,0.3)] transition-all active:scale-[0.98] mt-4 text-xs uppercase tracking-[0.3em] border border-white/10"
          >
            Authorize Access
          </button>
        </form>

        <div className="mt-12 text-center text-[10px] font-black text-gray-700 uppercase tracking-[0.2em] relative z-10">
          New to the Universe? <Link to="/signup" className="text-purple-500 hover:text-purple-400 ml-2 transition-colors border-b border-purple-500/20">Join Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
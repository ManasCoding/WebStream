import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdLockOutline, MdSecurity, MdShield } from 'react-icons/md';

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

  const handleUpdate = async function (e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/users/updatePassword", {
        oldPassword: user.oldPassword,
        newPassword: user.newPassword,
      }, { withCredentials: true });

      toast.success("Security protocol updated!");
      navigate("/channelhome");
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Failed to authorize security update");
    }
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative bg-[#050608]">
      {/* Cinematic Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/5 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <Navbar />

      <main className="pt-40 pb-32 flex items-center justify-center px-8 relative z-10">
        <div className="w-full max-w-[600px] bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-12 md:p-16 shadow-2xl relative group overflow-hidden">
          {/* Elite Branding Accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
          
          {/* Internal Glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-600/5 blur-[80px] rounded-full group-hover:bg-purple-600/10 transition-all duration-700"></div>
          
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="h-16 w-16 bg-purple-600/10 rounded-3xl flex items-center justify-center mb-6 border border-purple-500/10 shadow-[0_0_30px_rgba(147,51,234,0.1)]">
              <MdShield className="text-3xl text-purple-500" />
            </div>
            <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">
              Update <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Protocol</span>
            </h1>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Authorize high-level security modification</p>
          </div>

          <form onSubmit={handleUpdate} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 flex items-center gap-2">
                  <MdLockOutline className="text-purple-500" /> Legacy Key
                </label>
                <input 
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 px-8 outline-none focus:border-purple-500/30 transition-all text-[14px] font-bold placeholder:text-gray-800 shadow-inner" 
                  type="password" 
                  placeholder="••••••••••••" 
                  name="oldPassword" 
                  required 
                  value={user.oldPassword} 
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 flex items-center gap-2">
                  <MdSecurity className="text-purple-500" /> New Directive
                </label>
                <input 
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 px-8 outline-none focus:border-purple-500/30 transition-all text-[14px] font-bold placeholder:text-gray-800 shadow-inner" 
                  type="password" 
                  placeholder="••••••••••••" 
                  name="newPassword" 
                  required 
                  value={user.newPassword} 
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-white/5">
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white px-16 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all active:scale-[0.98] border border-white/10"
              >
                Execute Update
              </button>
              <Link 
                to="/channelhome" 
                className="w-full sm:w-auto text-center border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] text-gray-500 hover:text-white px-12 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all backdrop-blur-md"
              >
                Abort Protocol
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChangePassword;
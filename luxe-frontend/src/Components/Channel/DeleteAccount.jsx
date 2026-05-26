import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdDeleteForever, MdWarning, MdSecurity, MdHistory } from 'react-icons/md';

const DeleteAccount = () => {
  const navigate = useNavigate();
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

  const handleDelete = async function (e) {
    e.preventDefault();
    if (!window.confirm("This action will permanently erase your digital legacy. Are you prepared to execute the termination protocol?")) {
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/users/deleteAccount`, {
        email: user.email,
        password: user.password,
      }, { withCredentials: true });

      toast.success("Legacy successfully terminated");
      navigate("/");
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to authorize termination protocol");
    }
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-red-500/30 overflow-x-hidden relative bg-[#050608]">
      {/* Cinematic Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-900/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-900/5 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <Navbar />

      <main className="pt-40 pb-32 flex items-center justify-center px-8 relative z-10">
        <div className="w-full max-w-[650px] bg-[#0a0c10]/40 backdrop-blur-3xl border border-red-500/10 rounded-[3.5rem] p-12 md:p-16 shadow-2xl relative group overflow-hidden">
          {/* Danger Branding Accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
          
          {/* Internal Glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-600/5 blur-[80px] rounded-full group-hover:bg-red-600/10 transition-all duration-700"></div>
          
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="h-16 w-16 bg-red-600/10 rounded-3xl flex items-center justify-center mb-6 border border-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
              <MdDeleteForever className="text-3xl text-red-500" />
            </div>
            <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">
              Terminate <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 italic">Legacy</span>
            </h1>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Prepare for total digital erasure</p>
          </div>

          <div className="bg-red-600/5 border border-red-500/10 rounded-3xl p-8 mb-12 flex items-start gap-5">
            <MdWarning className="text-red-500 text-3xl flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-red-500">Irreversible Action</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase leading-relaxed tracking-wider opacity-80">
                This protocol will permanently disconnect your identity, erase all curated content, and terminate your platform status. This process cannot be reversed.
              </p>
            </div>
          </div>

          <form onSubmit={handleDelete} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 flex items-center gap-2">
                  <MdSecurity className="text-red-500/50" /> Identity Verification
                </label>
                <input 
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 px-8 outline-none focus:border-red-500/30 transition-all text-[14px] font-bold placeholder:text-gray-800 shadow-inner" 
                  type="email" 
                  placeholder="Confirm your secure email..." 
                  name="email" 
                  required 
                  value={user.email} 
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 flex items-center gap-2">
                  <MdHistory className="text-red-500/50" /> Final Authorization
                </label>
                <input 
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 px-8 outline-none focus:border-red-500/30 transition-all text-[14px] font-bold placeholder:text-gray-800 shadow-inner" 
                  type="password" 
                  placeholder="Enter your security key..." 
                  name="password" 
                  required 
                  value={user.password} 
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 pt-10 border-t border-white/5">
              <button 
                type="submit" 
                className="w-full bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] transition-all active:scale-[0.98] border border-red-500/20"
              >
                Execute Termination
              </button>
              <Link 
                to="/channelhome" 
                className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 hover:text-white transition-colors"
              >
                Abort Protocol & Return
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default DeleteAccount;
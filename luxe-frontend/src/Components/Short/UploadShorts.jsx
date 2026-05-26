import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdCloudUpload, MdBolt, MdInfoOutline, MdCategory } from 'react-icons/md';

const UploadShorts = () => {
  const navigate = useNavigate();
  const [allShorts, setAllShorts] = useState({
    shorts: "",
    title: "",
    description: "",
    category: "",
  });
  const [fileName, setFileName] = useState("No pulse detected");

  const inputShortsChangeHandler = (e) => {
    const { name, value, files } = e.target;
    if (name === "shorts") {
      if (files && files[0]) {
        setAllShorts({ ...allShorts, shorts: files[0] });
        setFileName(files[0].name);
      }
    } else {
      setAllShorts({ ...allShorts, [name]: value });
    }
  };

  const handleShortsSubmit = async (e) => {
    e.preventDefault();
    if (!allShorts.shorts) {
      toast.error("Please initiate a short-form pulse first");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("shorts", allShorts.shorts);
      formData.append("title", allShorts.title);
      formData.append("description", allShorts.description);
      formData.append("category", allShorts.category);
      
      await axios.post(`${import.meta.env.VITE_API_URL}/users/uploadshort`, formData, { withCredentials: true });
      navigate("/shorthome");
      toast.success("Short-form transmission successful!");
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Failed to broadcast pulse");
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
        <div className="w-full max-w-[700px] bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-12 md:p-16 shadow-2xl relative group overflow-hidden">
          {/* Elite Branding Accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
          
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="h-16 w-16 bg-purple-600/10 rounded-3xl flex items-center justify-center mb-6 border border-purple-500/10 shadow-[0_0_30px_rgba(147,51,234,0.1)]">
              <MdBolt className="text-3xl text-purple-500" />
            </div>
            <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">
              Ignite <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Shorts</span>
            </h1>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Prepare your high-impact transmission</p>
          </div>

          <form onSubmit={handleShortsSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 flex items-center gap-2">
                  <MdInfoOutline className="text-purple-500" /> Pulse Identity
                </label>
                <input 
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 px-8 outline-none focus:border-purple-500/30 transition-all text-[14px] font-bold placeholder:text-gray-800 shadow-inner" 
                  type="text" 
                  placeholder="The title of your impact..." 
                  name="title" 
                  required 
                  value={allShorts.title} 
                  onChange={inputShortsChangeHandler}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 flex items-center gap-2">
                  <MdInfoOutline className="text-purple-500" /> Mission Brief
                </label>
                <input 
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 px-8 outline-none focus:border-purple-500/30 transition-all text-[14px] font-bold placeholder:text-gray-800 shadow-inner" 
                  type="text" 
                  placeholder="A concise mission statement..." 
                  name="description" 
                  required 
                  value={allShorts.description} 
                  onChange={inputShortsChangeHandler}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 flex items-center gap-2">
                  <MdCategory className="text-purple-500" /> Sector Classification
                </label>
                <input 
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 px-8 outline-none focus:border-purple-500/30 transition-all text-[14px] font-bold placeholder:text-gray-800 shadow-inner" 
                  type="text" 
                  placeholder="e.g. Energy, Impact, Viral" 
                  name="category" 
                  required 
                  value={allShorts.category} 
                  onChange={inputShortsChangeHandler}
                />
              </div>
            </div>

            <div className="bg-[#050608]/50 rounded-3xl p-8 border border-dashed border-white/10 flex flex-col items-center gap-6 group/upload transition-all hover:border-purple-500/30">
              <label className="cursor-pointer w-full flex flex-col items-center gap-4">
                <div className="h-16 w-16 bg-white/[0.03] rounded-full flex items-center justify-center border border-white/5 group-hover/upload:scale-110 group-hover/upload:bg-purple-600 group-hover/upload:text-white transition-all duration-500 text-gray-700">
                  <MdCloudUpload className="text-3xl" />
                </div>
                <div className="text-center">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/80">Select Shorts Protocol</span>
                  <p className="text-[9px] text-gray-600 font-bold mt-1 uppercase tracking-widest">Optimized for vertical impact</p>
                </div>
                <input 
                  type="file" 
                  name="shorts" 
                  className="hidden" 
                  onChange={inputShortsChangeHandler} 
                  accept="video/*"
                />
              </label>
              <div className="bg-[#0a0c10] px-6 py-2 rounded-full border border-white/5 max-w-full">
                <span className="text-[10px] text-purple-500 font-black tracking-widest truncate block">
                  {fileName}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-white/5">
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white px-16 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all active:scale-[0.98] border border-white/10"
              >
                Execute Ignite
              </button>
              <Link 
                to="/" 
                className="w-full sm:w-auto text-center border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] text-gray-500 hover:text-white px-12 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all backdrop-blur-md"
              >
                Abort Pulse
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UploadShorts;
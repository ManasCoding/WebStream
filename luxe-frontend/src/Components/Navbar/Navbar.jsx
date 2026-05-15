import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { LuImagePlus, LuVideo } from "react-icons/lu";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiBroadcastFill } from "react-icons/ri";
import Logo from "../Logo";

const Navbar = () => {
  const [handleNotification, setHandleNotification] = useState(false);
  const [user, setUser] = useState("");
  const [image, setImage] = useState("");

  const getUserData = async () => {
    try {
      const res = await axios.get("http://localhost:7000/users/profile", { withCredentials: true });
      const firstName = res.data.name.split(" ")[0].toUpperCase();
      setUser(firstName);
      setImage(res.data.image);
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#050608]/40 backdrop-blur-3xl border-b border-white/5 py-4 px-10 flex justify-between items-center text-white transition-all duration-500">
      {/* Left Section - Cinematic Logo */}
      <div className="flex items-center gap-14">
        <Link to="/home" className="hover:opacity-80 transition-opacity">
          <Logo collapsed={false} />
        </Link>
        
        <div className="hidden xl:flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse shadow-[0_0_8px_#9333ea]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Authorized Session</span>
          </div>
          <div className="text-xs font-black tracking-tight uppercase">
            Greeting, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 italic">{user || "CREATOR"}</span>
          </div>
        </div>
      </div>

      {/* Center Section - Elite Search Engine */}
      <div className="flex-1 max-w-2xl mx-12">
        <div className="relative flex items-center group">
          <CiSearch className="absolute left-6 text-xl text-gray-700 group-focus-within:text-purple-500 transition-colors duration-500" />
          <input 
            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-3 px-8 pl-14 outline-none focus:border-purple-500/30 focus:bg-white/[0.05] transition-all duration-500 text-[13px] font-bold placeholder:text-gray-800 placeholder:uppercase placeholder:tracking-widest" 
            type="text" 
            placeholder="Search the Universe..."
          />
          <div className="absolute right-6 hidden md:flex items-center gap-1.5 pointer-events-none">
            <span className="text-[9px] font-black text-gray-800 bg-white/5 border border-white/5 px-2 py-1 rounded-md uppercase tracking-widest">Ctrl</span>
            <span className="text-[9px] font-black text-gray-800 bg-white/5 border border-white/5 px-2 py-1 rounded-md uppercase tracking-widest">K</span>
          </div>
        </div>
      </div>

      {/* Right Section - High-Fidelity Actions */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8 border-r border-white/5 pr-8">
          <Link to="/uploadimages" title="Curate Image" className="text-gray-700 hover:text-purple-500 transition-all transform hover:scale-110 active:scale-95">
            <LuImagePlus className="text-2xl" />
          </Link>
          <Link to="/uploadvideo" title="Broadcast Video" className="text-gray-700 hover:text-purple-500 transition-all transform hover:scale-110 active:scale-95">
            <LuVideo className="text-2xl" />
          </Link>
          <button 
            onClick={() => setHandleNotification(!handleNotification)}
            className="relative group p-1 transition-all transform active:scale-95"
          >
            {handleNotification ? <MdOutlineNotificationsActive className="text-2xl text-purple-500 animate-bounce" /> : <CiBellOn className="text-2xl text-gray-700 group-hover:text-purple-400" />}
            {!handleNotification && <div className="absolute top-1 right-2 h-1.5 w-1.5 bg-purple-600 rounded-full shadow-[0_0_8px_#9333ea]"></div>}
          </button>
        </div>

        {/* Elite Profile Node */}
        <Link to="/channelhome" className="group">
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end gap-0.5 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-purple-500">Digital Identity</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Console</span>
            </div>
            <div className="h-11 w-11 rounded-2xl p-[2px] bg-gradient-to-tr from-purple-600/20 to-transparent group-hover:from-purple-600 transition-all duration-700">
              <div className="h-full w-full rounded-[14px] overflow-hidden bg-[#0a0c10] border border-white/5 flex items-center justify-center relative shadow-2xl">
                {image && image !== "0" ? (
                  <img
                    src={`http://localhost:7000${image}`}
                    alt="Profile"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <span className="text-[13px] font-black text-purple-500">{user ? user[0] : "C"}</span>
                )}
                {/* Status Indicator */}
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-[#0a0c10] shadow-[0_0_8px_#22c55e]"></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


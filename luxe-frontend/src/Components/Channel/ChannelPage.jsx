import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { 
  MdVerified, 
  MdGroup, 
  MdVideoLibrary, 
  MdThumbUp, 
  MdVisibility, 
  MdComment,
  MdInfoOutline,
  MdLockOutline,
  MdDeleteOutline,
  MdCloudUpload
} from "react-icons/md";
import { FiEdit, FiCamera } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";

const ChannelPage = () => {
    const [channel, setChannel] = useState("");
    const [email, setEmail] = useState("");
    const [about, setAbout] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
      setIsSubscribed((prev) => !prev);
    };

    const fetchData = async () => {
        try {
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, { withCredentials: true });
          const user = res.data;
          setName(user.name);
          setChannel(user.channel);
          setEmail(user.email);
          setAbout(user.about);
          setProfilePic(user.image);
        } catch (err) {
          console.error("Error fetching data:", err.message);
        }
      };
  
      useEffect(() => {
        fetchData();
      }, []); 

  const stats = [
    { label: "Subscribers", value: "25K", icon: <MdGroup className="text-purple-500" /> },
    { label: "Videos", value: "213", icon: <MdVideoLibrary className="text-purple-500" /> },
    { label: "Likes", value: "643K", icon: <MdThumbUp className="text-purple-500" /> },
    { label: "Views", value: "2.4M", icon: <MdVisibility className="text-purple-500" /> },
    { label: "Audience", value: "13K", icon: <MdComment className="text-purple-500" /> },
  ];

  return (
    <div className="w-[82%] absolute right-0 top-0 text-white min-h-screen bg-[#050608] font-sans overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-purple-900/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-900/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Banner Section */}
      <div className="w-full h-[380px] relative overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" 
          alt="Banner" 
          className="w-full h-full object-cover opacity-40 scale-105 group-hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/20 via-transparent to-[#050608]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-12">
            <h2 className="text-7xl font-black tracking-[0.4em] text-white/10 absolute top-1/2 -translate-y-1/2 select-none uppercase">Creator</h2>
            <h2 className="text-6xl font-black tracking-[0.2em] text-white mb-2 uppercase drop-shadow-2xl">
              {channel || "CHANNEL"}
            </h2>
            <div className="h-1 w-24 bg-purple-600 rounded-full shadow-[0_0_15px_#9333ea]"></div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 font-bold mt-6 opacity-60">Architecting Visual Excellence</p>
        </div>
      </div>

      <div className="px-16 -mt-24 relative z-10 pb-20">
        <div className="flex items-end gap-10 mb-14">
          {/* Profile Section */}
          <div className="relative group">
            <div className="h-48 w-48 rounded-[3rem] border-4 border-[#050608] overflow-hidden bg-[#0a0c10] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:rounded-[2rem]">
              {profilePic && profilePic !== "0" ? (
                <img
                  src={`${import.meta.env.VITE_API_URL}${profilePic}`}
                  alt="Profile"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1d23] to-[#0a0c10] text-7xl font-black text-gray-700 uppercase">
                  {channel?.charAt(0) || "W"}
                </div>
              )}
            </div>
            <Link to="/editpicture" className="absolute -bottom-2 -right-2 bg-purple-600 p-3.5 rounded-2xl shadow-[0_10px_20px_rgba(147,51,234,0.3)] hover:bg-purple-500 hover:scale-110 transition-all cursor-pointer border border-white/10">
              <FiCamera className="text-white text-xl" />
            </Link>
          </div>

          <div className="flex-1 pb-6">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-5xl font-black tracking-tight">{channel || "Premium Streamer"}</h1>
              <BsCheckCircleFill className="text-purple-500 text-2xl shadow-purple-500/20" />
            </div>
            <div className="flex items-center gap-6 text-gray-500 font-bold text-xs tracking-widest uppercase">
               <p>ID: <span className="text-gray-300">{name}</span></p>
               <span className="h-1 w-1 bg-gray-700 rounded-full"></span>
               <p>SECURE: <span className="text-gray-300">{email}</span></p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-5 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 p-6 rounded-[2rem] flex flex-col items-start gap-4 hover:border-purple-500/30 transition-all group cursor-default shadow-lg">
              <div className="bg-purple-600/10 p-3 rounded-2xl group-hover:scale-110 transition-transform border border-purple-500/10">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-black tracking-tight">{stat.value}</div>
                <div className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-black mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Action and About Section */}
        <div className="bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 mb-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[80px] -mr-32 -mt-32"></div>

          <div className="flex items-start gap-6 mb-10 pb-10 border-b border-white/5">
            <div className="mt-1 bg-purple-600/10 p-3 rounded-xl border border-purple-500/10">
              <MdInfoOutline className="text-purple-500 text-2xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Vision Statement</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl font-medium italic opacity-90">
                "{about || "Creating immersive experiences that push the boundaries of digital content. Welcome to the future of streaming."}"
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 max-w-md justify-end">
              <button 
                onClick={handleSubscribe} 
                className={`px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all ${isSubscribed ? 'bg-white/5 text-gray-400 border border-white/10' : 'bg-purple-600 hover:bg-purple-500 shadow-[0_10px_30px_rgba(147,51,234,0.3)]'}`}
              >
                <MdGroup className="text-lg" />
                {isSubscribed ? "Followed" : "Follow"}
              </button>
              <Link to="/editchannel" className="bg-[#161b22] hover:bg-[#1c2128] py-3.5 rounded-2xl transition-all border border-white/5 flex items-center gap-2 px-6 text-[10px] font-black uppercase tracking-widest">
                <FiEdit /> <span>Edit Profile</span>
              </Link>
              <Link to="/changepassword" className="bg-[#161b22] hover:bg-[#1c2128] py-3.5 rounded-2xl transition-all border border-white/5 flex items-center gap-2 px-6 text-[10px] font-black uppercase tracking-widest">
                <MdLockOutline /> <span>Security</span>
              </Link>
              <Link to="/deleteaccount" className="bg-red-600/5 hover:bg-red-600/10 text-red-500 py-3.5 rounded-2xl transition-all border border-red-500/10 flex items-center gap-2 px-6 text-[10px] font-black uppercase tracking-widest">
                <MdDeleteOutline /> <span>Terminate</span>
              </Link>
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="flex items-center gap-12">
            {['Home', 'Videos', 'Shorts', 'Images', 'Profile', 'About'].map((tab, idx) => (
              <NavLink 
                key={tab} 
                to={tab === 'Home' ? '/home' : `/${tab.toLowerCase()}`}
                className={({isActive}) => `text-[11px] font-black uppercase tracking-[0.2em] relative py-2 transition-all hover:text-purple-500 ${isActive ? 'text-purple-500' : 'text-gray-500'}`}
              >
                {tab}
                <div className={`absolute bottom-0 left-0 h-[2px] bg-purple-600 rounded-full transition-all duration-500 ${idx === 0 ? 'w-full shadow-[0_0_10px_#9333ea]' : 'w-0'}`}></div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Empty State Content */}
        <div className="flex flex-col items-center justify-center py-24 bg-[#0a0c10]/30 backdrop-blur-sm rounded-[3rem] border-2 border-dashed border-white/5 mb-20 group">
          <div className="bg-[#0a0c10] p-12 rounded-[2.5rem] shadow-2xl mb-8 border border-white/5 relative overflow-hidden">
             {/* Background glow */}
             <div className="absolute inset-0 bg-purple-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative">
                <MdVideoLibrary className="text-8xl text-gray-800 transition-colors group-hover:text-purple-900" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="h-4 w-4 bg-purple-600 rounded-full animate-ping shadow-[0_0_15px_#9333ea]"></div>
                </div>
             </div>
          </div>
          <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">Launch Your Journey</h2>
          <p className="text-gray-500 text-center max-w-lg mb-12 font-bold text-sm leading-relaxed opacity-60">
            Your creative legacy starts with a single upload. Share your vision with the world and build a premium community of dedicated followers.
          </p>
          <Link to="/uploadvideo" className="bg-purple-600 hover:bg-purple-500 text-white px-12 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] flex items-center gap-4 transition-all shadow-[0_20px_50px_rgba(147,51,234,0.2)] group active:scale-95">
            <MdCloudUpload className="text-2xl group-hover:-translate-y-1 transition-transform" />
            <span>Initiate First Upload</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
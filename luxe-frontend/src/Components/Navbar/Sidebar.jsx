import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Logo from '../Logo';
import { 
  GoHomeFill, 
  GoHome 
} from "react-icons/go";
import { 
  SiYoutubeshorts 
} from "react-icons/si";
import { 
  MdSubscriptions, 
  MdOutlineSubscriptions,
  MdHistory,
  MdOutlinePlaylistPlay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdKeyboardArrowRight,
  MdOutlineSettings,
  MdOutlineFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback
} from "react-icons/md";
import { 
  IoLogOutOutline,
  IoChevronForward
} from "react-icons/io5";
import { 
  BsPersonVideo2, 
  BsPersonCircle 
} from "react-icons/bs";
import { 
  RiVideoLine,
  RiPlayList2Line 
} from "react-icons/ri";
import { 
  LuImagePlus,
  LuLayoutGrid 
} from "react-icons/lu";
import { FaPlay, FaStar } from "react-icons/fa";

const Sidebar = ({ sidebarToggle }) => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/users/logout`, {}, { withCredentials: true });
      navigate("/");
      toast.success("Logout successful!");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const menuItems = [
    { name: 'Home', icon: <GoHome className="text-xl" />, activeIcon: <GoHomeFill className="text-xl" />, path: '/home' },
    { name: 'Shorts', icon: <SiYoutubeshorts className="text-xl" />, activeIcon: <SiYoutubeshorts className="text-xl" />, path: '/shorthome' },
    { name: 'Images', icon: <LuLayoutGrid className="text-xl" />, activeIcon: <LuLayoutGrid className="text-xl" />, path: '/imagehome' },
    { name: 'Subscriptions', icon: <MdOutlineSubscriptions className="text-xl" />, activeIcon: <MdSubscriptions className="text-xl" />, path: '/subscription' },
  ];

  const youItems = [
    { name: 'Your Profile', icon: <BsPersonCircle className="text-xl" />, path: 'https://portfolio-projects-x68b.vercel.app/' },
    { name: 'Your channel', icon: <BsPersonVideo2 className="text-xl" />, path: '/channelhome' },
    { name: 'Your videos', icon: <RiVideoLine className="text-xl" />, path: '/videos' },
    { name: 'Your shorts', icon: <SiYoutubeshorts className="text-xl" />, path: '/shorts' },
    { name: 'Your Images', icon: <LuImagePlus className="text-xl" />, path: '/images' },
    { name: 'History', icon: <MdHistory className="text-xl" />, path: '/history' },
    { name: 'Playlist', icon: <RiPlayList2Line className="text-xl" />, path: '/playlist' },
    { name: 'Watch later', icon: <MdOutlineWatchLater className="text-xl" />, path: '/watch-later' },
    { name: 'Liked videos', icon: <MdThumbUpOffAlt className="text-xl" />, path: '/liked' },
  ];

  return (
    <div className={`${sidebarToggle ? 'w-[70px]' : 'w-[18%]'} h-screen bg-[#050608]/60 backdrop-blur-3xl text-white fixed left-0 top-0 z-50 border-r border-white/5 flex flex-col transition-all duration-500`}>
      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3 mb-2">
        <Logo collapsed={sidebarToggle} />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-3 scrollbar-hide">
        <div className="space-y-1 mb-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-5 p-3 rounded-2xl transition-all duration-300 group ${
                  isActive ? 'bg-purple-600/10 text-purple-500 font-black shadow-[inset_0_0_20px_rgba(168,85,247,0.05)]' : 'hover:bg-white/5 text-gray-400 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`${isActive ? 'text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : 'group-hover:text-white transition-colors'}`}>
                    {isActive ? item.activeIcon : item.icon}
                  </div>
                  {!sidebarToggle && <span className="text-[13px] font-bold tracking-tight uppercase">{item.name}</span>}
                </>
              )}
            </NavLink>
          ))}
          <button
            onClick={logout}
            className="w-full flex items-center gap-5 p-3 rounded-2xl hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-all duration-300 group"
          >
            <IoLogOutOutline className="text-xl transition-colors" />
            {!sidebarToggle && <span className="text-[13px] font-bold tracking-tight uppercase">Logout</span>}
          </button>
        </div>

        <div className="h-[1px] bg-white/5 mx-3 mb-6"></div>

        {!sidebarToggle && (
          <div className="px-3 flex items-center gap-2 mb-4 group cursor-pointer">
            <span className="text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase">Personal</span>
            <IoChevronForward className="text-gray-600 group-hover:translate-x-1 group-hover:text-purple-500 transition-all" />
          </div>
        )}

        <div className="space-y-1 mb-8">
          {youItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-5 p-3 rounded-2xl transition-all duration-300 group ${
                  isActive ? 'bg-purple-600/10 text-purple-500 font-black shadow-[inset_0_0_20px_rgba(168,85,247,0.05)]' : 'hover:bg-white/5 text-gray-500 hover:text-white'
                }`
              }
            >
              <div className="group-hover:text-purple-500 transition-colors">{item.icon}</div>
              {!sidebarToggle && <span className="text-[13px] font-bold tracking-tight uppercase">{item.name}</span>}
            </NavLink>
          ))}
        </div>

        {/* Go Premium Card */}
        {!sidebarToggle && (
          <div className="mx-3 mb-10 p-6 rounded-[2rem] bg-gradient-to-br from-purple-600 to-indigo-900 shadow-2xl shadow-purple-900/40 relative overflow-hidden group cursor-pointer border border-white/10">
            <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-125 group-hover:opacity-20 transition-all duration-700 rotate-12">
                <RiVideoLine className="text-9xl" />
            </div>
            <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_#fff]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">Premium Access</span>
            </div>
            <h4 className="text-base font-black mb-1 leading-tight tracking-tight">Level Up <br/>Your Stream</h4>
            <p className="text-[11px] text-white/70 mb-4 font-bold leading-relaxed">Unlock ultra-high bitrate and custom branding.</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/10 w-fit px-4 py-2 rounded-xl hover:bg-white/20 transition-all backdrop-blur-md border border-white/10">
                Upgrade <IoChevronForward className="text-xs" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
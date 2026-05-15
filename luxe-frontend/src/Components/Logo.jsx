import React from 'react';
import { FaPlay, FaStar } from 'react-icons/fa';

const Logo = ({ className = "", collapsed = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className} group`}>
      <div className="relative">
        {/* Purple Box with Play Icon */}
        <div className="flex items-center justify-center w-12 h-12 bg-purple-600 group-hover:bg-purple-700 rounded-xl shadow-lg shadow-purple-600/20 group-hover:scale-105 transition-all relative z-10">
          <FaPlay className="text-white text-[12px] ml-0.5" />
        </div>
        
        {/* Yellow Star */}
        <div className="absolute -top-4 -left-4 z-20 text-[#fbbf24] drop-shadow-[0_0_12px_rgba(251,191,36,0.8)] group-hover:rotate-12 group-hover:scale-110 transition-all">
          <FaStar size={32} />
        </div>
      </div>

      {!collapsed && (
        <div className="flex flex-col leading-none">
          <span className="text-3xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            Web
          </span>
          <span className="text-[12px] font-black tracking-[0.4em] text-gray-500 uppercase mt-[-2px]">
            Stream
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;

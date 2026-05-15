import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaGamepad, FaMusic, FaCode, FaFlask, FaPalette, FaFilm, FaChevronRight } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const Categories = () => {
  const categories = [
    { name: "Gaming", icon: <FaGamepad />, count: "1.2k Videos", color: "bg-red-500" },
    { name: "Music", icon: <FaMusic />, count: "850 Videos", color: "bg-blue-500" },
    { name: "Tech & Coding", icon: <FaCode />, count: "420 Videos", color: "bg-emerald-500" },
    { name: "Science", icon: <FaFlask />, count: "310 Videos", color: "bg-purple-500" },
    { name: "Design & Art", icon: <FaPalette />, count: "560 Videos", color: "bg-pink-500" },
    { name: "Movies", icon: <FaFilm />, count: "940 Videos", color: "bg-amber-500" },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* Dynamic Glow Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#02040a]/80 backdrop-blur-2xl border-b border-white/5 px-6 md:px-16 py-5 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
              <FaPlay className="text-white text-xs ml-0.5" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Web<span className="text-blue-500">Stream</span>
            </span>
          </Link>

          <ul className="hidden xl:flex items-center gap-8 text-[13px] font-semibold text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors cursor-pointer">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors cursor-pointer">About</Link></li>
            <li><Link to="/features" className="hover:text-white transition-colors cursor-pointer">Features</Link></li>
            <li><Link to="/categories" className="text-white transition-colors cursor-pointer">Categories</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
          </ul>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2 w-72 group focus-within:border-blue-500/50 transition-all shadow-inner">
            <input 
              type="text" 
              placeholder="Search videos, channels..." 
              className="bg-transparent border-none outline-none text-xs w-full text-gray-200 placeholder:text-gray-500 font-medium"
            />
            <CiSearch className="text-gray-400 text-lg ml-2 hover:text-white transition-colors cursor-pointer" />
          </div>
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-gray-300 hover:text-white text-sm font-bold transition-all">Login</Link>
            <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 rounded-xl text-sm font-bold shadow-xl shadow-blue-600/20 transition-all active:scale-95">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Categories</span>
            </h1>
            <p className="text-gray-500 text-lg">Discover content that speaks to you.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-sm font-bold hover:bg-white/10 transition-all">All Categories</button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">Trending</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((cat, index) => (
            <div key={index} className="bg-[#0a0c10] border border-white/5 rounded-[2.5rem] p-8 hover:border-blue-500/20 transition-all group cursor-pointer relative overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                <div className={`w-14 h-14 ${cat.color}/10 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  <div className={`text-2xl opacity-80`} style={{ color: cat.color.replace('bg-', '') }}>
                    {cat.icon}
                  </div>
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FaChevronRight className="text-xs" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
              <p className="text-gray-500 text-sm font-medium">{cat.count}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all"></div>
            </div>
          ))}
        </div>

        <div className="bg-[#0a0c10] border border-white/5 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
          <div className="bg-blue-600/10 w-24 h-24 rounded-3xl flex items-center justify-center text-4xl text-blue-500 shrink-0">
             <FaPlay />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-500 max-w-2xl leading-relaxed">
              We're constantly adding new categories and content. Use our search tool to find 
              exactly what you need or suggest a new category to our community.
            </p>
          </div>
          <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all shrink-0">
            Suggest Category
          </button>
        </div>
      </main>

      <footer className="py-10 text-center border-t border-white/5 bg-[#02040a] relative z-10">
        <p className="text-gray-600 text-[11px] font-medium tracking-wider">© 2024 WebStream. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Categories;

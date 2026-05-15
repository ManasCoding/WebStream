import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaUsers, FaBullseye, FaHistory } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const About = () => {
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
            <li><Link to="/about" className="text-white transition-colors cursor-pointer">About</Link></li>
            <li><Link to="/features" className="hover:text-white transition-colors cursor-pointer">Features</Link></li>
            <li><Link to="/categories" className="hover:text-white transition-colors cursor-pointer">Categories</Link></li>
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
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Story</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Revolutionizing how the world shares and consumes video content. WebStream is built for creators, by creators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <FaBullseye />, title: "Our Mission", desc: "To provide a platform where every voice can be heard and every creator can thrive." },
            { icon: <FaUsers />, title: "Our Community", desc: "Connecting millions of viewers with thousands of talented creators globally." },
            { icon: <FaHistory />, title: "Our History", desc: "Founded in 2024, we've grown from a small startup to a leading video platform." }
          ].map((item, index) => (
            <div key={index} className="bg-[#0a0c10] border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/20 transition-all group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-2xl text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <section className="bg-[#0a0c10] border border-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Built for the Future</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We leverage cutting-edge technology to ensure lightning-fast streaming, 
                highest security, and the best user experience across all devices.
              </p>
              <Link to="/signup" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20">
                Join the Revolution <FaPlay className="text-[10px]" />
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center">
                <div className="text-3xl font-black text-blue-500 mb-1">10M+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Viewers</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center">
                <div className="text-3xl font-black text-blue-500 mb-1">500K+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Creators</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center">
                <div className="text-3xl font-black text-blue-500 mb-1">100+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Countries</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center">
                <div className="text-3xl font-black text-blue-500 mb-1">24/7</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center border-t border-white/5 bg-[#02040a] relative z-10">
        <p className="text-gray-600 text-[11px] font-medium tracking-wider">© 2024 WebStream. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;

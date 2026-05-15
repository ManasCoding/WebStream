import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaVideo, FaShieldAlt, FaRocket, FaGlobe, FaMobileAlt, FaBolt } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const Features = () => {
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
            <li><Link to="/features" className="text-white transition-colors cursor-pointer">Features</Link></li>
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
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Features</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to create, share, and enjoy high-quality video content at your fingertips.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <FaVideo />, title: "HD Streaming", desc: "Crystal clear 4K resolution streaming with zero latency across all regions." },
            { icon: <FaShieldAlt />, title: "Advanced Security", desc: "Enterprise-grade protection for your content and personal data." },
            { icon: <FaRocket />, title: "Fast Uploads", desc: "Smart chunked uploading technology that works even on slower connections." },
            { icon: <FaGlobe />, title: "Global Reach", desc: "Your content is distributed across our global CDN for instant access." },
            { icon: <FaMobileAlt />, title: "Fully Responsive", desc: "A seamless experience on desktop, tablet, and mobile devices." },
            { icon: <FaBolt />, title: "Real-time Analytics", desc: "Detailed insights into your audience behavior and video performance." }
          ].map((item, index) => (
            <div key={index} className="bg-[#0a0c10] border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/20 transition-all group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full -mr-12 -mt-12 group-hover:bg-blue-600/10 transition-colors"></div>
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-2xl text-blue-500 mb-6 group-hover:scale-110 transition-transform relative z-10">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>

        <section className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-white/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to start streaming?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Join thousands of creators who are already using WebStream to build their audience.
            </p>
            <Link to="/signup" className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all shadow-xl">
              Get Started Now <FaPlay className="text-[10px]" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center border-t border-white/5 bg-[#02040a] relative z-10">
        <p className="text-gray-600 text-[11px] font-medium tracking-wider">© 2024 WebStream. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Features;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const Contact = () => {
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
            <li><Link to="/categories" className="hover:text-white transition-colors cursor-pointer">Categories</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
            <li><Link to="/contact" className="text-white transition-colors cursor-pointer">Contact</Link></li>
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
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Have questions or feedback? We'd love to hear from you. Our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-[#0a0c10] border border-white/5 p-10 rounded-[3rem] space-y-10">
              {[
                { icon: <FaEnvelope />, title: "Email Us", detail: "support@webstream.com", sub: "Online support 24/7" },
                { icon: <FaPhoneAlt />, title: "Call Us", detail: "+1 (555) 000-0000", sub: "Mon - Fri, 9am - 6pm" },
                { icon: <FaMapMarkerAlt />, title: "Visit Us", detail: "123 Streaming Way", sub: "Silicon Valley, CA" }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-xl text-blue-500 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-white font-medium">{item.detail}</p>
                    <p className="text-gray-500 text-xs mt-1 font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0c10] border border-white/5 p-10 rounded-[3rem]">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500/50 transition-all text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500/50 transition-all text-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-1">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500/50 transition-all text-sm" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-black ml-1">Message</label>
                <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500/50 transition-all text-sm resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
                Send Message <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="py-10 text-center border-t border-white/5 bg-[#02040a] relative z-10">
        <p className="text-gray-600 text-[11px] font-medium tracking-wider">© 2024 WebStream. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;

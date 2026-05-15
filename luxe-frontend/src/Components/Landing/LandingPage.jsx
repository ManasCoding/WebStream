import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { FaPlay, FaStar, FaUsers, FaCloudUploadAlt, FaVideo, FaShieldAlt, FaChevronRight, FaCheckCircle, FaUser } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const LandingPage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrolled = window.scrollY;
        scrollRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040a] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#02040a]/80 backdrop-blur-2xl border-b border-white/5 px-6 md:px-16 py-5 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-12">
          {/* Centralized Logo */}
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-300">
            <Link to="/" className="text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/features" className="hover:text-white transition-colors">Features</Link>
            <Link to="/categories" className="hover:text-white transition-colors">Categories</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex relative group">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-white/5 border border-white/10 rounded-xl py-2 px-4 pr-10 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all w-64 placeholder:text-gray-500"
            />
            <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-hover:text-indigo-400 transition-colors" />
          </div>
          <Link to="/login" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">Login</Link>
          <Link to="/signup" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-95">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mt-10">
          
          {/* Hero Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              The Future of Streaming
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Watch. Share. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600">
                Experience.
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join the most immersive video platform. Upload your content in stunning 4K, go live instantly, and build your community with zero limits.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <Link to="/signup" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2">
                Start Streaming <FaChevronRight className="text-sm" />
              </Link>
              <Link to="/about" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                <FaPlay className="text-indigo-400 text-sm" /> Watch Demo
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/5">
              <div>
                <h4 className="text-3xl font-black text-white">2M+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Active Users</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <h4 className="text-3xl font-black text-white">4K</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Resolution</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <h4 className="text-3xl font-black text-white">0%</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Buffering</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex-1 w-full relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full group-hover:bg-indigo-500/30 transition-all duration-700"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/50 transform rotate-y-[-5deg] rotate-x-[5deg] group-hover:rotate-0 transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070" 
                alt="Platform Preview" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                    <FaPlay className="text-white ml-1" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Now Playing</h5>
                    <p className="text-xs text-indigo-300 font-medium">Top 5 Gaming Setups</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-[#0f1115] border border-white/10 p-4 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-3">
                <FaStar className="text-yellow-400 text-xl" />
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Rating</p>
                  <p className="font-black text-sm">4.9/5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4">Why Choose WebStream?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Experience the next generation of content creation and consumption with our industry-leading tools.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#0f1115] border border-white/5 p-8 rounded-[2rem] hover:border-indigo-500/30 transition-colors group">
              <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600/20 transition-colors border border-indigo-500/10">
                <FaVideo className="text-indigo-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Unlimited 4K Uploads</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Upload and stream in pristine 4K resolution with zero bandwidth caps or storage limitations.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#0f1115] border border-white/5 p-8 rounded-[2rem] hover:border-purple-500/30 transition-colors group">
              <div className="w-14 h-14 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-colors border border-purple-500/10">
                <FaUsers className="text-purple-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Building</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Engage with your audience through live chat, exclusive memberships, and interactive polls.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#0f1115] border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/30 transition-colors group">
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors border border-blue-500/10">
                <FaShieldAlt className="text-blue-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bank-Grade Security</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Your content and personal data are protected by state-of-the-art end-to-end encryption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-2">Trending Now</h2>
              <p className="text-gray-400 text-sm">The most watched content this week</p>
            </div>
            <Link to="/categories" className="text-indigo-400 hover:text-indigo-300 font-bold text-sm flex items-center gap-1">
              View All <FaChevronRight className="text-[10px]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070", 
                title: "Top 5 Gaming Setups for 2024",
                author: "TechNinja",
                views: "1.2M",
                time: "2 days ago"
              },
              {
                id: 2,
                thumbnail: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=2020",
                title: "Exploring the Alps in 4K",
                author: "Wanderlust",
                views: "850K",
                time: "5 days ago"
              },
              {
                id: 3,
                thumbnail: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=2070",
                title: "Authentic Italian Pasta Recipe",
                author: "ChefMario",
                views: "2.1M",
                time: "1 week ago"
              },
              {
                id: 4,
                thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=2000",
                title: "How to Start a Podcast in 2024",
                author: "CreatorAcademy",
                views: "420K",
                time: "10 hours ago"
              }
            ].map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-[#0f1115]">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-md">
                    12:34
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex-shrink-0 mt-1 border border-indigo-500/20 flex items-center justify-center">
                    <FaUser className="text-indigo-400 text-sm" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm leading-tight mb-1 group-hover:text-indigo-400 transition-colors line-clamp-2">{video.title}</h3>
                    <div className="flex items-center gap-1 text-xs font-medium text-gray-400 mb-0.5">
                      {video.author} <FaCheckCircle className="text-[10px] text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500">{video.views} views • {video.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-indigo-900/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Ready to Start Streaming?</h2>
          <p className="text-gray-400 text-lg mb-10">Join millions of creators and viewers on the world's most advanced streaming platform.</p>
          <Link to="/signup" className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:-translate-y-1">
            Create Free Account <FaChevronRight className="text-sm" />
          </Link>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-white/5 flex flex-col items-center justify-center gap-6">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-gray-500 text-sm font-medium">© 2024 WebStream. All rights reserved.</p>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider bg-white/5 px-4 py-2 rounded-full border border-white/10 mt-2">
            Developed and Designed by <span className="text-indigo-400">Manas Kumar Gumansingh</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
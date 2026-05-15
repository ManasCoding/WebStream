import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { CgProfile } from "react-icons/cg";
import { BsThreeDotsVertical, BsCheckCircleFill } from 'react-icons/bs';
import { MdMovie, MdInfoOutline, MdComment, MdOutlineExplore } from 'react-icons/md';
import { BiLike, BiDislike, BiShareAlt } from 'react-icons/bi';

const ShortDetails = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [allVideos, setAllVideos] = useState([]);
  
    const getShortDetails = async () => {
      try {
          const res = await axios.get(`http://localhost:7000/users/details/short/${id}`, { withCredentials: true });
          setVideo(res.data);
      } catch (err) {
          console.error(err);
      }
    };
  
    const getAllShort = async () => {
        try {
            const response = await axios.get("http://localhost:7000/users/getallshorts", { withCredentials: true });
            setAllVideos(response.data);
        } catch (error) {
            console.error(`System error: ${error.message}`);
        }
    };
  
    useEffect(() => {
        getAllShort();
    }, []);
  
    useEffect(() => {
      if (id) {
        getShortDetails();
        window.scrollTo(0, 0);
      }
    }, [id]);
  
    if (!video) return (
      <div className="h-screen bg-[#050608] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(147,51,234,0.3)]"></div>
      </div>
    );

    return (
      <div className="min-h-screen bg-[#050608] text-white selection:bg-purple-500/30 overflow-x-hidden">
        {/* Cinematic Background Ambience */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-900/5 rounded-full blur-[100px]"></div>
        </div>

        <Navbar />

        <main className="pt-32 pb-20 px-8 md:px-16 relative z-10 max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Primary Viewer Console */}
            <div className="flex-1 space-y-10">
              <div className="relative group">
                <div className="aspect-[9/16] max-h-[80vh] mx-auto bg-black rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/5 relative">
                  <video
                    src={`http://localhost:7000${video.shorts}`}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                  />
                  <div className="absolute inset-0 border border-white/5 rounded-[3rem] pointer-events-none group-hover:border-purple-500/20 transition-all duration-700"></div>
                </div>
              </div>

              <div className="bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                {/* Branding Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/5 blur-[60px] rounded-full group-hover:bg-purple-600/10 transition-all duration-700"></div>

                <div className="flex flex-wrap items-start justify-between gap-8 mb-10 pb-10 border-b border-white/5">
                  <div className="flex items-center gap-6">
                    <Link to="/channelhome" className="h-16 w-16 rounded-[1.5rem] overflow-hidden border-2 border-purple-500/20 hover:border-purple-500 transition-all shadow-xl">
                      {video.userId?.image && video.userId.image !== "0" ? (
                        <img src={`http://localhost:7000${video.userId.image}`} alt="Uploader" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-[#161b22] flex items-center justify-center text-3xl font-black text-gray-700">
                          {video.userId?.channel?.charAt(0) || "W"}
                        </div>
                      )}
                    </Link>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl font-black tracking-tight uppercase group-hover:text-purple-400 transition-colors">{video.title}</h1>
                        <BsCheckCircleFill className="text-purple-500 text-sm" />
                      </div>
                      <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                        <span>{video.userId?.channel || "Premium Creator"}</span>
                        <span className="h-1 w-1 bg-gray-800 rounded-full"></span>
                        <span className="text-purple-500/60">#{video.category || "webstream"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden backdrop-blur-md">
                      <button className="flex items-center gap-2 px-6 py-3.5 hover:bg-white/5 transition-colors border-r border-white/5 group">
                        <BiLike className="text-xl group-hover:text-purple-500 transition-colors" />
                        <span className="text-xs font-black">12K</span>
                      </button>
                      <button className="px-6 py-3.5 hover:bg-white/5 transition-colors group">
                        <BiDislike className="text-xl group-hover:text-red-500 transition-colors" />
                      </button>
                    </div>
                    <button className="flex items-center gap-3 bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-purple-600/20 transition-all active:scale-95 border border-white/10">
                      Follow
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-gray-500">
                    <MdInfoOutline className="text-purple-500 text-lg" />
                    <span>Directive Intelligence</span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-gray-400 font-medium max-w-4xl italic">
                    "{video.description || "Synthesizing vertical media boundaries. Immersive vertical experience authorized for distribution."}"
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar discovery */}
            <div className="lg:w-[450px] space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-[1px] bg-purple-600"></span>
                <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500">Discovery Sector</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-8 max-h-screen overflow-y-auto pr-4 scrollbar-hide">
                {allVideos.filter(v => v._id !== id).map((v) => (
                  <Link to={`/ShortDetails/${v._id}`} key={v._id} className="group flex gap-6">
                    <div className="relative w-36 h-64 rounded-3xl overflow-hidden flex-shrink-0 border border-white/5 transition-all duration-700 group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]">
                      <video
                        src={`http://localhost:7000${v.shorts}`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                        muted
                        onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-60"></div>
                    </div>
                    <div className="flex flex-col justify-center gap-3">
                      <h4 className="text-[15px] font-black uppercase tracking-tight group-hover:text-purple-400 transition-colors line-clamp-2">
                        {v.title}
                      </h4>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">
                          {v.userId?.channel || "Creator"}
                        </span>
                        <div className="flex items-center gap-3 text-[9px] font-black text-gray-800 uppercase tracking-widest">
                           <span>{v.category || "Momentum"}</span>
                           <span className="h-1 w-1 bg-gray-900 rounded-full"></span>
                           <span>85K VIEWS</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                
                {allVideos.length <= 1 && (
                  <div className="flex flex-col items-center justify-center py-20 opacity-20">
                    <MdOutlineExplore className="text-6xl mb-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Sector Empty</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
};

export default ShortDetails;
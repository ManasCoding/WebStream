import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { 
  BiLike, 
  BiDislike, 
  BiShareAlt, 
  BiDownload, 
  BiDotsHorizontalRounded,
  BiCheckCircle
} from "react-icons/bi";
import { RiPlayListAddLine } from "react-icons/ri";
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Navbar/Sidebar';

const VideoDetails = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [allVideos, setAllVideos] = useState([]);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const getVideoDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:7000/users/details/video/${id}`, { withCredentials: true });
      setVideo(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getAllVideo = async () => {
    try {
      const response = await axios.get("http://localhost:7000/users/getallvideos", { withCredentials: true });
      setAllVideos(response.data);
    } catch (error) {
      console.error(`System error: ${error.message}`);
    }
  };

  useEffect(() => {
    getAllVideo();
  }, []);

  useEffect(() => {
    if (id) {
      getVideoDetails();
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!video) return (
    <div className="h-screen bg-[#050608] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(147,51,234,0.3)]"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050608] text-white selection:bg-purple-500/30">
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-900/5 rounded-full blur-[100px]"></div>
      </div>

      <Navbar sidebarToggle={sidebarToggle} />
      <Sidebar sidebarToggle={sidebarToggle} />
      
      <main className={`transition-all duration-500 pt-24 pb-10 px-4 md:px-8 relative z-10 ${sidebarToggle ? 'ml-[70px]' : 'ml-[18%]'}`}>
        <div className="flex flex-col lg:flex-row gap-8 max-w-[1600px] mx-auto">
          
          {/* Left Column: Video and Info */}
          <div className="flex-1">
            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] mb-8 border border-white/5 group">
              <video
                src={`http://localhost:7000${video.videos}`}
                className="w-full h-full object-cover"
                controls
                autoPlay
              />
              <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] pointer-events-none"></div>
            </div>

            {/* Video Title */}
            <h1 className="text-2xl md:text-3xl font-black mb-6 tracking-tight leading-tight line-clamp-2">
              {video.title}
            </h1>

            {/* Author and Actions Row */}
            <div className="flex flex-wrap items-center justify-between gap-6 mb-8 pb-8 border-b border-white/5">
              <div className="flex items-center gap-5">
                <Link to="/channelhome" className="h-14 w-14 rounded-full overflow-hidden border-2 border-purple-500/20 hover:border-purple-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                  {video.userId?.image && video.userId.image !== "0" ? (
                    <img src={`http://localhost:7000${video.userId.image}`} alt="Uploader" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-[#161b22] flex items-center justify-center text-2xl font-black text-gray-500">
                      {video.userId?.channel?.charAt(0) || "W"}
                    </div>
                  )}
                </Link>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 font-black text-lg hover:text-purple-400 transition-colors">
                    <Link to="/channelhome">{video.userId?.channel || "Premium Creator"}</Link>
                    <BiCheckCircle className="text-purple-500 text-sm" />
                  </div>
                  <span className="text-xs text-gray-500 font-bold tracking-wider">1.2M FOLLOWERS</span>
                </div>
                <button className="ml-6 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-2xl text-sm font-black shadow-lg shadow-purple-600/20 transition-all active:scale-95">
                  Follow
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center bg-[#0a0c10]/60 backdrop-blur-3xl rounded-2xl overflow-hidden border border-white/5">
                  <button className="flex items-center gap-2 px-6 py-3 hover:bg-white/5 transition-colors border-r border-white/5 group">
                    <BiLike className="text-xl group-hover:text-purple-500 transition-colors" />
                    <span className="text-sm font-black tracking-tight">124K</span>
                  </button>
                  <button className="px-6 py-3 hover:bg-white/5 transition-colors group">
                    <BiDislike className="text-xl group-hover:text-red-500 transition-colors" />
                  </button>
                </div>
                <button className="flex items-center gap-2 bg-[#0a0c10]/60 backdrop-blur-3xl px-6 py-3 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 group">
                  <BiShareAlt className="text-xl group-hover:text-blue-500 transition-colors" />
                  <span className="text-sm font-black tracking-tight">Share</span>
                </button>
                <button className="p-3 bg-[#0a0c10]/60 backdrop-blur-3xl rounded-2xl hover:bg-white/5 transition-colors border border-white/5">
                  <BiDotsHorizontalRounded className="text-xl" />
                </button>
              </div>
            </div>

            {/* Description Box */}
            <div className="bg-[#0a0c10]/40 backdrop-blur-3xl rounded-3xl p-6 border border-white/5 hover:border-white/10 transition-all cursor-pointer group mb-10"
                 onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
              <div className="flex gap-4 text-xs font-black uppercase tracking-widest text-gray-500 mb-3">
                <span className="text-white">125,482 views</span>
                <span>•</span>
                <span className="text-white">Oct 24, 2024</span>
                <span className="text-purple-500">#{video.category || "webstream"}</span>
              </div>
              <p className={`text-[14px] leading-relaxed font-medium transition-all duration-500 ${!isDescriptionExpanded ? 'line-clamp-2 text-gray-400' : 'text-gray-200'}`}>
                {video.description || "In this exclusive video, we dive deep into the ultimate cinematic experience. Witness state-of-the-art visuals and immersive storytelling at its finest."}
              </p>
              <button className="text-[11px] font-black uppercase tracking-[0.2em] mt-4 text-purple-500 hover:text-purple-400 transition-colors">
                {isDescriptionExpanded ? 'Show less' : 'Read full description'}
              </button>
            </div>

            {/* Comments Section */}
            <div className="space-y-8">
              <h3 className="text-xl font-black tracking-tight">Discussion <span className="text-gray-600 ml-2">482</span></h3>
              <div className="flex gap-5">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center font-black shadow-lg shadow-purple-500/20">M</div>
                <div className="flex-1 relative group">
                  <input 
                    type="text" 
                    placeholder="Add to the conversation..." 
                    className="w-full bg-[#0a0c10]/60 border border-white/5 rounded-2xl py-4 px-6 outline-none focus:border-purple-500/30 transition-all text-sm placeholder:text-gray-700" 
                  />
                  <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent group-focus-within:via-purple-500 transition-all duration-700"></div>
                </div>
              </div>
              
              {/* Sample Comment */}
              <div className="flex gap-5 group">
                <div className="h-12 w-12 rounded-full bg-[#161b22] border border-white/5 overflow-hidden flex-shrink-0">
                   <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                   <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-black hover:text-purple-400 cursor-pointer transition-colors">@JohnDoe</span>
                      <span className="text-[10px] font-bold text-gray-600 tracking-wider">1 HOUR AGO</span>
                   </div>
                   <p className="text-[14px] text-gray-400 leading-relaxed font-medium mb-4 group-hover:text-gray-200 transition-colors">
                     The visual fidelity in this video is absolutely breathtaking. Can't wait to see more from this channel!
                   </p>
                   <div className="flex items-center gap-6 text-gray-600">
                      <div className="flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors">
                         <BiLike className="text-lg" />
                         <span className="text-[10px] font-black">42</span>
                      </div>
                      <BiDislike className="text-lg cursor-pointer hover:text-red-500 transition-colors" />
                      <span className="text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Reply</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Next Up */}
          <div className="lg:w-[400px] flex-shrink-0">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Up Next</h2>
              <div className="flex items-center gap-3 cursor-pointer group">
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-500 group-hover:text-purple-400 transition-colors">Autoplay</span>
                <div className="w-10 h-5 bg-purple-600/20 rounded-full relative border border-purple-500/20 group-hover:border-purple-500/40 transition-all">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {allVideos.filter(v => v._id !== id).map((v) => (
                <Link to={`/VideoDetails/${v._id}`} key={v._id} className="flex gap-4 group">
                  <div className="relative w-44 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-white/5 transition-all duration-500 group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                    <video
                      src={`http://localhost:7000${v.videos}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-[9px] font-black px-2 py-0.5 rounded-lg border border-white/10 tracking-widest">
                      12:30
                    </div>
                    {/* Play Hint */}
                    <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition-all duration-500 flex items-center justify-center">
                       <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5"></div>
                       </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 overflow-hidden pt-1">
                    <h4 className="text-[13px] font-black line-clamp-2 leading-tight group-hover:text-purple-400 transition-colors">
                      {v.title}
                    </h4>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                      {v.userId?.channel || "Creator"}
                    </span>
                    <div className="flex items-center gap-2 text-[9px] text-gray-600 font-black tracking-widest">
                       <span>125K VIEWS</span>
                       <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
                       <span>2D AGO</span>
                    </div>
                  </div>
                </Link>
              ))}
              {allVideos.length <= 1 && (
                <div className="text-gray-600 text-[10px] font-black uppercase tracking-widest italic text-center py-10 opacity-30">
                  No further discoveries found
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default VideoDetails;
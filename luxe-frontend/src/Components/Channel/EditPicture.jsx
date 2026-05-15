import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdCameraAlt, MdCloudUpload, MdAccountCircle } from 'react-icons/md';

const EditPicture = () => {
  const navigate = useNavigate();
  const [userImage, setUserImage] = useState({
    image: "",
  });
  const [fileName, setFileName] = useState("No visual pulse detected");

  const inputImageChangeHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUserImage({ ...userImage, image: e.target.files[0] });
      setFileName(e.target.files[0].name);
    }
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    if (!userImage.image) {
      toast.error("Please initiate a visual pulse first");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("image", userImage.image);
      await axios.post("http://localhost:7000/users/upload", formData, { withCredentials: true });
      toast.success("Identity visual updated successfully!");
      navigate("/channelhome");
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Failed to synchronize visual pulse");
    }
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative bg-[#050608]">
      {/* Cinematic Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/5 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <Navbar />

      <main className="pt-40 pb-32 flex items-center justify-center px-8 relative z-10">
        <div className="w-full max-w-[650px] bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-12 md:p-16 shadow-2xl relative group overflow-hidden">
          {/* Elite Branding Accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
          
          {/* Internal Glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-600/5 blur-[80px] rounded-full group-hover:bg-purple-600/10 transition-all duration-700"></div>
          
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="h-16 w-16 bg-purple-600/10 rounded-3xl flex items-center justify-center mb-6 border border-purple-500/10 shadow-[0_0_30px_rgba(147,51,234,0.1)]">
              <MdAccountCircle className="text-3xl text-purple-500" />
            </div>
            <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">
              Refine <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 italic">Avatar</span>
            </h1>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Authorize new visual identity profile</p>
          </div>

          <form onSubmit={handleImageSubmit} className="space-y-12 flex flex-col items-center">
            <div className="flex flex-col items-center gap-8 w-full">
              <label className="cursor-pointer group/upload relative">
                <div className="h-48 w-48 rounded-[3rem] border-2 border-dashed border-white/10 flex items-center justify-center bg-white/[0.03] hover:bg-white/[0.08] hover:border-purple-500/40 transition-all duration-500 overflow-hidden shadow-2xl relative">
                  {userImage.image ? (
                    <img src={URL.createObjectURL(userImage.image)} alt="Preview" className="w-full h-full object-cover grayscale group-hover/upload:grayscale-0 transition-all duration-700" />
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      <MdCameraAlt className="text-4xl text-gray-700 group-hover/upload:text-purple-500 transition-colors" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 group-hover/upload:text-white transition-colors">Select Visual</span>
                    </div>
                  )}
                  {/* Overlay for hover */}
                  <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover/upload:opacity-100 transition-opacity"></div>
                </div>
                <input 
                  type="file" 
                  name="image" 
                  className="hidden" 
                  onChange={inputImageChangeHandler} 
                  accept="image/*"
                />
              </label>
              
              <div className="bg-[#0a0c10] px-6 py-2 rounded-full border border-white/5 max-w-full">
                <span className="text-[10px] text-purple-500 font-black tracking-widest truncate block">
                  {fileName}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-white/5 w-full">
              <button 
                type="submit" 
                className="w-full sm:w-auto flex-1 bg-purple-600 hover:bg-purple-500 text-white px-12 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all active:scale-[0.98] border border-white/10"
              >
                Execute Update
              </button>
              <Link 
                to="/channelhome" 
                className="w-full sm:w-auto flex-1 text-center border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] text-gray-500 hover:text-white px-12 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all backdrop-blur-md"
              >
                Abort Update
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditPicture;











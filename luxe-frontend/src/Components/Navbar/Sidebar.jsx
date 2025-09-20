import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineExplore } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { BsPersonVideo2 } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { TbPlaylistAdd } from "react-icons/tb";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { PiPaperclip } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Sidebar = ({sidebarToggle}) => {
    const navigate = useNavigate();
    const logout = async () => {
        try {
        // If you’re storing token in cookies and backend clears cookie:
        await axios.post("https://webstream-server.onrender.com/users/logout", {}, { withCredentials: true });

        // If you store token in localStorage, clear it too:
        // localStorage.removeItem("auth_token");

        // Redirect to login page
        navigate("/");
        toast.success("Logout successful!");
        } catch (error) {
        console.error("Logout failed", error);
        }
    };
  return (
    <div>
        <div className={`${sidebarToggle ? 'w-[4%]' : 'w-[18%]'} h-full bg-zinc-900 text-white px-3 py-14 fixed overflow-y-scroll scrollbar-hide bg-gradient-to-r from-slate-900 to-slate-700`}>
            <div className='flex flex-col gap-1'>
                <NavLink to={'/home'} className={({isActive}) => isActive ? 'text-red-600 bg-zinc-800 flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3' : 'flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'}>
                    <div><GoHomeFill /></div>
                    <div>Home</div>
                </NavLink>
                <NavLink to={'/shorthome'} className={({isActive}) => isActive ? 'text-red-600 bg-zinc-800 flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3' : 'flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'}>
                    <div><SiYoutubeshorts /></div>
                    <div>Shorts</div>
                </NavLink>
                <NavLink to={'/imagehome'} className={({isActive}) => isActive ? 'text-red-600 bg-zinc-800 flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3' : 'flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'}>
                    <div><LuImagePlus /></div>
                    <div>Images</div>
                </NavLink>
                <NavLink to={'/subscription'} className='flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                    <div><MdSubscriptions /></div>
                    <div>Subsciptions</div>
                </NavLink>
                <div onClick={logout} className='hover: cursor-pointer flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                    <div><IoLogOut /></div>
                    <div>Logout</div>
                </div>

                <div className='h-[1px] bg-zinc-800 mt-2'><br /></div>

                <div>
                    <div className='flex justify-first items-center gap-1 hover:bg-zinc-800 p-2 rounded-lg'>
                        <h1>You</h1>
                        <div><MdKeyboardDoubleArrowRight /></div>
                    </div>

                    <div>
                        <NavLink to={'https://portfolio-projects-x68b.vercel.app/'} className='flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                            <div><ImProfile /></div>
                            <div>Your Profile</div>
                        </NavLink>
                        <NavLink to={'/channelhome'} className={({isActive}) => isActive ? 'text-red-600 bg-zinc-800 flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3' : 'flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'}>
                            <div><BsPersonVideo2 /></div>
                            <div>Your channel</div>
                        </NavLink>
                        <NavLink to={'/videos'} className={({isActive}) => isActive ? 'text-red-600 bg-zinc-800 flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3' : 'flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'}>
                            <div><RiVideoLine /></div>
                            <div>Your videos</div>
                        </NavLink>
                        <NavLink to={'/shorts'} className={({isActive}) => isActive ? 'text-red-600 bg-zinc-800 flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3' : 'flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'}>
                            <div><SiYoutubeshorts /></div>
                            <div>Your shorts</div>
                        </NavLink>
                        <NavLink to={'/images'} className={({isActive}) => isActive ? 'text-red-600 bg-zinc-800 flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3' : 'flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'}>
                            <div><LuImagePlus /></div>
                            <div>Your Images</div>
                        </NavLink>
                        <div className='flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                            <div><FaHistory /></div>
                            <div>History</div>
                        </div>
                        <div className='flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                            <div><TbPlaylistAdd /></div>
                            <div>Playlist</div>
                        </div>
                        <div className='flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                            <div><MdOutlineWatchLater /></div>
                            <div>Watch later</div>
                        </div>
                        <div className='flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                            <div><AiOutlineLike /></div>
                            <div>Liked videos</div>
                        </div>
                        <div className='flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                            <div><MdOutlineLibraryAddCheck /></div>
                            <div>Library</div>
                        </div>
                        <div className='flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                            <div><PiPaperclip /></div>
                            <div>Your clips</div>
                        </div>
                    </div>
                </div>

                <div className='h-[1px] bg-zinc-800 mt-2'><br /></div>

                <div>
                    <div><h1>Subscription</h1></div>
                    <div>
                        <div className='flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                            <div className='text-2xl'><CgProfile /></div>
                            <div>Aaj Tak</div>
                        </div>
                        <div className='flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                            <div className='text-2xl'><CgProfile /></div>
                            <div>Sam Sun</div>
                        </div>
                        <div className='flex justify-first items-center gap-5 hover:bg-zinc-800 p-2 rounded-lg px-3'>
                            <div className='text-2xl'><CgProfile /></div>
                            <div>T Raja</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
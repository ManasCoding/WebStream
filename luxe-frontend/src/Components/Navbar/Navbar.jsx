import React from "react";
import { useState } from "react";
// import { IoMdMenu } from "react-icons/io";
import { FcVideoProjector } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMicCircle } from "react-icons/io5";
import { BiVideoPlus } from "react-icons/bi";
import { LuImagePlus } from "react-icons/lu";
import { CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoMicOffCircle } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Options from "./Options";

const Navbar = ({sidebarToggle, setSidebarToggle}) => {
  const [handleMics, setHandleMics] = useState(true);
  const [handleNotification, setHandleNotification] = useState(false);
  const [handleProfile, setHandleProfile] = useState(false);
  return (
    <div>
      <div className={`${handleProfile ? 'block' : 'hidden'}`}><Options /></div>
      <div className="w-full bg-gray-100 bg-zinc-700 flex justify-between items-center p-2 px-10 text-white fixed z-10">
        <div className="flex justify-between items-center gap-5 text-white text-2xl">
            {/* <div onClick={() => setSidebarToggle(!sidebarToggle)}><IoMdMenu  /></div> */}
            <div className="text-4xl"><FcVideoProjector /></div>
            <Link to={'/home'}><h1 className="text-2xl font-bold flex justify-center items-center gap-1"><span className="text-2xl">LUXE</span></h1></Link>
        </div>

        <div className="flex justify-between items-center relative gap-5">
            <div className="flex justify-between items-center"><input className="w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800" type="text" placeholder="Search"/><span className="absolute right-14 text-2xl bg-zinc-800 px-2 rounded-r-lg py-1"><CiSearch /></span></div>
            <div onClick={() => setHandleMics(!handleMics)} className="text-4xl text-zinc-400">{handleMics ? (<IoMicCircle />) : (<IoMicOffCircle />)}</div>
        </div>

        <div className="flex justify-between items-center gap-5">
            <div className="text-2xl"><Link to={'/uploadimages'}><LuImagePlus /></Link></div>
            <div className="text-3xl"><Link to={'/uploadvideo'}><BiVideoPlus /></Link></div>  
            <div onClick={() => setHandleNotification(!handleNotification)} className="text-3xl"><Link to={'/home'}>{handleNotification ? (<MdOutlineNotificationsActive />) : (<CiBellOn />)}</Link></div>
            <div className="text-3xl text-zinc-400" onClick={() => setHandleProfile(!handleProfile)}><CgProfile /></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

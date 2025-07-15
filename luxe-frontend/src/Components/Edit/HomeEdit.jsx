import React from 'react'
import { RiMenuAddFill } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { MdOutlineReport } from "react-icons/md";

const HomeEdit = () => {
  return (
    <div className='bg-zinc-900 absolute right-[50%] w-[25%] rounded-lg'>
        <div className='flex justify-first items-center gap-4 py-2 px-5 hover:bg-zinc-800'>
            <div><RiMenuAddFill /></div>
            <div><a href="/">Add to queue</a></div>
        </div>
        <div className='flex justify-first items-center gap-4 py-2 px-5 hover:bg-zinc-800'>
            <div><MdOutlineWatchLater /></div>
            <div><a href="/">Save to watch later</a></div>
        </div>
        <div className='flex justify-first items-center gap-4 py-2 px-5 hover:bg-zinc-800'>
            <div><MdPlaylistPlay /></div>
            <div><a href="/">Add to playlist</a></div>
        </div>
        <div className='flex justify-first items-center gap-4 py-2 px-5 hover:bg-zinc-800'>
            <div><MdOutlineFileDownload /></div>
            <div><a href="/">Download</a></div>
        </div>
        <div className='flex justify-first items-center gap-4 py-2 px-5 hover:bg-zinc-800'>
            <div><CiShare2 /></div>
            <div>Share</div>
        </div>

        <div className='h-[1px] bg-zinc-800 mt-2'><br /></div>

        <div className='flex justify-first items-center gap-4 py-2 px-5 hover:bg-zinc-800'>
            <div><MdOutlineDoNotDisturbAlt /></div>
            <div>Do not recommend</div>
        </div>
        <div className='flex justify-first items-center gap-4 py-2 px-5 hover:bg-zinc-800'>
            <div><MdOutlineDoNotDisturbOn /></div>
            <div>Don't recommend channel</div>
        </div>

        <a href="/"><div className='flex justify-first items-center gap-4 py-2 px-5 hover:bg-zinc-800'>
            <div><MdOutlineReport /></div>
            <div>Report</div>
        </div></a>
    </div>
  )
}

export default HomeEdit
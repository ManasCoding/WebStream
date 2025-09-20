import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
const ChannelPage = () => {
    const [channel, setChannel] = useState("");
    const [email, setEmail] = useState("");
    const [about, setAbout] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
      setIsSubscribed((prev) => !prev);
    };

    // const [number, setNumber] = useState("");

    const fetchData = async () => {
        try {
          const res = await axios.get("http://localhost:5000/users/profile", { withCredentials: true });
          console.log(res.data);
          const user = res.data;
          setName(user.name);
          setChannel(user.channel);
          setEmail(user.email);
          setAbout(user.about);
          setProfilePic(user.image)
          // setNumber(user.number);

    
        } catch (err) {
          console.error("Error fetching data:", err.message);
        }
      };
  
      useEffect(() => {
        fetchData();
      }, []); 



  return (
    <div>
        <div className='w-[82%] absolute right-0 top-0 text-white h-screen bg-gradient-to-r from-slate-900 to-slate-700'>
            <div className='w-full h-[35%] bg-red-600 mt-12'><img src="https://th.bing.com/th/id/OIP.Jg35DTU8xEFi-BbUaql9CQHaEI?w=286&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" className='w-full h-full object-cover'/></div>
            <div className=' flex justify-first items-center px-8 gap-10 py-4'>
                {/* <div className='bg-zinc-800 h-[10rem] w-[10rem] rounded-full mt-4'><img src="https://th.bing.com/th/id/OIP.xDlc-XfR9xl-vEZNsNJxWwHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" className='w-full h-full object-cover rounded-full'/></div> */}
                {/* <img src={`http://localhost:5000${profilePic}`} alt="" className='h-[10rem] w-[10rem] object-cover rounded-full mt-4'/> */}

                <div className="h-[10rem] w-[10rem] rounded-full mt-4 overflow-hidden bg-zinc-800">
                  {profilePic && profilePic !== "0" ? (
                    <img
                      src={`http://localhost:5000${profilePic}`}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src="https://th.bing.com/th/id/OIP.xDlc-XfR9xl-vEZNsNJxWwHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                      alt="Default Profile"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className='flex flex-col gap-3 mt-2'>
                    <h1 className='text-xl'>Channel Name :- <span className='text-lg'>{channel}</span></h1>
                    <h1 className='text-xl'>Full Name :- <span className='text-lg'>{name}</span></h1>
                    <h1 className='text-xl'>Email :- <span className='text-lg'>{email}</span></h1>
                    {/* <h1 className='text-xl'>Number :- <span className='text-lg'>{number}</span></h1> */}
                    <h1 className='flex gap-10 items-center'><span><span>25k </span>Subscribers</span><span><span>213 </span><span>Videos</span></span><span><span>643k </span><span>Likes</span></span><span><span>243k </span><span>Views</span></span><span><span>13k </span><span>Comments</span></span></h1>
                    <h1 className='text-xl'>About your channel :- <span className='text-lg'>{about}</span></h1>
                    <div className='flex gap-5 justify-between items-center '>
                        <Link to={'/editpicture'} className='hover:bg-zinc-700 text-white py-1 px-4 bg-red-600 rounded-lg'>Change Picture</Link>
                        {/* <Button title=`${isSubscribed ? "Unsubscribe" : "Subscribe"}` color='bg-red-600'/> */}
                        <button onClick={handleSubscribe} className='text-white border-[1px] border-zinc-700 px-3 py-1 rounded-lg hover:bg-zinc-700 bg-red-600'>{isSubscribed ? "Unsubscribe" : "Subscribe"}</button>
                        <Link to={'/editchannel'} className='text-white border-[1px] border-zinc-700 px-3 py-1 rounded-lg hover:bg-zinc-700 bg-red-600'>Edit Profile</Link>
                        <Link to={'/changepassword'} className='hover:bg-zinc-700 text-white py-1 px-4 bg-red-600 rounded-lg'>Change Password</Link>
                        <Link to={'/deleteaccount'} className='hover:bg-zinc-700 text-white py-1 px-4 bg-red-600 rounded-lg'>Delete Channel</Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-first items-center gap-4 px-8 mt-4'>
                <Link to={'/home'} className='hover:text-red-600'>Home</Link>
                <Link to={'/videos'} className='hover:text-red-600'>Videos</Link>
                <Link to={'/shorts'} className='hover:text-red-600'>Shorts</Link>
                <Link to={'/images'} className='hover:text-red-600'>Images</Link>
                <Link to={'https://portfolio-projects-x68b.vercel.app/'} className='hover:text-red-600'>Profile</Link>
                <Link className='hover:text-red-600'>About</Link>
            </div>
            <div className='border-b-[2px] border-zinc-700'><br /></div>
        </div>
    </div>
  )
}

export default ChannelPage
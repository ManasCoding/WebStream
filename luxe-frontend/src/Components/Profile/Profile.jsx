import axios from 'axios'
import React, { useEffect } from 'react'

const Profile = () => {
  const fetchData = async () => {
      try {
        const res = await axios.get("https://webstream-server.onrender.com/users/profile", { withCredentials: true });
        console.log(res.data);
  
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div>Profile
      
    </div>
  )
}

export default Profile
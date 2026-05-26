import axios from 'axios'
import React, { useEffect } from 'react'

const Profile = () => {
  const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:7000'}/users/profile`, { withCredentials: true });
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
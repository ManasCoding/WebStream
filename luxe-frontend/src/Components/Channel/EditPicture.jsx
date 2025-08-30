// import { Link } from 'react-router-dom';
import Button from '../Button/Button'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const EditPicture = () => {
    const navigate = useNavigate();
    const [userImage, setUserImage] = useState({
        image: "",
    });
    

    const inputImageChangeHandler = (e) => {
        setUserImage({ ...userImage, image: e.target.files[0]});
    };

    const handleImageSubmit = async (e) => {
        e.preventDefault();
        console.log("userImage");
        console.log(userImage.image);
        try {
        const formData = new FormData();
        formData.append("image", userImage.image);
        const ress = await axios.post("http://localhost:5000/users/upload", formData, { withCredentials: true });
        console.log("response", ress.data);
        toast.success("You've been successfully updated...");
        navigate("/channelhome");
        } catch (err) {
        console.error("Error fetching data:");
        }
    };




        
    return (
        <div className=' realative h-screen bg-gradient-to-r from-slate-900 to-slate-700 relative backdrop-filter backdrop-blur-lg'>
            <div className=' text-white w-[50%] border-[2px] border-zinc-400 absolute top-[15%] left-[25%] flex flex-col justify-between items-center gap-5 py-5'>
                <form onSubmit={handleImageSubmit} method="post" enctype="multipart/form-data" className='flex flex-col justify-between items-center gap-5'>
                <div className='text-3xl font-semibold flex justify-center items-center gap-5 tracking-tighter'><span className='text-red-600'></span><span>Edit Profile Picture</span></div>
                <div><input className='w-96 px-4 rounded-lg py-1 bg-zinc-900 border-[1px] outline-none border-zinc-800' type="file" name="image" required={true} onChange={inputImageChangeHandler}/></div>
                <div className='flex justify-center items-center gap-5'><Button title='Update' type='submit' style='active:text-red-600'/></div>
                </form>  
            </div>
        </div>
    )
    }

    export default EditPicture











import React from 'react'
import Home from '../Home/Home'
import { Routes, Route } from 'react-router-dom'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import UploadVideo from '../Video/UploadVideo'
import Subscription from '../Subscription/Subscription'
import UploadShorts from '../Short/UploadShorts'
import Videos from '../Video/Videos'
import Shorts from '../Short/Shorts'
import ShortHome from '../Home/ShortHome'
import UploadImages from '../Image/UploadImages'
import ImageHome from '../Home/ImageHome'
import Images from '../Image/Images'
import ChannelHome from '../Channel/ChannelHome'
import ImageDetails from '../Image/ImageDetails'
import EditImage from '../Image/EditImage'
import ShortDetails from '../Short/ShortDetails'
import EditShort from '../Short/EditShort'
import CreateChannel from '../Channel/CreateChannel'
const Router = () => {
  return (
    <div>
        {/* <Navbar sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}/> */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/uploadimages' element={<UploadImages />} />
            <Route path='/uploadvideo' element={<UploadVideo />} />
            <Route path='/uploadshorts' element={<UploadShorts/>} />
            <Route path='/Shorthome' element={<ShortHome />} />
            <Route path='/imagehome' element={<ImageHome />} />
            <Route path='/subscription' element={<Subscription />} />
            <Route path='/videos' element={<Videos/>} />
            <Route path='/shorts' element={<Shorts/>} />
            <Route path='/images' element={<Images />} />
            <Route path='/channelhome' element={<ChannelHome />} />
            <Route path='/imagedetails' element={<ImageDetails />} />
            <Route path='/editimage' element={<EditImage />} />
            <Route path='/shortdetails' element={<ShortDetails />} />
            <Route path='/editshort' element={<EditShort />} />


        </Routes>
    </div>
  )
}

export default Router
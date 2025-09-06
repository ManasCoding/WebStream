import express from "express";
const router = express.Router();
// import isLoggedIn from "../middlewares/isLoggedIn.js";
import { signup, login, logout, getUserData, isLoggedIn, updateProfile, updatePassword, uploads, deleteAccount, uploadImage, getAllImages, uploadVideo, getAllVideo, getUserVideos, getUserImages } from "../controllers/authController.js";
import upload from "../config/multer-config.js";
import imageupload from "../config/multer-image.js";
import videoupload from "../config/multer-video.js";

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", isLoggedIn, getUserData);
router.post("/updateProfile", isLoggedIn, updateProfile);
router.post("/updatePassword", isLoggedIn, updatePassword);
router.post("/deleteAccount", isLoggedIn, deleteAccount);
router.post("/upload", isLoggedIn, imageupload.single("image"), uploads);
router.post("/uploadimage", isLoggedIn, upload.single("images"), uploadImage);
router.get("/getallimages", isLoggedIn, getAllImages);
router.get("/getuserimages", isLoggedIn, getUserImages);
router.post("/uploadvideo", isLoggedIn, videoupload.single("videos"), uploadVideo);
router.get("/getallvideos", isLoggedIn, getAllVideo);
router.get("/getuservideos", isLoggedIn, getUserVideos);






export default router
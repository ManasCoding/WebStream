import express from "express";
const router = express.Router();
// import isLoggedIn from "../middlewares/isLoggedIn.js";
import { signup, login, logout, getUserData, isLoggedIn, updateProfile, updatePassword, uploads, deleteAccount, uploadImage, getAllImages, uploadVideo, getAllVideo, getUserVideos, getUserImages, uploadShort, getUserShorts, getAllShorts, getVideoDetails, getShortDetails, getImageDetails } from "../controllers/authController.js";
import upload from "../config/multer-config.js";
import imageupload from "../config/multer-image.js";
import videoupload from "../config/multer-video.js";
import shortupload from "../config/multer-short.js";

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", isLoggedIn, logout);
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
router.post("/uploadshort", isLoggedIn, shortupload.single("shorts"), uploadShort)
router.get("/getusershorts", isLoggedIn, getUserShorts);
router.get("/getallshorts", isLoggedIn, getAllShorts);
router.get("/details/video/:id", isLoggedIn, getVideoDetails);
router.get("/details/short/:id", isLoggedIn, getShortDetails);
router.get("/details/image/:id", isLoggedIn, getImageDetails);






export default router
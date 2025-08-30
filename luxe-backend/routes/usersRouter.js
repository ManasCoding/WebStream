import express from "express";
const router = express.Router();
// import isLoggedIn from "../middlewares/isLoggedIn.js";
import { signup, login, logout, getUserData, isLoggedIn, updateProfile, uploads, updatePassword, deleteAccount } from "../controllers/authController.js";
import upload from "../config/multer-config.js";


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", isLoggedIn, getUserData);
router.post("/updateProfile", isLoggedIn, updateProfile);
router.post("/updatePassword", isLoggedIn, updatePassword);
router.post("/deleteAccount", isLoggedIn, deleteAccount);
router.post("/upload", isLoggedIn, upload.single("image"), uploads);


export default router
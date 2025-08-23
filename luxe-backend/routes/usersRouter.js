import express from "express";
const router = express.Router();
// import isLoggedIn from "../middlewares/isLoggedIn.js";
import { signup, login, logout, getUserData, isLoggedIn, updateProfile } from "../controllers/authController.js";


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", isLoggedIn, getUserData);
router.post("/updateProfile", isLoggedIn, updateProfile);


export default router
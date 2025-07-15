// const express = require('express');
import express from "express";
const router = express.Router();
// import Router from "express";

// import isLoggedIn from "../middlewares/isLoggedIn.js";
import { signup, login, logout } from "../controllers/authController.js";
// import Item from "../models/user-model.js";

router.get('/login', (req, res) => {
    res.send('users world');
})

router.post("/signup", signup);
// router.get("/signup", (req, res) => {
//     res.send('signup page');
// });

router.post("/login", login);
// router.get("/login", (req, res) => {
//     res.send('login page');
// });

router.post("/logout", logout);
// router.get("/logout", (req, res) => {
//     res.send('logout page');
// });

// router.get("/user/adminpage", isLoggedIn, async (req, res) => {
//     try {
//         const items = await Item.find();
//         res.json(items);
//         console.log(items);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })

// router.get('/user/adminpage', isLoggedIn, async function (req, res) {
//     // let products = await productModel.find();
//     // res.render('shop', { products });
//     res.send('shop world');
// });

// router.post("/logout", logout)

export default router
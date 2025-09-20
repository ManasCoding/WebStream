


// const jwt = require('jsonwebtoken');

import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();
const generateToken = (userId) => {
    return jwt.sign( userId, "secret", {
        expiresIn: "30d",
    });

//     const secret = process.env.JWT_SECRET;
//   if (!secret) {
//     throw new Error("JWT_SECRET is not defined in environment variables");
//   }

//   return jwt.sign({ userId }, secret, {
//     expiresIn: '30d',
//   });
};
export default generateToken
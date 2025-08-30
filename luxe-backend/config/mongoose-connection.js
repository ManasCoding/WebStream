// const mongoose = require('mongoose');
// const config = require('config');

// const dbgr = require('debug')('development:mongoose');
// // export DEBUG=development:*
// // $env:DEBUG = "development:*"
// // Remove-Item Env:DEBUG

// mongoose.connect(`${config.get('MONGODB_URI')}/luxe`)
// .then(function() {
//     dbgr('Connected to MongoDB');
// })
// .catch(function(err) {
//     console.log(err);



// })

// module.exports = mongoose.connection;

import mongoose from "mongoose";
import { DB_URI } from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected successfully...");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    // Exit process with failure if the database connection fails
    process.exit(1);
  }
};

export default connectDB;
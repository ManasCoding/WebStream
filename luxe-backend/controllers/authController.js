import usermodel from "../models/user-model.js";
// import nodemailer from "nodemailer";


import imageModel from "../models/image-model.js";
import videoModel from "../models/video-model.js";
import shortModel from "../models/short-model.js";
import bcrypt from "bcrypt";
// import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

export const signup = async function (req, res) {
    try {
        let { name, email, channel, password, about } = req.body;

        // Input validation to ensure that required fields are present
    if (!channel) {
      return res.status(400).json({ message: "Channel is required." });
    }
    if (!name) {
      return res.status(400).json({ message: "Name is required." });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required." });
    }
    if (!about) {
      return res.status(400).json({ message: "About is required." });
    }

        let user = await usermodel.findOne({ email: email });
        if (user) return res.status(400).send({message: "User found with this email. Try with new one!!!"});

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.status(500).send("mithun");
                else {
                    let user = await usermodel.create({
                        name,
                        channel,
                        email,
                        password: hash,
                        about,
                    });
                    let token = jwt.sign({ email: email, userid: user._id }, "secret");
                    console.log(token);
                    res.cookie('token', token);
                    res.status(201).send(user);
                };
            });
        });
    }
    catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ message: err.message });
    }
}


export const login = async function (req, res) {
    try {
        console.log(req.body);
        let { email, password } = req.body;

        // Input validation to ensure that required fields are present
    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required." });
    }

        let user = await usermodel.findOne({ email: email });
        if (!user) return res.status(400).send({ message: "Invalid user credentials!!!" });
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                let token = jwt.sign({ email: email, userid: user._id }, "secret");
                console.log(token);
                res.cookie('token', token);
                res.status(200).send(user);
            }
            else {
                res.status(401).send({message: "Invalid credentials"});
            }
        });
    }
    catch (err) {
        console.error("Login error:", err);
        res.status(500).send(err.message);
    }
}




export const getUserData = async (req, res) => {
  try {
    const user = await usermodel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    console.error("getUserData error:", error);
    res.status(500).json({ message: "Server error" });
  }
};





export const updateProfile = async (req, res) => {
  try {
    const { channel, name, about } = req.body;

    // Find the user by their current email
    const user = await usermodel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Prevent duplicate email issue
    // if (email !== req.user.email) {
    //   const emailExists = await usermodel.findOne({ email });
    //   if (emailExists) {
    //     return res.status(400).json({ message: "Email already exists" });
    //   }
    //   user.email = email;
    // }

    // Update other fields
    user.channel = channel;
    user.name = name;
    user.about = about;

    await user.save();

    console.log(user);

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export function isLoggedIn(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            // console.log("hello plz login");
            res.status(401);
            return res.send("Please login first");
        } else {
            const decoded = jwt.verify(token, "secret");
            console.log(decoded);
            req.user = decoded;
            // console.log("hello");
            // console.log(token);
            next();
        }
    }
    catch (err) {
        return res.status(401).send("Please login first error");
        // return res.redirect("/");
    }
}  



export const uploads = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    const user = await usermodel.findOne({ email: req.user.email });
    
    // Construct local URL
    const fileUrl = `${process.env.BACKEND_URL || 'http://localhost:7000'}/${req.file.path.replace(/\\/g, '/').replace(/^public\//, '')}`;
    
    user.image = fileUrl; 
    await user.save();
    res.status(200).json({ success: true, message: "Image uploaded successfully", url: fileUrl });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    // const id = req.params.id;
    const id = req.user;
    // console.log(id);

    const hashPassword = async (password) => {
      const saltRounds = 10;
      return await bcrypt.hash(password, saltRounds);
    };

    if (!id) {
      return res.status(404).send({ message: "User Id not found" });
    }

    if (!oldPassword) {
      return res.status(404).send({ message: "Old Password is required" });
    }
    if (!newPassword) {
      return res.status(404).send({ message: "New Password is required" });
    }

    const storedUser = await usermodel.findOne({ email: req.user.email });

    if (!storedUser) {
      return res.status(404).send({ message: "User not found!!!" });
    }
    const passwordHash = await hashPassword(newPassword);

      await usermodel.updateOne(
        { email: req.user.email },
        { password: passwordHash }
      );
      return res
        .status(201)
        .send({ message: "Password updated successfully..." });
    } catch (error) {
    console.log(`System error happens: ${error.message}`);
    return res.status(500).send({ message: "Internal server error...", error });
  }
};



export const deleteAccount = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required." });
    }

    const user = await usermodel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password is incorrect." });
    }

    await user.deleteOne(); // Deletes the user document

    return res.status(200).json({ message: "Account deleted successfully." });
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};



export const uploadImage = async (req, res) => {
  try {
    const user = await usermodel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    const { title, description, category } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required." });
    }

    if (!title || !description || !category ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const fileUrl = `${process.env.BACKEND_URL || 'http://localhost:7000'}/${req.file.path.replace(/\\/g, '/').replace(/^public\//, '')}`;

    const newImage = await imageModel.create({
      userId: user._id,
      title,
      description,
      category,   
      images: fileUrl, 
    });

    await newImage.save();
    return res.status(200).json({ message: "Image uploaded successfully.", url: fileUrl });
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};




export const getAllImages = async (req, res) => {
  try {
    const images = await imageModel.find({ });
    console.log("hello sadbvsbdn eyjrtjurtukr");
    console.log(images);
    return res.status(200).json(images);
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};
export const getUserImages = async (req, res) => {
  try {
    // find logged-in user
    const user = await usermodel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // fetch only this user's videos
    const images = await imageModel.find({ userId: user._id });

    console.log("Fetched user videos:", images);

    return res.status(200).json(images);
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res
      .status(500)
      .json({ message: "Internal server error...", error: error.message });
  }
};


export const uploadVideo = async (req, res) => {
  try {
    const user = await usermodel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    const { title, description, category } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: "Video file is required." });
    }

    if (!title || !description || !category ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const fileUrl = `${process.env.BACKEND_URL || 'http://localhost:7000'}/${req.file.path.replace(/\\/g, '/').replace(/^public\//, '')}`;

    const newVideo = await videoModel.create({
      userId: user._id,
      title,
      description,
      category,   
      videos: fileUrl, 
    });

    await newVideo.save();
    return res.status(200).json({ message: "Video uploaded successfully.", url: fileUrl });
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};



export const getAllVideo = async (req, res) => {
  try {
    const videos = await videoModel.find({ }).populate("userId", "image channel").populate("userId", "channel");
    console.log(videos);
    
    return res.status(200).json(videos);
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};

export const getUserVideos = async (req, res) => {
  try {
    // find logged-in user
    const user = await usermodel.findOne({ email: req.user.email }).populate("image");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // fetch only this user's videos
    const videos = await videoModel.find({ userId: user._id });

    console.log("Fetched user videos:", videos);

    return res.status(200).json(videos);
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res
      .status(500)
      .json({ message: "Internal server error...", error: error.message });
  }
};






export const uploadShort = async (req, res) => {
  try {
    const user = await usermodel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    const { title, description, category } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: "Short file is required." });
    }

    if (!title || !description || !category ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const fileUrl = `${process.env.BACKEND_URL || 'http://localhost:7000'}/${req.file.path.replace(/\\/g, '/').replace(/^public\//, '')}`;

    const newShort = await shortModel.create({
      userId: user._id,
      title,
      description,
      category,   
      shorts: fileUrl, 
    });

    await newShort.save();
    return res.status(200).json({ message: "Short uploaded successfully.", url: fileUrl });
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};



export const getAllShorts = async (req, res) => {
  try {
    const videos = await shortModel.find({ }).populate("userId", "image channel");
    console.log(videos);
    return res.status(200).json(videos);
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};

export const getUserShorts = async (req, res) => {
  try {
    // find logged-in user
    const user = await usermodel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // fetch only this user's videos
    const videos = await shortModel.find({ userId: user._id });

    console.log("Fetched user videos:", videos);

    return res.status(200).json(videos);
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res
      .status(500)
      .json({ message: "Internal server error...", error: error.message });
  }
};


export const logout = async (req, res) => {
  try {
    console.log("logout");
    res.clearCookie("token");
    return res.redirect("/");
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};


export const getVideoDetails = async (req, res) => {
  try {
    const videoId = req.params.id;
    console.log(videoId);
    console.log("req.params");
    const video = await videoModel.findById(videoId).populate("userId", "image channel");
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res.status(200).json(video);
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};



export const getShortDetails = async (req, res) => {
  try {
    const videoId = req.params.id;
    console.log(videoId);
    console.log("req.params");
    const video = await shortModel.findById(videoId).populate("userId", "image channel");
    if (!video) {
      console.log("videosd");
      return res.status(404).json({ message: "Video not found" });
    }
    console.log("videosdvsdv");
    console.log(video);
    return res.status(200).json(video);
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};


export const getImageDetails = async (req, res) => {
  try {
    const videoId = req.params.id;
    console.log(videoId);
    console.log("req.params");
    const video = await imageModel.findById(videoId).populate("userId", "image channel");
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res.status(200).json(video);
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};



// export const deleteVideo = asyncHandler(async (req, res) => {
//   try {
//     const { id } = req.params; // video id from route
//     const userId = req.user._id; // logged-in user (from auth middleware)

//     // find the video
//     const video = await Video.findById(id);

//     if (!video) {
//       return res.status(404).json({ success: false, message: "Video not found" });
//     }

//     // check if logged-in user is the owner
//     if (video.owner.toString() !== userId.toString()) {
//       return res.status(403).json({ success: false, message: "Not authorized to delete this video" });
//     }

//     await video.deleteOne();

//     res.status(200).json({ success: true, message: "Video deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Server error", error: err.message });
//   }
// });


export const deleteVideo = async (req, res) => {
  try {
    const videoId = req.params.id;
    console.log(videoId);
    const video = await videoModel.findByIdAndDelete(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};



export const deleteShort = async (req, res) => {
  try {
    const videoId = req.params.id;
    console.log(videoId);
    const video = await shortModel.findByIdAndDelete(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};



export const deleteImage = async (req, res) => {
  try {
    const videoId = req.params.id;
    console.log(videoId);
    const video = await imageModel.findByIdAndDelete(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    console.error(`System error happens: ${error.message}`);
    return res.status(500).json({ message: "Internal server error...", error });
  }
};


export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await usermodel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a 6-digit PIN
    const resetPin = Math.floor(100000 + Math.random() * 900000).toString();
    user.resetPin = resetPin;
    user.resetPinExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    // Send email (Temporarily disabled - please run 'npm install nodemailer' to enable)
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Password Reset PIN",
      text: `Your password reset PIN is: ${resetPin}. It will expire in 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);
    */

    console.log(`\n------------------------------------------------`);
    console.log(`[FORGOT PASSWORD] PIN for ${email}: ${resetPin}`);
    console.log(`------------------------------------------------\n`);

    res.status(200).json({ message: "Reset PIN generated (Check server console for PIN)" });

  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, pin: resetPin, newPassword } = req.body;
    const user = await usermodel.findOne({ 
      email, 
      resetPin, 
      resetPinExpire: { $gt: Date.now() } 
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired PIN" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
    
    user.password = hash;
    user.resetPin = undefined;
    user.resetPinExpire = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
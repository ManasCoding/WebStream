import usermodel from "../models/user-model.js";
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
        res.status(500).send(err.message);
    }
}



export const logout = async function (req, res) {
    try {
        res.cookie('token', "");
        res.status(200).send("Logged out");
        res.redirect('/');
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}


export const getUserData = async (req, res) => {
  const tokenData = req.cookies.token;
  console.log(tokenData);
  console.log("hello get user data");
  console.log(req.user);
  const data = await usermodel.findOne( req.params.id);
  const user = await usermodel.findOne({ email: req.user.email });
  console.log(user);
  res.status(200).send(user);
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
        console.log("ksjbfvkjsb");
        const token = req.cookies.token;
        console.log(token);
        console.log("hello");
        if (!token) {
            // console.log("hello plz login");
            res.status(401);
            return res.send("Please login first");
        } else {
            console.log("hello dabmsbdmvbsmd");
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
  console.log(req.user);
  console.log("bfskvbkearbferbvkjv");
  console.log(req.file);
  console.log(req.file.filename);
  const user = await usermodel.findOne({ email: req.user.email });
  user.image = `/images/profiles/${req.file.filename}`;
  console.log(user.image);
  await user.save();
  res.status(200).json({ success: true, message: "Image uploaded successfully" });
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



   
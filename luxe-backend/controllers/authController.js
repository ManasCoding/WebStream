import usermodel from "../models/user-model.js";
// import bycrpt from "bcryptjs";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

export const signup = async function (req, res) {
    try {
        let { email, channel, password, about } = req.body;

        // Input validation to ensure that required fields are present
    if (!channel) {
      return res.status(400).json({ message: "Channel is required." });
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
                        channel,
                        email,
                        password: hash,
                        about,
                    });
                    let token = generateToken(user);
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
                let token = generateToken(user);
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
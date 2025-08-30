const express = require("express");
const app = express();
const port = 5000;
const Path = require("path");
const fs = require("fs");
const usermodel = require("./models/user");
const postmodel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const e = require("express");
const multer = require("multer");
const crypto = require("crypto");
const cors = require("cors");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, "public")));
app.use(cookieParser());



app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(64, function (err, buffer) {
        if (err) {
            console.log(err);
        } else {
            console.log(buffer.toString("hex"));
            const fn = buffer.toString("hex") + path.extname(file.originalname);
            cb(null, fn);
        }
    });
  }
})

const upload = multer({ storage: storage })





app.get("/", function (req, res) {
    res.render("index");
});
app.get("/login", function (req, res) {
    res.render("login");
});

app.post("/upload",isLoggedIn, upload.single("image"), async function (req, res) {
    // console.log(req.user);
    console.log(req.file);
    res.redirect("/profile");
});

app.get("/profile", isLoggedIn, async function (req, res) {
    console.log(req.user);
    let user = await usermodel.findOne({ email: req.user.email }).populate("post");
    console.log(user);
    res.render("profile", { user });
});

app.get("/like/:id", isLoggedIn, async function (req, res) {
    console.log(req.user);
    let post = await postmodel.findOne({ _id: req.params.id }).populate("user");
    console.log(post);
    if(post.likes.indexOf(req.user.userid) === -1){
        post.likes.push(req.user.userid);
    }else{
        post.likes.splice(post.likes.indexOf(req.user.userid), 1);
    }
    await post.save();
    res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async function (req, res) {
    console.log(req.user);
    let user = await usermodel.findOne({ email: req.user.email });
    let post = await postmodel.findOne({ _id: req.params.id }).populate("user");
    console.log(post);
    res.render("edit", { user, post });
});

app.post("/update/:id", isLoggedIn, async function (req, res) {
    console.log(req.user);
    let post = await postmodel.findOneAndUpdate({ _id: req.params.id }, { content: req.body.content }).populate("user");
    console.log(post);
    res.redirect("/profile");
});

app.post("/post", isLoggedIn, async function (req, res) {
    let user = await usermodel.findOne({ email: req.user.email });
    console.log(user);
    let { content } = req.body;
    console.log(content);
    let post = await postmodel.create({
        user: user._id,
        content
    })
    user.post.push(post._id);
    await user.save();
    res.send(post);
});

app.post("/signup", async (req, res) => {
    console.log("hello");
    let { channel, email, password, about } = req.body;
    let user = await usermodel.findOne({ email });
    if (user) return res.send("email already exist");
    
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            if (err) return res.status(500).send("mithun error");
            else {
                let user = await usermodel.create({
                    channel,
                    email,
                    password: hash,
                    about,
                });
                let token = jwt.sign({ email: email, userid: user._id }, "mituna");
                console.log(token);
                res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" });
                res.status(201).send(user);
            }
        });
    });
});


app.post("/login", async (req, res) => {
    let { email, password } = req.body;
    let user = await usermodel.findOne({ email });
    if (!user) return res.status(404).send("something is wrong");
    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = jwt.sign({ email: email, userid: user._id }, "mituna");
            console.log(token);
            res.cookie("token", token);
            res.status(201).send(user);
        } else {
            res.status(404).send("something is wrong");
        }
    });
})

app.get("/logout", function (req, res) {
    res.clearCookie("token");
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    try {
        const token = req.cookies.token;
        console.log(token);
        if (!token) {
            res.status(401);
            return res.send("Please login first");
        } else {
            const decoded = jwt.verify(token, "mituna");
            console.log(decoded);
            req.user = decoded;
            next();
        }
    }
    catch (err) {
        res.status(401).send("Please login first error");
        return res.redirect("/");
    }
}



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
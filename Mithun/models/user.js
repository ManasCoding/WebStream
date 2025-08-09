const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/miniapp");

const userSchema = mongoose.Schema({
    channel: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
    },
    post: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "post"
        }
    ]
});

module.exports = mongoose.model("user", userSchema);

import  "dotenv/config"



import express from "express";
// import morgan from "morgan";
import cors from "cors";
// import { PORT } from "./configs/config.js";
import path from "path";
import cookieParser from "cookie-parser";



import { PORT } from "./config/config.js";
import connectDB from "./config/mongoose-connection.js";
import userRouter from "./routes/usersRouter.js";
import { fileURLToPath } from "url";

const app = express();

// app.use(helmet());
app.use(express.json({ limit: "10mb" }));
// app.use(cors());
// app.use(morgan("tiny"));

// app.use(cors({
//   origin: 'https://luxe-two-ruddy.vercel.app',
//   credentials: true
// }));

const allowedOrigins = [
  "http://localhost:5173",             // for local dev
  "https://luxe-two-ruddy.vercel.app"  // for deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// app.use(cors(corsOptions));
// const expressSession = require('express-session');
// const flash = require('connect-flash');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
// app.use(expressSession({
//     secret: process.env.EXPRESS_SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
// }))
// app.use(flash());
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs');





app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

connectDB()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server is successfully running at PORT ${PORT}`);
        console.log(`Server is successfully running at PORT ${PORT}`);
      });
    } catch (error) {
      console.log(`Cannot connect to the server...`);
    }
  })
  .catch((error) => {
    console.log(`Invalid database connection...`);
  });










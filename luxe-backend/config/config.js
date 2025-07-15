import dotenv from "dotenv";

dotenv.config();

// console.log("JWT_SECRET:", process.env.JWT_SECRET);

export const PORT = process.env.PORT || 5000;
export const DB_URI = process.env.DB_URI;
// export const JWT_SECRET = process.env.JWT_SECRET || "manaskumargumansing";
// export const MAIL_USER = process.env.MAIL_USER;
// export const MAIL_PASSKEY = process.env.MAIL_PASS;

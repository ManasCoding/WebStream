# 🚀 WebStream

WebStream is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that allows users to upload, stream, and interact with video content in a seamless and responsive environment.

---

## 📌 Features

* 🔐 User Authentication (JWT-based)
* 📹 Video Upload & Streaming
* ❤️ Like / Dislike System
* 💬 Comments on Videos
* 🔍 Search & Filter Functionality
* 📱 Responsive UI (Mobile + Desktop)

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* Axios
* Tailwind CSS / CSS

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB (Mongoose)

**Other Tools:**

* Cloudinary / AWS S3 (for media storage)
* JWT Authentication

---

## 📂 Folder Structure

```
WebStream/
│
├── frontend/
│   ├── src/
│   ├── components/
│   └── pages/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── middleware/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/webstream.git
cd webstream
```

### 2. Install dependencies

**Frontend:**

```
cd frontend
npm install
```

**Backend:**

```
cd backend
npm install
```

---

### 3. Environment Variables

Create a `.env` file in backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### 4. Run the app

**Backend:**

```
npm run dev
```

**Frontend:**

```
npm run dev
```

---

## 🔄 API Endpoints (Sample)

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user
* `POST /api/videos/upload` → Upload video
* `GET /api/videos` → Get all videos
* `GET /api/videos/:id` → Get single video
* `POST /api/comments` → Add comment

---

## 📸 Screenshots

*Add your project screenshots here*

---

## 🚀 Future Improvements

* 🔴 Live Streaming
* 💳 Subscription / Payment System
* 🤖 AI-based Recommendations
* 📊 Analytics Dashboard

---

⭐ If you like this project, give it a star!

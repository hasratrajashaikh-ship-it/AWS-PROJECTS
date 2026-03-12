const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Temporary blog storage
let blogs = [];

// Get all blogs
app.get("/blogs", (req, res) => {
  res.json(blogs);
});

// Create new blog
app.post("/blogs", (req, res) => {
  const { title, content } = req.body;

  const newBlog = {
    id: Date.now(),
    title,
    content,
    createdAt: new Date()
  };

  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

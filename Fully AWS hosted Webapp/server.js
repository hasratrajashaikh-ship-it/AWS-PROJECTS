const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

// Enable CORS for S3 frontend
app.use(cors());

// Parse JSON body
app.use(express.json());


const db = mysql.createConnection({
  host: "blogdb.c1kg4ws6y82l.eu-north-1.rds.amazonaws.com", //  RDS endpoint
  user: "admin",
  password: "YOUR_DB_PASSWORD", // replace with DB password
  database: "blogdb"
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to RDS MySQL");
});


// Health check
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Get all blogs
app.get("/blogs", (req, res) => {
  db.query(
    "SELECT * FROM blogs ORDER BY created_at DESC",
    (err, results) => {
      if (err) {
        console.error("GET error:", err);
        return res.status(500).json(err);
      }
      res.json(results);
    }
  );
});

// Create new blog
app.post("/blogs", (req, res) => {
  console.log("Incoming request:", req.body);

  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      error: "Title and content are required"
    });
  }

  const sql = "INSERT INTO blogs (title, content) VALUES (?, ?)";

  db.query(sql, [title, content], (err, result) => {
    if (err) {
      console.error("INSERT error:", err);
      return res.status(500).json(err);
    }

    res.status(201).json({
      message: "Blog created successfully",
      id: result.insertId
    });
  });
});


const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});


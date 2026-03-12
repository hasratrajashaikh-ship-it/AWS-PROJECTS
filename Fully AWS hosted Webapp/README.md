
# Cloud Blog Application (AWS S3 + EC2 + RDS)

## Project Overview

This project is a simple full-stack blog application deployed on AWS cloud services.
The frontend is hosted as a static website on Amazon S3, the backend API runs on an EC2 instance using Node.js and Express, and the database is hosted on Amazon RDS using MySQL.

The application allows users to create blog posts and view all published blogs. The backend API communicates with the database to store and retrieve blog data.

All the steps mentioned in the project PDF have been successfully performed and implemented by me.

---

## Architecture

Frontend (Static Website) → Amazon S3
Backend API → Amazon EC2 (Node.js + Express)
Database → Amazon RDS (MySQL)

Data Flow:

Browser
↓
S3 Static Website
↓
EC2 Backend API
↓
RDS MySQL Database

---

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* MySQL
* AWS S3
* AWS EC2
* AWS RDS
* REST API

---

## Features

* Create new blog posts
* View all blogs
* Store blog data in a MySQL database
* Frontend hosted on AWS S3
* Backend API running on AWS EC2
* Database hosted on AWS RDS
* API communication using HTTP requests

---

## Project Structure

```
blog-project/
│
├── server.js
├── package.json
│
├── frontend/
│   ├── index.html
│   ├── create.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## Backend Setup (EC2)

1. Connect to EC2 instance using SSH

```
ssh -i key.pem ec2-user@your-ec2-ip
```

2. Install Node.js

```
sudo yum update -y
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install nodejs -y
```

3. Install dependencies

```
npm install express cors mysql2
```

4. Run backend server

```
node server.js
```

The backend will start on:

```
http://EC2_PUBLIC_IP:5000
```

---

## Database Setup (RDS)

Connect to RDS from EC2:

```
mysql -h RDS-ENDPOINT -u admin -p
```

Create database:

```
CREATE DATABASE blogdb;
USE blogdb;
```

Create table:

```
CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Frontend Setup (S3)

1. Create an S3 bucket
2. Enable Static Website Hosting
3. Upload the frontend files:

   * index.html
   * create.html
   * style.css
   * script.js
4. Access the website using the S3 website endpoint.

Example:

```
http://your-bucket-name.s3-website-region.amazonaws.com
```

---

## API Endpoints

Get all blogs

```
GET /blogs
```

Create new blog

```
POST /blogs
```

Example request body:

```
{
  "title": "My First Blog",
  "content": "This is a blog created using the cloud blog application."
}
```

---

## Learning Outcomes

* Deploying a static website using Amazon S3
* Hosting backend APIs on EC2
* Connecting EC2 applications to RDS MySQL
* Implementing REST APIs with Node.js and Express
* Integrating frontend and backend in a cloud environment

---

## Author

Hasrat Raja Shaikh
Aspiring Cloud Engineer

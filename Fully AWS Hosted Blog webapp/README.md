# 📝 Fully AWS Hosted Blog Web App

This project demonstrates a **full-stack blog application hosted entirely on AWS**, combining frontend hosting, backend services, and database management in a scalable cloud architecture.

---

## 🚀 Project Overview

The application allows users to create and view blog posts through a web interface. It is built using a decoupled architecture where:

- Frontend is hosted on Amazon S3  
- Backend runs on an EC2 instance  
- Data is stored in Amazon RDS  

This setup ensures scalability, reliability, and separation of concerns.

---

## 🛠️ Tech Stack

- **AWS S3** – Frontend hosting  
- **AWS EC2** – Backend server  
- **AWS RDS (MySQL/MariaDB)** – Database  
- **Node.js** – Backend runtime  
- **HTML, CSS, JavaScript** – Frontend  

---

## 🏗️ Architecture

```
User → S3 (Frontend) → EC2 (Node.js Backend) → RDS (Database)
```

---

## 📂 Project Structure

```
/frontend
│── index.html
│── create.html
│── style.css
│── script.js

/backend
│── server.js
```

---

## 🌍 Features

- Create and publish blog posts  
- Store blog data in a relational database  
- Fully cloud-hosted architecture  
- Decoupled frontend and backend  
- Scalable and cost-efficient setup  

---

## 📸 Application Flow

- User accesses frontend hosted on S3  
- Frontend sends requests to backend (EC2)  
- Backend processes data and interacts with RDS  
- Blog data is stored and retrieved dynamically  


---

## 🧠 Key Learnings

- Deploying full-stack apps on AWS  
- Connecting EC2 backend with RDS database  
- Hosting static frontend on S3  
- Managing cloud-based architecture  

---

## ❗ Challenges Faced

- Configuring secure connection between EC2 and RDS  
- Handling public access for S3 hosting  
- Managing backend deployment and dependencies  

---

## ⭐ Future Enhancements

- Add AWS CloudFront for CDN  
- Implement authentication (JWT / Cognito)  
- Enable HTTPS with SSL  
- Automate deployment with CI/CD  
- Add API Gateway & Lambda (serverless backend)  

---

## 👨‍💻 Author

Hasrat Shaikh

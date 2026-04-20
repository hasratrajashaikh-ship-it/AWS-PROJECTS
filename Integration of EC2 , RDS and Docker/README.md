#  AWS RDS + EC2 + Docker Web Application

This project demonstrates how to deploy a **containerized web application** on AWS using **Amazon RDS (MySQL/Aurora), EC2, and Docker**.

---

## 🚀 Project Overview

This architecture enables:

- Running a web application inside a Docker container on EC2  
- Connecting the application to a managed database (RDS)  
- Storing and retrieving user data  
- Building a real-world cloud-based application setup  

---

## 🏗️ Architecture

User → EC2 (Docker Container) → RDS (MySQL Database)

---

## 🛠️ AWS Services Used

- **Amazon EC2** – Compute instance for hosting application  
- **Amazon RDS (Aurora MySQL)** – Managed database service  
- **Docker** – Containerized application deployment  
- **VPC & Security Groups** – Networking and access control  

---

## 📁 Workflow Explanation

### 1️⃣ Create Database
- Created an **Aurora MySQL database**  
- Enabled public access and configured VPC security group  

---

### 2️⃣ Launch EC2 Instance
- Created EC2 instance and connected via SSH  
- Used as application server  

---

### 3️⃣ Install Docker
- Installed Docker on EC2  
- Started and verified Docker service  

---

### 4️⃣ Pull Application Image
- Pulled Docker image:  
  `phillippaul/node-mysql-app:02`  
- This is a simple **Node.js + MySQL web application**  

---

### 5️⃣ Connect Application with Database
- Copied RDS endpoint  
- Passed it as `DB_HOST` to Docker container  
- Connected application with database  

---

### 6️⃣ Run Application
- Started Docker container  
- Verified web server and database connectivity  

---

### 7️⃣ Access Web App
- Opened EC2 public IP in browser  
- Web application loaded successfully  
- Added user data via UI  

---

### 8️⃣ Verify Database Storage
- Connected to MySQL database  
- Verified that user data is stored successfully  

---

## ⚙️ Setup Instructions

### 1️⃣ Create RDS Database
- Engine: MySQL / Aurora  
- Enable public access  
- Configure security group  

### 2️⃣ Launch EC2 Instance
- Allow ports: 22, 80  

### 3️⃣ Install Docker

sudo yum install docker -y
sudo systemctl start docker

### 4️⃣ Pull Docker Image
docker pull phillippaul/node-mysql-app:02

###5️⃣ Run Container
docker run -d -p 80:3000 \
-e DB_HOST=<your-rds-endpoint> \
-e DB_USER=<username> \
-e DB_PASSWORD=<password> \
-e DB_NAME=<database-name> \
phillippaul/node-mysql-app:02

###▶️ How to Test
Open EC2 public IP in browser
Enter user data in web app
Check database for stored data
Confirm successful integration


🎯 Key Learnings
EC2 to RDS connectivity
Docker-based deployment
Cloud database integration
Real-world application hosting

🙌 Author
Hasrat Raja Shaikh
Aspiring Cloud Engineer ☁️


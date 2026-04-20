# ⚖️ AWS Load Balancer & Auto Scaling Project

This project demonstrates how to build a **highly available and scalable web architecture** using **AWS EC2, Application Load Balancer (ALB), and Auto Scaling Group (ASG)**.

---

## 🚀 Project Overview

This setup ensures:

- High availability using multiple EC2 instances  
- Traffic distribution using Application Load Balancer  
- Automatic scaling using Auto Scaling Group  
- Fault tolerance and self-healing infrastructure  

---

## 🏗️ Architecture

User → Load Balancer → EC2 Instances → Auto Scaling Group  

---

## 🛠️ AWS Services Used

- **Amazon EC2** – Virtual servers  
- **Application Load Balancer (ALB)** – Distributes traffic  
- **Auto Scaling Group (ASG)** – Maintains instance count  
- **Launch Template** – Instance configuration  
- **IAM & Security Groups** – Access control  

---

## 📁 Workflow Explanation

### 1️⃣ Launch EC2 Instances
- Created **2 EC2 instances**
- Allowed:
  - HTTP (80)
  - HTTPS (443) :contentReference[oaicite:0]{index=0}  

---

### 2️⃣ Configure Web Server
- Used **User Data script** to install Apache (`httpd`)
- Hosted a simple HTML webpage  
- Verified both instances are running successfully :contentReference[oaicite:1]{index=1}  

---

### 3️⃣ Create Load Balancer
- Selected **Application Load Balancer**
- Configured:
  - Internet-facing
  - Target group (port 80)
- Registered EC2 instances as targets :contentReference[oaicite:2]{index=2}  

---

### 4️⃣ Verify Load Balancing
- Accessed website via Load Balancer DNS  
- Observed hostname changes on refresh → confirms traffic distribution :contentReference[oaicite:3]{index=3}  

---

### 5️⃣ Setup Auto Scaling

#### Create Auto Scaling Group
- Created ASG inside EC2  
- Linked with Load Balancer  

#### Launch Template
- Created template using EC2 AMI  
- Configured:
  - Instance type  
  - Security group  
  - Network settings :contentReference[oaicite:4]{index=4}  

---

### 6️⃣ Configure Scaling

- Desired Capacity: **2 instances**  
- Ensures minimum availability  
- Automatically replaces failed instances :contentReference[oaicite:5]{index=5}  

---

### 7️⃣ Auto Scaling Behavior

- ASG maintains instance count  
- If one instance stops → new instance is launched automatically  
- Logs confirm self-healing behavior :contentReference[oaicite:6]{index=6}  

---

## ▶️ How to Test

1. Open Load Balancer DNS  
2. Refresh multiple times  
3. Observe:
   - Different hostnames → Load balancing working  
4. Stop one EC2 instance  
5. ASG launches a new instance automatically  

---


## 🎯 Key Learnings

- Load balancing concepts  
- High availability architecture  
- Auto scaling & fault tolerance  
- AWS infrastructure design  

---

## 🙌 Author

**Hasrat Raja Shaikh**  
Aspiring Cloud Engineer ☁️  

---

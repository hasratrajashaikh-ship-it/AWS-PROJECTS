
# ⚡ Event-Driven Data Processing Pipeline on AWS

This project demonstrates how to build a **serverless event-driven data processing pipeline** using AWS services like **S3, Lambda, DynamoDB, SNS, and EventBridge**.

---

## 🚀 Project Overview

This pipeline automatically processes data uploaded to an S3 bucket and triggers downstream actions like:

- Processing files using AWS Lambda  
- Storing results in DynamoDB  
- Sending notifications via SNS  
- Automating workflows using EventBridge  

---

## 🏗️ Architecture

S3 → Lambda → DynamoDB → SNS → Email  
                              ↑  
                     EventBridge (Scheduler)

---

## 🛠️ AWS Services Used

- **Amazon S3** – Storage & event trigger  
- **AWS Lambda** – Serverless compute for processing  
- **Amazon DynamoDB** – Store processed data  
- **Amazon SNS** – Send notifications  
- **Amazon EventBridge** – Schedule automation  
- **IAM** – Role & permission management  

---

## 📁 Workflow Explanation

### 1️⃣ Data Upload Trigger
- Files are uploaded to an S3 bucket  
- (Optional) Folder: `incoming/` :contentReference[oaicite:0]{index=0}  

---

### 2️⃣ Lambda Processing
- S3 event triggers a Lambda function  
- Function processes data and stores results in DynamoDB  
- As shown in your setup, the function runs using **Python runtime** :contentReference[oaicite:1]{index=1}  

---

### 3️⃣ Data Storage
- DynamoDB table: `ProcessedData`  
- Stores processed records with status/messages :contentReference[oaicite:2]{index=2}  

---

### 4️⃣ Notification System
- SNS Topic created (`DailySummaryTopic`)  
- Email subscription added and confirmed  
- Sends notifications when processing is complete :contentReference[oaicite:3]{index=3}  

---

### 5️⃣ Scheduled Automation
- EventBridge used to trigger Lambda on a schedule  
- Enables automated reporting or batch processing :contentReference[oaicite:4]{index=4}  

---

### 6️⃣ Testing
- Lambda functions tested successfully  
- Data stored in DynamoDB  
- Email notification received after execution :contentReference[oaicite:5]{index=5}  

---

## ⚙️ Setup Instructions

### 1️⃣ Create DynamoDB Table
- Name: `ProcessedData`

### 2️⃣ Create S3 Bucket
- Upload files (trigger source)

### 3️⃣ Create IAM Role
- Attach permissions:
  - Lambda execution  
  - S3 access  
  - DynamoDB access  
  - SNS access  

### 4️⃣ Create Lambda Function
- Runtime: Python  
- Attach IAM role  
- Add S3 trigger (PUT event)

### 5️⃣ Configure SNS
- Create topic  
- Add email subscription  
- Confirm email  

### 6️⃣ Create Second Lambda (Email Trigger)
- Sends notifications using SNS  

### 7️⃣ Setup EventBridge
- Create schedule  
- Trigger Lambda automatically  

---

## ▶️ How to Test

1. Upload a file to S3  
2. Lambda gets triggered  
3. Data is processed & stored in DynamoDB  
4. SNS sends email notification  
5. EventBridge runs scheduled jobs  

---


## 🎯 Key Learnings

- Event-driven architecture in AWS  
- Serverless pipeline design  
- AWS service integration  
- Automation using EventBridge  

---

## 🙌 Author

**Hasrat Raja Shaikh**  
Aspiring Cloud Engineer ☁️  

---



# 🖼️ AWS Serverless Image Processing Pipeline

A serverless image processing application built on AWS that automatically processes images uploaded to Amazon S3 using AWS Lambda.

## 📌 Overview

This project is an event-driven architecture using AWS services. Whenever a user uploads an image to the source S3 bucket, Amazon S3 triggers an AWS Lambda function. The Lambda function processes the image (resize/compress/convert) and stores the processed image in another S3 bucket.

---

## 🏗️ Architecture

User Upload.
      │
      ▼
Amazon S3 (Source Bucket)
      │
      ▼
S3 Event Notification
      │
      ▼
AWS Lambda
      │
      ▼
Image Processing (Pillow)
      │
      ▼
Amazon S3 (Processed Bucket)

---

## 🚀 Features

- Automatic image processing
- Event-driven architecture
- Fully serverless
- No server management required
- IAM-based secure access
- Environment variables for configuration
- Easy deployment using Lambda ZIP package

---

## 🛠️ AWS Services Used

- Amazon S3
- AWS Lambda
- AWS IAM
- Amazon CloudWatch

---

## ⚙️ Workflow

1. Upload an image to the Source S3 Bucket.
2. S3 Event Notification triggers the Lambda function.
3. Lambda downloads the uploaded image.
4. Image is processed using the Pillow library.
5. Processed image is uploaded to the destination S3 bucket.
6. CloudWatch logs store execution details.

---

## 📋 Prerequisites

- AWS Account
- IAM Role with:
  - AmazonS3FullAccess
  - AWSLambdaBasicExecutionRole
- Python 3.10
- Pillow Library

---

## 🔧 Deployment Steps

### 1. Create S3 Buckets

- Source Bucket
- Destination Bucket

### 2. Create IAM Role

Attach the following policies:

- AmazonS3FullAccess
- AWSLambdaBasicExecutionRole

### 3. Create Lambda Function

Runtime:
```
Python 3.10
```

Assign the IAM role created above.

### 4. Upload Deployment Package

Zip the project files and upload them to Lambda.

### 5. Configure Environment Variable

| Key | Value |
|------|-------|
| processed_bucket | Destination Bucket Name |

### 6. Add S3 Trigger

Configure the Source Bucket to trigger the Lambda function whenever a new object is created.

---


### Upload Image

```
Source Bucket
```

↓

```
Lambda Triggered
```

↓

```
Image Processed
```

↓

```
Processed Bucket
```

---

## 📈 Learning Outcomes

- AWS Lambda
- Amazon S3 Events
- IAM Roles & Policies
- Serverless Computing
- CloudWatch Monitoring
- Event-Driven Architecture
- Python Automation

---

## 🔮 Future Improvements

- Multiple image formats
- Image watermarking
- Face detection
- AI image enhancement
- API Gateway integration
- Thumbnail generation
- SNS notifications

---

##  Author

**Hasrat Raja Shaikh**

Cloud Technology Student


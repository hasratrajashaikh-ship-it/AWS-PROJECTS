# 🎟️ AWS Serverless Ticket Booking System

A serverless ticket booking system built using AWS services. Users can book tickets through a REST API, with booking details stored in Amazon DynamoDB and confirmation emails automatically sent using Amazon SNS.

---

## 🚀 Features

- Serverless Architecture
- REST API using Amazon API Gateway
- AWS Lambda for business logic
- Amazon DynamoDB for booking storage
- Amazon SNS for email notifications
- Automatic Booking ID Generation
- JSON-based API
- Fully managed AWS services

---

## 🏗️ Architecture

```
                Client (Postman / Frontend)
                         │
                         ▼
                 Amazon API Gateway
                         │
                         ▼
                   AWS Lambda
                  (Node.js 24.x)
                  │            │
                  │            ▼
                  │      Amazon SNS
                  │            │
                  ▼            ▼
          Amazon DynamoDB   Confirmation Email
```

---

## 🛠️ AWS Services Used

- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Amazon SNS
- AWS IAM
- Amazon CloudWatch

---

## 📂 Project Structure

```
ticket-booking/
│
├── index.mjs
├── package.json
├── README.md
└── node_modules/
```

---

## 📋 Prerequisites

- AWS Account
- Node.js 24.x
- AWS CLI (Optional)
- IAM Role

---

## 🔐 IAM Permissions

The Lambda execution role requires:

- AmazonDynamoDBFullAccess
- AmazonSNSFullAccess
- AWSLambdaBasicExecutionRole

---

## ⚙️ Setup

### 1. Create DynamoDB Table

Table Name

```
TicketBookings
```

Partition Key

```
bookingId
```

---

### 2. Create SNS Topic

Topic Name

```
TicketConfirmation
```

Subscribe your email address and confirm the subscription.

---

### 3. Create Lambda Function

Runtime

```
Node.js 24.x
```

Upload the deployment ZIP.

---

### 4. Create API Gateway

Create an HTTP API.

Integration

```
AWS Lambda
```

Route

```
POST /book
```

Deploy the API.

---

## 📤 API Request

### Endpoint

```
POST /book
```

### Request Body

```json
{
  "name": "Hasrat",
  "email": "hasrat@gmail.com",
  "seatNo": "A1"
}
```

---

## 📥 Successful Response

```json
{
  "message": "Booking Successful",
  "bookingId": "1782279426109"
}
```

---

## 🗄️ DynamoDB Record

Each successful booking stores:

| Field | Description |
|--------|-------------|
| bookingId | Unique Booking ID |
| name | Passenger Name |
| email | Passenger Email |
| seatNo | Seat Number |
| status | Booking Status |

---

## 📧 Email Notification

After booking, Amazon SNS automatically sends a confirmation email.

Example

```
Booking Confirmed for Seat A1
```

---

## 🔄 Workflow

1. User sends a POST request to API Gateway.
2. API Gateway invokes the Lambda function.
3. Lambda validates the request.
4. Booking details are stored in DynamoDB.
5. Lambda publishes a message to Amazon SNS.
6. SNS sends a confirmation email.
7. API returns the Booking ID.

---

## 📚 Learning Outcomes

- AWS Lambda
- API Gateway
- DynamoDB
- Amazon SNS
- IAM Roles & Policies
- REST API Development
- Serverless Architecture
- Event-driven Applications
- AWS SDK v3


---

## Author

**Hasrat Raja Shaikh**

BCA Cloud Technology Student

AWS | Serverless | Cloud Computing


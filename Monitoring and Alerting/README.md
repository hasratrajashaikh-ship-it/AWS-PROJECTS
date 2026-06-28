# 📊 AWS Cloud Monitoring & Alerting System

A cloud monitoring solution built using AWS services that continuously monitors EC2 instance performance and automatically sends email notifications when resource usage exceeds a defined threshold.

---

## 🚀 Features

- Real-time EC2 monitoring
- CPU utilization alarms using Amazon CloudWatch
- Automatic email notifications via Amazon SNS
- Fully managed AWS services
- Secure IAM-based access control
- Centralized monitoring dashboard
- No server management required

---

## 🏗️ Architecture

```
              Amazon EC2 Instance
                     │
                     ▼
          Amazon CloudWatch Metrics
                     │
                     ▼
             CloudWatch Alarm
                     │
                     ▼
                Amazon SNS
                     │
                     ▼
          Email Notification Sent
```

---

## 🛠️ AWS Services Used

- Amazon EC2
- Amazon CloudWatch
- Amazon SNS
- AWS IAM

---

## 📋 Prerequisites

- AWS Account
- Amazon EC2 Instance
- IAM User/Role
- Verified Email Address
- Amazon SNS Topic

---

## ⚙️ Setup

### 1. Launch an EC2 Instance

Create an EC2 instance to monitor.

---

### 2. Create an SNS Topic

- Create a Standard SNS Topic
- Add an Email Subscription
- Confirm the subscription from your email

---

### 3. Create a CloudWatch Alarm

Metric

```
EC2 → CPUUtilization
```

Threshold Example

```
CPU Utilization > 70%
```

Evaluation Period

```
5 Minutes
```

Notification

```
Select the SNS Topic
```

---

### 4. Generate CPU Load (Optional)

Install the stress tool:

```bash
sudo yum install stress -y
```

Run CPU stress:

```bash
stress --cpu 2 --timeout 300
```

---

## 🔄 Workflow

1. EC2 instance publishes performance metrics to Amazon CloudWatch.
2. CloudWatch continuously monitors CPU utilization.
3. When CPU usage exceeds the configured threshold, a CloudWatch Alarm is triggered.
4. The alarm sends a notification to Amazon SNS.
5. Amazon SNS delivers an email alert to the subscribed user.

---

## 📧 Example Notification

```
ALARM: CPU Utilization exceeded 70%

Instance: i-xxxxxxxxxxxxx

Current CPU Usage: 82%

Timestamp:
2026-06-28
```

---

## 📚 Learning Outcomes

- Amazon EC2
- Amazon CloudWatch
- CloudWatch Alarms
- Amazon SNS
- AWS IAM
- Infrastructure Monitoring
- Performance Monitoring
- Cloud Alerting
- AWS Best Practices

---

## 🎯 Project Highlights

- Automated infrastructure monitoring
- Real-time performance alerts
- Serverless notification workflow
- Secure IAM permissions
- Fully managed AWS services
- Easy to deploy and scale

---

## 👨‍💻 Author

**Hasrat Raja Shaikh**

GitHub: https://github.com/hasratrajashaikh-ship-it

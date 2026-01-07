<h1>Application Load Balancer with Auto Scaling on AWS</h1>

<h2>Project Overview</h2>

This project demonstrates how to deploy a highly available web application on AWS using an Application Load Balancer (ALB) and an Auto Scaling Group (ASG).
Multiple EC2 instances host the same web application, and traffic is automatically distributed between them.
Auto Scaling ensures that the required number of instances are always running.



<h2>AWS Services Used</h2>

1. Amazon EC2 – Web server instances
2. Application Load Balancer (ALB) – Traffic distribution
3. Auto Scaling Group (ASG) – Automatic scaling and recovery
4. Launch Template & AMI – Instance configuration
5. Amazon VPC & Security Groups – Networking and security

   
<h2>Project Workflow</h2>

1. Launch two EC2 instances and allow HTTP/HTTPS access
2. Use User Data to install Apache and host a simple website
3. Create an Application Load Balancer
4. Create a Target Group and register EC2 instances
5. Verify load balancing by refreshing the website
6. Create a Launch Template using an AMI
7. Configure an Auto Scaling Group
8. Set desired capacity to maintain running instances
9. Verify automatic instance creation and replacement


<h2>Features</h2>

High availability web application

Automatic traffic distribution

Auto recovery when an instance fails

Scalable architecture using AWS managed services


<h2>Testing & Verification</h2>

Website accessed through Load Balancer DNS

Hostname changes on refresh, confirming traffic distribution

Auto Scaling launches new instances when one is terminated

Target group health checks show healthy instances


<h2>Documentation</h2>

The complete step-by-step implementation with screenshots is included in the PDF file in this repository 



<h2>Author</h2>

This project and the PDF documentation were created and performed by me, Hasrat Raja Shaikh.

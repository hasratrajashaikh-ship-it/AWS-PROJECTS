<h1>EC2, Docker, and Aurora MySQL Integration Project</h1>

<h2>Project Overview</h2>

This project explains how to connect an EC2 instance, Docker container, and Aurora database.
A simple web app is used to add user details, and the data is stored safely in MySQL.



<h2>Technologies & Services Used</h2>

1. Amazon EC2 – Hosting the application
2. Amazon Aurora (MySQL) – Managed relational database
3. Docker – Containerized web application
4. AWS VPC & Security Groups – Network and security configuration
5. Node.js + MySQL Docker Image – Backend web application
   

<h2>Project Workflow</h2>

1. Create an Aurora MySQL database
2. Configure VPC, subnet, public access, and security groups
3. Launch an EC2 instance
4. Install and start Docker on EC2
5. Pull a Docker image (phillippaul/node-mysql-app)
6. Connect Docker container to Aurora using the database endpoint
7. Access the web app using EC2 public IP
8. Submit user data via the web interface
9. Verify stored data directly in the MySQL database

    
<h2>Features</h2>

Real-time connection between web app and database

Containerized deployment using Docker

Secure AWS-managed database

Practical example of full-stack cloud deployment


<h2>Testing & Verification</h2>

Web application accessed via EC2 public IP

User data submitted successfully

Data verified inside Aurora MySQL using MySQL client


<h2>Documentation</h2>

The complete step-by-step process with screenshots is available in the PDF included in this repository 



<h2>Author</h2>

This project and the PDF documentation were created and performed by me, Hasrat Raja Shaikh.

# Terraform AWS Infrastructure Project

## Overview

This project demonstrates how to use **Terraform** to provision AWS resources using Infrastructure as Code (IaC).
The configuration creates:

* An **Amazon S3 bucket** and uploads a file to it.
* An **Amazon EC2 instance**.

## Technologies Used

* Terraform
* AWS (Amazon Web Services)
* Amazon S3
* Amazon EC2

## Resources Created

1. **S3 Bucket**

   * Bucket name: `demo-bucket7777`
   * Uploads a file `myfile.txt` as `mydata.txt`

2. **EC2 Instance**

   * AMI: `ami-0c0e147c706360bd7`
   * Instance type: `t3.nano`
   * Instance name: `SampleServer`

## Steps to Run

Initialize Terraform

```
terraform init
```

Preview the infrastructure

```
terraform plan
```

Create the resources

```
terraform apply
```

Type **yes** when prompted.

## Result

* An **S3 bucket** is created and a file is uploaded to it.
* An **EC2 instance** is launched in the AWS region `eu-north-1`.

## Destroy Resources (Optional)

To remove all created infrastructure:

```
terraform destroy
```

## Author

**Hasrat Raja Shaikh**
Aspiring Cloud Engineer

*All the steps in this project were performed by me.*

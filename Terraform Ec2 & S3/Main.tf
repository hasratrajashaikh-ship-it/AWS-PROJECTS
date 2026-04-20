## EC2

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.41.0"
    }
  }
}

provider "aws" {
  region = var.region
}


resource "aws_instance" "myserver" {
  ami           = "ami-0c0e147c706360bd7"
  instance_type = "t3.nano"

  tags = {
    Name = "SampleServer"
  }
}




## S3

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.41.0"
    }
  }
}

provider "aws" {
  region = "eu-north-1"
}

resource "aws_s3_bucket" "demo_bucket" {
  bucket = "demo-bucket-hasrat-12345"  # change this to a unique name
}

resource "aws_s3_object" "bucket_data" {
  bucket = aws_s3_bucket.demo_bucket.bucket
  source = "./myfile.txt"
  key    = "mydata.txt"
}

output "bucket_name" {
  value = aws_s3_bucket.demo_bucket.bucket
}

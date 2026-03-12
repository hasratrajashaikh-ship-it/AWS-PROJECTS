terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "6.28.0"
    }
  }
}

provider "aws" {
  region = "eu-north-1"
}


resource "aws_s3_bucket" "demo-bucket" {
  bucket = "demo-bucket7777"
}

resource "aws_s3_object" "bucket-data" {
  bucket = aws_s3_bucket.demo-bucket.bucket
  source = "./myfile.txt"
  key    = "mydata.txt"
}

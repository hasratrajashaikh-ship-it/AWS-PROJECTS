<h1>Event-Driven Data Processing Pipeline on AWS</h1>        

<h2>Project Overview</h2>

This project is about creating an automatic data processing system using AWS.
Files uploaded to S3 are processed automatically without using servers. The results are saved in DynamoDB, and a daily email report is sent to the user.

The complete step-by-step implementation with screenshots is documented in the attached PDF 



<h2>AWS Services Used</h2>

1. Amazon S3 – Data ingestion (file upload trigger)
2. AWS Lambda – Serverless data processing & report generation
3. Amazon DynamoDB – Storage for processed data
4. Amazon SNS – Email notifications
5. Amazon EventBridge – Scheduled automation
6. AWS IAM – Role-based access control


<h2>Architecture Workflow</h2>

1. Files are uploaded to an S3 bucket
2. S3 event triggers a Lambda function
3. Lambda processes the data and stores results in DynamoDB
4. A scheduled EventBridge rule triggers another Lambda
5. Summary report is sent via SNS email notification
   

<h2>Features</h2>

Fully serverless architecture

Event-driven and automated workflow

Scalable and cost-efficient

Uses AWS managed services only

<h2>Testing</h2>

Lambda functions were tested successfully

DynamoDB entries verified after processing

Email notifications confirmed via SNS subscription



 <h2>Author</h2>

This PDF and the entire project were created and performed by me, Hasrat Raja Shaikh.

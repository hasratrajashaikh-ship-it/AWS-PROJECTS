
# 🌐 Static Website Hosting on AWS S3

This project demonstrates how to host a **static website using Amazon S3**. It includes step-by-step instructions to create a bucket, upload website files, enable static hosting, and make the site publicly accessible.

---

## 🚀 Project Overview

This project shows how to:

- Create an S3 bucket  
- Upload static files (HTML, CSS)  
- Enable static website hosting  
- Configure permissions using bucket policy  
- Access the website via S3 endpoint  

---

## 🛠️ Tech Stack

- AWS S3  
- HTML5  
- CSS3  

---

## 📂 Project Structure

```
/project-folder
│── index.html
│── style.css
```

---

## ⚙️ Step-by-Step Setup

### 1️⃣ Create S3 Bucket
- Go to AWS Console → Search **S3**
- Click **Create Bucket**
- Select **General Purpose**
- Give a unique bucket name

---

### 2️⃣ Configure Public Access
- Uncheck **Block all public access**
- Acknowledge warning
- Click **Create Bucket**

---

### 3️⃣ Upload Website Files
- Open your bucket  
- Click **Upload**  
- Add:
  - `index.html`
  - `style.css`

---

### 4️⃣ Enable Static Website Hosting
- Go to **Properties tab**
- Scroll to **Static website hosting**
- Click **Edit → Enable**
- Set:
  - Index document: `index.html`

---

### 5️⃣ Add Bucket Policy (IMPORTANT ⚠️)

Without this, you’ll get **403 Access Denied**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

---

### 6️⃣ Access Your Website 🌍
- Go to **Properties → Static website hosting**
- Copy the **Bucket Website Endpoint**
- Paste it in browser

👉 Your website is now live!

---

## 📸 Output

```
http://your-bucket-name.s3-website-region.amazonaws.com
```

---

## ❗ Common Errors

| Issue | Solution |
|------|--------|
| 403 Access Denied | Add bucket policy |
| Website not loading | Check index.html name |
| CSS not applied | Ensure correct file path |

---

## 📈 Use Cases

- Portfolio websites  
- Resume hosting  
- Landing pages  
- Static web apps  

---

## 🧠 Key Learnings

- S3 can act as a **low-cost hosting solution**  
- Bucket policies control public access  
- Static hosting is simple and scalable  

---

## ⭐ Future Improvements

- Add CloudFront (CDN)  
- Enable HTTPS using ACM  
- Integrate CI/CD (GitHub Actions)  

---

## 👨‍💻 Author

Hasrat Shaikh

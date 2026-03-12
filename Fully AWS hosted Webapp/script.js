
const API_URL = "http://13.48.136.18:5000";

// Load blogs
async function loadBlogs() {
  const res = await fetch(`${API_URL}/blogs`);
  const blogs = await res.json();

  const blogDiv = document.getElementById("blogs");
  if (!blogDiv) return;

  blogDiv.innerHTML = "";
  blogs.forEach(blog => {
    blogDiv.innerHTML += `
      <div class="blog">
        <h2>${blog.title}</h2>
        <p>${blog.content}</p>
       <small>${new Date(blog.created_at).toLocaleString()}</small>
      </div>
    `;
  });
}

// Create blog
const form = document.getElementById("blogForm");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
  title: document.getElementById("title").value,
  content: document.getElementById("content").value
};


    await fetch(`${API_URL}/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    window.location.href = "index.html";
  });
}

loadBlogs();  

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("blogManagerForm");
  const title = document.getElementById("blogTitle");
  const image = document.getElementById("blogImage");
  const content = document.getElementById("blogContent");
  const author = document.getElementById("blogAuthor");
  const category = document.getElementById("blogCategory");
  const editId = document.getElementById("editId");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const blogs = JSON.parse(localStorage.getItem("blogPosts")) || [];

      const blog = {
        title: title.value,
        image: image.value,
        description: content.value,
        author: author.value,
        category: category.value,
        postedAt: new Date().toISOString()
      };

      if (editId.value === "-1") {
        // Create new blog
        blogs.push(blog);
      } else {
        // Update existing blog
        blogs[editId.value] = blog;
        editId.value = "-1";
        form.querySelector("button").innerText = "Publish";
      }

      localStorage.setItem("blogPosts", JSON.stringify(blogs));
      alert("Blog saved successfully!");
      form.reset();
    });

    // If editing
    const params = new URLSearchParams(window.location.search);
    if (params.has("edit")) {
      const index = params.get("edit");
      const blogs = JSON.parse(localStorage.getItem("blogPosts")) || [];
      const blog = blogs[index];
      if (blog) {
        title.value = blog.title;
        image.value = blog.image;
        content.value = blog.description;
        author.value = blog.author;
        category.value = blog.category;
        editId.value = index;
        form.querySelector("button").innerText = "Update";
      }
    }
  }

  // ----- Search functionality -----
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.toLowerCase();
      const blogs = JSON.parse(localStorage.getItem("blogPosts")) || [];

      const filtered = blogs
        .map((blog, index) => ({ ...blog, index }))
        .filter(b => b.title.toLowerCase().includes(term));

      renderSearchResults(filtered);
    });
  }

  function renderSearchResults(results) {
    searchResults.innerHTML = "";

    if (results.length === 0) {
      searchResults.innerHTML = "<p style='text-align:center;'>No matching blogs found.</p>";
      return;
    }

    results.forEach(blog => {
      const div = document.createElement("div");
      div.className = "result-card";
      div.innerHTML = `
        <h3>${blog.title}</h3>
        <p><strong>Author:</strong> ${blog.author}</p>
        <p><strong>Category:</strong> ${blog.category}</p>
        <button onclick="loadForEdit(${blog.index})">Edit</button>
        <button class="delete" onclick="deleteBlog(${blog.index})">Delete</button>
      `;
      searchResults.appendChild(div);
    });
  }
});

// Global functions
window.loadForEdit = function (index) {
  window.location.href = `admin.html?edit=${index}`;
};

window.deleteBlog = function (index) {
  const blogs = JSON.parse(localStorage.getItem("blogPosts")) || [];
  blogs.splice(index, 1);
  localStorage.setItem("blogPosts", JSON.stringify(blogs));
  alert("Blog deleted.");
  location.reload();
};

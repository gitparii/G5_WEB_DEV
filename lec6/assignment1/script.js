const container = document.getElementById("product-container");

fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    let products = data.products;

    products.forEach(product => {
      let card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <div class="price">₹${product.price}</div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);
  });

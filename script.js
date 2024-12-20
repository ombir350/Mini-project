const products = [
    { id: 1, name: "Product 1", price: 777, img: "./images/product1.jpg" },
    { id: 2, name: "Product 2", price: 249, img: "./images/product2.jpg" },
    { id: 3, name: "Product 3", price: 15, img: "./images/product3.jpg" },
    { id: 4, name: "Product 4", price: 30, img: "./images/product4.jpg" },
    { id: 5, name: "Product 5", price: 20, img: "./images/product5.jpg" },
    { id: 6, name: "Product 6", price: 25, img: "./images/product6.jpg" },
    { id: 7, name: "Product 7", price: 15, img: "./images/product7.jpg" },
    { id: 8, name: "Product 8", price: 30, img: "./images/product8.jpg" },
    { id: 9, name: "Product 9", price: 30, img: "./images/product9.jpg" },
  ];
  
  const productGrid = document.querySelector(".product-grid");
  const cartCount = document.getElementById("cart-count");
  
  let cart = 0;
  
  // function renderProducts() {
  //   console.log("Rendering products...");
  //   productGrid.innerHTML = ""; // Clear existing content
  //   products.forEach(product => {
  //     const productCard = document.createElement("div");
  //     productCard.classList.add("product-card");
  //     productCard.innerHTML = `
  //       <img src="${product.img}" alt="${product.name}">
  //       <h3>${product.name}</h3>
  //       <p class="price">${product.price}</p>
  //       <button class="btn" onclick="addToCart()">Add to Cart</button>
  //     `;
  //     productGrid.appendChild(productCard);
  //   });
  // }
 
  function renderProducts() {
    console.log("Rendering products...");
    productGrid.innerHTML = ""; // Clear existing content
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p> <!-- Add rupee sign here -->
            <button class="btn" onclick="addToCart()">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

  
  function addToCart() {
    cart++;
    cartCount.textContent = cart;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
  });
  
  function handleLogin(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "user@example.com" && password === "password123") {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to the home page
    } else {
      alert("Invalid email or password.");
    }
  }
  
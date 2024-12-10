const products = [
    { id: 1, name: "carry bag", price: 799, img: "./images/product1.jpg" },
    { id: 2, name: "olay face cream", price: 249, img: "./images/product2.jpg" },
    { id: 3, name: "nestea", price: 199, img: "./images/product3.jpg" },
    { id: 4, name: "camra", price: 14999, img: "./images/product4.jpg" },
    { id: 5, name: "smart watch", price: 1499, img: "./images/product5.jpg" },
    { id: 6, name: "almond oil", price: 99, img: "./images/product6.jpg" },
    { id: 7, name: "himalya facewash", price: 299, img: "./images/product7.jpg" },
    { id: 8, name: "woman jhumka", price: 459, img: "./images/product8.jpg" },
    { id: 9, name: "taddy bear", price: 149, img: "./images/product9.jpg" },
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
  
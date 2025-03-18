let cart = [];
const products = [
    { id: 1, name: "Classic Coffee Ceramic Mug", price: 12.99, image:"mug11.jpg" },
    { id: 2, name: "Travel Coffee Mug", price: 15.99, image: "mug2.jpg" },
    { id: 3, name: "Black Coffee Designer Mug", price: 14.49, image: "mug3.jpg" },
    { id: 4, name: "Personalized  Coffee Mug", price: 18.99, image: "mug4.jpg" }
    
];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

products.forEach(product => {
    let productHTML = `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="buy-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    productList.innerHTML += productHTML;
});

function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
    });
    cartTotal.innerText = `$${total.toFixed(2)}`;
    cartCount.innerText = cart.length;
}

function toggleCart() {
    let cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = cartPopup.style.display === "flex" ? "none" : "flex";
}

function checkout() {
    alert("Redirecting to payment...");
    // Stripe integration for real payment can be added here
}

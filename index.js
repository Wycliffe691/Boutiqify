// VARIABLES
const cartIcon = document.querySelector(".cart-icon");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartContent = document.querySelector(".cart-content");
const cartTotal = document.querySelector(".cart-total");
const cartSection = document.querySelector(".cart");
const barIcon = document.querySelector(".bar-icon");
const navLinks = document.querySelector(".nav-links");
const navigationLink = document.querySelectorAll(".nav-links a");
const mobileMenu = document.getElementById("mobile-menu");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

// SHOW/HIDE CART
cartIcon.addEventListener("click", function () {
  cartOverlay.style.visibility = "visible";
  cartSection.style.transform = "translateX(0%)";
});
closeCartBtn.addEventListener("click", function () {
  cartOverlay.style.visibility = "hidden";
  cartSection.style.transform = "translateX(100%)";
});
//
// Toggle nav links on bar icon click
barIcon.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent bubbling
  navLinks.classList.toggle("active");
});

navigationLink.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
// RESPONSIVE NAVIGATION BAR
barIcon.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
navigationLink.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active"); // Remove the 'active' class to hide the menu
  });
});
// FILTER BUTTON FUNCTIONALITY
// This code toggles the sidebar visibility when the filter button is clicked
const filterToggle = document.querySelector(".filter-toggle");
const sidebar = document.querySelector(".sidebar");

filterToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// SEARCH FUNCTIONALITY

const productSection = document.getElementById("product-section");
const filterBtns = document.querySelectorAll(".filter-btn");

let products = [];

window.addEventListener("DOMContentLoaded", function () {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      displayProductSection(products);
      // function disableInCartButtons() {
      //   cart.forEach((item) => {
      //     const productCards = document.querySelectorAll(".product-card");
      //     productCards.forEach((card) => {
      //       const title = card.querySelector("h4").textContent;
      //       if (title === item.name) {
      //         const button = card.querySelector(".add-to-cart");
      //         if (button) {
      //           button.disabled = true;
      //           button.textContent = "In Cart";
      //         }
      //       }
      //     });
      //   });
      // }
      // disableInCartButtons();
    })
    .catch((error) => {
      console.error("Error loading products:", error);
    });
});
function displayProductSection(sectionItems) {
  let displayProducts = sectionItems
    .map(function (x) {
      return `<div id= product-id-${x.id} class="category">
            <div class="product-card">
                <img src=${x.img} alt="">
                <h4>${x.name}</h4>
                <div class="price">
                    <p class="price">Kshs. ${x.price}</p>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
           </div>
    `;
    })
    .join("");
  productSection.innerHTML = displayProducts;

  const cartNames = cart.map((item) => item.name);
  document.querySelectorAll(".product-card").forEach((card) => {
    const name = card.querySelector("h4").textContent;
    if (cartNames.includes(name)) {
      const btn = card.querySelector(".add-to-cart");
      btn.disabled = true;
      btn.textContent = "In Cart";
    }
  });
}

// Filter items
filterBtns.forEach(function (x) {
  x.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const productCategory = products.filter(function (sectionItem) {
      if (sectionItem.category === category) {
        return sectionItem;
      }
    });
    if (category === "all") {
      displayProductSection(products);
    } else {
      displayProductSection(productCategory);
    }
  });
});
// Hide sidebar when a filter button is clicked (on small screens)
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("active");
    }
  });
});

function displayProductSection(sectionItems) {
  let displayProducts = sectionItems.map(function (x) {
    return `<div id= product-id-${x.id} class="category"> <!-- Content for Vegetables Category -->
            <!-- Add products here -->
            <div class="product-card">
                <img src=${x.img} alt="">
                <h4>${x.name}</h4>
                <div class="price">
                    <p class="price">Kshs. ${x.price}</p>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
           </div>
    `;
  });
  displayProducts = displayProducts.join("");
  productSection.innerHTML = displayProducts;
}

const reviews = [
  {
    id: 1,
    name: "Jones",
    place: "Nakuru",
    img: "Photos/man4.jpg",
    text: "Boutiqify understood the assignment! The quality? Top-tier. The packaging? Aesthetically perfect. I'm literally obsessed with the loafers I got—pure elegance. Definitely my new go-to for soft life slayage.",
  },
  {
    id: 2,
    name: "Willy",
    place: "Nairobi",
    img: "Photos/man3.jpg",
    text: "I ordered from the men’s section and let’s just say—drip secured. The fabric is clean, the cut is flattering, and delivery was faster than expected. Chali Drip approved 😎.",
  },
  {
    id: 3,
    name: "Trevor",
    place: "Bungoma",
    img: "Photos/man2.jpg",
    text: "Boutiqify has such tasteful Afro-modern designs. I love that they celebrate African beauty without being too loud. My only wish? More neutral tones in the collection!",
  },
];

// select items
const img = document.getElementById("person-img");
const name = document.getElementById("name");
const place = document.getElementById("location");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const fowardBtn = document.querySelector(".foward-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show person based on item;
function showPerson(person) {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  place.textContent = item.place;
  info.textContent = item.text;
}
// show next person
fowardBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
  showPerson(currentItem);
});

const buttons = document.querySelectorAll(".add-to-cart");

// CART FUNCTIONALITIES.
const cart = [];

function createCartItemHTML(product) {
  return `
        <div class="added-item">
            <img src="${product.img}" alt="">
            <div>
                <h4>${product.name}</h4>
                <h5>Kshs ${product.price.toFixed(2)}</h5>
                <span class="trash-icon">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </div>
            <div class="count-items">
                <i class="fa-solid fa-plus"></i>
                <p class="item-count">${product.quantity}</p>
                <i class="fa-solid fa-minus"></i>
            </div>
        </div>
    `;
}

// Define an itemCount variable to keep track of the total number of items in the cart
let itemCount = 0;

// Function to update the cart icon with the current item count
function updateCartItemCount() {
  const cartItemsElement = document.querySelector(".cart-items");
  cartItemsElement.textContent = itemCount.toString();
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-to-cart")) {
    const productCard = event.target.closest(".product-card");
    if (productCard) {
      const productName = productCard.querySelector("h4").textContent;
      const productPrice = parseFloat(
        productCard.querySelector(".price").textContent.split("Kshs. ")[1]
      );
      const productImage = productCard.querySelector("img").getAttribute("src"); // Get the image source
      const existingProduct = cart.find((item) => item.name === productName);
      if (existingProduct) {
        // If the product is already in the cart, do nothing
        existingProduct.quantity++;
      } else {
        // Add a new product to the cart if it's not already in the cart
        cart.push({
          name: productName,
          price: productPrice,
          quantity: 0,
          img: productImage,
        });
      }
      itemCount++;
      updateCartItemCount();

      // Update the cart display
      updateCartDisplay();
      // Disable the button
      event.target.disabled = true;
      // Change the button text to "In Cart"
      event.target.textContent = "In Cart";
      // Add the product to the cart
      addToCart(productName, productPrice, productImage); // Pass the image source to addToCart
      saveProducts();
    }
  }
});

// Add event listeners for plus and minus icons
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("fa-plus")) {
    const productCard = event.target.closest(".added-item");
    if (productCard) {
      const productName = productCard.querySelector("h4").textContent;
      const product = cart.find((item) => item.name === productName);
      if (product) {
        product.quantity++;
        updateCartDisplay();
      }
    }
  } else if (event.target.classList.contains("fa-minus")) {
    const productCard = event.target.closest(".added-item");
    if (productCard) {
      const productName = productCard.querySelector("h4").textContent;
      const product = cart.find((item) => item.name === productName);
      if (product && product.quantity > 1) {
        product.quantity--;
        updateCartDisplay();
      }
    }
  }
});

function addToCart(name, price, img) {
  // Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.name === name);

  if (existingProduct) {
    // Increment the quantity if the product is already in the cart
    existingProduct.quantity++;
  } else {
    // Add a new product to the cart if it's not already in the cart
    cart.push({ name, price, quantity: 1, img });
  }

  // Update the cart display
  updateCartDisplay();
}

function updateCartDisplay() {
  // Select the cart content element
  const cartContent = document.querySelector(".cart-content");

  // Clear the existing content
  cartContent.innerHTML = "";

  // Iterate through the cart and add each item to the cart display
  cart.forEach((item) => {
    // Use the createCartItemHTML function to generate the HTML for each item
    const cartItemHTML = createCartItemHTML(item);
    const cartItem = document.createElement("div");
    cartItem.innerHTML = cartItemHTML;
    cartContent.appendChild(cartItem);
  });

  // Update the total price in the cart footer
  const cartTotal = document.querySelector(".cart-total");
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cartTotal.textContent = total.toFixed(2);
}
// Add event listener for trash icons
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("fa-trash")) {
    const productCard = event.target.closest(".added-item");
    if (productCard) {
      const productName = productCard.querySelector("h4").textContent;
      const productIndex = cart.findIndex((item) => item.name === productName);
      if (productIndex !== -1) {
        // Remove the product from the cart array
        cart.splice(productIndex, 1);
        // Decrement the itemCount
        itemCount--;
        // Update the cart icon with the new itemCount
        updateCartItemCount();
        // Update the cart display
        updateCartDisplay();
      }
    }
  }
});
// Add an event listener for the "Clear Cart" button
const clearCartButton = document.querySelector(".clear-cart");
clearCartButton.addEventListener("click", function () {
  // Clear the cart array
  cart.length = 0;
  // Reset the itemCount to 0
  itemCount = 0;
  // Update the cart icon to display "0" items
  updateCartItemCount();
  // Clear the cart display
  updateCartDisplay();
});

// Function to reset the button text to "Add to Cart"
function resetButton(button) {
  button.disabled = false;
  button.textContent = "Add to Cart";
}

// Add an event listener for the "Clear Cart" button
// const clearCartButton = document.querySelector(".clear-cart");
clearCartButton.addEventListener("click", function () {
  // Clear the cart array
  cart.length = 0;
  // Reset the itemCount to 0
  itemCount = 0;
  // Update the cart icon to display "0" items
  updateCartItemCount();
  // Clear the cart display
  updateCartDisplay();

  // Get all the "In Cart" buttons and reset them to "Add to Cart"
  const inCartButtons = document.querySelectorAll(".add-to-cart[disabled]");
  inCartButtons.forEach((button) => {
    resetButton(button);
  });
  clearLocalStorage();
});

function saveProducts() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadProducts() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    // Parse the saved JSON data back to an array
    const parsedCart = JSON.parse(savedCart);

    // Update the cart with the parsed data
    cart.length = 0; // Clear the current cart
    parsedCart.forEach((product) => {
      cart.push(product);
      itemCount += product.quantity;
    });

    // Update the cart display and item count
    updateCartDisplay();
    updateCartItemCount();
  }
}

// Call the loadProducts function when the page loads
window.addEventListener("load", loadProducts);

function clearLocalStorage() {
  localStorage.removeItem("cart");
}

// Check out page.
const CheckOutBtn = document.querySelector(".check-out");
// Function to create HTML for a cart item in the order summary
function createOrderSummaryItemHTML(product) {
  const totalPrice = product.price * product.quantity;
  return `
        <li>
            <div class="order-summary-item">
                <div class="order-summary-item-details">
                    <p class="item-name">${product.name}</p>
                </div>
                <div class="checkOutQtty">
                    <p class="item-quantity">${product.quantity}</p>
                </div>
                <div class="order-summary-item-total">
                    <p class="item-total-price">Cost: Kshs ${totalPrice.toFixed(
                      2
                    )}</p>
                </div>
            </div>
        </li>
    `;
}

// Function to update the order summary
function updateOrderSummary() {
  // Select the order summary container
  const orderSummaryContainer = document.querySelector(".checkOut-items ol");

  // Clear the existing content
  orderSummaryContainer.innerHTML = "";

  // Iterate through the cart and add each item to the order summary
  cart.forEach((item) => {
    // Use the createOrderSummaryItemHTML function to generate the HTML for each item in the order summary
    const orderSummaryItemHTML = createOrderSummaryItemHTML(item);
    orderSummaryContainer.innerHTML += orderSummaryItemHTML;
  });

  // Update the total price in the cart-total element
  const cartTotal = document.querySelector(".cart-total p");
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cartTotal.textContent = `Total: Kshs. ${total.toFixed(2)}`;
}

// Import products and their values from products.js
import {products_row1, products_row2 } from './products.js';

// Get containers from the DOM and initialize cart and prices
const container1 = document.getElementById('product-container1');
const container2 = document.getElementById('product-container2');
const cart = [];
const prices = [];

// Update header function
function updateHeader() {
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  // Updates the cart count to the length of the cart array
  cartCount.textContent = `${cart.length} items`;
  const sum = prices.reduce((a, b) => a + b, 0);
  cartTotal.textContent = `$${sum.toFixed(2)}`;
}

// Create product card
function createProductCard(product) {
  const div = document.createElement('div');
  div.className = "py-3 bg-stone-50 border-gray-300 border-2 w-50 h-100 flex flex-col items-center justify-center rounded-xl";
  //Adds image based on product info
    const img = document.createElement('img');
        img.src = product.imageUrl;
        img.alt = product.name;
        img.className = "w-50 h-50 object-center mb-4 overflow-hidden object-cover rounded-xl";
        div.appendChild(img);
  // Info div to hold name, price, and quantity selector
    const infoDiv = document.createElement('div');
        infoDiv.className = "flex-grow pl-3";
        const name = document.createElement('h2');
            name.textContent = product.name;
            name.className = "text-lg mb-2";
            infoDiv.appendChild(name);
        const price = document.createElement('p');
            price.textContent = `$${product.price.toFixed(2)}`;
            price.className = "text-gray-600 mb-4";
            infoDiv.appendChild(price);
        

  // Quantity Selector from values 1 to 20; How many to add to cart
        const select = document.createElement('select');
            select.className = "border rounded p-1 mb-4";
            // Create options 1 to 20, default to 1
            for (let i = 1; i <= 20; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = i;
                if (i === 1) option.selected = true;
                select.appendChild(option);
            }
            infoDiv.appendChild(select);
        div.appendChild(infoDiv);

  // Add to cart button
    const button = document.createElement('button');
        button.textContent = "Add to Cart";
        button.className = "bg-yellow-500 items-center hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full";
        // When clicked, add the selected quantity to cart
        button.addEventListener('click', () => {
            const quantity = parseInt(select.value);
            // Add product name and price to cart and prices arrays
            for (let i = 0; i < quantity; i++) {
                cart.push(product.name);
                prices.push(product.price);
            }
            updateHeader();
        });
    // The corrected placement for the button
    div.appendChild(button);
    
  return div;
}

// Create product cards for each product and append to containers
products_row1.forEach(product => container1.appendChild(createProductCard(product)));
products_row2.forEach(product => container2.appendChild(createProductCard(product)));
// app.js

import { createHeader } from './header.js';
import { products_row1, products_row2, products_row3 } from './products.js';

const container1 = document.getElementById('product-container1');
const container2 = document.getElementById('product-container2');
const container3 = document.getElementById('product-container3');

const cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, quantity) {
    for (let i = 0; i < quantity; i++) {
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cartUpdated'));
}

function createProductCard(product) {
  const div = document.createElement('div');
  div.className = "py-3 bg-stone-50 border-gray-300 border-2 w-50 h-90 flex flex-col items-center justify-center rounded-xl";
  const img = document.createElement('img');
      img.src = product.imageUrl;
      img.alt = product.name;
      img.className = "w-full h-[15rem] object-center mb-4 overflow-hidden object-cover rounded-xl";
      div.appendChild(img);
  const infoDiv = document.createElement('div');
      infoDiv.className = "flex-grow pl-1 w-full";
      const name = document.createElement('h2');
          name.textContent = product.name;
          name.className = "text-lg mb-2";
          infoDiv.appendChild(name);
      const price = document.createElement('p');
          price.textContent = `$${product.price.toFixed(2)}`
          price.className = "text-gray-600 mb-4";
          infoDiv.appendChild(price);
      const select = document.createElement('select');
          select.className = "border rounded p-1 mb-4";
          for (let i = 1; i <= 20; i++) {
              const option = document.createElement('option');
              option.value = i;
              option.textContent = i;
              if (i === 1) option.selected = true;
              select.appendChild(option);
          }
          infoDiv.appendChild(select);
      div.appendChild(infoDiv);
  const button = document.createElement('button');
      button.textContent = "Add to Cart";
      button.className = "bg-yellow-300 items-center hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full";
      button.addEventListener('click', () => {
          const quantity = parseInt(select.value);
          addToCart(product, quantity);
      });
  div.appendChild(button);
  return div;
}

createHeader(); 

// Render hardcoded rows synchronously
products_row1.forEach(product => container1.appendChild(createProductCard(product)));
products_row2.forEach(product => container2.appendChild(createProductCard(product)));

// --- ASYNCHRONOUS RENDERING FOR FETCHED PRODUCTS (The Fix) ---

async function renderThirdRow() {
    try {
        // Await the Promise (products_row3) to get the actual array of products
        const fetchedProducts = await products_row3;
        
        // Ensure we have an array before trying to iterate
        if (Array.isArray(fetchedProducts)) {
            fetchedProducts.forEach(product => container3.appendChild(createProductCard(product)));
        } else {
            console.error("products_row3 did not resolve to an array.");
        }
    } catch (error) {
        // Handle any errors that occurred during the fetch or rendering
        console.error("Error rendering third product row:", error);
    }
}

renderThirdRow();
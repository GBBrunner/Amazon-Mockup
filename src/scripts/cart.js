import { createHeader } from './header.js';
let salesTaxRate = 0.08; // 8% sales tax
// Function to handle removing an item and updating the display
function removeFromCart(identifier) {
  // Get the current cart from local storage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Use filter() to create a new array without any items that match the identifier
  const updatedCart = cart.filter(product => product.identifier !== identifier);
  
  // Save the updated cart back to local storage
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  
  // Dispatch a custom event to update the header
  window.dispatchEvent(new CustomEvent('cartUpdated'));
  
  // Re-render the cart items on the page
  displayCartItems();
}

// Function to create an HTML element for a single cart item
function createCartItemCard(product) {
    const div = document.createElement('div');
        div.className = "flex items-center justify-between p-4 border-b border-gray-300";
        const img = document.createElement('img');
            img.src = product.imageUrl;
            img.alt = product.name;
            img.className = "w-20 h-20 object-cover rounded-md";
        div.appendChild(img);
    
        const infoDiv = document.createElement('div');
            infoDiv.className = "flex-1 ml-4";
            // Display the item name and quantity (e.g., "Webcam x 2")
            const name = document.createElement('h2');
                name.textContent = `${product.name} x${product.quantity}`;
                name.className = "text-lg font-semibold";
            infoDiv.appendChild(name);
            // Display the total price for this item (unit price * quantity)
            const price = document.createElement('p');
                price.textContent = `$${(product.price * product.quantity).toFixed(2)}`;
                price.className = "text-gray-600";
            infoDiv.appendChild(price);
        div.appendChild(infoDiv);
    
        const removeButton = document.createElement('button');
            removeButton.textContent = "Remove from Cart";
            removeButton.className = "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full";
            // Attach the event listener to call the removeFromCart function
            removeButton.addEventListener('click', () => {
                removeFromCart(product.identifier);
            });
        div.appendChild(removeButton);
    return div;
}

// Main function to display all cart items
function displayCartItems() {
    const cartContainer = document.getElementById('cart-container');
    // Clear any existing items to prevent duplicates
    cartContainer.innerHTML = '';
    // Get the raw cart data from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 
    // Summarize the cart items by identifier
    const summarizedCart = cart.reduce((summary, item) => {
        if (summary[item.identifier]) {
            // If item already exists in summary, increment quantity
            summary[item.identifier].quantity += 1;
        } else {
            // Otherwise, add the item to the summary with quantity 1
            summary[item.identifier] = { ...item, quantity: 1 };
        }
        return summary;
    }, {});
    const summarizedCartArray = Object.values(summarizedCart);
    if (summarizedCartArray.length === 0) {
        cartContainer.innerHTML = '<p class="p-4 text-center text-gray-500">Your cart is empty.</p>';
    } else {
        // Display a card for each unique item
        summarizedCartArray.forEach(item => {
            cartContainer.appendChild(createCartItemCard(item));
        });
    }   
}

// Function to update the cart summary section
function updateCartSummary() {
    const cartSummary = document.getElementById('cart-summary');
cartSummary.innerHTML = '';
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const totalItems = cart.length;
const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
cartSummary.innerHTML = `
    <p>Total Items : ${totalItems}</p>
    <p>Total Price : $${totalPrice.toFixed(2)}</p>
    <p>Estimated Tax : $${(totalPrice * salesTaxRate).toFixed(2)}</p>
    <p>Total Cost : $${(totalPrice * (1 + salesTaxRate)).toFixed(2)}</p>
    <button onclick="alert('This button does nothing');" class="bg-yellow-300 items-center hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full">Proceed to Checkout</button>
`;
}
// Initialize the page by creating the header and displaying cart items

createHeader();
displayCartItems();
updateCartSummary();
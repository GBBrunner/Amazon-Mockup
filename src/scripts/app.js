import { Product } from './products.js';
const cart = [];
const prices = [];
const product1 = new Product('Sound-proof Bluetooth Headphones', 19.99, 'src/images/headphones.jpg');
const product2 = new Product('HP 416 GB Laptop - Rose Edition', 299.99, 'src/images/laptop.jpg');
const product3 = new Product('Swivel Office Desk Chair', 86.32, 'src/images/swivel_chair.jpg');
function createProduct(product) {
    // let boxCount = 9;
    // for (let i =0; i < boxCount; i++) {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
        <div class="py-3 bg-stone-50 border-gray-300 border-2 w-50 h-100 flex flex-col items-center justify-center">
        <img src="${product.imageUrl}" alt="${product.name}" class="w-10/12 h-50 object-center mb-4 overflow-hidden object-cover rounded-xl">
        <div class="flex-grow pl-3">
            <p id="${product.name}" class="mb-4">${product.name}</p>
            <p data-price-value="${product.price}" class="mb-4 text-lg font-bold" id="product-price${i}">$${product.price}</p>
            <select id="quantitySelect${i}" class="mb-4 px-2 py-1 rounded-lg bg-gray-200"></select>
        </div>
        <button class="bg-yellow-500 items-center hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">Add to Cart</button>
        </div>
        `;
        document.getElementById('main').appendChild(productDiv);
        productDiv.querySelector('button').addEventListener('click', add_to_cart);
        createQuantitySelect(i)
    // }
    return productDiv;
}
// Function to create quantity select options       
function createQuantitySelect(boxSelector) {
    const quantitySelect = document.getElementById(`quantitySelect${boxSelector}`);
    // Loop from 1 to 20
    for (let i = 1; i <= 20; i++) {
        // Create a new option element
        const option = document.createElement('option');
        
        // Set the value and display text
        option.value = i;
        option.textContent = i;
        
        // Set the first option as selected by default
        if (i === 1) {
        option.selected = true;
        }
        // Add the new option to the select element
        quantitySelect.appendChild(option);
    }
}
function add_to_cart(){
    console.log(this);
    for (let i = 0; i < document.getElementById('quantitySelect0').value; i++) {
        cart.push(document.getElementById('product-name0').innerHTML);
        prices.push(parseFloat(document.getElementById('product-price0').getAttribute('data-price-value')));
    }
    document.getElementById('cart-count').innerHTML = '<span>' + cart.length + ' items</span>';
    document.getElementById('cart-total').innerHTML = '<span>$' + prices.reduce((a, b) => a + b, 0).toFixed(2) + '</span>';
    console.log(cart);
    console.log(prices);
}


// When DOM is loaded make the quantity select options
// createProduct('Sound-proof Bluetooth Headphones', 19.99, 'src/images/headphones.jpg');
document.body.appendChild(createProduct(product1));

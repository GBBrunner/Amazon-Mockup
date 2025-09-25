function updateHeader() {
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const sum = cart.reduce((total, product) => total + product.price, 0);

  cartCount.textContent = `${cart.length} items`;
  cartTotal.textContent = `$${sum.toFixed(2)}`;
}

function createHeader() {
  const header = document.getElementById('header');
  header.className = "bg-indigo-950 h-12 flex items-center px-3";
  if (header) {
    header.innerHTML = `
    <a href="/index.html" class="flex">
      <i class="fa fa-amazon text-4xl text-white"></i>
      <h1 class="text-2xl font-bold text-white ml-2">Amazon</h1>
    </a>
    <div class="flex-1 flex justify-center">
      <input type="text" id="search-bar" placeholder="Search products..." class="w-3/4 p-1 rounded" />
    </div>
    <a href='/src/html/cart.html' class="ml-auto flex items-center">
      <i class="fa fa-shopping-cart text-2xl text-white"></i>
      <span class="ml-2 text-gray-200" id="cart-count">0 items</span>
      <span class="ml-2 text-gray-200" id="cart-total">$0.00</span>
    </a>
    `;
    updateHeader();
  }
}

window.addEventListener('cartUpdated', updateHeader);

export { createHeader, updateHeader };
// products.js

// Product class to create product objects
class Product {
  constructor(name, price, imageUrl, identifier) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    // The identifier is used to uniquely identify products for cart operations,
    // Currently using a simple 8 charcter string made manually, but could be UUID or database ID in real applications
    this.identifier = identifier;
  }
}
const API_URL = "https://www.totallyrad.dev/api/v1/products";


// Array of products to display for two rows
const products_row1 = [
  new Product('Sound-proof Bluetooth Headphones', 19.99, '/src/images/headphones.jpg', 'a1b2c3d4'),
  new Product('Wireless Mouse', 9.99, '/src/images/mouse.jpg', 'e5f6g7h8'),
  new Product('Mechanical Keyboard', 49.99, '/src/images/mechanical_keyboard.jpg', 'i9j0k1l2'),
  new Product('4K Monitor', 299.99, '/src/images/monitor.jpg', 'm3n4o5p6'),
  new Product('Gaming Chair', 159.99, '/src/images/gaming_chair.jpg', 'q7r8s9t0'),
  new Product('USB-C Hub', 24.99, '/src/images/usb-c_hub.jpg', 'u1v2w3x4'),
  new Product('Portable SSD 1TB', 89.99, '/src/images/ssd_1TB.jpg', 'y5z6a7b8'),
  new Product('Smartwatch', 129.99, '/src/images/smartwatch.jpg', 'c9d0e1f2'),
  new Product('Bluetooth Speaker', 39.99, '/src/images/bt_speaker.jpg', 'g3h4i5j6'),
  new Product('Nintendo Switch', 300.00, '/src/images/nintendo_switch.jpg', 'k7l8m9n0'),
  new Product('HP 14" Laptop,8GB RAM, 64GB SSD, Intel HD Graphics - Pink', 349.99, '/src/images/laptop.jpg', 'o1p2q3r4'),
  new Product('Webcam', 49.99, '/src/images/webcam.jpg', 's5t6u7v8')
];
const products_row2 = [
  new Product('Noise-Cancelling Earbuds', 59.99, '/src/images/wireless_earbuds.jpg', 'w9x0y1z2'),
  new Product('Electric Toothbrush', 29.99, '/src/images/electric_toothbrush.jpg', 'a3b4c5d6'),
  new Product('Tupperware - 5 sets', 59.99, '/src/images/tupperware.jpg', 'e7f8g9h0'),
  new Product('Swivel Chair', 82.59, '/src/images/swivel_chair.jpg', 'i1j2k3l4'),
  new Product('Mini Fridge', 64.99, '/src/images/mini_fridge.jpg', 'm5n6o7p8'),
  new Product('Tumbler 40 oz', 19.99, '/src/images/tumbler.jpg', 'q9r0s1t2'),
  new Product('XBOX Controller', 70.00, '/src/images/controller.jpg', 'u3v4w5x6'),
  new Product('Smart TV 55"', 499.99, '/src/images/smart_tv.jpg', 'y7z8a9b0'),
  new Product('Thermal Cooler', 29.99, '/src/images/cooler_bag.jpg', 'c1d2e3f4'),
  new Product('Backpack - Grey - 15.6 inch', 39.99, '/src/images/backpack.jpg', 'g5h6i7j8'),
  new Product('Electric Kettle', 24.99, '/src/images/electric_kettle.jpg', 'k9l0m1n2'),
  new Product('Air Fryer', 89.99, '/src/images/air_fryer.jpg', 'o3p4q5r6')
];

// Note: In a real application, product data would typically come from an API or database
// Here is an API example product array structure, fetched from an external source. You typically would not have both hardcoded and API products in the same file.

// Fetch products from API and create Product objects for row 3

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const apiProducts = await response.json();

    // Map the API data to an array of Product objects
    const productsArray = apiProducts.map(apiProduct => {
      return new Product(
        apiProduct.name,      // API 'name' -> this.name
        parseInt(apiProduct.pricecents) / 100, // <--- MODIFIED: Divide by 100 to convert cents to dollars
        apiProduct.image,     // API 'image' -> this.imageUrl
        apiProduct.id            // API 'id' -> this.identifier
      );
    });

    console.log("Array of Product objects successfully created:", productsArray);
    return productsArray;

  } catch (error) {
    console.error("Could not fetch products:", error);
    return [];
  }
}
// Example call to execute the fetch and create the array
const products_row3 = fetchProducts();

export {products_row1, products_row2, products_row3};
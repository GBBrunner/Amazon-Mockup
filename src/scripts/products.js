/**
 * Represents any product, with a template using the following properties:
 * class
 * Stores product information including name, price, and image URL.
 * name - The name of the product.
 * price - The price of the product.
 * imageUrl - The URL of the product's image.
 */
class Product {
  constructor(name, price, imageUrl) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
// Array of products to display for two rows
const products_row1 = [
  new Product('Sound-proof Bluetooth Headphones', 19.99, 'src/images/headphones.jpg'),
  new Product('Wireless Mouse', 9.99, 'src/images/mouse.jpg'),
  new Product('Mechanical Keyboard', 49.99, 'src/images/mechanical_keyboard.jpg'),
  new Product('4K Monitor', 299.99, 'src/images/monitor.jpg'),
  new Product('Gaming Chair', 159.99, 'src/images/gaming_chair.jpg'),
  new Product('USB-C Hub', 24.99, 'src/images/usb-c_hub.jpg'),
  new Product('Portable SSD 1TB', 89.99, 'src/images/ssd_1TB.jpg'),
  new Product('Smartwatch', 129.99, 'src/images/smartwatch.jpg'),
  new Product('Bluetooth Speaker', 39.99, 'src/images/bt_speaker.jpg')
];
const products_row2 = [
  new Product('Noise-Cancelling Earbuds', 59.99, 'src/images/wireless_earbuds.jpg'),
  new Product('Webcam', 49.99, 'src/images/webcam.jpg'),
  new Product('HP 14" Laptop,8GB RAM, 64GB SSD, Intel HD Graphics - Pink', 349.99, 'src/images/laptop.jpg'),
  new Product('Swivel Chair', 82.59, 'src/images/swivel_chair.jpg'),
  new Product('Mini Fridge', 64.99, 'src/images/mini_fridge.jpg'),
  new Product('Nintendo Switch', 300.00, 'src/images/nintendo_switch.jpg'),
  new Product('XBOX Controller', 70.00, 'src/images/controller.jpg'),
  new Product('Smart TV 55"', 499.99, 'src/images/smart_tv.jpg'),
  new Product('Thermal Cooler', 29.99, 'src/images/cooler_bag.jpg')
];
export { Product, products_row1, products_row2 };
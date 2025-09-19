class Cart {
    constructor() {
        this.items = [];
        this.total = 0;
    }
    addItem(product, quantity) {
        this.items.push({ product, quantity });
        this.total += product.price * quantity;
        this.updateCartDisplay();
    }
}
export default Cart;
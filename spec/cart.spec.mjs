import { Cart } from '../scripts/cart.js';

it('subtotal is 0 on initialization', () => {
    const cart = new Cart();
    expect(cart.subtotal).toBe(0);
});
describe('Cart', () => {
    let cart = null;
    beforeEach(() => {
        cart = new Cart();
    });

    it('empty on initialization', () => {
        expect(cart.items.length).toBe(0);
        expect(cart.isEmpty()).toBe(true);
    });
});

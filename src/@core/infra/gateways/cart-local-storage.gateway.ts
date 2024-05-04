import { Cart } from "@/@core/domain/entities/cart";
import { Product } from "@/@core/domain/entities/products";
import { CartGateway } from "@/@core/domain/gateways";

export class CartLocalStorageGateway implements CartGateway {
  private readonly CART_KEY = "cart";

  add(product: Product) {
    const cart = this.get();
    cart.addToCart(product);
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart.toJson()));
    return cart;
  }
  save(cart: Cart) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart.toJson()));
  }
  get() {
    const cart = localStorage.getItem(this.CART_KEY);
    if (cart) return Cart.create(JSON.parse(cart));
    else return Cart.create();
  }
  remove(id: number) {
    const cart = this.get();
    cart.remove(id);
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart.toJson()));
    return cart;
  }
}

import { Product } from "@/@core/domain/entities/products";
import { CartItem, CartItemModel } from "./cartItem";

type CartProps = {
  products: Array<CartItemModel>;
};

export class Cart {
  items: Array<CartItem>;

  constructor(products: Array<CartItem>) {
    this.items = products;
  }

  static create(json?: CartProps) {
    return new Cart(
      json
        ? json.products.map(
            (item) => new CartItem(new Product(item.product), item.quantity)
          )
        : []
    );
  }

  toJson(): CartProps {
    return {
      products: this.items.map((product) => product.toJson()),
    };
  }

  addToCart(product: Product) {
    if (!this.getCartItem(product.id))
      this.items.push(new CartItem(product, 1));
  }

  remove(id: number) {
    if (this.getCartItem(id))
      this.items = this.items.filter((item) => item.product.id !== id);
  }

  increaseCartItem(id: number) {
    const item = this.getCartItem(id);
    if (item) item.increase();
    console.log(item);
    return this;
  }

  decreaseCartItem(id: number) {
    const item = this.getCartItem(id);
    if (item) item.decrease();
    return this;
  }

  get total() {
    return this.items.reduce(
      (acc, item) => Number(acc) + Number(item.product.price) * item.quantity,
      0
    );
  }

  private getCartItem(id: number) {
    return this.items.find((item) => item.product.id === id);
  }
}

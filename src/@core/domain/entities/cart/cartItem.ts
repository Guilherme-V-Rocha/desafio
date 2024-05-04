import { Product, ProductModel } from "@/@core/domain/entities/products";

export type CartItemModel = {
  product: ProductModel;
  quantity: number;
};

export class CartItem {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  toJson(): CartItemModel {
    return {
      product: this.product.toJson(),
      quantity: this.quantity,
    };
  }

  get total() {
    return Number(this.product.price) * this.quantity;
  }

  increase() {
    this.quantity += 1;
  }

  decrease() {
    this.quantity -= 1;
  }
}

import { Cart } from "@/@core/domain/entities/cart";
import { Product } from "@/@core/domain/entities/products";

export interface CartGateway {
  add: (product: Product) => Cart;
  save: (cart: Cart) => void;
  remove: (id: number) => Cart;
  get: () => Cart;
}

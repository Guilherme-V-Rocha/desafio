import { Product } from "@/@core/domain/entities/products";
import { CartGateway } from "@/@core/domain/gateways";

export class AddToCartUseCase {
  constructor(private readonly cartGateway: CartGateway) {}

  execute(product: Product) {
    return this.cartGateway.add(product);
  }
}

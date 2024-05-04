import { Cart } from "@/@core/domain/entities/cart";
import { CartGateway } from "@/@core/domain/gateways";

export class SaveCartUseCase {
  constructor(private readonly cartGateway: CartGateway) {}

  execute(cart: Cart) {
    this.cartGateway.save(cart);
    return this.cartGateway.get();
  }
}

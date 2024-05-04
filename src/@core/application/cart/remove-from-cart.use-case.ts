import { CartGateway } from "@/@core/domain/gateways";

export class RemoveFromCartUseCase {
  constructor(private readonly cartGateway: CartGateway) {}

  execute(id: number) {
    return this.cartGateway.remove(id);
  }
}

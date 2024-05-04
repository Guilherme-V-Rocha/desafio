import { CartGateway } from "@/@core/domain/gateways";

export class GetCartUseCase {
  constructor(private readonly cartGateway: CartGateway) {}

  execute() {
    return this.cartGateway.get();
  }
}

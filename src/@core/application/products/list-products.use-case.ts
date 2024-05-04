import { ProductGateway } from "@/@core/domain/gateways";

export class ListProductsUseCase {
  constructor(private readonly productGateway: ProductGateway) {}

  async execute(
    page = 1,
    rows = 10,
    sortBy: "id" | "name" | "price" = "id",
    orderBy: "DESC" | "ASC" = "DESC"
  ) {
    return await this.productGateway.listProducts(page, rows, sortBy, orderBy);
  }
}

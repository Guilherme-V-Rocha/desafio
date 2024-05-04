import { Pagineted } from "@/@core/domain/entities/pagineted";
import { Product, ProductList } from "@/@core/domain/entities/products";
import { HttpGateway, ProductGateway } from "@/@core/domain/gateways";

export class ProductHttpGateway implements ProductGateway {
  constructor(private readonly http: HttpGateway) {}

  async listProducts(
    page = 1,
    rows = 10,
    sortBy?: "id" | "name" | "price" | undefined,
    orderBy?: "DESC" | "ASC" | undefined
  ) {
    return await this.http
      .request<ProductList>({
        method: "GET",
        url: `/products?page=${page}&rows=${rows}&sortBy=${
          sortBy || "id"
        }&orderBy=${orderBy || "DESC"}`,
      })
      .then(
        (data) =>
          new Pagineted(
            data.products.map((product) => new Product(product)),
            data.count
          )
      );
  }
}

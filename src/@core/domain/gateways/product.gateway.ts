import { Pagineted } from "../entities/pagineted";
import { Product } from "../entities/products";

export interface ProductGateway {
  listProducts: (
    page?: number,
    rows?: number,
    sortBy?: "id" | "name" | "price",
    orderBy?: "DESC" | "ASC"
  ) => Promise<Pagineted<Product>>;
}

import { ListProductsUseCase } from "@/@core/application/products";
import usePaginated from "@/main/hooks/use-paginated";
import { FetchHttpGateway, ProductHttpGateway } from "@/@core/infra/gateways";

export default function useProducts() {
  const query = usePaginated({
    queryKeys: ["products"],
    queryFn: ({ page, pageSize }) => {
      const productGateway = new ProductHttpGateway(new FetchHttpGateway());
      const useCase = new ListProductsUseCase(productGateway);
      return useCase.execute(page, pageSize);
    },
  });

  return query;
}

import { ListProductsUseCase } from '@/@core/application/products'
import { FetchHttpGateway, ProductHttpGateway } from '@/@core/infra/gateways'
import usePaginated from '@/main/hooks/use-paginated'

export default function useProducts() {
  const query = usePaginated({
    queryKeys: ['products'],
    queryFn: ({ page, pageSize }) => {
      const productGateway = new ProductHttpGateway(new FetchHttpGateway())
      const useCase = new ListProductsUseCase(productGateway)
      return useCase.execute(page, pageSize)
    },
  })

  return query
}

export type IuseProductsParams = Parameters<typeof useProducts>
export type IuseProductsReturn = ReturnType<typeof useProducts>

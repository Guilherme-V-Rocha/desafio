'use client'

import { ShimmerLoading } from '@/components/shimmer-loading'
import useProducts from '@/main/hooks/products/use-products'
import { HomeContainer } from './home.styles'
import { ListProducts } from './list-products'

type HomeProps = {
  useProductsHook?: () => ReturnType<typeof useProducts>
}

export function Home({ useProductsHook = useProducts }: HomeProps) {
  const { data, isLoading } = useProductsHook()
  const productShimmer = Array(8).fill(0)

  return (
    <HomeContainer>
      {isLoading &&
        productShimmer.map((_, index) => (
          <ShimmerLoading key={`id=${index}`} />
        ))}
      {!isLoading &&
        data.map((product) => (
          <ListProducts key={product.id} product={product.toJson()} />
        ))}
    </HomeContainer>
  )
}

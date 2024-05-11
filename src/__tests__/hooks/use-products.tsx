import { IuseProductsReturn } from '@/main/hooks/products/use-products'
import { faker } from '@faker-js/faker'
import { productFaker } from '../fakers/product'

export default function makeUseProducts(props?: {
  [key in keyof IuseProductsReturn]?: IuseProductsReturn[key]
}) {
  const data = Array.from({ length: faker.number.int(10) }, () => productFaker)
  let isLoading = true
  setTimeout(() => (isLoading = false), 4000)

  const mock = {
    data: data,
    isLoading,
    ...props,
  }

  return jest.fn().mockReturnValue(mock)
}

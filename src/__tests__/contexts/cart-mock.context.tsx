import { IuseListProductsReturn, ListProductsContextProps } from '@/contexts'
import { cartFaker } from '../fakers/cart'

export const makeCartContext = (props?: {
  [key in keyof IuseListProductsReturn]?: IuseListProductsReturn[key]
}) => {
  const mockCart: ListProductsContextProps = {
    cart: cartFaker,
    addToCart: jest.fn(),
    remove: jest.fn(),
    increaseCartItem: jest.fn(),
    decreaseCartItem: jest.fn(),
    ...props,
  }

  return jest.fn().mockReturnValue(mockCart)
}

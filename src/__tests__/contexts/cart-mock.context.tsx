import { Cart } from '@/@core/domain/entities/cart'
import { CartItem } from '@/@core/domain/entities/cart/cartItem'
import { Product } from '@/@core/domain/entities/products'
import { IuseListProductsReturn, ListProductsContextProps } from '@/contexts'

export const makeCartContext = (props?: {
  [key in keyof IuseListProductsReturn]?: IuseListProductsReturn[key]
}) => {
  const mockCart: ListProductsContextProps = {
    cart: new Cart([
      new CartItem(
        new Product({
          id: 1,
          name: 'Product 1',
          brand: 'Brand 1',
          description: 'Description 1',
          photo: 'photo1.jpg',
          price: '10.00',
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
        1
      ),
      new CartItem(
        new Product({
          id: 2,
          name: 'Product 2',
          brand: 'Brand 2',
          description: 'Description 2',
          photo: 'photo2.jpg',
          price: '20.00',
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
        2
      ),
    ]),
    addToCart: jest.fn(),
    remove: jest.fn(),
    increaseCartItem: jest.fn(),
    decreaseCartItem: jest.fn(),
    ...props,
  }

  return jest.fn().mockReturnValue(mockCart)
}

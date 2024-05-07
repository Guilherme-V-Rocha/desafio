import {
  AddToCartUseCase,
  GetCartUseCase,
  RemoveFromCartUseCase,
  SaveCartUseCase,
} from '@/@core/application/cart'
import { Cart } from '@/@core/domain/entities/cart'
import { Product } from '@/@core/domain/entities/products'
import { CartLocalStorageGateway } from '@/@core/infra/gateways/cart-local-storage.gateway'
import { createContext, useContext, useState } from 'react'

export type ListProductsContextProps = {
  cart: Cart
  addToCart: (product: Product) => void
  remove: (id: number) => void
  increaseCartItem: (id: number) => void
  decreaseCartItem: (id: number) => void
}

const ListProductsContext = createContext<ListProductsContextProps>(
  {} as ListProductsContextProps
)

const cartGateway = new CartLocalStorageGateway()
const addToCartUseCase = new AddToCartUseCase(cartGateway)
const removeFromCartUseCase = new RemoveFromCartUseCase(cartGateway)
const getCartUseCase = new GetCartUseCase(cartGateway)
const saveCartUseCase = new SaveCartUseCase(cartGateway)

const ListProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>(getCartUseCase.execute())

  const addToCart = (product: Product) =>
    setCart(addToCartUseCase.execute(product))

  const remove = (id: number) => setCart(removeFromCartUseCase.execute(id))

  const increaseCartItem = (id: number) => {
    setCart((prev) => {
      prev.increaseCartItem(id)
      prev = saveCartUseCase.execute(prev)
      return prev
    })
  }
  console.log(cart)

  const decreaseCartItem = (id: number) =>
    setCart((prev) => {
      prev.decreaseCartItem(id)
      prev = saveCartUseCase.execute(prev)
      return prev
    })

  return (
    <ListProductsContext.Provider
      value={{
        cart,
        addToCart,
        remove,
        increaseCartItem,
        decreaseCartItem,
      }}
    >
      {children}
    </ListProductsContext.Provider>
  )
}

export type IuseListProductsParams = Parameters<typeof useListProducts>
export type IuseListProductsReturn = ReturnType<typeof useListProducts>

const useListProducts = () => {
  return useContext(ListProductsContext)
}

export { ListProductsProvider, useListProducts }

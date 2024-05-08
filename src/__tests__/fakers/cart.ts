import { Cart } from '@/@core/domain/entities/cart'
import { faker } from '@faker-js/faker'
import { cartItemFaker } from './cart-item'

export const cartFaker = new Cart(
  Array.from({ length: faker.number.int(10) }, () => cartItemFaker)
)

import { CartItem } from '@/@core/domain/entities/cart/cartItem'
import { faker } from '@faker-js/faker'
import { productFaker } from './product'

export const cartItemFaker = new CartItem(productFaker, faker.number.int(1))

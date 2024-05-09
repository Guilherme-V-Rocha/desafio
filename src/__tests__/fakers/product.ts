import { Product } from '@/@core/domain/entities/products'
import { faker } from '@faker-js/faker'

export const productFaker = new Product({
  id: faker.number.int(),
  brand: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  name: faker.commerce.productName(),
  photo: faker.image.urlPicsumPhotos(),
  price: faker.commerce.price(),
  updatedAt: faker.date.recent(),
  createdAt: faker.date.past(),
})

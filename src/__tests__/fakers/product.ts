import { Product } from '@/@core/domain/entities/products'
import { faker } from '@faker-js/faker'

export const productFaker = new Product({
  id: faker.number.int(),
  brand: faker.commerce.product.name,
  description: faker.commerce.productDescription.name,
  name: faker.commerce.productName.name,
  photo: faker.image.urlPicsumPhotos(),
  price: faker.commerce.price(),
  updatedAt: faker.date.recent(),
  createdAt: faker.date.past(),
})

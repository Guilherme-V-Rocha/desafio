import { Product, ProductModel } from '@/@core/domain/entities/products'
import { Button } from '@/components/button'
import { Typography } from '@/components/typography'
import { useListProducts } from '@/contexts/cart.context'
import shoppingBagIcon from '@/images/shoppingBagIcon.svg'
import { colors } from '@/styles/colors'
import { theme } from '@/styles/theme'
import {
  ProductCard,
  ProductGroup,
  ProductImg,
  ProductPrice,
} from './list-products.styles'

interface ListProductProps {
  product: ProductModel
}

export function ListProducts({ product }: ListProductProps) {
  const { addToCart } = useListProducts()
  const productsEntity = new Product(product)

  return (
    <ProductCard>
      <ProductImg src={product.photo} alt={product.name} />
      <ProductGroup>
        <Typography
          fontWeight={theme.fontWeight.regular}
          fontSize={theme.fontSize.regular}
        >
          {product.name}
        </Typography>
        <ProductPrice>
          <Typography
            fontWeight={theme.fontWeight.medium}
            fontSize={theme.fontSize.small}
            color={colors.white}
          >
            R${product.price}
          </Typography>
        </ProductPrice>
      </ProductGroup>
      <Typography
        fontWeight={theme.fontWeight.light}
        fontSize={theme.fontSize.tinySmall}
        margin="0 0.875rem 0 0.875rem"
        color={colors.black[200]}
      >
        {product.description}
      </Typography>
      <Button.Root
        backgroundColor={colors.blue[600]}
        padding="0.563rem 0 0.563rem"
        borderRadius="0 0 0.313rem 0.313rem"
        margin="0.75rem 0 0 0"
        width="100%"
        display="flex"
        justifyContent="center"
        onSubmitAction={() => addToCart(productsEntity)}
      >
        <Button.Icon
          icon={shoppingBagIcon}
          alt="shopping bag icon"
          width={14}
          height={16}
        />
        <Button.Content
          fontWeight={theme.fontWeight.semiBold}
          fontSize={theme.fontSize.xSmall}
          color={colors.white}
          margin="0 0 0 0.875rem"
        >
          COMPRAR
        </Button.Content>
      </Button.Root>
    </ProductCard>
  )
}

import { CartItem } from '@/@core/domain/entities/cart/cartItem'
import { Button } from '@/components/button'
import { Typography } from '@/components/typography'
import { useListProducts } from '@/contexts'
import closeIcon from '@/images/closeIcon.svg'
import { colors } from '@/styles/colors'
import { theme } from '@/styles/theme'
import { currencyFormat } from '@/util/currency-format'
import {
  ProductCardClose,
  ProductCardContainer,
  ProductCardGroup,
  ProductCardImg,
  ProductCardPrice,
  ProductCardQuantity,
  ProductCardTypography,
} from './product-card.styles'
import { ProductQuantity } from './product-quantity'

type ProductCardProps = {
  item: CartItem
}

export function ProductCard({ item }: ProductCardProps) {
  const { remove } = useListProducts()
  const mediaQuery = innerWidth <= 375
  const product = item.product

  return (
    <ProductCardContainer>
      <ProductCardImg src={product.photo} />
      <ProductCardTypography>{product.name}</ProductCardTypography>
      <ProductCardGroup>
        <ProductCardQuantity>
          {!mediaQuery && (
            <Typography
              fontWeight={theme.fontWeight.regular}
              fontSize={theme.fontSize.extraSmall}
            >
              Qtd:
            </Typography>
          )}
          <ProductQuantity id={product.id} quantity={item.quantity} />
        </ProductCardQuantity>
        <ProductCardPrice>
          <Typography
            fontWeight={theme.fontWeight.bold}
            fontSize={theme.fontSize.xSmall}
          >
            {currencyFormat(item.total)}
          </Typography>
        </ProductCardPrice>
      </ProductCardGroup>
      <ProductCardClose>
        <Button.Root
          padding="0.156rem 0.313rem 0.156rem 0.313rem"
          borderRadius="100%"
          backgroundColor={colors.black[900]}
          onSubmitAction={() => remove(product.id)}
        >
          <Button.Icon icon={closeIcon} alt="close icon" width={9} height={9} />
        </Button.Root>
      </ProductCardClose>
    </ProductCardContainer>
  )
}

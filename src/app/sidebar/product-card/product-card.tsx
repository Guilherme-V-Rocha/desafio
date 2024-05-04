import {
  ProductCardContainer,
  ProductCardGroup,
  ProductCardImg,
  ProductCardPrice,
  ProductCardQuantity,
  ProductCardClose,
  ProductCardTypography,
} from "./product-card.styles";
import { Typography } from "@/components/typography";
import { ProductQuantity } from "./product-quantity";
import { Button } from "@/components/button";
import { useListProducts } from "@/contexts";
import { theme } from "@/styles/theme";
import { colors } from "@/styles/colors";
import closeIcon from "@/images/closeIcon.svg";
import { currencyFormat } from "@/util/currency-format";
import { CartItem } from "@/@core/domain/entities/cart/cartItem";

type ProductCardProps = {
  item: CartItem;
};

export function ProductCard({ item }: ProductCardProps) {
  const { remove } = useListProducts();
  const mediaQuery = innerWidth <= 375;
  const product = item.product;

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
        <Button
          icon={closeIcon}
          padding="0.156rem 0.313rem 0.156rem 0.313rem"
          borderRadius="100%"
          backgroundColor={colors.black[900]}
          fontWeight={theme.fontWeight.regular}
          fontSize={theme.fontSize.xxxSmall}
          color={colors.white}
          iconWidth={9}
          onSubmitAction={() => remove(product.id)}
        />
      </ProductCardClose>
    </ProductCardContainer>
  );
}

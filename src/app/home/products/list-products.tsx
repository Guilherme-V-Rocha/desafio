import { Typography } from "@/components/typography";
import {
  ProductCard,
  ProductGroup,
  ProductImg,
  ProductPrice,
} from "./list-products.styles";
import { colors } from "@/styles/colors";
import shoppingBagIcon from "@/images/shoppingBagIcon.svg";
import { Button } from "@/components/button";
import { useListProducts } from "@/contexts/cart.context";
import { theme } from "@/styles/theme";
import { Product, ProductModel } from "@/@core/domain/entities/products";

interface ListProductProps {
  product: ProductModel;
}

export function ListProducts({ product }: ListProductProps) {
  const { addToCart } = useListProducts();
  const productsEntity = new Product(product);
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
        textMargin="0 0.875rem 0 0.875rem"
        color={colors.black[200]}
      >
        {product.description}
      </Typography>
      <Button
        text="COMPRAR"
        icon={shoppingBagIcon}
        backgroundColor={colors.blue[600]}
        padding="0.563rem 0 0.563rem"
        borderRadius="0 0 0.313rem 0.313rem"
        margin="0.75rem 0 0 0"
        width="100%"
        display="flex"
        justifyContent="center"
        fontWeight={theme.fontWeight.semiBold}
        fontSize={theme.fontSize.xSmall}
        color={colors.white}
        textMargin="0 0 0 0.875rem"
        onSubmitAction={() => addToCart(productsEntity)}
      />
    </ProductCard>
  );
}

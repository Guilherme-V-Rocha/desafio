import {
  ProductQuantityButton,
  ProductQuantityContainer,
  ProductQuantityLine,
  ProductQuantityTypography,
} from "./product-quantity.styles";
import { useListProducts } from "@/contexts";

type ProductQuantityProps = {
  id: number;
  quantity: number;
};

export function ProductQuantity({ id, quantity }: ProductQuantityProps) {
  const { increaseCartItem, decreaseCartItem } = useListProducts();

  return (
    <ProductQuantityContainer>
      <ProductQuantityButton
        margin="0 0 0.1rem 0"
        onClick={() => {
          if (quantity === 1) return;
          else decreaseCartItem(id);
        }}
      >
        -
      </ProductQuantityButton>
      <ProductQuantityLine />
      <ProductQuantityTypography>{quantity}</ProductQuantityTypography>
      <ProductQuantityLine />
      <ProductQuantityButton onClick={() => increaseCartItem(id)}>
        +
      </ProductQuantityButton>
    </ProductQuantityContainer>
  );
}

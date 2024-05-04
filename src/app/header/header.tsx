"use client";

import { colors } from "@/styles/colors";
import { Typography } from "@/components/typography";
import { HeaderContainer, HeaderGroup } from "./header.styles";
import { Button } from "@/components/button";
import cartIcon from "@/images/cartIcon.svg";
import { useSidebar } from "@/contexts/sidebar.context";
import { useListProducts } from "@/contexts/cart.context";
import { theme } from "@/styles/theme";

export function Header() {
  const { onIsOpen } = useSidebar();
  const { cart } = useListProducts();

  return (
    <HeaderContainer>
      <HeaderGroup>
        <Typography
          fontWeight={theme.fontWeight.semiBold}
          fontSize={theme.fontSize.xxxLarge}
          color={colors.white}
        >
          MKS
        </Typography>
        <Typography
          fontWeight={theme.fontWeight.light}
          fontSize={theme.fontSize.medium}
          color={colors.white}
          alignSelf="end"
          textMargin="0 0 0.5rem 0.5rem"
        >
          Sistemas
        </Typography>
      </HeaderGroup>
      <Button
        text={cart.items.length.toString()}
        icon={cartIcon}
        backgroundColor={colors.white}
        padding="0.875rem 1.688rem 0.813rem 0.938rem"
        borderRadius="0.5rem"
        fontWeight={theme.fontWeight.bold}
        fontSize={theme.fontSize.medium}
        alignSelf="flex-start"
        display="flex"
        textMargin="0 0 0 1rem"
        onSubmitAction={() => onIsOpen(true)}
      />
    </HeaderContainer>
  );
}

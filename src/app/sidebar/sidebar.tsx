"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "@/components/typography";
import { Button } from "@/components/button";
import { colors } from "@/styles/colors";
import { ProductCard } from "./product-card";
import { useListProducts, useSidebar } from "@/contexts";
import { SidebarGroup, SidebarNav, SidebarScroll } from "./sidebar.styles";
import { theme } from "@/styles/theme";
import closeIcon from "@/images/closeIcon.svg";
import { currencyFormat } from "@/util/currency-format";

export function Sidebar() {
  const { isOpen, onIsOpen } = useSidebar();
  const { cart } = useListProducts();
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <SidebarNav
          initial={"closed"}
          exit={"closed"}
          animate={"open"}
          variants={variants}
        >
          {/* <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        style={{
          x: 0,
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.14)",
          backgroundColor: colors.blue[600],
          position: "fixed",
          width: "30.375rem",
          height: "100vh",
          right: 0,
          padding: "2.25rem 0 0 0",
        }}
        variants={variants}
      > */}
          <SidebarGroup padding="0 1.375rem 0 2.938rem" margin="0 0 3.938rem 0">
            <Typography
              fontWeight={theme.fontWeight.black}
              fontSize={theme.fontSize.xLarge}
              color={colors.white}
              textWidth="11.25rem"
            >
              Carrinho de compras
            </Typography>
            <Button
              icon={closeIcon}
              padding="0.7rem"
              justifyContent="center"
              display="flex"
              backgroundColor={colors.black[900]}
              fontWeight={theme.fontWeight.bold}
              fontSize={theme.fontSize.large}
              height="fit-content"
              borderRadius="100%"
              color={colors.white}
              onSubmitAction={() => onIsOpen(false)}
            />
          </SidebarGroup>
          <SidebarScroll>
            {cart.items.map((item) => (
              <ProductCard key={item.product.id} item={item} />
            ))}
          </SidebarScroll>
          <SidebarGroup padding="0 3.938rem 2.5rem 2.938rem">
            <Typography
              fontSize={theme.fontSize.xxLarge}
              fontWeight={theme.fontWeight.bold}
              color={colors.white}
            >
              Total:
            </Typography>
            <Typography
              fontSize={theme.fontSize.xxLarge}
              fontWeight={theme.fontWeight.bold}
              color={colors.white}
            >
              {currencyFormat(cart.total)}
            </Typography>
          </SidebarGroup>
          <Button
            padding="2.438rem 0 2.688rem 0"
            backgroundColor={colors.black[900]}
            fontWeight={theme.fontWeight.bold}
            fontSize={theme.fontSize.xxLarge}
            margin="auto 0 0 0"
            text="Finalizar Compra"
            color={colors.white}
          />
          {/* </motion.nav> */}
        </SidebarNav>
      )}
    </AnimatePresence>
  );
}

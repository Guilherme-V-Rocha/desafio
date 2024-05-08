'use client'
import { Button } from '@/components/button'
import { Typography } from '@/components/typography'
import { useListProducts, useSidebar } from '@/contexts'
import closeIcon from '@/images/closeIcon.svg'
import { colors } from '@/styles/colors'
import { theme } from '@/styles/theme'
import { currencyFormat } from '@/util/currency-format'
import { AnimatePresence } from 'framer-motion'
import { ProductCard } from './product-card'
import { SidebarGroup, SidebarNav, SidebarScroll } from './sidebar.styles'

export function Sidebar() {
  const { isOpen, onIsOpen } = useSidebar()
  const { cart } = useListProducts()
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <AnimatePresence>
      <SidebarNav
        key={'id'}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
      >
        <SidebarGroup padding="0 1.375rem 0 2.938rem" margin="0 0 3.938rem 0">
          <Typography
            fontWeight={theme.fontWeight.black}
            fontSize={theme.fontSize.xLarge}
            color={colors.white}
            width="11.25rem"
          >
            Carrinho de compras
          </Typography>
          <Button.Root
            padding="0.7rem"
            justifyContent="center"
            display="flex"
            backgroundColor={colors.black[900]}
            height="fit-content"
            borderRadius="100%"
            onSubmitAction={() => onIsOpen(false)}
          >
            <Button.Icon
              icon={closeIcon}
              alt="close icon"
              width={14}
              height={14}
            />
          </Button.Root>
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
        <Button.Root
          padding="2.438rem 0 2.688rem 0"
          backgroundColor={colors.black[900]}
          margin="auto 0 0 0"
          onSubmitAction={() => {}}
        >
          <Button.Content
            fontWeight={theme.fontWeight.bold}
            fontSize={theme.fontSize.xxLarge}
            color={colors.white}
          >
            Finalizar Compra
          </Button.Content>
        </Button.Root>
      </SidebarNav>
    </AnimatePresence>
  )
}

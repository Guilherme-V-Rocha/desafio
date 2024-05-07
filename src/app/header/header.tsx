'use client'

import { Button } from '@/components/button'
import { Typography } from '@/components/typography'
import { useListProducts } from '@/contexts/cart.context'
import { useSidebar } from '@/contexts/sidebar.context'
import cartIcon from '@/images/cartIcon.svg'
import { colors } from '@/styles/colors'
import { theme } from '@/styles/theme'
import { HeaderContainer, HeaderGroup } from './header.styles'

type HeaderProps = {
  useSidebarHook?: () => ReturnType<typeof useSidebar>
  useListProductsHook?: () => ReturnType<typeof useListProducts>
}

export function Header({
  useSidebarHook = useSidebar,
  useListProductsHook = useListProducts,
}: HeaderProps) {
  const { onIsOpen } = useSidebarHook()
  const { cart } = useListProductsHook()

  return (
    <HeaderContainer>
      <HeaderGroup data-testid="header-group">
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
          margin="0 0 0.5rem 0.5rem"
        >
          Sistemas
        </Typography>
      </HeaderGroup>
      <Button.Root
        backgroundColor={colors.white}
        padding="0.875rem 1.688rem 0.813rem 0.938rem"
        borderRadius="0.5rem"
        display="flex"
        onSubmitAction={() => onIsOpen(true)}
      >
        <Button.Icon icon={cartIcon} alt="cart icon" width={19} height={18} />
        <Button.Content
          fontWeight={theme.fontWeight.bold}
          fontSize={theme.fontSize.medium}
          alignSelf="flex-start"
          margin="0 0 0 1rem"
        >
          {cart.items.length.toString()}
        </Button.Content>
      </Button.Root>
    </HeaderContainer>
  )
}

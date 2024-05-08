import { motion } from 'framer-motion'
import styled from 'styled-components'

type SidebarGroupProps = {
  padding: string
  margin?: string
}

export const SidebarNav = motion(styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.14);
  background-color: ${({ theme }) => theme.colors.blue[600]};
  position: fixed;
  width: 30.375rem;
  height: 100vh;
  right: 0;
  padding: 2.25rem 0 0 0;

  @media only screen and (max-width: 485px) {
    display: flex;
    width: 20.625rem;
    flex-direction: column;
  }
`)

export const SidebarGroup = styled.div<SidebarGroupProps>`
  display: flex;
  justify-content: space-between;
  ${({ padding }) => `padding: ${padding};`};
  ${({ margin }) => (margin ? `margin: ${margin};` : '')};
`

export const SidebarScroll = styled.div`
  display: flex;
  flex-direction: column;
  height: 63vh;
  overflow-y: auto;
  padding-top: 0.438rem;
`

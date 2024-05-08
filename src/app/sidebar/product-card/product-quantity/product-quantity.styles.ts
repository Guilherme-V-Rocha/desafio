import styled from 'styled-components'

export const ProductQuantityContainer = styled.div`
  display: flex;
  border: 0.3px solid ${({ theme }) => theme.colors.gray[600]};
  border-radius: 4px;
  height: 1.188rem;
  align-items: center;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  margin-top: 0.25rem;
  position: relative;
  @media only screen and (max-width: 485px) {
    height: 34.5px;
    justify-content: space-around;
    width: 6.813rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  }
`

export const ProductQuantityLine = styled.div`
  display: flex;
  height: 100%;
  width: 1px;
  margin: 0 0.25rem 0 0.25rem;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`

export const ProductQuantityTypography = styled.text`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.subSmall};
  position: static;
  @media only screen and (max-width: 485px) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`

type ProductQuantityButtonProps = {
  margin?: string
}

export const ProductQuantityButton = styled.div<ProductQuantityButtonProps>`
  display: flex;
  outline: 0;
  position: static;
  border: 0;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.xxxSmall};
  ${({ margin }) => (margin ? `margin: ${margin};` : '')};

  @media only screen and (max-width: 485px) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`

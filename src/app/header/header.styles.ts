import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue[600]};
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 5.5rem 1.813rem 4.063rem;
  position: sticky;
  top: 0;
  column-gap: 1rem;

  @media only screen and (max-width: 375px) {
    padding: 1.75rem 1.438rem 1.813rem 1.25rem;
  }
`

export const HeaderGroup = styled.div`
  display: flex;
`

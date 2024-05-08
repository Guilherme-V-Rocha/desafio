import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  column-gap: 1.375rem;
  flex-wrap: wrap;
  max-width: min(100%, 66.563rem);
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 7.25rem 15.938rem 8.813rem 15.438rem;

  @media only screen and (max-width: 485px) {
    margin: 1.125rem 3.875rem 0 3.875rem;
  }
`

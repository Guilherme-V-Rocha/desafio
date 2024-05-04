import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.375rem;
  width: min(100%, 66.563rem);
  margin: 7.25rem 15.938rem 8.813rem 15.438rem;

  @media only screen and (max-width: 375px) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    margin: 1.125rem 3.875rem 0 3.875rem;
  }
`;

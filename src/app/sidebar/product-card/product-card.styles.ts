import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 23.688rem;
  justify-content: space-between;
  height: 5.938rem;
  margin: 0 0 1.375rem 2.938rem;
  padding: 1.188rem 2.25rem 1.188rem 1.438rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  position: relative;

  @media only screen and (max-width: 375px) {
    display: flex;
    width: 15.625rem;
    height: fit-content;
    flex-direction: column;
    padding: 0;
    padding-top: 0.563rem;
  }
`;

export const ProductCardImg = styled.img`
  border-radius: 5px 5px 0 0;
  height: 100%;
  margin-right: 1.313rem;

  @media only screen and (max-width: 375px) {
    width: 40%;
    height: max-content;
    margin: 0;
  }
`;

export const ProductCardTypography = styled.text`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  margin: 0.625rem 1.5rem 0 0;
  color: ${({ theme }) => theme.colors.black[200]};

  @media only screen and (max-width: 375px) {
    font-size: ${({ theme }) => theme.fontSize.regular};
    align-self: center;
    margin: 0.813rem 0 0 0;
  }
`;

export const ProductCardGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  width: 8.229rem;
  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: row;
    width: auto;
    margin: 0.625rem 0 1.375rem 0;
  }
`;

export const ProductCardQuantity = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductCardPrice = styled.div`
  margin: 2rem 0 1.376rem 0;
  height: fit-content;
  @media only screen and (max-width: 375px) {
    border-radius: 0.313rem;
    background-color: ${({ theme }) => theme.colors.black[300]};
    padding: 0.5rem 0rem 0.5rem 1.3rem;
    margin: 0 0 -0.2rem 0;
    width: 6.688rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ProductCardClose = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
`;

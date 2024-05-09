'use client'
import styled from 'styled-components'

export const ProductCard = styled.div`
  display: flex;
  margin-bottom: 1.938rem;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.14);
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding-top: 1.125rem;
  width: 15.598rem;
  max-height: 22.875rem;
  height: 100%;
`

export const ProductGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.875rem 0 0.5rem 0;
  padding: 0 0.875rem 0 0.875rem;
`

export const ProductPrice = styled.div`
  height: fit-content;
  border-radius: 0.313rem;
  background-color: ${({ theme }) => theme.colors.black[300]};
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
`

export const ProductImg = styled.img`
  align-self: center;
  border-radius: 5px 5px 0 0;
  width: 13.598rem;
  height: 100%;
  max-height: 11.875rem;
`

'use client'
import styled from 'styled-components'

type TypographyProps = {
  fontWeight: string
  fontSize: string
  color?: string
  alignSelf?: string
  justifySelf?: string
  margin?: string
  width?: string
}

export const Typography = styled.text<TypographyProps>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  ${({ alignSelf }) => (alignSelf ? `align-self: ${alignSelf};` : '')};
  ${({ justifySelf }) => (justifySelf ? `justify-self: ${justifySelf};` : '')};
  ${({ color }) => (color ? `color:${color};` : '')};
  ${({ margin }) => (margin ? `margin:${margin};` : '')};
  ${({ width }) => (width ? `width:${width};` : '')};
`

import styled from 'styled-components'

export type ButtonWrapperProps = {
  padding: string
  backgroundColor: string
  hoverColor?: string
  borderRadius?: string
  margin?: string
  justifyContent?: string
  display?: string
  width?: string
  height?: string
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  outline: 0;
  border: 0;
  cursor: pointer;
  ${({ borderRadius }) =>
    borderRadius ? `border-radius: ${borderRadius};` : ''}
  ${({ padding }) => `padding: ${padding};`}
  ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
  ${({ margin }) => (margin ? `margin: ${margin};` : '')}
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : ''};
  ${({ display }) => (display ? `display: ${display}` : '')};
  ${({ width }) => (width ? `width: ${width};` : '')};
  ${({ height }) => (height ? `height: ${height};` : '')};
`

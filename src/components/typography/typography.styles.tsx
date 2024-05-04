"use client";
import styled from "styled-components";

export type TypographyProps = {
  fontWeight: string;
  fontSize: string;
  color?: string;
  alignSelf?: string;
  justifySelf?: string;
  textMargin?: string;
  textWidth?: string;
};

export const Typography = styled.text<TypographyProps>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  ${({ alignSelf }) => (alignSelf ? `align-self: ${alignSelf};` : "")};
  ${({ justifySelf }) => (justifySelf ? `justify-self: ${justifySelf};` : "")};
  ${({ color }) => (color ? `color:${color};` : "")};
  ${({ textMargin }) => (textMargin ? `margin:${textMargin};` : "")};
  ${({ textWidth }) => (textWidth ? `width:${textWidth};` : "")};
`;

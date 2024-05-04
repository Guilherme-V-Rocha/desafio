"use client";

import Image from "next/image";
import { TypographyProps, Typography } from "../typography/typography.styles";
import { ButtonWrapper, ButtonWrapperProps } from "./button.styles";

type ButtonProps = ButtonWrapperProps &
  TypographyProps & {
    text?: string;
    icon?: string;
    iconWidth?: number;
    onSubmitAction?: () => void;
  };

export function Button({
  text,
  icon,
  iconWidth,
  onSubmitAction,
  ...props
}: ButtonProps) {
  return (
    <ButtonWrapper
      onClick={onSubmitAction ? () => onSubmitAction() : () => {}}
      {...props}
    >
      {icon ? <Image src={icon} alt={icon} width={iconWidth} /> : <></>}
      {text ? <Typography {...props}>{text}</Typography> : <></>}
    </ButtonWrapper>
  );
}

'use client'

import { ReactNode } from 'react'
import { ButtonWrapper, ButtonWrapperProps } from './button.styles'

type ButtonProps = ButtonWrapperProps & {
  onSubmitAction: () => void
  children: ReactNode
}

export function ButtonRoot({
  children,
  onSubmitAction,
  ...props
}: ButtonProps) {
  return (
    <ButtonWrapper onClick={onSubmitAction} {...props}>
      {children}
    </ButtonWrapper>
  )
}

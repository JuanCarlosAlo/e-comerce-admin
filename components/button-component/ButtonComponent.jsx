import React from 'react'
import { StyledButton } from './styles'

const ButtonComponent = ({button}) => {
  return (
    <StyledButton type={button.type}>{button.text}</StyledButton>
  )
}

export default ButtonComponent
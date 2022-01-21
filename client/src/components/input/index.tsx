import React from 'react'
import { InputProps } from './props'
import * as S from './styles'

function Input({ ...rest }: InputProps) {
  return (
    <S.Container>
      {rest.icon && <S.Icon>{rest.icon}</S.Icon>}
      <S.Field {...rest} />
    </S.Container>
  )
}

export default Input

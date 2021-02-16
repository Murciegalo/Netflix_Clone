import React from 'react'
import { Container, Input, Btn, Text } from './styles'

export default function OptForm({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function OptFormInput({...restProps}) {
  return <Input {...restProps}/>
}

OptForm.Btn = function OptFormBtn({children, ...restProps}) {
  return <Btn {...restProps}>
    {children} <img src="#" alt="Try Now"/>
  </Btn>
}

OptForm.Text = function OptFormText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}
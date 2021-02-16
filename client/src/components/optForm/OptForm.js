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
    {children} 
    <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
      <desc>chevron</desc>
      <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" 
      fill="none" 
      fill-rule="evenodd"
      ></path>
    </svg>
  </Btn>
}

OptForm.Text = function OptFormText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}
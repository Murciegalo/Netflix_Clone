import React from 'react'
import { Container, Title, SubTitle } from './styles'

export default function Hero({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Hero.Title = function HeroTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Hero.SubTitle = function HeroSubTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
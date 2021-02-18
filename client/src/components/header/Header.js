import React from 'react'
import { Link } from 'react-router-dom';
import {BackGround, Container, Logo, Btn} from './styles'

export default function Header({bg=true, children, ...restProps}) {
  const background = bg ? <BackGround {...restProps}>
    {children}
  </BackGround>
  :
  children 
  return background;
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
  return <Link to={to}>
    <Logo {...restProps}/>
  </Link>
}

Header.Btn = function HeaderBtn({to, children, ...restProps}) {
  return <Btn to={to} {...restProps}>{children}</Btn>
}
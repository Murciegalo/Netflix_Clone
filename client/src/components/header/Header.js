import React from 'react'
import { Link } from 'react-router-dom';
import {
  BackGround,
  Container,
  Feature,
  Group,
  Logo,
  Text,
  FeaturedText,
  TextLink,
  Btn
} from './styles'

export default function Header({bg=true, feature=false, children, ...restProps}) {
  const background = bg && !feature? <BackGround {...restProps}>
    {children}
  </BackGround> : bg && feature ? <Feature {...restProps}>{children}</Feature> : children 
  return background;
}

Header.Container = function HeaderContainer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
  return <Link to={to}>
    <Logo {...restProps} />
  </Link>
}

Header.Text = function HeaderText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Header.FeaturedText = function HeaderFeaturedText({children, ...restProps}) {
  return <FeaturedText {...restProps}>{children}</FeaturedText>
}

Header.TextLink = function HeaderTextLink({to, children, ...restProps}) {
  return <TextLink to={to} {...restProps}>{children}</TextLink>
}

Header.Btn = function HeaderBtn({to, children, ...restProps}) {
  return <Btn to={to} {...restProps}>{children}</Btn>
}
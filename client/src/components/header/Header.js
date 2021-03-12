import React from 'react'
import { Link } from 'react-router-dom';
import {BackGround, Container, Feature, Logo, Text, FeaturedText, TextLink, Btn} from './styles'

export default function Header({bg=true, feature=false, children, ...restProps}) {
  const background = bg && !feature? <BackGround {...restProps}>
    {children}
  </BackGround> : bg && feature ? <Feature {...restProps}>{children}</Feature> : children 
  return background;
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
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

Header.TextLink = function HeaderTextLink({children, ...restProps}) {
  return <TextLink {...restProps}>{children}</TextLink>
}

Header.Btn = function HeaderBtn({to, children, ...restProps}) {
  return <Btn to={to} {...restProps}>{children}</Btn>
}
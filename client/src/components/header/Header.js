import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {
  BackGround,
  Container,
  Feature,
  Group,
  Logo,
  Search,
  SearchIcon,
  SearchInput,
  Profile,
  Picture,
  Dropdown,
  Text,
  FeaturedText,
  TextLink,
  PlayBtn,
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

Header.Search = function HeaderSearch({search, setSearch, ...restProps}) {
  const [searchActive, setSearchActive] = useState(false)
  return <Search {...restProps}>
    <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
      <img src="/images/icons/search.png" alt="search"/>
    </SearchIcon>
    <SearchInput 
      value={search}
      onChange={({target}) => setSearch(target.value)}
      placeholder="Search films and series"
      active={searchActive}
    />
  </Search>
}
Header.Profile = function HeaderProfile({children, ...restProps}) {
  return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({src, ...restProps}) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
  return <Dropdown {...restProps}>{children}</Dropdown>
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

Header.PlayBtn = function HeaderPlayBtn({children, ...restProps}) {
  return <PlayBtn {...restProps}>{children}</PlayBtn>
}
Header.Btn = function HeaderBtn({to, children, ...restProps}) {
  return <Btn to={to} {...restProps}>{children}</Btn>
}
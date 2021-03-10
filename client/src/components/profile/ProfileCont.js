import React from 'react'
import Header from '../header/Header'
import * as Routes from '../../routes/constants'
import logo from '../../logo.svg'
import Profiles from './Profiles'

export default function ProfileCont({user, setProfile}) {
  return <>
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo to={Routes.HOME} src={logo} alt='Netflix' />
      </Header.Frame>
    </Header>
    <Profiles>
      <Profiles.Title>Who's watching?</Profiles.Title>
      <Profiles.List>
        <Profiles.User>
          <Profiles.Picture />
          <Profiles.Name>{user.displayName}</Profiles.Name>
        </Profiles.User>
      </Profiles.List>
    </Profiles>
  </>
}

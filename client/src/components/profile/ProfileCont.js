import React from 'react'
import Header from '../header/Header'
import * as Routes from '../../routes/constants'
import logo from '../../logo.svg'
import Profiles from './Profiles'

export default function ProfileCont({user, setProfile}) {
  const userName = user.displayName !== null && user.displayName
  const src = user.photoURL !== null && user.photoURL
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
          <Profiles.Picture src={src}/>
          <Profiles.Name>{userName}</Profiles.Name>
        </Profiles.User>
      </Profiles.List>
    </Profiles>
  </>
}

import React from 'react'
import Header from '../header/Header'
import * as Routes from '../../routes/constants'
import logo from '../../logo.svg'


export default function ProfileCont({user, setProfile}) {
  return <>
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo to={Routes.HOME} src={logo} alt='Netflix' />
      </Header.Frame>
    </Header>
  </>
}

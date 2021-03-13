import React from 'react'
import Header from './Header'
import * as Routes from '../../routes/constants'
import logoSvg from '../../logo.svg'

export default function HeaderCont({children}) {
  return (
    <Header>
      <Header.Container>
        <Header.Logo to={Routes.HOME} alt='Netflix' src={logoSvg} />
        <Header.Btn to={Routes.SIGNIN}>Sign In</Header.Btn>
      </Header.Container>
      {children}
    </Header>
  )
}

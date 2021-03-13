import React, {useContext, useState, useEffect} from 'react'
import ProfileCont from '../profile/ProfileCont'
import {FirebaseCntx} from '../../context/firebase'
import Loading from '../Loading/Loading.js'
import Header from '../header/Header'
import * as Routes from '../../routes/constants'
import logoSvg from '../../logo.svg'

export default function BrowseCont({slides}) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const {firebase} = useContext(FirebaseCntx)
  const user = firebase.auth().currentUser || {} 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  } // eslint-disable-next-line
  ,[profile.displayName])
  const rendered = <>{loading ? 
    <Loading src={user.photoURL} />
    : 
    <Loading.ReleaseBody />}
    <Header src='joker1'feature={true}>
      <Header.Container>
        <Header.Group>
          <Header.Logo to={Routes.HOME} src={logoSvg} alt='Netflix'/>
          <Header.TextLink>Series</Header.TextLink>
          <Header.TextLink>Films</Header.TextLink>
        </Header.Group>
        <Header.Group>

        </Header.Group>
      </Header.Container>
      <Header.FeaturedText>Watch Joker Now</Header.FeaturedText>
      <Header.Text>Hello</Header.Text>
    </Header>
  </>


  return profile.displayName ? rendered
  : 
  <ProfileCont user={user} setProfile={setProfile} />
  ;
}

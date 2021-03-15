import React, {useContext, useState, useEffect} from 'react'
import ProfileCont from '../profile/ProfileCont'
import {FirebaseCntx} from '../../context/firebase'
import Loading from '../Loading/Loading.js'
import Header from '../header/Header'
import * as Routes from '../../routes/constants'
import logoSvg from '../../logo.svg'

export default function BrowseCont({slides}) {
  const [search, setSearch] = useState('')
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
          <Header.Search search={search} setSearch={setSearch}></Header.Search>
          <Header.Profile>
            <Header.Picture src={user.photoURL} />
            <Header.Dropdown>
              <Header.Group>
                <Header.Picture src={user.photoURL} />
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink 
                  onClick={() => firebase.auth().signOut() }
                >
                  Sign Out
                </Header.TextLink>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
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

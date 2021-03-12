import React, {useContext, useState, useEffect} from 'react'
import ProfileCont from '../profile/ProfileCont'
import {FirebaseCntx} from '../../context/firebase'
import Loading from '../Loading/Loading.js'
import Header from '../header/Header'

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
      <Header.Text>HELLO</Header.Text>
    </Header>
  </>


  return profile.displayName ? rendered
  : 
  <ProfileCont user={user} setProfile={setProfile} />
  ;
}

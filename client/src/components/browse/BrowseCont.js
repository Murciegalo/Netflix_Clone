import React, {useContext, useState} from 'react'
import ProfileCont from '../profile/ProfileCont'
import {FirebaseCntx} from '../../context/firebase'

export default function BrowseCont({slides}) {
  const [profile, setProfile] = useState({})
  
  const {firebase} = useContext(FirebaseCntx)
  const user = firebase.auth().currentUser || {} 
  
  return <ProfileCont user={user} setProfile={setProfile} />
}

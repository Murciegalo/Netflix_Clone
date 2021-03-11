import React, {useContext, useState, useEffect} from 'react'
import ProfileCont from '../profile/ProfileCont'
import {FirebaseCntx} from '../../context/firebase'

export default function BrowseCont({slides}) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const {firebase} = useContext(FirebaseCntx)
  const user = firebase.auth().currentUser || {} 

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  } // eslint-disable-next-line
  ,[user.displayName])
  
  return <ProfileCont user={user} setProfile={setProfile} />
}

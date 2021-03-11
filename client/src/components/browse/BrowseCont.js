import React, {useContext, useState, useEffect} from 'react'
import ProfileCont from '../profile/ProfileCont'
import {FirebaseCntx} from '../../context/firebase'
import Loading from '../Loading/Loading.js'

export default function BrowseCont({slides}) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const {firebase} = useContext(FirebaseCntx)
  const user = firebase.auth().currentUser || {} 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  } // eslint-disable-next-line
  ,[user.displayName])
  
  const rendered = profile.displayName ?
    loading ? <Loading src={user.photoURL} />
    : null :
    <ProfileCont user={user} setProfile={setProfile} />
  ;
  return rendered;
}

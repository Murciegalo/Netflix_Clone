import {useState, useContext, useEffect} from 'react'
import {FirebaseCntx} from '../../context/firebase'

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  )
  //Listen to Auth
  const { firebase } = useContext(FirebaseCntx)

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(
      authUser => {
        if(authUser) {
          localStorage.setItem('authUser', JSON.stringify(authUser))
          setUser(authUser)
        } 
        else{
          localStorage.removeItem('authUser')
          setUser(null)
        }
      }
    )
    return () => listener();
    // eslint-disable-next-line
  },[])
  return { user }
}
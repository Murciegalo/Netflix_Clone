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
      authUser => authUser ? (
        localStorage.setItem('authUser', JSON.stringify(authUser))
        && setUser(authUser)
      ) : (
        localStorage.removeItem('authUser')
        && setUser(null)
      )
    )
    return () => listener();
    // eslint-disable-next-line
  },[])
  return { user }
}
import {useState, useEffect, useContext} from 'react'
import {FirebaseCntx} from '../../context/firebase'

export default function useContent(target) {
  const [content, setContent] = useState([])
  const { firebase } = useContext(FirebaseCntx)

  useEffect(() => {
    firebase.firestore().collection(target).get()
      .then( snapShot => {
        const allContent = snapShot.docs.map( 
          contentObj => ({
            ...contentObj.data(),
            docId: contentObj.id
          }))
          setContent(allContent)
      })
      .catch( err => console.log(err.message)
    )
    //eslint-disable-next-line  
  },[])

  return { [target] : content }
}

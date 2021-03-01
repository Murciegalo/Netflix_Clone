import Firebase from 'firebase/app'
import FireStore from 'firebase/firestore'
import Auth from 'firebase/auth'



const config = {}

const firebase = Firebase.initializeApp(config);

export { firebase }
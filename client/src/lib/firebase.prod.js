import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {seedDatabase} from '../seed'


const config = {
  apiKey: "AIzaSyD-LhwQ8RgCZuyF97WWtCn2LZQGK2MqaQo",
  authDomain: "netflx-d1bb7.firebaseapp.com",
  projectId: "netflx-d1bb7",
  storageBucket: "netflx-d1bb7.appspot.com",
  messagingSenderId: "424277922354",
  appId: "1:424277922354:web:6b6b7bc850eab9acf7a22b"
}

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase)

export { firebase }
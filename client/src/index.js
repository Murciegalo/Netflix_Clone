import React from 'react';
import {render} from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles'
import {firebase} from './lib/firebase.prod.js'
import {FirebaseCntx} from './context/firebase'

render( <>
  <FirebaseCntx.Provider value={{firebase}}>
    <GlobalStyles/>
    <App />
  </FirebaseCntx.Provider>
</>,  
document.getElementById('root'));


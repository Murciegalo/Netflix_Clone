import React from 'react';
import {render} from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles'
import {firebase} from './lib/firebase.prod.js'
import {FirebaseCntx} from './context/firebase'
import {BrowserRouter} from 'react-router-dom'
render( <>
  <GlobalStyles/>
  <FirebaseCntx.Provider value={{firebase}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseCntx.Provider>
</>,  
document.getElementById('root'));


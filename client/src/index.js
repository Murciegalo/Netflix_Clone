import React from 'react';
import {render} from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles'
import {firebase} from './lib/firebase.prod.js'

render( <>
  <GlobalStyles/>
  <App />
</>,  
document.getElementById('root'));


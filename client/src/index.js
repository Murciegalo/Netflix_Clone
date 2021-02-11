import React, {Fragment} from 'react';
import {render} from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles'

render( <>
  <GlobalStyles/>
  <App />
</>,  
document.getElementById('root'));


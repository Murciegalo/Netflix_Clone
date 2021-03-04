import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export function RedirectRoute({user, loggedInPath, children, ...rest}) {
  return (
    <Route
      {...rest}
      render={
        () => !user ? children : 
        <Redirect to={{pathname: loggedInPath}} />  
      }
    />
  )
}

export function AuthRoute({user, children, ...rest}) {
  return (
    <Route
      {...rest}
      render={
        ({location}) => user ? children : 
        <Redirect to={{ 
          pathname: 'signIn',
          state: { from: location }
        }} />  
      }
    />
  )
}
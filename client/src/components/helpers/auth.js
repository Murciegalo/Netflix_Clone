import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export function RedirectRoute({user, loggedInPath, children, ...rest}) {
  return (
    <Route
      {...rest}
      render={
        () => user ? <Redirect to={{pathname: loggedInPath}} />
        : children 
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
import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export default function AuthRoute({user, loggedInPath, children, ...rest}) {
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

import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export default function AuthRoute({user, loggedInPath, children, ...rest}) {
  return (
    <Route
      {...rest}
      render={() => {
        return !user ? children :
        user? <Redirect to={{pathname: loggedInPath}}/> :
        null
        }
      }
    />
  )
}

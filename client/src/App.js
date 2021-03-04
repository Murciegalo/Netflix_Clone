import {Switch} from 'react-router-dom'
import {RedirectRoute, AuthRoute} from './components/helpers/auth';
import Browse from './components/pages/Browse/Browse';
import Home from './components/pages/Home/Home';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import * as Routes from './routes/constants'

export default function App() {
  let user;
  return <Switch>
      <RedirectRoute 
        exact 
        user={user} 
        loggedInPath={Routes.BROWSE}  
        path={Routes.SIGNIN} 
      >
        <SignIn />
      </RedirectRoute>
      <RedirectRoute 
        exact 
        user={user} 
        loggedInPath={Routes.BROWSE}  
        path={Routes.SIGNUP} 
      >
        <SignUp />
      </RedirectRoute>
      <AuthRoute user={user} exact path={Routes.BROWSE}>
        <Browse />
      </AuthRoute>
      <RedirectRoute
        exact 
        user={user} 
        loggedInPath={Routes.BROWSE}  
        path={Routes.HOME} 
      >
        <Home />
      </RedirectRoute>
  </Switch>      
}

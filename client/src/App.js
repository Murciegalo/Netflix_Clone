import {Route, Switch} from 'react-router-dom'
import AuthRoute from './components/helpers/auth';
import Browse from './components/pages/Browse/Browse';
import Home from './components/pages/Home/Home';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import * as Routes from './routes/constants'

export default function App() {
  let user;
  return <Switch>
      <AuthRoute 
        exact 
        path={Routes.SIGNIN} 
        user={user} 
        loggedInPath={Routes.BROWSE}  
      >
        <SignIn />
      </AuthRoute>
      <AuthRoute 
        exact 
        path={Routes.SIGNUP} 
        user={user} 
        loggedInPath={Routes.BROWSE}  
      >
        <SignUp />
      </AuthRoute>
      <Route exact path={Routes.HOME} component={Home} />
      <Route exact path={Routes.BROWSE} component={Browse} />
  </Switch>      
}

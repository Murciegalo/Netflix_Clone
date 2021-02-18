import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AccordionCont from "./components/accordion/AccordionCont";
import FooterCont from "./components/footer/FooterCont";
import JumbotronContainer from "./components/jumbotron/JumboTronCont";
import Browse from './components/pages/Browse/Browse';
import Home from './components/pages/Home/Home';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import * as Routes from './routes/constants'

export default function App() {
  return <Router>
    <Switch>
      <Route exact path={Routes.BROWSE} component={Browse} />
      <Route exact path={Routes.SIGNUP} component={SignUp} />
      <Route exact path={Routes.SIGNIN} component={SignIn} />
      <Route exact path={Routes.HOME} component={Home} />
    </Switch>      
  </Router>
}

import '../scss/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

import Nav from './Nav';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Homepage from './Homepage';
import NotFound from './NotFound';
import { authenticateUser } from '../helpers/apiCalls';
import { useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const App = (props) => {
  const [
    userInfo,
    setUserInfo,
    userStatus,
    setUserStatus,
  ] = useContext(UserContext);

  useEffect(() => {
    //Authenticate our cookie sir
    (async function () {
      const user = await authenticateUser();
      if (user) {
        setUserInfo(user);
        setUserStatus(true);
      }
    })();
  }, []);

  console.log('User is logged', userStatus);

  return (
    <div className="app">
      <Router>
        <Nav></Nav>
        <div className="main">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/dashboard"
              component={Dashboard}
            />
            <Route
              exact
              path="/signup"
              component={SignUp}
            />
            <Route exact path="/" component={Homepage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

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
import ErrorComponent from './ErrorComponent';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const App = (props) => {
  const { error, setError } = useContext(UserContext);

  const removeErrors = () => {
    if (error.message) setError({});
  };

  return (
    <div className="app" onClick={() => removeErrors()}>
      <Router>
        <Nav></Nav>
        <ErrorComponent></ErrorComponent>
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

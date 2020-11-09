import '../scss/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Nav from './Nav';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Homepage from './Homepage';
import NotFound from './NotFound';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Nav></Nav>
        <div class="main">
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

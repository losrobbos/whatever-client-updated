import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const Nav = () => {
  const [
    userInfo,
    setUserInfo,
    userStatus,
    setUserStatus,
  ] = useContext(UserContext);

  console.log('User is logged', userStatus);
  return (
    <nav>
      <ul>
        <div className="logo">
          <NavLink exact to="/">
            <p>WHATEVER</p>
          </NavLink>
        </div>
        <div className="items">
          <li>
            <NavLink
              activeClassName="selected"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          {!userStatus && (
            <li>
              <NavLink
                activeClassName="selected"
                exact
                to="/login"
              >
                Login
              </NavLink>
            </li>
          )}
          {!userStatus && (
            <li>
              <NavLink
                activeClassName="selected"
                exact
                to="/signup"
              >
                Sign Up
              </NavLink>
            </li>
          )}
          {userStatus && (
            <li>
              <NavLink
                activeClassName="selected"
                exact
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;

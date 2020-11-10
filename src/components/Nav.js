import { NavLink, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { logOut } from '../helpers/apiCalls';

const Nav = () => {
  const {
    userInfo,
    setUserInfo,
    userStatus,
    setUserStatus,
    setError,
    setSession,
  } = useContext(UserContext);

  const history = useHistory();
  const logOutUser = async () => {
    const res = await logOut();
    if (!res.error) {
      setUserInfo({});
      setUserStatus(false);
      history.push('/login');
    } else {
      setError({ message: res.error.message });
    }
  };

  return (
    <nav>
      <ul>
        <div className="logo">
          <NavLink exact to="/">
            <p>WHATEVER</p>
          </NavLink>
        </div>
        <div className="items">
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
                className="signUp"
                activeClassName="selected"
                exact
                to="/signup"
              >
                Signup
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
          {userStatus && (
            <li>
              <NavLink
                className="avatar"
                activeClassName="selected"
                exact
                to="/profile" // Hey Robo, create me!
              >
                <img src={userInfo.avatar}></img>
                <p>{userInfo.userName}</p>
              </NavLink>
            </li>
          )}
          {userStatus && (
            <li class="signOut">
              <FontAwesomeIcon
                onClick={() => logOutUser()}
                icon={faSignOutAlt}
              />
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;

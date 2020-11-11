import { createContext, useState, useEffect } from 'react';
import { authenticateUser } from '../helpers/apiCalls';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userStatus, setUserStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [session, setSession] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    //Authenticate our cookie sir
    (async function () {
      setSession(false);
      const user = await authenticateUser();
      
      // still logged in?
      if (!user.error) {
        setUserInfo(user);
        setUserStatus(true);
      }
      setSession(true);
    })();
  }, []); // initialize context ONCE on startup

  console.log(`The provider runs`);
  console.log(`userStatus`, userStatus);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        userStatus,
        setUserStatus,
        session,
        setSession,
        error,
        setError,
      }}
    >
      {session && props.children}
    </UserContext.Provider>
  );
};

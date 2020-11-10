import { createContext, useState, useEffect } from 'react';
import { authenticateUser } from '../helpers/apiCalls';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userStatus, setUserStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [session, setSession] = useState(false);

  useEffect(() => {
    //Authenticate our cookie sir
    (async function () {
      const user = await authenticateUser();
      if (!user.error) {
        setUserInfo(user);
        setUserStatus(true);
      }
      setSession(true);
    })();
  }, []);

  console.log(`The provider runs`);
  console.log(`userStatus`, userStatus);

  return (
    <UserContext.Provider
      value={[
        userInfo,
        setUserInfo,
        userStatus,
        setUserStatus,
      ]}
    >
      {session && props.children}
    </UserContext.Provider>
  );
};

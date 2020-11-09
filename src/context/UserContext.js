import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userStatus, setUserStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider
      value={[
        userInfo,
        setUserInfo,
        userStatus,
        setUserStatus,
      ]}
    >
      {props.children}
    </UserContext.Provider>
  );
};

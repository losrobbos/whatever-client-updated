import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
  
  // userStatus => this is a boolean value indicating if we are logged in!
  const { userInfo, userStatus } = useContext(UserContext);
  const { fullName } = userInfo;
  
  // if we are not logged in => we redirect to login form!
  if (!userStatus) return <Redirect to="/login" />;

  return (
    <div className="dashboard">
      <section>
        <h3>Dashboard</h3>
        <p>{fullName}</p>
      </section>
    </div>
  );
};

export default Dashboard;

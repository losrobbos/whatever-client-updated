import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
  const [
    userInfo,
    setUserInfo,
    userStatus,
    setUserStatus,
  ] = useContext(UserContext);

  const { fullName } = userInfo;

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

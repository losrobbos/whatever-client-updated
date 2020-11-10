import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
  const { userInfo, userStatus } = useContext(UserContext);
  const { fullName } = userInfo;
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

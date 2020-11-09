import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';
import { loginUser } from '../helpers/apiCalls';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm();

  const history = useHistory();
  const [
    userInfo,
    setUserInfo,
    userStatus,
    setUserStatus,
  ] = useContext(UserContext);

  const onSubmit = (data) => {
    const user = loginUser(data);
    setUserInfo(user);
    setUserStatus(true);
    history.push('/dashboard');
  };

  if (userStatus) history.push('/dashboard');

  return (
    <div className="login">
      <section>
        <h3>Log In</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="info">
            <label>email</label>
            <input
              name="email"
              defaultValue="psych@gmail.com"
              ref={register}
            />
            <label>password</label>

            <input
              name="password"
              defaultValue="Babylon2020"
              ref={register}
            />
          </div>
          <div className="submit">
            <input type="submit" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;

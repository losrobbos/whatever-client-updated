import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';
import { loginUser } from '../helpers/apiCalls';
import { Redirect, useHistory } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();
  const {
    setError,
    setUserInfo,
    userStatus,
    setUserStatus,
  } = useContext(UserContext);

  const onSubmit = async (data) => {
    const res = await loginUser(data);
    if (!res.error) {
      setUserInfo(res);
      setUserStatus(true);
      history.push('/dashboard');
    } else {
      setError({ message: res.error.message });
    }
  };

  if (userStatus) return <Redirect to="/dashboard" />;

  return (
    <div className="login">
      <section>
        <h3>Log In</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="info">
            <label>email</label>
            <input
              name="email"
              defaultValue="vas@gmail.com"
              ref={register({
                required: true,
              })}
            />
            <div className="error-message">
              {errors.email && (
                <span>Please put your email sir.</span>
              )}
            </div>
            <label>password</label>

            <input
              name="password"
              defaultValue="0123456789"
              type="password"
              ref={register({
                required: true,
              })}
            />
            <div className="error-message">
              {errors.password && (
                <span>
                  And you might need a password as well.
                </span>
              )}
            </div>
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

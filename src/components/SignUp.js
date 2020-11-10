import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';
import { signUpUser } from '../helpers/apiCalls';
import { Redirect, useHistory } from 'react-router-dom';

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const [
    loginErrorMessage,
    setLoginErrorMessage,
  ] = useState('');

  const history = useHistory();
  const [
    userInfo,
    setUserInfo,
    userStatus,
    setUserStatus,
  ] = useContext(UserContext);

  const onSubmit = async (data) => {
    const res = await signUpUser(data);
    if (!res.error) {
      setUserInfo(res);
      setUserStatus(true);
      history.push('/dashboard');
    } else {
      setLoginErrorMessage(res.error.message);
    }
  };

  if (userStatus) return <Redirect to="/dashboard" />;

  return (
    <div className="login">
      <section>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-error-message">
            {loginErrorMessage}
          </div>
          <div className="info">
            <label>First name</label>
            <input
              name="firstName"
              defaultValue="Noel"
              ref={register({
                required: true,
              })}
            />
            <div className="error-message">
              {errors.firtName && (
                <span>Please put your name sir.</span>
              )}
            </div>
            <label>Last name</label>
            <input
              name="lastName"
              defaultValue="Fielding"
              ref={register({
                required: true,
              })}
            />
            <div className="error-message">
              {errors.lastName && (
                <span>Please put your lastname sir.</span>
              )}
            </div>
            <label>Username</label>
            <input
              name="userName"
              defaultValue="Richmond"
              ref={register({
                required: true,
              })}
            />
            <div className="error-message">
              {errors.userName && (
                <span>Please put your username sir.</span>
              )}
            </div>
            <label>email</label>
            <input
              name="email"
              defaultValue="test@gmail.com"
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

export default SignUp;

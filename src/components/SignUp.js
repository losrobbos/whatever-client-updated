import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';
import { signUpUser } from '../helpers/apiCalls';
import { Redirect, useHistory } from 'react-router-dom';

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();
  const {
    setError,
    setUserInfo,
    userStatus,
    setUserStatus,
  } = useContext(UserContext);

  const onSubmit = async (data) => {
    const res = await signUpUser(data);
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
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="info">
            <label>First name</label>
            <input
              name="firstName"
              defaultValue="Noel"
              ref={register({
                required: "Please put a firstname, sir",
              })}
            />
            <div className="error-message">
            {errors.firstName && <span>{errors.firstName.message}</span>}
            </div>
            <label>Last name</label>
            <input
              name="lastName"
              defaultValue="Fielding"
              ref={register({
                required: "Please put your lastname sir.",
              })}
            />
            <div className="error-message">
            {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>
            <label>Username</label>
            <input
              name="userName"
              defaultValue="Richmond"
              ref={register({
                required: "Please put your username sir.",
              })}
            />
            <div className="error-message">
            {errors.userName && <span>{errors.userName.message}</span>}
            </div>
            <label>email</label>
            <input
              name="email"
              defaultValue="test@gmail.com"
              ref={register({
                required: "Please put your email sir.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email is invalid. Please fix"
                }
              })}
            />
            <div className="error-message">
            {errors.email && <span>{errors.email.message}</span>}
            </div>

            <label>password</label>
            <input
              name="password"
              defaultValue="0123456789"
              type="password"
              ref={register({
                required: "Required",
                minLength: {
                  value: 10,
                  message: "Password must be at least 10 characters"
                }
              })}
            />
            <div className="error-message">
              {errors.password && <span>{ errors.password.message }</span>}
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

import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm();

  const onSubmit = (data) => console.log(data);

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

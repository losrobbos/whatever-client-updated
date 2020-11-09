import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <div className="logo">
          <Link to="/">
            <p>WHATEVER</p>
          </Link>
        </div>
        <div className="items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;

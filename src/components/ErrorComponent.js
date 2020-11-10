import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

const ErrorComponent = () => {
  const { error, setError } = useContext(UserContext);

  return (
    <div
      className={
        error.message
          ? 'global-error slide-in'
          : 'global-error'
      }
    >
      <span>
        <FontAwesomeIcon icon={faBug}></FontAwesomeIcon>
        {error.message}
      </span>
    </div>
  );
};

export default ErrorComponent;

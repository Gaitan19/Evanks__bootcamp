import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>{error.status}</h2>
      <h2>{error.statusText}</h2>
    </div>
  );
};

export default NotFound;

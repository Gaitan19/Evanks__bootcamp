import Login from '../Login';
import { TodoContext } from '../TodoContext';

const LoginPage = () => {
  return (
    <TodoContext>
      <Login customClass="Login" />
    </TodoContext>
  );
};

export default LoginPage;

import Login from '@/components/Login';
import HeadPage from '@/components/HeadPage';
import { TodoContext } from '@/components/TodoContext';

const LoginPage = () => {
  return (
    <>
      <TodoContext>
        <HeadPage title="Login" />
        <Login customClass="Login" />
      </TodoContext>
    </>
  );
};

export default LoginPage;

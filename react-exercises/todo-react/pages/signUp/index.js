import SignUp from '@/components/SignUp';
import HeadPage from '@/components/HeadPage';
import { TodoContext } from '@/components/TodoContext';

const LoginPage = () => {
  return (
    <>
      <TodoContext>
        <HeadPage title="Login" />
        <SignUp customClass="SignMe" />
      </TodoContext>
    </>
  );
};

export default LoginPage;

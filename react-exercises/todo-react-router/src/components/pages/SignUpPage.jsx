import SignUp from '../SignUp';
import { TodoContext } from '../TodoContext';

const SignUpPage = () => {
  return (
    <TodoContext>
      <SignUp customClass="SignMe" />
    </TodoContext>
  );
};

export default SignUpPage;

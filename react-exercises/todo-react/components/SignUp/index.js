import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { contextTodo } from '../TodoContext';
import Form from '../Form';
import FormTitle from '../FormTitle';
import Input from '../Input';
import Button from '../Button';
import { handleRegister } from '@/services/user';
import { alertMessage } from '../Alert';
import routes from '@/constants/routes';

const SignUp = (props) => {
  const { customClass, format } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();
  const { validateIfUserIsLogin } = useContext(contextTodo);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    validateIfUserIsLogin(user);
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const credentials = {
        email,
        name,
        password,
      };

      const { status } = await handleRegister(credentials);

      if (status === 200) {
        alertMessage.success('Sign up successfully');
        router.push(routes.login);
      } else {
        alertMessage.error('Sign Up unsuccessfully');
      }
    } catch ({ response: { data: { message } = {} } = {} }) {
      alertMessage.error(message);
    }
  };

  const handleChangeEmail = (input) => {
    setEmail(input.target.value);
  };

  const handleChangepassword = (input) => {
    setPassword(input.target.value);
  };

  const handleChangeName = (input) => {
    setName(input.target.value);
  };

  return (
    <Form
      customClass={customClass}
      imageUrl="/logo-smbs.png"
      imageDescription="logo-smbs"
      onSubmit={handleSubmit}
    >
      <FormTitle
        customClass="Login-title"
        formatText="Format"
        title="Sign Up for Our Newsletter"
        instructions="Fill out your information below to be signed up for our informative newsletter."
      />

      <Input
        customClass="Input-container"
        text="Name"
        placeholder="Name"
        type="text"
        onChange={handleChangeName}
      />

      <Input
        customClass="Input-container"
        text="Email Address"
        placeholder="Email Address"
        type="email"
        onChange={handleChangeEmail}
      />

      <Input
        customClass="Input-container"
        text="Password"
        placeholder="************"
        type="password"
        onChange={handleChangepassword}
      />

      <Input
        customClass="form-check"
        inputCustomClass="form-check-input"
        labelCustomClass="form-check-label Format-text"
        text="I agree to receive e-mails from your company and your terms and conditions."
        type="checkbox"
      />

      <Button customClass="Button" buttonText="Sign Up" buttonType="submit" />
      <h2 className="Format-text Format-link">
        Already have an account?
        <Link
          href={routes.login}
          className={`${format}-text ${format}-link ${format}-button`}
        >
          Login Up here!
        </Link>
      </h2>
    </Form>
  );
};

SignUp.propTypes = {
  customClass: PropTypes.string.isRequired,
  format: PropTypes.string,
};

SignUp.defaultProps = {
  format: 'Format',
};

export default SignUp;

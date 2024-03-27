import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import routes from '@/constants/routes';

import useLocalStorage from '@/hooks/useLocalStorage';

const contextTodo = createContext();

const TodoContext = (props) => {
  const { children } = props;
  const [todo, setTodo] = useState([]);
  const [theme, setTheme] = useLocalStorage('theme');
  const [user, setUser] = useLocalStorage('user', {});
  const router = useRouter();

  const validateIfUserIsLogin = (isUser) => {
    const isLoggedIn = Object.keys(isUser).length > 0 && isUser.token;
    if (isLoggedIn) {
      router.push(routes.todo);
    } else {
      if (router.pathname === routes.signUp) {
        router.push(routes.signUp);
      } else {
        router.push(routes.login);
      }
    }

    return isLoggedIn;
  };

  return (
    <contextTodo.Provider
      value={{
        theme,
        setTheme,
        todo,
        setTodo,
        user,
        setUser,
        validateIfUserIsLogin,
      }}
    >
      {children}
    </contextTodo.Provider>
  );
};

TodoContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoContext, contextTodo };

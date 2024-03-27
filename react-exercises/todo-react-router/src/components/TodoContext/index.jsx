import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import routes from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

const contextTodo = createContext();

const TodoContext = (props) => {
  const { children } = props;
  const [todo, setTodo] = useState([]);
  const [theme, setTheme] = useLocalStorage('theme');
  const [user, setUser] = useLocalStorage('user', {});
  const router = useNavigate();
  const location = useLocation();
  const isDarkTheme = theme === 'dark';

  const validateIfUserIsLogin = (isUser) => {
    const isLoggedIn = Object.keys(isUser).length > 0 && isUser.token;
    if (isLoggedIn) {
      router(routes.todo);
    } else {
      if (location.pathname === routes.signUp) {
        router(routes.signUp);
      } else {
        router(routes.login);
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
        isDarkTheme,
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

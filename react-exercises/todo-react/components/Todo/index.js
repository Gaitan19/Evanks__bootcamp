import PropTypes from 'prop-types';
import { useContext, useEffect, useCallback } from 'react';
import SwitchMode from '../SwitchMode';
import TodoCounter from '../TodoCounter';
import InputTask from '../InputTask';
import Tasks from '../Tasks';
import { contextTodo } from '../TodoContext';
import Navbar from '../Navbar';
import { handleGetTodos } from '@/services/todo';
import { alertMessage } from '../Alert';

const Todo = (props) => {
  const { customClass } = props;
  const { theme, setTheme, setTodo, validateIfUserIsLogin } =
    useContext(contextTodo);

  const fetchData = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user')) || {};
      const isLoggedIn = validateIfUserIsLogin(user);

      if (isLoggedIn) {
        const { data, status } = await handleGetTodos(user.id, user.token);
        if (status === 200) {
          setTodo(data);
        }
      }
    } catch (error) {
      alertMessage.error(error);
    }
  }, [setTodo]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`main ${theme === 'dark' && 'dark-mode'}`}>
      <Navbar customClass="To-do-list" />
      <div
        className={`d-flex ${customClass}-container ${
          theme === 'dark' && 'dark-mode-container'
        }`}
      >
        <SwitchMode
          customClass="switch-mode"
          inputType="checkbox"
          checked={theme === 'dark'}
          onClick={toggleHandler}
        />

        <TodoCounter customClass={customClass} text="Todos " />
        <InputTask
          customClass={customClass}
          customClassButton="btn btn-warning"
          placeholder="Input your task"
          buttonText="Submit"
        />

        <Tasks customClass="To-do-list" />
      </div>
    </div>
  );
};

Todo.propTypes = {
  customClass: PropTypes.string.isRequired,
};

export default Todo;

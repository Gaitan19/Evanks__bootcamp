import PropTypes from 'prop-types';
import { useContext } from 'react';
import { contextTodo } from '../TodoContext';

const TodoCounter = (props) => {
  const { customClass, text } = props;
  const { theme, todo } = useContext(contextTodo);
  const containerTheme = theme === 'dark' && 'dark-mode-container-text';

  return (
    <div className={`${customClass}-container-text ${containerTheme}`}>
      <h2 className={`${customClass}-todos`}>{`${text}(${todo.length})`}</h2>
    </div>
  );
};

TodoCounter.propTypes = {
  customClass: PropTypes.string.isRequired,
  text: PropTypes.string,
};

TodoCounter.defaultProps = {
  text: '',
};

export default TodoCounter;

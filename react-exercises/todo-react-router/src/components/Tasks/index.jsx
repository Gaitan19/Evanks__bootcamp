import PropTypes from 'prop-types';
import { useContext } from 'react';
import { contextTodo } from '../TodoContext';
import Task from '../Task';

const renderTasks = (tasks) => {
  return tasks.map((task) => {
    return (
      <Task
        key={task.id}
        customClass="To-do"
        taskText={task.description}
        iscompleted={task.completed === 1}
        idTask={task.id}
      />
    );
  });
};

const Tasks = (props) => {
  const { customClass } = props;
  const { todo, isDarkTheme } = useContext(contextTodo);
  const listTheme = isDarkTheme ? 'dark-mode-group' : 'To-do-list-group';

  return (
    <div className={`${customClass}-container-group`}>
      <ul className={`list-group ${listTheme}`}>{renderTasks(todo)}</ul>
    </div>
  );
};

Tasks.propTypes = {
  customClass: PropTypes.string.isRequired,
};

export default Tasks;

import PropTypes from 'prop-types';
import { useContext } from 'react';
import { contextTodo } from '../TodoContext';
import Task from '../Task';

const renderTasks = (tasksItem) => {
  return tasksItem.map((task) => {
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
  const { todo, theme } = useContext(contextTodo);
  const listTheme = theme === 'dark' ? 'dark-mode-group' : 'To-do-list-group';

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

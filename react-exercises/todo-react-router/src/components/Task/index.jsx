import PropTypes from 'prop-types';
import { FaPen, FaTrash, FaSave } from 'react-icons/fa';
import { useContext, useState } from 'react';
import Button from '../Button';
import { contextTodo } from '../TodoContext';
import { handleDeleteTodo, handleEditTodo } from '../../services/todo';
import { alertMessage } from '../Alert';

const item = 'list-group';

const Task = (props) => {
  const { customClass, taskText, iscompleted, idTask } = props;
  const { todo, setTodo, user, isDarkTheme } = useContext(contextTodo);
  const [editing, setEditing] = useState(true);
  const [updateTask, setUpdateTask] = useState('');
  const [check, setCheck] = useState(iscompleted);
  const checkBoxTheme = isDarkTheme && 'dark-mode-checkBox';
  const textTheme = isDarkTheme && 'dark-mode-text';
  const buttonTheme = isDarkTheme && 'dark-mode-btn';

  const handleDelete = async () => {
    try {
      const { status } = await handleDeleteTodo(user.id, user.token, idTask);
      if (status === 200) {
        const tempTasks = todo.filter((task) => task.id !== idTask);
        setTodo(tempTasks);
        alertMessage.success('Task deleted successfully');
      } else {
        alertMessage.error("Task couldn't be deleted");
      }
    } catch (error) {
      alertMessage.error(error);
    }
  };

  const handleEditOn = () => {
    setEditing((prevState) => !prevState);
  };

  const handleChangeInput = (input) => {
    setUpdateTask(input.target.value);
  };

  const handleUpdate = async () => {
    try {
      if (updateTask !== '') {
        const tempTask = await todo.find((task) => task.id === idTask);
        const postData = {
          description: updateTask,
          completed: tempTask.completed,
          meta: {},
        };

        const { status } = await handleEditTodo(
          user.id,
          user.token,
          idTask,
          postData
        );
        if (status === 200) {
          setEditing((prevEditing) => !prevEditing);
          const updatedTasks = todo.map((task) =>
            task.id === idTask ? { ...task, description: updateTask } : task
          );
          setTodo(updatedTasks);
          alertMessage.success('Task edited successfully');
        } else {
          alertMessage.error("Task couldn't be edited");
        }
      } else {
        alertMessage.error("the task can't be emty");
      }
    } catch (error) {
      alertMessage.error(error);
    }
  };

  const handleChangeCheck = async () => {
    try {
      setCheck((prevState) => !prevState);
      const tempTask = todo.find((task) => task.id === idTask);
      const postData = {
        description: tempTask.description,
        completed: !iscompleted,
        meta: {},
      };

      const { status } = await handleEditTodo(
        user.id,
        user.token,
        idTask,
        postData
      );
      if (status === 200) {
        const updatedTasks = todo.map((task) =>
          task.id === idTask ? { ...task, completed: !iscompleted } : task
        );
        setTodo(updatedTasks);
        alertMessage.success('Task status change successfully');
      } else {
        alertMessage.error('Task status change unsuccessfully');
      }
    } catch (error) {
      alertMessage.error(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  };

  const handleEditingLabel = () => {
    if (editing) {
      return (
        <label
          className={`form-check-label ${customClass}-list-text iscompleted ${textTheme}`}
        >
          {taskText}
        </label>
      );
    }

    return (
      <input
        className={`To-do-list-input To-do-list-input-edit ${textTheme}`}
        defaultValue={taskText}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />
    );
  };

  const handleEditingButton = () => {
    if (editing) {
      return (
        <Button
          customClass={`btn btn-success ${customClass}-list-button ${buttonTheme}`}
          onClick={handleEditOn}
        >
          <FaPen className="To-do-list-button-icon" />
        </Button>
      );
    }

    return (
      <Button
        customClass={`btn btn-success ${customClass}-list-button ${buttonTheme}`}
        onClick={handleUpdate}
      >
        <FaSave className="To-do-list-button-icon" />
      </Button>
    );
  };

  return (
    <li className={`${item}-item ${customClass}-${item}-item`}>
      <div className="form-check">
        <input
          className={`form-check-input ${customClass}-list-check toggleCheckBox ${checkBoxTheme}`}
          type="checkbox"
          checked={check}
          onChange={handleChangeCheck}
        />
        {handleEditingLabel()}
      </div>

      <div className={`${customClass}-${item}-buttons`}>
        {handleEditingButton()}
        <Button
          customClass={`btn btn-danger ${customClass}-list-button`}
          onClick={handleDelete}
        >
          <FaTrash className="To-do-list-button-icon" />
        </Button>
      </div>
    </li>
  );
};

Task.propTypes = {
  customClass: PropTypes.string.isRequired,
  taskText: PropTypes.string,
  iscompleted: PropTypes.bool.isRequired,
  idTask: PropTypes.number.isRequired,
};

Task.defaultProps = {
  taskText: '',
};

export default Task;

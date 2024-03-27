import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa';
import { useContext, useState } from 'react';
import Button from '../Button';
import { contextTodo } from '../TodoContext';
import { handlePostTodo } from '../../services/todo';
import { alertMessage } from '../Alert';
import { CFormInput } from '@coreui/react';

const InputTask = (props) => {
  const { customClass, customClassButton, placeholder, inputType, buttonText } =
    props;
  const { todo, setTodo, user } = useContext(contextTodo);
  const [newTask, setNewTask] = useState('');

  const handleChangeInput = (input) => {
    setNewTask(input.target.value);
  };

  const handleSubmit = async () => {
    if (newTask === '') {
      return alertMessage.error('must input a task');
    }

    const task = {
      description: newTask,
      completed: 0,
      meta: {},
    };

    try {
      const { data, status } = await handlePostTodo(user.id, user.token, task);
      if (status === 200) {
        const tempTask = [...todo, data];
        setTodo(tempTask);
        setNewTask('');
        alertMessage.success('Task added successfully');
      } else {
        alertMessage.error("Task couldn't be added");
      }
    } catch (error) {
      alertMessage.error(error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={`d-flex ${customClass}-container-form`}>
      <CFormInput
        className={`${customClass}-input`}
        placeholder={placeholder}
        type={inputType}
        value={newTask}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />
      <Button
        customClass={`${customClassButton} ${customClass}-submit`}
        onClick={handleSubmit}
      >
        <span className={`${customClass}-submit-format`}>{buttonText}</span>
        <FaPaperPlane className={`${customClass}-submit-format`} />
      </Button>
    </div>
  );
};

InputTask.propTypes = {
  customClass: PropTypes.string.isRequired,
  customClassButton: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.oneOf([
    'button',
    'checkbox',
    'email',
    'password',
    'text',
  ]),
  buttonText: PropTypes.string,
};

InputTask.deafaultProps = {
  placeholder: '',
  buttonText: '',
  inputType: 'text',
};

export default InputTask;

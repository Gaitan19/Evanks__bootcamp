import handleApiRequest from '@/services';

const handleGetTodos = async (id, token) => {
  const { data, status } = await handleApiRequest(
    'GET',
    `/${id}/todos`,
    '',
    token,
  );

  return { data, status };
};

const handlePostTodo = async (id, token, task) => {
  const { data, status } = await handleApiRequest(
    'POST',
    `/${id}/todos`,
    task,
    token,
  );

  return { data, status };
};

const handleDeleteTodo = async (id, token, task) => {
  const { data, status } = await handleApiRequest(
    'DELETE',
    `/${id}/todos/${task}`,
    '',
    token,
  );

  return { data, status };
};

const handleEditTodo = async (id, token, idTask, task) => {
  const { data, status } = await handleApiRequest(
    'PUT',
    `/${id}/todos/${idTask}`,
    task,
    token,
  );

  return { data, status };
};

export { handleGetTodos, handlePostTodo, handleDeleteTodo, handleEditTodo };

import handleApiRequest from '..';

const handleLogin = async (credentials) => {

 
  const { data, status } = await handleApiRequest(
    'POST',
    '/login',
    credentials,
  );

  return { data, status };
};

const handleRegister = async (credentials) => {
  const { data, status } = await handleApiRequest(
    'POST',
    '/register',
    credentials,
  );

  return { data, status };
};

const handleLogout = async (token) => {
  const { data, status } = await handleApiRequest('POST', '/logout', '', token);

  return { data, status };
};

export { handleLogin, handleRegister, handleLogout };

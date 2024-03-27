import axios from 'axios';

const handleApiRequest = (method, endpoint, data, token = '') => {
  return axios({
    method,
    url: `${process.env.NEXT_PUBLIC_API_URL}/users${endpoint}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`,
    data: {
      ...data,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default handleApiRequest;

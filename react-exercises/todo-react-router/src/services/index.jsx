import axios from "axios";

const handleApiRequest = (method, endpoint, data, token = '') => {

  return axios({
    method,
    url: `${import.meta.env.VITE_API_URL}/users${endpoint}?apikey=${import.meta.env.VITE_API_KEY}`,
   
    data: {
      ...data,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default handleApiRequest;

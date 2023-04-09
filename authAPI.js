import axios from 'axios';

const authApi = {
  login: (data) => {
    return axios.post('/login', data);
  },
  logout: () => {
    return axios.post('/logout');
  },
  // other auth-related methods
};

export default authApi;

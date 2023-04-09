import http from './http';

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // handle unauthorized access
    } else if (error.response.status === 403) {
      // handle forbidden access
    } else if (error.response.status === 404) {
      // handle not found
    } else {
      // handle other errors
    }
    return Promise.reject(error);
  }
);

export default http;

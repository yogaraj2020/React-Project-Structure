import http from './httpinterceptor';

export const getService = async (url, config = {}) => {
  try {
    const response = await http.get(url, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const postService = async (url, data, config = {}) => {
  try {
    const response = await http.post(url, data, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const putService = async (url, data, config = {}) => {
  try {
    const response = await http.put(url, data, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteService = async (url, config = {}) => {
  try {
    const response = await http.delete(url, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const patchService = async (url, data, config = {}) => {
  try {
    const response = await http.patch(url, data, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

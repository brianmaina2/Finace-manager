import axios from 'axios';

const baseUrl = 'https://example.com/api/users';

const userApi = {
  getUsers: async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  },
  
  getUserById: async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  },
  
  createUser: async (userData) => {
    const response = await axios.post(baseUrl, userData);
    return response.data;
  },
  
  updateUser: async (id, userData) => {
    const response = await axios.put(`${baseUrl}/${id}`, userData);
    return response.data;
  },
  
  deleteUser: async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  }
};

export default userApi;

import axios from 'axios';

const API_URL = 'https://example.com/api/transactions';

const transactionApi = {
  getTransactions: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  createTransaction: async (transaction) => {
    const response = await axios.post(API_URL, transaction);
    return response.data;
  },

  updateTransaction: async (id, transaction) => {
    const response = await axios.put(`${API_URL}/${id}`, transaction);
    return response.data;
  },

  deleteTransaction: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  }

  
};

export default transactionApi;

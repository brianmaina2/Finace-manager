import axios from 'axios';

const baseUrl = 'https://example.com/api/accounts';

export const fetchAccounts = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAccountById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createAccount = async (accountData) => {
  try {
    const response = await axios.post(baseUrl, accountData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateAccount = async (id, accountData) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, accountData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteAccount = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAccountsByStatus = async (status) => {
  try {
    const response = await axios.get(`${baseUrl}/?status=${status}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAccountsByType = async (type) => {
  try {
    const response = await axios.get(`${baseUrl}/?type=${type}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAccountsByDateRange = async (startDate, endDate) => {
  try {
    const response = await axios.get(`${baseUrl}/?startDate=${startDate}&endDate=${endDate}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

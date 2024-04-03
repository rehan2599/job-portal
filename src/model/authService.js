// src/model/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/user/'; // Adjust based on your actual backend URL

export const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, { email, password });
    if (response.data) {
      console.log('Authentication successful', response.data);
      // Store the user in localStorage or handle as needed
    }
    return response.data;
  } catch (error) {
    console.error('Authentication error', error.response);
    throw error;
  }
};

export default {
  signIn,
};

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Your backend URL

export const api = {
  // Snacks
  getSnacks: () => axios.get(`${API_BASE_URL}/snacks`),
  
  // Students
  getStudents: () => axios.get(`${API_BASE_URL}/students`),
  getStudentById: (id) => axios.get(`${API_BASE_URL}/students/${id}`),
  getOrders: () => axios.get(`${API_BASE_URL}/orders`),
  createStudent: (data) => axios.post(`${API_BASE_URL}/students`, data),
  
  // Orders
  createOrder: (data) => axios.post(`${API_BASE_URL}/orders`, data),
};
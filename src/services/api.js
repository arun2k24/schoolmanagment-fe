import axios from 'axios';

const API_URL = 'http://localhost:4005/api'; 

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  
  },
});


export const fetchSubjects = async () => {
  try {
    const response = await axiosInstance.get('/subjects');
    return response.data;
  } catch (error) {
    console.error('Error fetching subjects:', error);
    throw error; 
  }
};


export const addSubject = async (subject) => {
  try {
    const response = await axiosInstance.post('/subjects', subject);
    return response.data; 
  } catch (error) {
    console.error('Error adding subject:', error);
    throw error; 
  }
};


export const api = {
  fetchSubjects,
  addSubject,
};

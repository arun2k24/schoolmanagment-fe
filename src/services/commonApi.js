
import axios from 'axios';
import BASE_URL from './baseUrl';
import API_PATHS from './allApi';


const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const commonApi = async (method, url, data = null, params = {}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response || error.message);
    throw error; 
  }
}
export const loginUser = (data) => commonApi('POST', API_PATHS.LOGIN, data);
export const registerUser = (data) => commonApi('POST', API_PATHS.REGISTER, data);
export const fetchStudentDashboard = () => commonApi('GET', API_PATHS.STUDENT_DASHBOARD);
export const fetchTeacherDashboard = () => commonApi('GET', API_PATHS.TEACHER_DASHBOARD);
export const fetchAdminDashboard = () => commonApi('GET', API_PATHS.ADMIN_DASHBOARD);
export const getUsers = () => commonApi('GET', API_PATHS.GET_USERS);
export const addUser = (data) => commonApi('POST', API_PATHS.ADD_USER, data);
export const updateUser = (data) => commonApi('PUT', API_PATHS.UPDATE_USER, data);
export const deleteUser = (userId) => commonApi('DELETE', `${API_PATHS.DELETE_USER}/${userId}`);


export default commonApi;

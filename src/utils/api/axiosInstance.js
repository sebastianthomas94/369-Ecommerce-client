import axios from 'axios';
import env from '../config/env';

const axiosInstance = axios.create({
  baseURL: env.BASE_URL, // Your API base URL
  timeout: 5000, // Timeout duration in milliseconds
   withCredentials: true, // Include cookies with requests
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

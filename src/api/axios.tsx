import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: import.meta.env.VITE_BASE_URL
    baseURL: 'http://localhost:3000'
})
axiosInstance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      if (token) config.headers.Authorization = `bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    (error) => {
      // console.log("🚀 ~ error:", error?.response)
      if (error?.response?.status === 401) {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );
export default axiosInstance

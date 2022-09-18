import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.68.124:8000/api",
});

export default axiosInstance;

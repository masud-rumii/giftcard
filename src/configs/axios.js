import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://178.128.127.100/api",
});

export default axiosInstance;

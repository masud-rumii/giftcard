import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.68.121:8010/api",
});

export default axiosInstance;

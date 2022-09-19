import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://178.128.127.100/sochitel-communicator/public/api/",
});

export default axiosInstance;

import { useQuery } from "react-query";
import axiosInstance from "../../../configs/axios";

const fetchAllServices = () => {
  return axiosInstance.get("/get-all-service");
};

export default function useGetAllServices() {
  return useQuery(["fetchAllServices"], fetchAllServices);
}

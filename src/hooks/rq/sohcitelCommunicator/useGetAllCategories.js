import { useQuery } from "react-query";
import axiosInstance from "../../../configs/axios";

const fetchAllCategories = (id) => {
  if (id) {
    return axiosInstance.get(`/get-all-category?service_id=${id}`);
  }
};

export default function useGetAllCategories(id) {
  return useQuery(["fetchAllCategories", id], () => fetchAllCategories(id));
}

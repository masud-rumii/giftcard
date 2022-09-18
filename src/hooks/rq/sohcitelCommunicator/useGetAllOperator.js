import { useQuery } from "react-query";
import axiosInstance from "../../../configs/axios";

const fetchAllOperator = () => {
  return axiosInstance.get("/get-all-operators");
};

export default function useGetAllOperator() {
  return useQuery(["fetchAllOperator"], fetchAllOperator);
}

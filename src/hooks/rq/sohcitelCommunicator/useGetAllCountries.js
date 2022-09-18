import { useQuery } from "react-query";
import axiosInstance from "../../../configs/axios";

const fetchAllCountries = () => {
  return axiosInstance.get("/get-all-countries");
};

export default function useGetAllCountries() {
  return useQuery(["fetchAllCountries"], fetchAllCountries);
}

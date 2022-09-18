import { useQuery } from "react-query";
import axiosInstance from "../../../configs/axios";

const fetchAllOperator = ({ serviceId, categoryId, countryId }) => {
  if (countryId) {
    return axiosInstance.get(
      `/get-all-operators?service_id=${serviceId}&country_id=${countryId}`
    );
  } else if (categoryId) {
    return axiosInstance.get(
      `/get-all-operators?service_id=${serviceId}&&category_id=${categoryId}`
    );
  } else if (categoryId && countryId) {
    return axiosInstance.get(
      `/get-all-operators?service_id=${serviceId}&country_id=${countryId}&category_id=${categoryId}`
    );
  } else {
    return axiosInstance.get(`/get-all-operators?service_id=${serviceId}`);
  }
};

export default function useGetAllOperator({ serviceId, categoryId, countryId }) {
  return useQuery(
    ["fetchAllOperator"],
    () => fetchAllOperator({ serviceId, categoryId, countryId }),
    {
      enabled: !!serviceId || !!categoryId || !!countryId,
    }
  );
}

import { useQuery } from "react-query";
import axiosInstance from "../../../configs/axios";

const fetchAllProducts = ({ service_id, operator_id }) => {
  return axiosInstance.get(
    `http://178.128.127.100/sochitel-communicator/public/api/get-all-products?service_id=${service_id}&operator_id=${operator_id}`
  );
};

export default function useGetAllProducts({ service_id, operator_id }) {
  return useQuery(
    ["fetchAllProducts", service_id, operator_id],
    () => fetchAllProducts({ service_id, operator_id }),
    { enabled: !!service_id && !!operator_id }
  );
}

import { useQuery } from "react-query";
import axiosInstance from "../../../configs/axios";

const fetchAllSliderImages = () => {
  return axiosInstance.get("/get-all-slider-image");
};

export default function useGetAllSliderImage() {
  return useQuery(["fetchAllSliderImages"], fetchAllSliderImages);
}

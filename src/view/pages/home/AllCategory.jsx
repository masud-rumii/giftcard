import { Row, Spin } from "antd";
import React from "react";
import useGetAllServices from "../../../hooks/rq/sohcitelCommunicator/useGetAllService";
// import axiosInstance from "../../../configs/axios";
import CategoryCard from "./CategoryCard";

export default function AllCategory() {
  // const [allCategories, setAllCategories] = useState([]);

  const { data: allCategories, isLoading } = useGetAllServices();

  // useEffect(() => {
  //   axiosInstance
  //     .get("/get-all-service")
  //     .then(({ data }) => setAllCategories(data?.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <section className="hp-landing-container hp-py-32">
      {isLoading ? (
        <Spin />
      ) : (
        <Row gutter={[24, 24]}>
          {allCategories?.data?.data?.map((item) => (
            <CategoryCard title={item.description} key={item.id} id={item.category_id} />
          ))}
        </Row>
      )}
    </section>
  );
}

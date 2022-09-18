import { Row } from "antd";
import React, { useState } from "react";
// import axiosInstance from "../../../configs/axios";
import CategoryCard from "./CategoryCard";

export default function AllCategory() {
  const [allCategories, setAllCategories] = useState([]);

  // useEffect(() => {
  //   axiosInstance
  //     .get("/get-all-service")
  //     .then(({ data }) => setAllCategories(data?.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <section className="hp-landing-container hp-py-32">
      <Row gutter={[24, 24]}>
        {allCategories?.map((item) => (
          <CategoryCard title={item.description} key={item.id} id={item.category_id} />
        ))}
      </Row>
    </section>
  );
}

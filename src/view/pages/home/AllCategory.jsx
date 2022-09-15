import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

export default function AllCategory() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.68.121:8010/api/get-all-service")
      .then(({ data }) => setAllCategories(data?.data))
      .catch((err) => console.log(err));
  }, []);

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

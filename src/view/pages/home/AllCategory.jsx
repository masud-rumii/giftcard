import { Row, Spin } from "antd";
import React from "react";
import useGetAllServices from "../../../hooks/rq/sohcitelCommunicator/useGetAllService";

export default function AllCategory() {
  const { data: allCategories, isLoading } = useGetAllServices();

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

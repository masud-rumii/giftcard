import { Col, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetAllProducts from "../../../hooks/rq/sohcitelCommunicator/useGetAllProducts";
import LandingFooter from "../landing/footer";
import LandingHeader from "../landing/header";
import DetailsCard from "./DetailsCard";

export default function Home() {
  const [operatorDetails, setOperatorDetails] = useState({});
  const { operatorId } = useParams();

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const serviceId = params.get("serviceId");

  const { data: products, isLoading } = useGetAllProducts({
    service_id: serviceId,
    operator_id: operatorId,
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("operatorDetails"));
    setOperatorDetails(() => data);
  }, []);

  return (
    <Row gutter={32} className="hp-ecommerce-app">
      <Col span={24}>
        <div className="hp-landing hp-bg-black-0 hp-bg-dark-90">
          <LandingHeader />
          <section className="hp-landing-container hp-landing-hero hp-pt-16">
            <div className="hp-px-sm-8 hp-px-16">
              {isLoading ? (
                <Spin />
              ) : (
                <DetailsCard
                  products={products?.data?.data}
                  operatorDetails={operatorDetails}
                />
              )}
            </div>
          </section>
          <LandingFooter />
        </div>
      </Col>
    </Row>
  );
}

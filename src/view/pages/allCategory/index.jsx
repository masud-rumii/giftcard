import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import LandingFooter from "../landing/footer";
import LandingHeader from "../landing/header";
import Item from "./Item";

export default function AllCategory() {
  const products = useSelector((state) => state.ecommerce.products);

  return (
    <Row gutter={32} className="hp-ecommerce-app">
      <Col span={24}>
        <div className="hp-landing hp-bg-black-0 hp-bg-dark-90">
          <LandingHeader />

          <section className="hp-landing-container hp-landing-hero hp-pt-16">
            <div className="hp-px-sm-8 hp-px-16">
              <Row gutter={[24, 24]}>
                {products.map((value) => (
                  <Item value={value} key={value.id} />
                ))}
              </Row>
            </div>
          </section>

          <section className="hp-landing-container hp-py-32">
            <Row gutter={24}></Row>
          </section>
          <LandingFooter />
        </div>
      </Col>
    </Row>
  );
}

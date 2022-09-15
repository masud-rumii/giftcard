import { Col, Row } from "antd";
import React from "react";
import LandingFooter from "../landing/footer";
import LandingHeader from "../landing/header";
import AllCategory from "./AllCategory";
import HeroSlider from "./HeroSlider";
export default function Category() {
  return (
    <Row gutter={32} className="hp-ecommerce-app">
      <Col span={24}>
        <div className="hp-landing hp-bg-black-0 hp-bg-dark-90">
          <LandingHeader />
          <HeroSlider />
          <AllCategory />
          <LandingFooter />
        </div>
      </Col>
    </Row>
  );
}

import { Col, Row } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import LandingFooter from "../landing/footer";
import LandingHeader from "../landing/header";
import Shop from "./Shop";

export default function Home() {
  const { id } = useParams();

  return (
    <Row gutter={32} className="hp-ecommerce-app">
      <Col span={24}>
        <div className="hp-landing hp-bg-black-0 hp-bg-dark-90">
          <LandingHeader />
          <section className="hp-landing-container hp-landing-hero hp-pt-16">
            <div className="hp-px-sm-8 hp-px-16">
              <Shop id={id} />
            </div>
          </section>
          <LandingFooter />
        </div>
      </Col>
    </Row>
  );
}

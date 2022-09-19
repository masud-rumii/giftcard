import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Detail from "../../apps/ecommerce/detail/Detail";
import LandingFooter from "../landing/footer";
import LandingHeader from "../landing/header";

export default function Home() {
  const [operatorDetails, setOperatorDetails] = useState({});

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
              <Detail operatorDetails={operatorDetails} />
            </div>
          </section>
          <LandingFooter />
        </div>
      </Col>
    </Row>
  );
}

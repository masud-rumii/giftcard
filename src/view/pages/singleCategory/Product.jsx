import React from "react";
import { useHistory } from "react-router-dom";

import { Card, Col, Row } from "antd";

export default function Product({ value, serviceId }) {
  const history = useHistory();

  const handelClick = () => {
    history.push(`/operator-details/${value.id}?serviceId=${serviceId}`);
    localStorage.setItem("operatorDetails", JSON.stringify(value));
  };

  return (
    <Col xl={8} md={12} span={24}>
      <Card
        onClick={handelClick}
        className="hp-border-color-black-40 hp-mb-32 hp-eCommerceCardOne"
      >
        <Row>
          <Col span={24}>
            {value.logoUrl && (
              <Col className="hp-text-center hp-my-24">
                <img src={value.logoUrl} alt={value.name} height={60} />
              </Col>
            )}

            <Col className="hp-mb-24 hp-mt-16">
              <p className="hp-mb-4 hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body hp-font-weight-500">
                {value?.name}
              </p>

              {value.subTitle && (
                <p className="hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                  {value.subTitle}
                </p>
              )}
            </Col>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

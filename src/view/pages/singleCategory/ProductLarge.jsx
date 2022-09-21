import { Card, Col, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

export default function ProductLarge({ value, serviceId }) {
  const history = useHistory();

  const handelClick = () => {
    history.push(`/operator-details/${value.id}?serviceId=${serviceId}`);
    localStorage.setItem("operatorDetails", JSON.stringify(value));
  };

  return (
    <Col span={24}>
      <Card
        onClick={handelClick}
        className="hp-border-color-black-40 hp-mb-32 hp-eCommerceCardOne "
      >
        <Row gutter={32}>
          <Col md={10} span={24} className="hp-mb-md-24">
            {value.logoUrl && (
              <Col className="hp-text-center">
                <img src={value.logoUrl} alt={value.name} height={50} />
              </Col>
            )}
          </Col>

          <Col md={14} span={24}>
            <div className="hp-my-8">
              {value.name && <h4 className="hp-mb-4">{value.name}</h4>}
            </div>

            {value.countryId && (
              <p className="hp-mb-0 hp-p1-body hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                {value.countryId}
              </p>
            )}
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

import React from "react";

import { Card, Col, Divider, Row } from "antd";

export default function Detail({ operatorDetails = {}, products }) {
  const { name, logoUrl, countryId, id } = operatorDetails;
  console.log(products);
  return (
    <Row className="hp-ecommerce-app-detail hp-mb-32" key={id}>
      <Col className="hp-mb-32" span={24}>
        <Row gutter={[32, 32]}></Row>
      </Col>

      <Col span={24}>
        <Card className="hp-border-color-black-40">
          <Row>
            <Col
              lg={12}
              span={24}
              className="hp-ecommerce-app-detail-slider hp-mt-sm-24 hp-mb-md-64 hp-mb-md-32"
            >
              <div className="hp-ecommerce-app-detail-single-image hp-text-center">
                <img src={logoUrl} alt={name} />
              </div>
            </Col>

            <Col lg={12} span={24}>
              <h2 className="hp-mb-8">{name}</h2>

              <span className="hp-caption hp-d-block hp-text-color-black-60">
                By
                <span className="hp-ml-4 hp-text-color-black-80 hp-text-color-dark-30">
                  {countryId}
                </span>
              </span>

              <Divider />
            </Col>
          </Row>
          <p className="hp-mb-0 hp-mt-16 hp-p1-body hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
        </Card>
      </Col>
    </Row>
  );
}

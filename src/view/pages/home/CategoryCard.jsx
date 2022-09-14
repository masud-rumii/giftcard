import React from "react";

import { Card, Col } from "antd";
import { useHistory } from "react-router-dom";

export default function FeatureCard({ icon, title, id }) {
  const history = useHistory();

  return (
    <Col
      lg={6}
      className="da-h-100"
      onClick={() => history.push(`/single-category/${id}`)}
    >
      <Card className="hp-border-radius-xxl hp-dashboard-feature-card hp-cursor-pointer da-h-100">
        <div
          className="hp-d-flex-full-center hp-dashboard-feature-card-icon hp-border-radius-lg hp-bg-black-20 hp-bg-dark-80"
          style={{ width: 48, height: 48 }}
        >
          {icon}
        </div>

        <div className="hp-d-flex hp-mt-12">
          <span className="h5 hp-mb-0 hp-d-block hp-text-color-black-bg hp-text-color-dark-0 hp-font-weight-500 hp-mr-4">
            {title}
          </span>
        </div>
      </Card>
    </Col>
  );
}

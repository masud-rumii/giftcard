import React from "react";

import { Card, Col } from "antd";
import { useHistory } from "react-router-dom";

export default function CategoryCard({ title, id }) {
  const history = useHistory();

  return (
    <Col lg={4} onClick={() => history.push(`/single-service/${id}`)}>
      <Card
        className="hp-dashboard-feature-card hp-cursor-pointer category-card"
        style={{ backgroundColor: "#3A98D7" }}
      >
        <div style={{ textAlign: "center" }}>
          <span
            className="h5 hp-mb-0 hp-d-block hp-font-weight-500"
            style={{ color: "white" }}
          >
            {title}
          </span>
        </div>
      </Card>
    </Col>
  );
}

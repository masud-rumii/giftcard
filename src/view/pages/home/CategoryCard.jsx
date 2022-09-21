import React from "react";

import { Card, Col } from "antd";
import { useHistory } from "react-router-dom";

export default function CategoryCard({ title, id }) {
  const history = useHistory();

  const titleCapitalized = title.charAt(0).toUpperCase().concat(title.substring(1));

  return (
    <Col lg={12} onClick={() => history.push(`/single-category/${id}`)}>
      <Card
        className="hp-dashboard-feature-card hp-cursor-pointer category-card hp-py-8"
        style={{ backgroundColor: "#3A98D7" }}
      >
        <div style={{ textAlign: "center" }}>
          <span className="h2 hp-mb-0 hp-d-block hp-font-weight-500" style={{ color: "white" }}>
            {titleCapitalized}
          </span>
        </div>
      </Card>
    </Col>
  );
}

import { Button, Card, Col, Modal, Row } from "antd";
import { useState } from "react";
import ImageModal from "./ImageModal";
import ImageTable from "./ImageTable";

export default function Container() {
  return (
    <div className="hp-landing-container hp-pb-4">
      <div className="hp-my-32">
        <Row gutter={[32, 32]} justify="space-between">
          <Col md={15} span={24}>
            <Row justify="end" align="middle" gutter={[16]} className="hp-pt-24">
              <Col>
                <Button
                  block
                  ghost
                  className="hp-mt-sm-16"
                  type="primary"
                  onClick={showModal}
                >
                  Add New Image
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

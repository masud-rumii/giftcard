import { Col, Row } from "antd";
import LandingFooter from "../landing/footer";
import LandingHeader from "../landing/header";
import Container from "./Container";

export default function Contact() {
  return (
    <Row gutter={32} className="hp-ecommerce-app">
      <Col span={24}>
        <div className="hp-landing hp-bg-black-0 hp-bg-dark-90">
          <Container />
        </div>
      </Col>
    </Row>
  );
}

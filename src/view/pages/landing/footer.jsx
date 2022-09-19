import React from "react";
import { Button, Col, Row, Form, Input } from "antd";
import FooterImage from "../../../assets/images/pages/landing/footer-bg.png";
import { Call, Message } from "iconsax-react";

export default function LandingFooter() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <footer
      className="hp-position-relative hp-pt-sm-64 hp-pt-120 hp-pb-24 hp-overflow-hidden"
      style={{
        backgroundImage: `url(${FooterImage})`,
        backgroundColor: "#f2f2f2",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hp-landing-container">
        <Row justify="space-between" className="hp-mb-sm-64 hp-mb-120">
          <Col lg={6} md={16} span={24}>
            <h2 style={{ color: "#4295CF" }}>Sochitel UK Ltd.</h2>
            <p className="hp-mb-32" style={{ color: "#4295CF" }}>
              Sochitel Group is headquartered in London and Lagos, with strategic office locations
              in New Jersey, Johannesburg, Accra and Douala, plus several other pan-African
              locations.
            </p>
          </Col>

          <Col lg={16} span={24} className="hp-mt-md-64">
            <Row>
              <Col flex="1 0 0">
                <h2 style={{ color: "#4295CF" }}>Features</h2>

                <a
                  href="#"
                  className="hp-d-block hp-font-weight-400 hp-mt-16"
                  style={{ color: "#4295CF" }}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hp-d-block hp-font-weight-400 hp-mt-16"
                  style={{ color: "#4295CF" }}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="hp-d-block hp-font-weight-400 hp-mt-16"
                  style={{ color: "#4295CF" }}
                >
                  Contact Us
                </a>
              </Col>

              <Col flex="1 0 0">
                <h2 style={{ color: "#4295CF" }}>Contacts</h2>

                <a
                  href="#"
                  className="hp-d-block hp-font-weight-400 hp-mt-16"
                  style={{ color: "#4295CF" }}
                >
                  <Call size="18" /> <span>+4402071835517</span>
                </a>
                <a
                  href="#"
                  className="hp-d-block hp-font-weight-400 hp-mt-16"
                  style={{ color: "#4295CF" }}
                >
                  <Message size="18" /> <span>info@sochitel.com</span>
                </a>
                <Button
                  type="primary"
                  className="hp-py-sm-8 hp-py-24 hp-mt-24"
                  style={{
                    backgroundColor: "#E0835C",
                    border: "none",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Contact Us
                </Button>
              </Col>

              <Col flex="0 0 260px" className="hp-mt-sm-32">
                <h2 style={{ color: "#4295CF" }}>Newsletter</h2>

                <Form
                  name="basic"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Name"
                    name="text"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input style={{ backgroundColor: "#f5f8fa" }} />
                  </Form.Item>

                  <Form.Item
                    style={{ marginTop: "-20px" }}
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input style={{ backgroundColor: "#f5f8fa" }} />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        backgroundColor: "#E0835C",
                        border: "none",
                      }}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row
          align="middle"
          justify="center"
          className="hp-landing-footer-copyright hp-border-top-1 hp-border-color-dark-80 hp-pt-24 hp-mt-24"
        >
          <Col>
            <p className="hp-p1-body hp-mb-sm-16 hp-mb-0">
              © SOCHITEL 🥊 2022, All Rights Reserved.
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

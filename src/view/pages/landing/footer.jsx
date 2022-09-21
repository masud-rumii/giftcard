import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { FaEnvelope, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import FooterImage from "../../../assets/images/pages/landing/footer-bg.png";

export default function LandingFooter() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <footer
      className="hp-position-relative hp-pt-sm-48 hp-pt-96 hp-pb-24 hp-overflow-hidden"
      style={{
        backgroundImage: `url(${FooterImage})`,
        backgroundColor: "#f2f2f2",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hp-landing-container">
        <Row justify="space-between" gutter={[24, 24]} className="hp-mb-sm-16 hp-mb-24">
          <Col lg={6} md={6}>
            <h2 style={{ color: "#4295CF" }}>Sochitel UK Ltd.</h2>
            <p className="hp-mb-32" style={{ color: "#4295CF" }}>
              Sochitel Group is headquartered in London and Lagos, with strategic office locations
              in New Jersey, Johannesburg, Accra and Douala, plus several other pan-African
              locations.
            </p>
          </Col>

          <Col lg={5} md={5}>
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

          <Col lg={5} md={5}>
            <h2 style={{ color: "#4295CF" }}>Contacts</h2>

            <a
              href="#"
              className="hp-d-block hp-font-weight-400 hp-mt-16"
              style={{ color: "#4295CF" }}
            >
              <FaPhoneAlt /> <span>+4402071835517</span>
            </a>
            <a
              href="#"
              className="hp-d-block hp-font-weight-400 hp-mt-16"
              style={{ color: "#4295CF" }}
            >
              <FaEnvelope /> <span>info@sochitel.com</span>
            </a>

            <a
              href="#"
              className="hp-d-block hp-font-weight-400 hp-mt-16"
              style={{ color: "#4295CF" }}
            >
              <span style={{ color: "#E0835C" }}>Connect with us</span> <FaLinkedinIn size={32} />
            </a>

            <Button
              type="primary"
              className="hp-py-sm-8 hp-py-16 hp-px-32 hp-mt-24"
              style={{ fontSize: "16px" }}
            >
              Contact Us
            </Button>
          </Col>

          <Col lg={8} md={8}>
            <h2 style={{ color: "#4295CF" }}>Newsletter</h2>

            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                style={{ marginBottom: "20px" }}
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

              <Form.Item
                style={{ marginBottom: "20px" }}
                label="First Name"
                name="text"
                rules={[
                  {
                    required: true,
                    message: "Please input your First name!",
                  },
                ]}
              >
                <Input style={{ backgroundColor: "#f5f8fa" }} />
              </Form.Item>

              <Form.Item
                style={{ marginBottom: "20px" }}
                label="Last Name"
                name="text"
                rules={[
                  {
                    required: true,
                    message: "Please input your Last name!",
                  },
                ]}
              >
                <Input style={{ backgroundColor: "#f5f8fa" }} />
              </Form.Item>

              <p>
                Sochitel Group needs the contact information you provide to us to contact you about
                our products and services. You may unsubscribe from these communications at any
                time. For information on how to unsubscribe, as well as our privacy practices and
                commitment to protecting your privacy, please review our Privacy Policy.
              </p>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>

        <Row
          align="middle"
          justify="center"
          className="hp-landing-footer-copyright hp-border-top-1 hp-border-color-dark-80 hp-pt-24 hp-mt-24"
        >
          <Col>
            <p className="hp-p1-body hp-mb-sm-16 hp-mb-0">
              Copyright © 2017-2022 Sochitel Group - Co Reg. 05869065
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Checkbox, Col, Form, Input, Row } from "antd";

import Background from "../background";
import Footer from "../footer";
import Header from "../header";

export default function Login() {
  const [step, setStep] = useState(false);

  const handelFinish = ({ userName, password }) => {
    if (userName === "a" && password === "a") {
      localStorage.setItem("userInfo", "loggedIn");
    }
  };

  return (
    <Row className="hp-authentication-page hp-d-flex" style={{ flexDirection: "column" }}>
      <Background />

      <Col span={24}>
        <Header />
      </Col>

      <Col flex="1 0 0" className="hp-px-32">
        <Row className="hp-h-100 hp-m-auto" align="middle" style={{ maxWidth: 360 }}>
          <Col span={24}>
            <h1>Login</h1>

            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              className="hp-mt-sm-16 hp-mt-32"
              onFinish={handelFinish}
            >
              <Form.Item label="Username :" name="userName" className="hp-mb-16">
                <Input id="error" />
              </Form.Item>

              {step && (
                <>
                  <Form.Item label="Password :" name="password" className="hp-mb-8">
                    <Input.Password id="warning2" />
                  </Form.Item>

                  <Row align="middle" justify="space-between">
                    <Form.Item className="hp-mb-0">
                      <Checkbox name="remember">Remember me</Checkbox>
                    </Form.Item>

                    <Link
                      className="hp-button hp-text-color-black-80 hp-text-color-dark-40"
                      to="/pages/authentication-modern/recover-password"
                    >
                      Forgot Password?
                    </Link>
                  </Row>

                  <Form.Item className="hp-mt-16 hp-mb-0">
                    <Button block type="primary" htmlType="submit">
                      Sign in
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form>

            {!step && (
              <Button block type="primary" onClick={() => setStep(true)}>
                Continue
              </Button>
            )}

            <Col className="hp-form-info hp-text-center hp-mt-8">
              <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-font-weight-400 hp-mr-4">
                Don’t you have an account?
              </span>

              <Link
                className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption"
                to="/pages/authentication-modern/register"
              >
                Create an account
              </Link>
            </Col>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

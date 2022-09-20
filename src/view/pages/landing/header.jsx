import { Button, Col, Dropdown, Menu, Row } from "antd";
import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import MenuLogo from "../../../layout/components/menu/logo";

export default function LandingHeader() {
  const loginButton = (
    <Button
      type="primary"
      className="hp-px-sm-16 hp-py-sm-8 hp-px-32 hp-py-24 hp-ml-sm-0 hp-ml-8"
      // style={{  fontWeight: "600", fontSize: "16px" }}
    >
      Contact Us
    </Button>
  );

  const menuItems = (
    <>
      <Menu.Item key={0} className="hp-border-radius">
        <Link to="/" style={{ color: "#3A98D7", fontWeight: "500", fontSize: "15px" }}>
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key={0} className="hp-border-radius">
        <Link
          to="/single-category/1"
          style={{ color: "#3A98D7", fontWeight: "500", fontSize: "15px" }}
        >
          Category
        </Link>
      </Menu.Item>
    </>
  );

  return (
    <header className="hp-py-16" style={{ backgroundColor: "#F2F2F2" }}>
      <div className="hp-landing-container">
        <Row align="middle" justify="space-between">
          <Col>
            <MenuLogo />
          </Col>

          <Col className="hp-landing-header-mobile-button">
            <Dropdown
              placement="bottomRight"
              trigger="click"
              overlay={
                <Menu mode="vertical" style={{ backgroundColor: "#F2F2F2" }}>
                  {menuItems}

                  <Menu.Item key={3}>
                    <Row justify="space-between">
                      <Col>{loginButton}</Col>
                    </Row>
                  </Menu.Item>
                </Menu>
              }
            >
              <Button
                type="text"
                icon={
                  <RiMenuFill
                    size={24}
                    className="remix-icon hp-text-color-black-80 hp-text-color-dark-30"
                  />
                }
              />
            </Dropdown>
          </Col>

          <Col flex="1 0 0" className="hp-px-24 hp-landing-header-menu">
            <Menu
              mode="horizontal"
              className="hp-d-flex-full-center"
              style={{ backgroundColor: "#F2F2F2" }}
            >
              {menuItems}
            </Menu>
          </Col>

          <Col className="hp-landing-header-buttons">{loginButton}</Col>
        </Row>
      </div>
    </header>
  );
}

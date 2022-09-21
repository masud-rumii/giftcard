import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Col, Drawer, List, Row } from "antd";

import Header from "./Header";
import Product from "./Product";
import ProductLarge from "./ProductLarge";
import Sidebar from "./Sidebar";

export default function Shop({ id }) {
  const [productListToggle, setProductListToggle] = useState(false);
  const { data: allOperator, isLoading } = useSelector((state) => state.operator);

  const pagiCheck = { pageSize: 6 };
  const pagiCheckLarge = { pageSize: 3 };

  // Sidebar Mobile
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Row gutter={32} className="hp-ecommerce-app hp-mb-32">
      <Col className="hp-mb-32" span={24}>
        <Row gutter={[32, 32]}></Row>
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Col span={24} className="hp-ecommerce-app-sidebar-mobile-btn">
            <Button type="primary" block onClick={showDrawer}>
              Filters
            </Button>
          </Col>

          <Drawer
            title="Filters"
            placement="left"
            closable={true}
            onClose={onClose}
            visible={visible}
            key="left"
            className="hp-ecommerce-app-sidebar-mobile"
          >
            <Sidebar id={id} />
          </Drawer>

          <Sidebar id={id} />

          <Col flex="1 0 0" className="hp-ecommerce-app-content">
            <Header
              productListToggle={productListToggle}
              setProductListToggle={setProductListToggle}
            />

            {!productListToggle ? (
              <List
                loading={isLoading}
                pagination={pagiCheck}
                dataSource={allOperator}
                renderItem={(value) => <Product serviceId={id} value={value} />}
              />
            ) : (
              <List
                loading={isLoading}
                pagination={pagiCheckLarge}
                dataSource={allOperator}
                renderItem={(value) => <ProductLarge serviceId={id} value={value} />}
              />
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

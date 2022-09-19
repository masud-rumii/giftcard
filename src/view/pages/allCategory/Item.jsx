import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Card, Col, Row } from "antd";
import { loadCurrentItem } from "../../../redux/ecommerce/ecommerceActions";

export default function Item(props) {
  const { value } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const handelClick = () => {
    history.push(`/product-details/${value.id}`);
    dispatch(loadCurrentItem(value));
  };

  return (
    <Col xl={6} md={12} span={24}>
      <Card
        onClick={handelClick}
        className="hp-border-color-black-40 hp-mb-32 hp-eCommerceCardOne"
      >
        <Row>
          <Col span={24}>
            {value.imgList && (
              <Col className="hp-text-center hp-my-24">
                <img
                  src={require(`../../../assets/images/product/${value.imgList}`).default}
                  alt={value.title}
                  height={125}
                />
              </Col>
            )}

            <Col className="hp-mb-24 hp-mt-16">
              {value.title && (
                <p className="hp-mb-4 hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body hp-font-weight-500">
                  {value.title}
                </p>
              )}

              {value.subTitle && (
                <p className="hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                  {value.subTitle}
                </p>
              )}
            </Col>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

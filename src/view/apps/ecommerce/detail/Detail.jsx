import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  adjustItemQty,
  loadCurrentItem,
} from "../../../../redux/ecommerce/ecommerceActions";

import { Button, Card, Col, Divider, Row } from "antd";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiShieldLine,
  RiTimeLine,
} from "react-icons/ri";

export default function Detail() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let slider1 = [];
  let slider2 = [];

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  // Redux
  const products = useSelector((state) => state.ecommerce.products);

  const value = useSelector((state) => state.ecommerce.currentItem);
  const dispatch = useDispatch();

  // Qty
  const onChangeHandler = (e, valueId) => {
    dispatch(adjustItemQty(valueId, e));
  };

  // Price;
  const discountSplit1 = value.discount.toString().split(".")[0];
  const discountSplit2 = value.discount.toString().split(".")[1];

  const priceSplit1 = value.price.toString().split(".")[0];
  const priceSplit2 = value.price.toString().split(".")[1];

  // Other Slide
  function SampleNextArrow(props) {
    const { onClick } = props;

    return (
      <Button
        onClick={onClick}
        className="hp-other-slide-next-arrow"
        icon={<RiArrowRightSLine className="remix-icon" size={18} />}
      ></Button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
      <Button
        onClick={onClick}
        className="hp-other-slide-prev-arrow"
        icon={<RiArrowLeftSLine className="remix-icon" size={18} />}
      ></Button>
    );
  }

  return (
    <Row className="hp-ecommerce-app-detail hp-mb-32" key={value.id}>
      <Col className="hp-mb-32" span={24}>
        <Row gutter={[32, 32]}></Row>
      </Col>

      <Col span={24}>
        <Card className="hp-border-color-black-40">
          <Row>
            <Col
              lg={12}
              span={24}
              className="hp-ecommerce-app-detail-slider hp-mt-sm-24 hp-mb-md-64 hp-mb-md-32"
            >
              <div className="hp-ecommerce-app-detail-single-image hp-text-center">
                <img
                  src={
                    require(`../../../../assets/images/product/${value.imgList}`).default
                  }
                  alt={value.title}
                />
              </div>
            </Col>

            <Col lg={12} span={24}>
              <h2 className="hp-mb-8">{value.title}</h2>

              <span className="hp-caption hp-d-block hp-text-color-black-60">
                By
                <span className="hp-ml-4 hp-text-color-black-80 hp-text-color-dark-30">
                  {value.person}
                </span>
              </span>

              <Divider />

              {value.colors && (
                <>
                  <Row gutter={[16, 16]} className="hp-pr-32">
                    {products.map((item) =>
                      value.colors.map(
                        (colorIndex) =>
                          item.id == colorIndex && (
                            <Col key={item.id} md={6} span={12}>
                              <Link
                                to={`/apps/ecommerce/product-detail/${item.id}`}
                                onClick={() => dispatch(loadCurrentItem(item))}
                              >
                                <div className="hp-border-radius hp-border-1 hp-border-color-black-40 hp-px-8 hp-py-12">
                                  <Row align="middle" justify="center">
                                    <Col className="hp-mr-4">
                                      <img
                                        src={
                                          require(`../../../../assets/images/product/${item.imgList}`)
                                            .default
                                        }
                                        height={28}
                                        alt={item.color}
                                      />
                                    </Col>

                                    <Col span={12} className="hp-text-center">
                                      <span className="hp-d-block hp-input-description hp-text-color-black-80 hp-font-weight-400">
                                        {item.color}
                                      </span>

                                      {item.discount ? (
                                        <span className="hp-d-block hp-input-description hp-text-color-black-100">
                                          {item.discount}
                                        </span>
                                      ) : (
                                        <span className="hp-d-block hp-input-description hp-text-color-black-100">
                                          {item.price}
                                        </span>
                                      )}
                                    </Col>
                                  </Row>
                                </div>
                              </Link>
                            </Col>
                          )
                      )
                    )}
                  </Row>

                  <Divider />
                </>
              )}

              <Row gutter={[24, 24]}>
                <Col md={24} span={24}>
                  <Row align="middle">
                    <Col
                      className="hp-border-radius-full hp-bg-color-primary-4 hp-d-flex-full-center hp-mr-8"
                      style={{ width: 36, height: 36 }}
                    >
                      <RiShieldLine className="hp-text-color-primary-1" size={24} />
                    </Col>

                    <Col>
                      <span className="hp-d-block hp-p1-body hp-font-weight-500 hp-text-color-black-100 hp-text-color-dark-0">
                        1 Year Warranty
                      </span>

                      <span className="hp-d-block hp-input-description hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                        Lorem Ipsum Dolor Sıt Amet
                      </span>
                    </Col>
                  </Row>
                </Col>

                <Col md={24} span={24}>
                  <Row align="middle">
                    <Col
                      className="hp-border-radius-full hp-bg-color-primary-4 hp-d-flex-full-center hp-mr-8"
                      style={{ width: 36, height: 36 }}
                    >
                      <RiTimeLine className="hp-text-color-primary-1" size={24} />
                    </Col>

                    <Col>
                      <span className="hp-d-block hp-p1-body hp-font-weight-500 hp-text-color-black-100 hp-text-color-dark-0">
                        14 Days Replacement
                      </span>
                      <span className="hp-d-block hp-input-description hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                        Lorem Ipsum Dolor Sıt Amet
                      </span>
                    </Col>
                  </Row>
                </Col>

                <Col md={24} span={24}>
                  <Row align="middle">
                    <Col
                      className="hp-border-radius-full hp-bg-color-primary-4 hp-d-flex-full-center hp-mr-8"
                      style={{ width: 36, height: 36 }}
                    >
                      <RiTimeLine className="hp-text-color-primary-1" size={24} />
                    </Col>

                    <Col>
                      <span className="hp-d-block hp-p1-body hp-font-weight-500 hp-text-color-black-100 hp-text-color-dark-0">
                        14 Days Replacement
                      </span>
                      <span className="hp-d-block hp-input-description hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                        Lorem Ipsum Dolor Sıt Amet
                      </span>
                    </Col>
                  </Row>
                </Col>

                <Col md={24} span={24}>
                  <Row align="middle">
                    <Col
                      className="hp-border-radius-full hp-bg-color-primary-4 hp-d-flex-full-center hp-mr-8"
                      style={{ width: 36, height: 36 }}
                    >
                      <RiTimeLine className="hp-text-color-primary-1" size={24} />
                    </Col>

                    <Col>
                      <span className="hp-d-block hp-p1-body hp-font-weight-500 hp-text-color-black-100 hp-text-color-dark-0">
                        14 Days Replacement
                      </span>
                      <span className="hp-d-block hp-input-description hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                        Lorem Ipsum Dolor Sıt Amet
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <p className="hp-mb-0 hp-p1-body hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
        </Card>
      </Col>
    </Row>
  );
}

import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Detail from "../../apps/ecommerce/detail/Detail";
import LandingFooter from "../landing/footer";
import LandingHeader from "../landing/header";

export default function Home() {
  const cart = useSelector((state) => state.ecommerce.cart);
  const current = useSelector((state) => state.ecommerce.currentItem);

  // Checkout Price
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * (item.discount ? item.discount : item.price);
    });

    setTotalItem(items);
    setTotalPrice(price);
  }, [cart, totalItem, totalPrice, setTotalItem, setTotalPrice]);

  return (
    <Row gutter={32} className="hp-ecommerce-app">
      <Col span={24}>
        <div className="hp-landing hp-bg-black-0 hp-bg-dark-90">
          <LandingHeader />
          <section className="hp-landing-container hp-landing-hero hp-pt-16">
            <div className="hp-px-sm-8 hp-px-16">
              <Detail />
            </div>
          </section>
          <LandingFooter />
          {/* <LandingFoo */}
        </div>
      </Col>
    </Row>
  );
}

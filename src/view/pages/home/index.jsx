import { Col, Row } from "antd";
import { MoneySend } from "iconsax-react";
import React from "react";
import { useSelector } from "react-redux";
import LandingFooter from "../landing/footer";
import LandingHeader from "../landing/header";
import CategoryCard from "./CategoryCard";
import HeroSlider from "./HeroSlider";
import Item from "./Item";
export default function Category() {
  const products = useSelector((state) => state.ecommerce.products);

  const arr = [
    {
      id: 1,
      title: "Mobile Top Up",
    },
    {
      id: 2,
      title: "Data Top Up",
    },
    { id: 3, title: "Bills Payment" },
    { id: 4, title: "E-Gift Voucher" },
  ];

  return (
    <Row gutter={32} className="hp-ecommerce-app">
      <Col span={24}>
        <div className="hp-landing hp-bg-black-0 hp-bg-dark-90">
          <LandingHeader />
          <HeroSlider />
          <section className="hp-landing-container hp-landing-hero hp-pt-16">
            <div className="hp-px-sm-8 hp-px-16">
              <Row gutter={[24, 24]}>
                {products.map((value) => (
                  <Item value={value} key={value.id} />
                ))}
              </Row>
            </div>
          </section>

          <section className="hp-landing-container hp-py-32">
            <Row gutter={24}>
              {arr.map((item) => (
                <CategoryCard
                  title={item.title}
                  key={item.id}
                  id={item.id}
                  icon={
                    <MoneySend
                      size="24"
                      variant="Bold"
                      className="hp-text-color-black-bg hp-text-color-dark-0"
                    />
                  }
                />
              ))}
            </Row>
          </section>
          <LandingFooter />
        </div>
      </Col>
    </Row>
  );
}

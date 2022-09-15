import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shop from "../../apps/ecommerce/shop/Shop";
import LandingFooter from "../landing/footer";
import LandingHeader from "../landing/header";

export default function Home() {
  const { id } = useParams();

  useEffect(() => {
    // return new Promise((resolve, reject) => {
    //   axios
    //     .get(
    //       "https://test815623.overseastopup.com/webappapi/v1/categories.html?productType=1&countryId=US",
    //       {
    //         headers: {
    //           accept: "application/json",
    //           "X-AGENT-ID": "612511715",
    //           "X-AGENT-TOKEN": "8f90197757d13ddcfe58dd955ff5a43b268523db",
    //         },
    //         responseType: "arraybuffer",
    //         responseEncoding: "binary",
    //       }
    //     )
    //     .catch((e) => e + "Get reqeust failed.")
    //     .then((response) => {
    //       const data = response.data;
    //     });
    // });
  }, [id]);

  return (
    <Row gutter={32} className="hp-ecommerce-app">
      <Col span={24}>
        <div className="hp-landing hp-bg-black-0 hp-bg-dark-90">
          <LandingHeader />
          <section className="hp-landing-container hp-landing-hero hp-pt-16">
            <div className="hp-px-sm-8 hp-px-16">
              <Shop />
            </div>
          </section>
          <LandingFooter />
        </div>
      </Col>
    </Row>
  );
}

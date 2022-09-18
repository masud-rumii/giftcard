import { Button, Col, Collapse, Divider, Radio, Row, Slider } from "antd";
import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import useGetAllCategories from "../../../hooks/rq/sohcitelCommunicator/useGetAllCategories";
import useGetAllCountries from "../../../hooks/rq/sohcitelCommunicator/useGetAllCountries";

const { Panel } = Collapse;

export default function Sidebar({ id }) {
  const genExtra = () => (
    <RiArrowRightSLine size={24} className="hp-collapse-arrow hp-text-color-black-60" />
  );

  const { data: countries, isLoading } = useGetAllCountries();
  const { data: allCategories, isLoading: categoryLoading } = useGetAllCategories(id);

  const defaultCategoryId = allCategories?.data?.data[0]?.id;

  const [CountryName, setCountryName] = useState(0);
  const [categoryId, setCategoryId] = useState(defaultCategoryId);
  const [valueTags, setValueTags] = useState(0);

  const priceMinValue = 0;
  const priceMaxValue = 500;
  const [priceMin, setPriceMin] = useState(priceMinValue);
  const [priceMax, setPriceMax] = useState(priceMaxValue);

  const priceOnChange = (value) => {
    setPriceMin(value[0]);
    setPriceMax(value[1]);
  };

  const onCountryChange = (e) => {
    setCountryName(e.target.value);
  };

  const onCategoryChange = (e) => {
    setCategoryId(e.target.value);
  };

  const onChangeTags = (e) => {
    setValueTags(e.target.value);
  };

  return (
    <Col flex="0 0 270px" className="hp-ecommerce-app-sidebar">
      <Row className="hp-border-radius hp-overflow-hidden hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100 hp-px-24 hp-py-16">
        <Col span={24}>
          <h5 className="hp-mb-4 hp-text-color-black-80 hp-text-color-dark-30">
            Digital Cameras
          </h5>
          <span className="hp-badge-text hp-d-block hp-text-color-black-80 hp-text-color-dark-30">
            112 Product
          </span>
        </Col>

        <Divider />

        <Collapse>
          <Panel
            header={
              <h5 className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
                All Countries
              </h5>
            }
            key="1"
            showArrow={false}
            extra={genExtra()}
          >
            {!isLoading ? (
              <Radio.Group onChange={onCountryChange} value={CountryName}>
                {countries?.data?.data?.map((country, idx) => (
                  <Row className="hp-mt-16" key={idx}>
                    <Col span={24}>
                      <Row align="middle" justify="space-between">
                        <Radio value={country.code}>{country.name}</Radio>
                      </Row>
                    </Col>
                  </Row>
                ))}
              </Radio.Group>
            ) : (
              "Loading..."
            )}
          </Panel>
        </Collapse>

        <Divider />

        <Collapse>
          <Panel
            header={
              <h5 className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
                Categories
              </h5>
            }
            key="1"
            showArrow={false}
            extra={genExtra()}
          >
            {!categoryLoading ? (
              <Radio.Group
                onChange={onCategoryChange}
                value={categoryId}
                defaultValue={defaultCategoryId}
              >
                {allCategories?.data?.data?.map((category, idx) => (
                  <Row className="hp-mt-16" key={idx}>
                    <Col span={24}>
                      <Row align="middle" justify="space-between">
                        <Radio value={category.id}>{category.name}</Radio>
                      </Row>
                    </Col>
                  </Row>
                ))}
              </Radio.Group>
            ) : (
              "Loading..."
            )}
          </Panel>
        </Collapse>

        <Divider />

        <Collapse>
          <Panel
            header={
              <h5 className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
                Price Range
              </h5>
            }
            key="1"
            showArrow={false}
            extra={genExtra()}
          >
            <Row className="hp-mt-16">
              <Col span={24}>
                <Row align="middle" justify="space-between" gutter={[8]}>
                  <Col span={11}>
                    <div className="hp-border-radius hp-overflow-hidden hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100 hp-p-12">
                      <span>$ {priceMin}</span>
                    </div>
                  </Col>

                  <Col className="hp-text-color-black-40 hp-text-color-dark-70">-</Col>

                  <Col span={11}>
                    <div className="hp-border-radius hp-overflow-hidden hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100 hp-p-12">
                      <span>$ {priceMax}</span>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col span={24}>
                <Slider
                  className="hp-mt-24 hp-mx-16"
                  range
                  min={priceMinValue}
                  max={priceMaxValue}
                  onChange={priceOnChange}
                  defaultValue={[priceMin, priceMax]}
                  tipFormatter={null}
                />
              </Col>
            </Row>
          </Panel>
        </Collapse>

        <Divider />

        <Collapse>
          <Panel
            header={
              <h5 className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
                Tags
              </h5>
            }
            key="1"
            showArrow={false}
            extra={genExtra()}
          >
            <Radio.Group onChange={onChangeTags} value={valueTags}>
              <Row className="hp-mt-16">
                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={1}>Featured</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">
                      1,417
                    </span>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={2}>On Sale</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">
                      230
                    </span>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={3}>New</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">
                      402
                    </span>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={4}>Sponsored</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">
                      188
                    </span>
                  </Row>
                </Col>
              </Row>
            </Radio.Group>
          </Panel>
        </Collapse>

        <Button block type="primary" className="hp-mt-32">
          Remove Filter
        </Button>
      </Row>
    </Col>
  );
}

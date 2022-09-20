import React, { useEffect, useState } from "react";

// redux
import { useDispatch } from "react-redux";
import {
  allOperators,
  operatorLoadingFunc,
} from "../../../redux/operator/operatorActions";

// antd
import { Button, Col, Collapse, Divider, Radio, Row, Slider, Input } from "antd";
const { Panel } = Collapse;
const { Search } = Input;

// icons
import { RiArrowRightSLine, RiSearchLine } from "react-icons/ri";

// hooks
import useGetAllCategories from "../../../hooks/rq/sohcitelCommunicator/useGetAllCategories";
import useGetAllCountries from "../../../hooks/rq/sohcitelCommunicator/useGetAllCountries";
import useGetAllOperator from "../../../hooks/rq/sohcitelCommunicator/useGetAllOperator";

// Sidebar
export default function Sidebar({ id }) {
  const genExtra = () => (
    <RiArrowRightSLine size={24} className="hp-collapse-arrow hp-text-color-black-60" />
  );

  const { data: countries, isLoading } = useGetAllCountries();
  const { data: allCategories, isLoading: categoryLoading } = useGetAllCategories(id);
  const dispatch = useDispatch();
  const defaultCategoryId = allCategories?.data?.data[0]?.id;

  const [CountryName, setCountryName] = useState("");
  const [categoryId, setCategoryId] = useState(defaultCategoryId);
  const [valueTags, setValueTags] = useState(0);
  const { data: allOperator, isLoading: operatorLoading } = useGetAllOperator({
    serviceId: id,
    categoryId: categoryId,
    countryId: CountryName,
  });

  useEffect(() => {
    const data = allOperator?.data?.data;

    dispatch(allOperators(data));
    dispatch(operatorLoadingFunc(operatorLoading));
  }, [operatorLoading, CountryName, categoryId]);

  const priceMinValue = 0;
  const priceMaxValue = 500;
  const [priceMin, setPriceMin] = useState(priceMinValue);
  const [priceMax, setPriceMax] = useState(priceMaxValue);

  const priceOnChange = (value) => {
    setPriceMin(value[0]);
    setPriceMax(value[1]);
  };

  const onCountryChange = (e) => {
    setCountryName(() => e.target.value);
    // queryClient.invalidateQueries(["fetchAllOperator"]);
  };

  const onCategoryChange = (e) => {
    setCategoryId(() => e.target.value);
    // queryClient.invalidateQueries(["fetchAllOperator"]);
  };

  const onChangeTags = (e) => {
    setValueTags(() => e.target.value);
    // queryClient.invalidateQueries(["fetchAllOperator"]);
  };

  const [countrySearchQuery, setCountrySearchQuery] = useState("");
  const onSearch = (e) => {
    setCountrySearchQuery(e.target.value);
  };

  console.log(countrySearchQuery);

  return (
    <Col flex="0 0 270px" className="hp-ecommerce-app-sidebar">
      <Row className="hp-border-radius hp-overflow-hidden hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100 hp-px-24 hp-py-16">
        <Col span={24}>
          <h5 className="hp-mb-4 hp-text-color-black-80 hp-text-color-dark-30">
            Operators
          </h5>
          <span className="hp-badge-text hp-d-block hp-text-color-black-80 hp-text-color-dark-30">
            {/* 112 Product */}
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
              <>
                <Input
                  placeholder="Placeholder text"
                  className="hp-mt-12"
                  onChange={onSearch}
                  prefix={<RiSearchLine set="curved" className="remix-icon" size={16} />}
                />

                <Radio.Group onChange={onCountryChange} value={CountryName}>
                  {countries?.data?.data
                    ?.filter((obj) => {
                      if (countrySearchQuery === "") return true;
                      return obj.name.search(new RegExp(countrySearchQuery, "i")) === -1
                        ? false
                        : true;
                    })
                    .map((country, idx) => (
                      <Row className="hp-mt-16" key={idx}>
                        <Col span={24}>
                          <Row align="middle" justify="space-between">
                            <Radio value={country.code}>{country.name}</Radio>
                          </Row>
                        </Col>
                      </Row>
                    ))}
                </Radio.Group>
              </>
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

        <Button block type="primary" className="hp-mt-32">
          Remove Filter
        </Button>
      </Row>
    </Col>
  );
}

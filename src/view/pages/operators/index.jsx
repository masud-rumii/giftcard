import { useEffect, useState } from "react";
import axiosInstance from "../../../configs/axios";

// antd
import { Col, Row, Select, Space, Spin } from "antd";

// hooks
import useGetAllServices from "../../../hooks/rq/sohcitelCommunicator/useGetAllService";
import useGetAllCountries from "../../../hooks/rq/sohcitelCommunicator/useGetAllCountries";
import useGetAllOperator from "../../../hooks/rq/sohcitelCommunicator/useGetAllOperator";

// components
import OperatorsTable from "./OperatorsTable";

// Operators
export default function Operators() {
  const { data: services } = useGetAllServices();
  const { data: countries } = useGetAllCountries();

  const [categories, setCategories] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);

  const [firstService, setFirstService] = useState("");
  const [serviceId, setServiceId] = useState("");

  const [firstCountry, setFirstCountry] = useState("");
  const [countryId, setCountryId] = useState("");

  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    if (services) {
      setFirstService(services?.data.data[0].description);
      setServiceId(services?.data.data[0].id);
    }
  }, [services]);

  useEffect(() => {
    if (countries) {
      setFirstCountry(countries?.data.data[0].name);
      setCountryId(countries?.data.data[0].code);
    }
  }, [countries]);

  const handleServiceChange = (value) => {
    setServiceId(value);
  };

  const handleCountryChange = (value) => {
    setCountryId(value);
  };

  const handleCategoryChange = (value) => {
    setCategoryId(value);
  };

  useEffect(async () => {
    try {
      console.log({ serviceId, countryId });

      const URI = `/get-all-category?service_id=${serviceId}&country_id=${countryId}`;
      setIsCategoryLoading(true);
      const { data } = await axiosInstance.get(URI);
      setCategories(data.data);
      setCategoryId(data.data[0].id);
      setIsCategoryLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [countryId, serviceId]);

  console.log({ serviceId, countryId, categoryId });

  const { data: operators, isLoading: isOperatorLoading } = useGetAllOperator({
    serviceId,
    countryId,
    categoryId,
  });

  return (
    <Row gutter={[16, 16]}>
      <Col>
        <Space>
          {/* service */}

          {firstService && (
            <Select
              defaultValue={firstService}
              style={{
                width: 150,
              }}
              onChange={handleServiceChange}
            >
              {services?.data.data.map((service) => (
                <Select.Option key={service.id} value={service.id}>
                  {service.description}
                </Select.Option>
              ))}
            </Select>
          )}

          {/* country */}

          {firstCountry && (
            <Select
              defaultValue={firstCountry}
              style={{
                width: 300,
              }}
              onChange={handleCountryChange}
            >
              {countries?.data.data.map((country) => (
                <Select.Option key={country.code} value={country.code}>
                  {country.name}
                </Select.Option>
              ))}
            </Select>
          )}

          {/* category */}

          {isCategoryLoading ? (
            <div className="hp-ml-24">
              <Spin />
            </div>
          ) : (
            <Select
              placeholder="Select"
              style={{
                width: 150,
              }}
              onChange={handleCategoryChange}
              loading={isCategoryLoading}
            >
              {categories.map((category) => (
                <Select.Option key={category.id} value={category.id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          )}
        </Space>
      </Col>
      <Col span={24}>
        <OperatorsTable dataSource={operators?.data.data} loading={isOperatorLoading} />
      </Col>
    </Row>
  );
}

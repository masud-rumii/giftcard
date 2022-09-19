import { useEffect, useState } from "react";
import axiosInstance from "../../../configs/axios";

// antd
import { Col, Row, Select, Space } from "antd";

// hooks
import useGetAllServices from "../../../hooks/rq/sohcitelCommunicator/useGetAllService";
import useGetAllCategories from "../../../hooks/rq/sohcitelCommunicator/useGetAllCategories";
import useGetAllCountries from "../../../hooks/rq/sohcitelCommunicator/useGetAllCountries";

// components
import OperatorsTable from "./OperatorsTable";

// Operators
export default function Operators() {
  const { data: services } = useGetAllServices();
  const { data: countries } = useGetAllCountries();
  // const { data: categories, isLoading } = useGetAllCategories();

  const [categories, setCategories] = useState([]);

  const [firstService, setFirstService] = useState("");
  const [firstServiceId, setFirstServiceId] = useState("");
  const [firstCountry, setFirstCountry] = useState("");
  const [firstCountryId, setFirstCountryId] = useState("");

  const [serviceId, setServiceId] = useState("");
  const [countryId, setCountryId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    if (services) {
      setFirstService(services?.data.data[0].description);
      setFirstServiceId(services?.data.data[0].id);
    }
  }, [services]);

  useEffect(() => {
    if (countries) {
      setFirstCountry(countries?.data.data[0].name);
      setFirstCountryId(countries?.data.data[0].code);
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
      console.log({ countryId, serviceId });

      const { data } = await axiosInstance.get(
        `http://178.128.127.100/sochitel-communicator/public/api/get-all-category?service_id=${
          serviceId || firstServiceId
        }&country_id=${countryId || firstCountryId}`
      );
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }, [countryId, serviceId, firstCountryId, firstServiceId]);

  console.log(categories);

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
                <Option key={service.id} value={service.id}>
                  {service.description}
                </Option>
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
                <Option key={country.code} value={country.code}>
                  {country.name}
                </Option>
              ))}
            </Select>
          )}

          {/* category */}

          {categories && (
            <Select
              placeholder="Select"
              style={{
                width: 150,
              }}
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <Option key={category.id} value={category.id}>
                  {category.name}
                </Option>
              ))}
            </Select>
          )}
        </Space>
      </Col>
      <Col span={24}>
        <OperatorsTable />
      </Col>
    </Row>
  );
}

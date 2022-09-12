import { Col, Modal, Row, Space, Table } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import LandingFooter from "../landing/footer";
import LandingHeader from "../landing/header";

export default function EditProduct() {
  const handelDelete = (id) => {
    console.log(id);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const showModal = (id) => {
    setId(id);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const products = useSelector((state) => state.ecommerce.products);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: "5%",
    },
    {
      title: "subTitle",
      dataIndex: "subTitle",
      key: "subTitle",
    },

    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "rate",
      dataIndex: "rate",
      key: "rate",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => showModal(record.id)}>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Row gutter={32} className="hp-ecommerce-app">
        <Col span={24}>
          <div className="hp-landing hp-bg-black-0 hp-bg-dark-90">
            <LandingHeader />

            <section className="hp-landing-container hp-landing-hero hp-pt-16">
              <div className="hp-px-sm-8 hp-px-16">
                <Table columns={columns} dataSource={products} rowKey="id" />;
              </div>
            </section>

            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>ID {id}...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>

            <section className="hp-landing-container hp-py-32">
              <Row gutter={24}></Row>
            </section>
            <LandingFooter />
          </div>
        </Col>
      </Row>
    </>
  );
}

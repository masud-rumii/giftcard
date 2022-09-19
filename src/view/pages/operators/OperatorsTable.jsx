import { Modal, Space, Table } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function OperatorsTable() {
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
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={products} rowKey="id" />
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
    </>
  );
}

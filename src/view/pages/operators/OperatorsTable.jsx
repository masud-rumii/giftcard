import { Button, Form, Input, Modal, Space, Table } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function OperatorsTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const [titleText, setTitleText] = useState("");

  const showModal = (id, title) => {
    setTitleText(title);
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
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "TITLE",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "SUBTITLE",
      dataIndex: "subTitle",
      key: "subTitle",
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "RATE",
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: "ACTIONS",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => showModal(record.id, record.title)}>Edit</a>
        </Space>
      ),
    },
  ];

  const onFinish = (values) => {
    const payload = {
      operator_id: id,
      description: values.description,
    };
    console.log("Success:", payload);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { TextArea } = Input;

  return (
    <>
      <Table columns={columns} dataSource={products} rowKey="id" />
      <Modal
        title={titleText}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your Description!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

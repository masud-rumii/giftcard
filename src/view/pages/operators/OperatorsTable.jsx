import { useState } from "react";

// antd
import { Button, Form, Input, Modal, Space, Table, Image } from "antd";
const { TextArea } = Input;

export default function OperatorsTable({ dataSource, loading }) {
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

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: "5%",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "LOGO",
      dataIndex: "logoUrl",
      key: "logoUrl",
      render: (text) => <Image src={text} height={30} />,
    },
    {
      title: "COUNTRY CODE",
      dataIndex: "countryId",
      key: "countryId",
    },
    {
      title: "CURRENCY",
      dataIndex: "currencyId",
      key: "currencyId",
    },
    {
      title: "ACTIONS",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => showModal(record.id)}>Edit</a>
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

  return (
    <>
      <Table columns={columns} dataSource={dataSource} rowKey="id" loading={loading} />
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

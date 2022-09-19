import { useState } from "react";
import { Col, Row, Modal, Button } from "antd";
import SliderImageTable from "./SliderImageTable";
import SliderImageModal from "./SliderImageModal";

export default function SliderImages() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Row>
      <Col span={24}>
        <Row justify="end">
          <Col>
            <Button
              ghost
              className="hp-mt-sm-16 hp-mb-16"
              type="primary"
              onClick={showModal}
            >
              Add New Image
            </Button>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <SliderImageTable />
      </Col>

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <SliderImageModal />
      </Modal>
    </Row>
  );
}

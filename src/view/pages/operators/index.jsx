import { Col, Row } from "antd";

import OperatorsTable from "./OperatorsTable";

export default function Operators() {
  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <OperatorsTable />
      </Col>
    </Row>
  );
}

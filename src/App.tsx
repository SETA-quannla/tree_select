import { Button, Col, Row, Typography } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import TreeSelectCustome from "./TreeSelect";

const { Title } = Typography;
function App() {
  return (
    <Row justify="center">
      <Col xs={22} sm={18} md={14} lg={10} xl={8}>
        <Row justify="center">
          <Title level={3}>Copy Data to Folder</Title>
        </Row>

        <TreeSelectCustome />

        {/* <TreeDrag /> */}
        <Row justify="end">
          <Button style={{ marginRight: 4 }}>Cancel</Button>
          <Button type="primary">Save</Button>
        </Row>
      </Col>
    </Row>
  );
}

export default App;

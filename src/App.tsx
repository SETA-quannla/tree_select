import { Button, Col, Row, Typography } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import "./App.css";
import TreeSelectCustome from "./TreeSelect";

export type OneFolder = {
  name: string;
  visible: "all" | "only" | "specific";
  specificUser?: string[];
  children?: OneFolder[];
  id: string;
};

const { Title } = Typography;
function App() {
  const [data, setData] = useState<OneFolder[]>([
    { name: "Folder 1", visible: "all", id: "123" },
    {
      name: "Folder 2",
      visible: "all",
      id: "456",
      children: [
        {
          name: "Folder 3",
          visible: "all",
          children: [{ name: "Folder 4", visible: "all", id: "456-1-1" }],
          id: "456-1",
        },
      ],
    },
  ]);

  return (
    <Row justify="center">
      <Col xs={22} sm={18} md={14} lg={10} xl={8}>
        <Row justify="center">
          <Title level={3}>Copy Data to Folder</Title>
        </Row>

        <TreeSelectCustome data={data} />

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

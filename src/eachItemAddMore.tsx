import { TreeSelect, Divider, Input, Select, Row, Typography, Col } from "antd";

import {
  FolderFilled,
  FolderOutlined,
  DeleteFilled,
  SaveFilled,
} from "@ant-design/icons";
import { OneFolder } from "./App";

const { Link } = Typography;
const { Option } = Select;

const ItemAddMore = ({ data }: { data: OneFolder }) => {
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i} value={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>
    );
  }

  return (
    <div style={{ paddingLeft: 4, display: "flex" }}>
      <div>
        <div
          style={{
            width: 24,
            height: 24,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FolderOutlined style={{ color: "#000000D9" }} />
        </div>
      </div>
      <div>
        <Input placeholder="Enter new folder name" />
        <Select defaultValue="all" style={{ width: "100%", marginTop: 8 }}>
          <Option value="all">Visible to Everyone</Option>
          <Option value="only">Visible to only Me</Option>
          <Option value="specific">Visible to specific</Option>
        </Select>

        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%", marginTop: 8 }}
          placeholder="Please select"
          defaultValue={["a10", "c12"]}
          // onChange={handleChange}
        >
          {children}
        </Select>

        <Row justify="end" style={{ marginTop: 8 }}>
          <DeleteFilled
            style={{
              marginRight: 8,
              cursor: "pointer",
              fontSize: 24,
              color: "red",
            }}
          />
          <SaveFilled
            style={{
              cursor: "pointer",
              fontSize: 24,
              color: "green",
            }}
          />
        </Row>
      </div>

      <Divider style={{ margin: 0, marginTop: 8 }} />
    </div>
  );
};

export default ItemAddMore;

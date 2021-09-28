import { Col, Divider, Input, Row, Typography } from "antd";
import { useState } from "react";
import ItemAddMore from "./eachItemAddMore";

import { OneFolder } from "./App";

const { Link } = Typography;

const AddMore = () => {
  const [listItemsAddMore, setListItemsAddMore] = useState<OneFolder[]>([]);

  const handleClickAddMore = () => {
    setListItemsAddMore((preState) => [
      ...preState,
      {
        id: Date().valueOf() + "",
        name: "",
        visible: "all",
      },
    ]);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <Row align="middle" justify="space-between" style={{ padding: 8 }}>
        <Col span="16" style={{ paddingRight: 16 }}>
          <Input
          // style={{ flexGrow: 0 }}
          // value={name}
          // onChange={this.onNameChange}
          />
        </Col>

        <Col span="7" style={{ textAlign: "right" }}>
          <Link onClick={handleClickAddMore}>Add New Folder</Link>
        </Col>
      </Row>

      <Row style={{ padding: "8px 24px 0 24px" }}>
        <Col span="16" style={{ paddingRight: 16 }}>
          {listItemsAddMore.map((item) => (
            <ItemAddMore data={item} key={item.id} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default AddMore;

import { Col, Divider, Input, Row, Typography } from "antd";
import { useState } from "react";
import ItemAddMore from "./eachItemAddMore";

import { OneFolderType } from "./data";

const { Link } = Typography;

const AddMore = ({
  addMoreFolder,
}: {
  addMoreFolder: (folder: OneFolderType) => void;
}) => {
  const [listItemsAddMore, setListItemsAddMore] = useState<string[]>([]);

  const handleClickAddMore = () => {
    setListItemsAddMore((preState) => [...preState, new Date().getTime() + ""]);
  };

  const handleRemoveOneFolder = (id: string) => () => {
    setListItemsAddMore((preState) => preState.filter((item) => item !== id));
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

      <Row style={{ padding: "" }}>
        <Col span="16" style={{ paddingRight: 16 }}>
          {listItemsAddMore.map((item) => (
            <ItemAddMore
              key={item}
              handleRemove={handleRemoveOneFolder(item)}
              addMoreFolder={addMoreFolder}
              id={item}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default AddMore;

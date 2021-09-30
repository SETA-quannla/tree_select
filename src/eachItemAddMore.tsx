import { DeleteFilled, FolderOutlined, SaveFilled } from "@ant-design/icons";
import { Divider, Input, Row, Select } from "antd";
import { ChangeEventHandler, useState } from "react";
import { OneFolderType } from "./data";
import { names } from "./data";

const { Option } = Select;

const ItemAddMore = ({
  handleRemove,
  addMoreFolder,
  id,
}: {
  handleRemove: () => void;
  addMoreFolder: (folder: OneFolderType) => void;
  id: string;
}) => {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState<"all" | "only" | "specific">("all");
  const [specificUser, setSpecificUser] = useState<string[]>([]);

  const handChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleChangeSelect = (value: "all" | "only" | "specific") => {
    setVisible(value);
  };

  const handleChangeSelectSpecific = (value: string[]) => {
    // console.log("aaaaaaaaaa", value);
    setSpecificUser(value);
  };

  const handleAddMore = () => {
    addMoreFolder({ id, name, visible, specificUser });
    handleRemove();
  };

  return (
    <div style={{ paddingLeft: 4, marginLeft: 24 }}>
      <div style={{ display: "flex" }}>
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
          <Input
            placeholder="Enter new folder name"
            value={name}
            onChange={handChangeName}
          />
          <Select
            defaultValue={visible}
            style={{ width: "100%", marginTop: 8 }}
            onChange={handleChangeSelect}
          >
            <Option value="all">Visible to Everyone</Option>
            <Option value="only">Visible to only Me</Option>
            <Option value="specific">Visible to specific</Option>
          </Select>

          {visible === "specific" && (
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%", marginTop: 8 }}
              placeholder="Please select"
              // defaultValue={["a10", "c12"]}
              value={specificUser}
              onChange={handleChangeSelectSpecific}
            >
              {names.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          )}

          <Row justify="end" style={{ marginTop: 8 }}>
            <DeleteFilled
              style={{
                marginRight: 8,
                cursor: "pointer",
                fontSize: 24,
                color: "red",
              }}
              onClick={handleRemove}
            />
            <SaveFilled
              style={{
                cursor: "pointer",
                fontSize: 24,
                color: "green",
              }}
              onClick={handleAddMore}
            />
          </Row>
        </div>
      </div>
      <Divider style={{ margin: 0, marginTop: 8 }} />
    </div>
  );
};

export default ItemAddMore;

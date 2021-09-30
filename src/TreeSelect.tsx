import { Divider, TreeSelect, Typography, Tree } from "antd";
import AddMore from "./AddMore";
import { OneFolderType } from "./data";
import TreeDrag from "./TreeDrag";
import ItemAddMore from "./eachItemAddMore";

import { FolderOutlined, FolderOpenOutlined } from "@ant-design/icons";
import { useState } from "react";
import { folderDataTree } from "./data";

const { Link } = Typography;

const { TreeNode } = TreeSelect;

const TreeSelectCustome = () => {
  const [data, setData] = useState<OneFolderType[]>(folderDataTree);
  const handeAddMore = (folder: OneFolderType) => {
    setData((preState) => [folder, ...preState]);
  };

  return (
    <div>
      <TreeSelect
        placeholder="Select Folder"
        style={{ width: "100%", margin: "16px 0" }}
        open
        dropdownRender={() => {
          return (
            <div>
              <AddMore addMoreFolder={handeAddMore} />

              <TreeDrag data={data} />
              <Divider style={{ margin: "4px 0" }} />
              {/* {menu} */}
            </div>
          );
        }}
        treeIcon
      >
        {/* {renderTree(data)} */}
      </TreeSelect>
    </div>
  );
};

export default TreeSelectCustome;
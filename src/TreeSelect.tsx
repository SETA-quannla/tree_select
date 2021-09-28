import { Divider, TreeSelect, Typography, Tree } from "antd";
import AddMore from "./AddMore";
import { OneFolder } from "./App";
import TreeDrag from "./TreeDrag";
import ItemAddMore from "./eachItemAddMore";

import { FolderOutlined, FolderOpenOutlined } from "@ant-design/icons";

const { Link } = Typography;

const { TreeNode } = TreeSelect;

const TreeSelectCustome = ({ data }: { data: OneFolder[] }) => {
  return (
    <div>
      <TreeSelect
        placeholder="Select Folder"
        style={{ width: "100%", margin: "16px 0" }}
        open
        dropdownRender={() => {
          return (
            <div>
              <AddMore />

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

// const renderTree = (data: OneFolder[]) => {
//   return data.map((item) => {
//     return (
//       <TreeNode
//         key={item.name}
//         value={item.name}
//         title={
//           <div style={{ display: "inline-block" }}>
//             <div>{item.name}</div>
//             <div>{item.visible}</div>
//           </div>
//         }
//         icon={(props: { expanded: boolean }) => {
//           console.log("selected", props);

//           return props.expanded ? <FolderOpenOutlined /> : <FolderOutlined />;
//         }}
//         // icon={FolderOpenOutlined}
//       >
//         {item.children && renderTree(item.children)}
//       </TreeNode>
//     );
//   });
// };

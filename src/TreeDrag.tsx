import React, { useState } from "react";
import { Tree, Row, Input } from "antd";
import { FolderOutlined, FolderOpenOutlined } from "@ant-design/icons";
import Select from "rc-select";
import ItemAddMore from "./eachItemAddMore";
import { OneFolderType } from "./data";

const { Option } = Select;

const chageDataToDataRender: (data: OneFolderType[]) => {
  title: any;
  key: string;
  icon: any;
  children: any;
}[] = (data: OneFolderType[]) => {
  return data.map((item) => {
    return {
      title: (
        <div style={{ display: "inline-block" }}>
          <div>{item.name}</div>
          <div>{item.visible}</div>
        </div>
      ),
      key: item.id,
      icon: (props: { expanded: boolean }) => {
        return props.expanded ? <FolderOpenOutlined /> : <FolderOutlined />;
      },
      children: item.children ? chageDataToDataRender(item.children) : null,
    };
  });
};

const TreeDrag = ({ data }: { data: OneFolderType[] }) => {
  const [state, setState] = useState([
    {
      title: (
        <div style={{ display: "inline-block", width: "calc(100% - 24px)" }}>
          {/* <ItemAddMore /> */}
        </div>
      ),
      icon: (props: { expanded: boolean }) => {
        return props.expanded ? <FolderOpenOutlined /> : <FolderOutlined />;
      },
      key: "0-0",
    },
    {
      title: "0-1",
      key: "0-1",
      children: [
        { title: "0-1-0-0", key: "0-1-0-0" },
        { title: "0-1-0-1", key: "0-1-0-1" },
        { title: "0-1-0-2", key: "0-1-0-2" },
      ],
    },
    {
      title: "0-2",
      key: "0-2",
    },
  ]);

  const dataRender = chageDataToDataRender(data);

  const onDragEnter = (info: any) => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  };

  const onDrop = (info: any) => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data: any, key: any, callback: any) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = [...state];

    // Find dragObject
    let dragObj: any;
    loop(data, dragKey, (item: any, index: any, arr: any) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item: { children: any[] }) => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item: { children: any[] }) => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
      let ar: any;
      let i: any;
      loop(data, dropKey, (_item: any, index: any, arr: any) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    setState(data);
  };

  return (
    <Tree
      className="draggable-tree"
      autoExpandParent
      draggable
      blockNode
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      treeData={dataRender}
      showIcon
    />
  );
};

export default TreeDrag;

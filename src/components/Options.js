import React from "react";
import Menu from "antd/es/menu";
import Dropdown from "antd/es/dropdown/dropdown";
import Tree from "antd/es/tree";
import Icon from "antd/es/icon/index";

const { TreeNode } = Tree;
const { SubMenu } = Menu;

export { Tree };

const menu = (
  <Menu>
    <SubMenu title="New">
      <Menu.Item>Child</Menu.Item>
      <Menu.Item>Same Level</Menu.Item>
    </SubMenu>
    <Menu.Item>Delete</Menu.Item>
    <Menu.Item>Cut</Menu.Item>
    <Menu.Item>Copy</Menu.Item>
  </Menu>
);

const RenderOptions = ({ children, title }) => (
  // <Dropdown overlay={menu} trigger={["contextMenu"]}>
  <TreeNode title={title} key={title}>
    {children}
  </TreeNode>
  // </Dropdown>
);

export default RenderOptions;

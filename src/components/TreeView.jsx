import React from "react";
import Tree from "antd/es/tree";
import { buildTree, getObjKeys } from "./Utilities";
import apiData from "./Data";
import RenderOptions from "./Options";
const { TreeNode } = Tree;

const { useMemo, memo } = React;

const TreeView = () => {
  const mainMenus = useMemo(() => getObjKeys(apiData), [apiData]);

  const renderNodes = values => {
    const subMenus = getObjKeys(values);
    return subMenus.map(subMenuName => {
      const forms = values[subMenuName];
      return (
        <TreeNode title={subMenuName} key={subMenuName}>
          {forms && forms.map(form => <TreeNode title={form} key={form} />)}
        </TreeNode>
      );
    });
  };

  return (
    <Tree onRightClick={(e, node) => console.log(e, node)}>
      {mainMenus.map(item => (
        <TreeNode title={item} children={renderNodes(apiData[item])} />
      ))}
    </Tree>
  );
};

export default memo(TreeView);

import * as React from "react";

import {
  TreeView,
  TreeViewExpandChangeEvent,
  TreeViewCheckChangeEvent,
  TreeViewItemClickEvent,
  processTreeViewItems,
  handleTreeViewCheckChange,
  ItemRenderProps,
  Stack,
  IconButton,
  IContextualMenuProps
} from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

interface TreeViewDataItem {
  text: string;
  expanded?: boolean;
  checked?: boolean;
  selected?: boolean;
  items?: TreeViewDataItem[];
}

const tree: TreeViewDataItem[] = [
  {
    text: "Furniture",
    items: [
      { text: "tables_chairs" },
      { text: "Sofas" },
      { text: "occasional_furniture" }
    ]
  },
  {
    text: "Decor",
    items: [
      { text: "bed_linen" },
      { text: "curtains_blinds" },
      { text: "Carpets" }
    ]
  }
];

const menuProps: IContextualMenuProps = {
  items: [
    {
      key: "emailMessage",
      text: "email_message",
      iconProps: { iconName: "Mail" }
    },
    {
      key: "calendarEvent",
      text: "calendar_event",
      iconProps: { iconName: "Calendar" }
    }
  ]
};

const TreeItem = (props: ItemRenderProps) => {
  const [t] = useTranslation("tree");

  const item = props.item as TreeViewDataItem;

  /*
        因为默认.k-treeview-leaf-text不是水平100%宽度的，所以这里用css加了一条，让其水平充满所有空间
        .directory-treeview .k-treeview-leaf-text {
            flex: 1;
        }

        因为css-in-js的方式，对hover的支持比较差，所以对于action button的hover状态下显示，添加了如下css
        .directory-treeview .directory-tree-action {
            display: none;
        }
        .directory-treeview .k-treeview-mid:hover .directory-tree-action {
            display: inline-block;
        }
    */
  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      {item.text}

      <IconButton
        className="directory-tree-action"
        style={{ width: 32, height: 32, minWidth: 32 }}
        bordered
        iconProps={{ iconName: "fas-ellipsis", style: { fontSize: 20 } }}
        menuIconProps={{ style: { display: "none" } }}
        menuProps={{
          ...menuProps,
          items: menuProps.items.map((item) => ({
            ...item,
            text: t(`${item.text}`)
          }))
        }}
      />
    </Stack>
  );
};

export const SampleDirectory = () => {
  const [t] = useTranslation("tree");

  const [check, setCheck] = React.useState({
    applyCheckIndeterminate: true,
    ids: [],
    idField: "text"
  });
  const [expand, setExpand] = React.useState({
    ids: ["Item2"],
    idField: "text"
  });
  const [select, setSelect] = React.useState([""]);
  const onItemClick = (event: TreeViewItemClickEvent) => {
    setSelect([event.itemHierarchicalIndex]);
  };
  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    const ids = expand.ids.slice();
    const index = ids.indexOf(event.item.text);

    index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
    setExpand({ ids, idField: "text" });
  };
  const onCheckChange = (event: TreeViewCheckChangeEvent) => {
    const settings = {
      singleMode: false,
      checkChildren: true,
      checkParents: true
    };
    setCheck(handleTreeViewCheckChange(event, check, tree, settings));
  };
  return (
    <div style={{ width: 430 }}>
      <TreeView
        item={TreeItem}
        directoryTree={true}
        data={processTreeViewItems(
          tree.map((node) => ({
            ...node,
            text: t(node.text.toLowerCase()),
            items: node.items
              ? node.items.map((subNode) => ({
                  ...subNode,
                  text: t(subNode.text.toLowerCase()),
                  items: subNode.items
                    ? subNode.items.map((subSubNode) => ({
                        ...subSubNode,
                        text: t(subSubNode.text.toLowerCase())
                      }))
                    : undefined
                }))
              : undefined
          })),
          {
            select: select,
            check: check,
            expand: expand
          }
        )}
        expandIcons={true}
        onExpandChange={onExpandChange}
        aria-multiselectable={true}
        onItemClick={onItemClick}
        checkboxes={true}
        onCheckChange={onCheckChange}
      />
    </div>
  );
};

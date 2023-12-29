import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  TreeView,
  TreeViewCheckDescriptor,
  TreeViewCheckChangeSettings,
  TreeViewExpandChangeEvent,
  TreeViewCheckChangeEvent,
  TreeViewItemClickEvent,
  processTreeViewItems,
  handleTreeViewCheckChange
} from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

interface TreeViewDataItem {
  id: string;
  text: string;
  expanded?: boolean;
  checked?: boolean;
  selected?: boolean;
  items?: TreeViewDataItem[];
}
const tree: TreeViewDataItem[] = [
  {
    id: "1",
    text: "Nutrition",
    items: [
      {
        id: "2-1",
        text: "Vegetables",
        items: [
          {
            id: "2-1-1",
            text: "Carrot"
          },
          {
            id: "2-1-2",
            text: "Potato"
          },
          {
            id: "2-1-3",
            text: "Cabbage"
          }
        ]
      },
      {
        id: "2-2",
        text: "Fats",
        items: [
          {
            id: "2-2-1",
            text: "Oil"
          },
          {
            id: "2-2-2",
            text: "Nuts"
          }
        ]
      },
      {
        id: "2-3",
        text: "Proteins",
        items: [
          {
            id: "2-3-1",
            text: "Egg"
          },
          {
            id: "2-3-2",
            text: "Fish"
          },
          {
            id: "2-3-3",
            text: "Milk"
          }
        ]
      }
    ]
  }
];

export const SampleCheckbox = () => {
  const [t] = useTranslation("tree");

  const [check, setCheck] = React.useState<TreeViewCheckDescriptor>({
    applyCheckIndeterminate: true,
    ids: [],
    idField: "id"
  });
  const [expand, setExpand] = React.useState({
    ids: ["1", "2-1", "2-2"],
    idField: "id"
  });
  const [select, setSelect] = React.useState([""]);
  const onItemClick = (event: TreeViewItemClickEvent) => {
    setSelect([event.itemHierarchicalIndex]);
  };
  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    const ids = expand.ids.slice();
    const index = ids.indexOf(event.item.id);

    index === -1 ? ids.push(event.item.id) : ids.splice(index, 1);
    setExpand({ ids, idField: "id" });
  };
  const onCheckChange = (event: TreeViewCheckChangeEvent) => {
    const settings: TreeViewCheckChangeSettings = {
      singleMode: false,
      checkChildren: true,
      checkParents: true
    };
    setCheck(handleTreeViewCheckChange(event, check, tree, settings));
  };
  return (
    <div style={{ width: 430 }}>
      <TreeView
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

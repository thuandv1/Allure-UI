import * as React from "react";

import {
  TreeView,
  TreeViewExpandChangeEvent,
  TreeViewItemClickEvent,
  processTreeViewItems,
  TreeViewDragClue,
  TreeViewDragAnalyzer,
  moveTreeViewItem,
  TreeViewItemDragOverEvent,
  TreeViewItemDragEndEvent
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

const treeData: TreeViewDataItem[] = [
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
const SEPARATOR = "_";
function getSiblings(itemIndex: string, data: TreeViewDataItem[]) {
  let result = data;

  const indices = itemIndex.split(SEPARATOR).map((index) => Number(index));
  for (let i = 0; i < indices.length - 1; i++) {
    result = result[indices[i]].items || [];
  }

  return result;
}

export const SampleDragDrop = () => {
  const [t] = useTranslation("tree");

  const dragClue = React.useRef<any>();
  const dragOverCnt = React.useRef<number>(0);
  const isDragDrop = React.useRef<boolean>(false);
  const [tree, setTree] = React.useState(treeData);
  const [expand, setExpand] = React.useState({ ids: ["1"], idField: "id" });
  const [selected, setSelected] = React.useState([""]);

  const getClueClassName = (event: any) => {
    const eventAnalyzer = new TreeViewDragAnalyzer(event).init();

    if (eventAnalyzer.isDropAllowed) {
      switch (eventAnalyzer.getDropOperation()) {
        case "child":
          return "dragdrop-child";
        case "before":
          return "dragdrop-before";
        case "after":
          return "dragdrop-after";
        default:
          break;
      }
    }

    return "k-i-cancel";
  };
  const DOM_KENDO_ITEM_ID_FIELD = "_kendoItemId";
  const getElement = (
    x: number,
    y: number
  ): { element: Element | null; id: string | null } => {
    let node = document.elementFromPoint(x, y) as any;
    while (node && !node[DOM_KENDO_ITEM_ID_FIELD]) {
      node = node.parentNode;
    }
    if (node && node[DOM_KENDO_ITEM_ID_FIELD]) {
      return { element: node, id: node[DOM_KENDO_ITEM_ID_FIELD] };
    }
    return { element: null, id: null };
  };

  const onItemDragOver = (event: TreeViewItemDragOverEvent) => {
    const { target } = event;
    const { element, id } = getElement(event.clientX, event.clientY);
    const className = getClueClassName(event);
    target.element.querySelectorAll("div.k-treeview-mid").forEach((item) => {
      item.classList.remove(
        "dragdrop-child",
        "dragdrop-before",
        "dragdrop-after"
      );
    });
    if (element) {
      element.classList.add(className);
    }
    dragOverCnt.current++;
    dragClue.current.show(event.pageY + 10, event.pageX, event.item.text, "");
  };

  const onItemDragEnd = (event: TreeViewItemDragEndEvent) => {
    isDragDrop.current = dragOverCnt.current > 0;
    dragOverCnt.current = 0;
    dragClue.current.hide();
    event.target.element
      .querySelectorAll("div.k-treeview-mid")
      .forEach((item) => {
        item.classList.remove(
          "dragdrop-child",
          "dragdrop-before",
          "dragdrop-after",
          "k-i-cancel"
        );
      });
    const eventAnalyzer = new TreeViewDragAnalyzer(event).init();

    if (eventAnalyzer.isDropAllowed) {
      const updatedTree: any = moveTreeViewItem(
        event.itemHierarchicalIndex,
        tree,
        eventAnalyzer.getDropOperation() || "child",
        eventAnalyzer.destinationMeta.itemHierarchicalIndex
      );
      setTree(updatedTree);
      if (selected.includes(event.itemHierarchicalIndex)) {
        // 移动的是被选中的节点
        setSelected([eventAnalyzer.destinationMeta.itemHierarchicalIndex]);
      }
    }
  };
  const onItemClick = (event: TreeViewItemClickEvent) => {
    // if (!isDragDrop.current) {
    setSelected([event.itemHierarchicalIndex]);
    // }
  };
  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    // if (!isDragDrop.current) {
    const ids = expand.ids.slice();
    const index = ids.indexOf(event.item.id);

    index === -1 ? ids.push(event.item.id) : ids.splice(index, 1);
    setExpand({ ids, idField: "id" });
    // }
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
          { select: selected, expand: expand }
        )}
        draggable={true}
        onItemDragOver={onItemDragOver}
        onItemDragEnd={onItemDragEnd}
        expandIcons={true}
        onExpandChange={onExpandChange}
        aria-multiselectable={true}
        onItemClick={onItemClick}
      />
      <TreeViewDragClue
        style={{
          display: "flex",
          height: 40,
          width: 430,
          background: "#FFFFFFE6 0% 0% ",
          boxShadow: "0px 0px 12px #00000029"
        }}
        ref={dragClue}
      />
    </div>
  );
};

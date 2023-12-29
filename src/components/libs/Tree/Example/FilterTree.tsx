import * as React from "react";

import {
  TreeView,
  TreeViewExpandChangeEvent,
  TreeViewCheckChangeEvent,
  TreeViewItemClickEvent,
  processTreeViewItems,
  handleTreeViewCheckChange,
  SearchBox,
  ISearchBoxStyles,
  SecondaryText
} from "@gui/fluent-ui-allure";

import "@progress/kendo-react-animation";
import { useTranslation } from "react-i18next";

const cssRule = `
.filter-tree .k-disabled {
    display: none;
}
    `;
const style = document.createElement("style");
document.head.appendChild(style);
style.appendChild(document.createTextNode(cssRule));

interface TreeViewDataItem {
  text: string;
  expanded?: boolean;
  checked?: boolean;
  selected?: boolean;
  hidden?: boolean;
  items?: TreeViewDataItem[];
}

const treeData: TreeViewDataItem[] = [
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

const styles: Partial<ISearchBoxStyles> = {
  root: { height: 40 },
  box: { width: "100%" },
  iconButton: { top: 8 }
};

export const SampleFilter = () => {
  const [t] = useTranslation(["tree", "icon_gallery"]);

  const [searchText, setSearchText] = React.useState("");
  const [check, setCheck] = React.useState({
    applyCheckIndeterminate: true,
    ids: [],
    idField: "text"
  });
  const [expand, setExpand] = React.useState({
    ids: ["Furniture"],
    idField: "text"
  });
  const [select, setSelect] = React.useState([""]);
  const [tree, setTree] = React.useState(treeData);

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

  const onFilter = (value: string) => {
    filter(tree, value);
    setTree([...tree]);
  };

  const filter = (items: TreeViewDataItem[], term: string) => {
    items.forEach((item) => {
      item.hidden = false;
      if (contains(item.text, term) && item.items && item.items.length > 0) {
        filter(item.items, term);
        item.hidden = item.items.every((i) => i.hidden === true);
      } else if (
        !contains(item.text, term) &&
        (!item.items || item.items.length === 0)
      ) {
        console.log(
          `${item.text} contains ${term} false && item has no children`
        );
        item.hidden = true;
      } else if (
        !contains(item.text, term) &&
        item.items &&
        item.items.length > 0
      ) {
        console.log(`${item.text} contains ${term} false && item has children`);
        filter(item.items, term);
        console.log(
          `${item.text} contains ${term} false && children all hidden`
        );
        item.hidden = item.items.every((i) => i.hidden === true);
      }
    });
  };

  const contains = (text: string, term: string) => {
    return text.toLowerCase().indexOf(term.toLowerCase()) >= 0;
  };

  return (
    <div className="filter-tree" style={{ width: 430 }}>
      <SearchBox
        styles={styles}
        placeholder={t("icon_gallery:search")}
        showIcon
        value={searchText}
        onChange={(ev, v) => {
          setSearchText(v ?? "");
          onFilter(v ?? "");
        }}
      />
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
        disableField="hidden"
        onExpandChange={onExpandChange}
        onItemClick={onItemClick}
        checkboxes={true}
        onCheckChange={onCheckChange}
      />
      {tree.every((node) => node.hidden) && (
        <SecondaryText style={{ textAlign: "center", marginTop: 8 }} block>
          No item
        </SecondaryText>
      )}
    </div>
  );
};

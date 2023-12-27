import * as React from "react";

import {
  TreeView,
  TreeViewDataItem,
  TreeViewExpandChangeEvent,
  processTreeViewItems,
  ItemRenderProps,
  Loading,
  TreeViewItemClickEvent,
  Link,
  DefaultButton
} from "@gui/fluent-ui-allure";

interface LoadOnDemandTreeViewDataItem extends TreeViewDataItem {
  onLoadMoreClick?: (item: LoadOnDemandTreeViewDataItem) => void;
}

const treeData: LoadOnDemandTreeViewDataItem[] = [
  {
    id: "1",
    text: "Furniture",
    items: [
      { id: "1-1", text: "Tables & Chairs", hasChildren: true },
      { id: "1-2", text: "Sofas", hasChildren: true },
      { id: "1-3", text: "Occasional Furniture" }
    ]
  },
  {
    id: "2",
    text: "Decor",
    items: [
      { id: "2-1", text: "Bed Linen" },
      { id: "2-2", text: "Curtains & Blinds" },
      { id: "2-3", text: "Carpets", hasChildren: true }
    ]
  }
];

type TargetItem = {
  items?: TreeViewDataItem[] | null;
  hasChildren?: boolean;
};

let index = 0;
const loadItems = (): Promise<LoadOnDemandTreeViewDataItem[]> => {
  const count = Math.ceil(Math.random() * 10);

  const items: LoadOnDemandTreeViewDataItem[] = [];
  for (let i = 0; i < count; i++) {
    items.push(createItem());
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });

  function createItem() {
    index++;
    return { id: "item-" + index, text: "item-" + index };
  }
};

function searchTree(
  items: LoadOnDemandTreeViewDataItem[],
  id: string
): LoadOnDemandTreeViewDataItem | undefined {
  for (const item of items) {
    const target = innerSearch(item);
    if (target) {
      return target;
    }
  }

  function innerSearch(item: LoadOnDemandTreeViewDataItem) {
    if (item.id === id) {
      return item;
    } else if (item.items) {
      return searchTree(item.items, id);
    }
  }
}

const TreeItem = (props: ItemRenderProps) => {
  const item = props.item as LoadOnDemandTreeViewDataItem;
  const [loading, setLoading] = React.useState(false);
  if (item.onLoadMoreClick) {
    return loading ? (
      <Loading styles={{ text: { display: "none" } }} />
    ) : (
      <Link
        underline
        onClick={(e) => {
          e.preventDefault();
          setLoading(true);
          item.onLoadMoreClick?.(item);
        }}
      >
        Show more...
      </Link>
    );
  } else {
    return <span>{item.text}</span>;
  }
};

export const SampleLoading = () => {
  const [tree, setTree] = React.useState(treeData);
  const [expand, setExpand] = React.useState({
    ids: ["1", "2"],
    idField: "id"
  });
  const [select, setSelect] = React.useState<string[]>([]);
  const [selectedItem, setSelectedItem] =
    React.useState<LoadOnDemandTreeViewDataItem>();

  const onItemClick = (event: TreeViewItemClickEvent) => {
    if (event.item.id !== "loadMore") {
      setSelect([event.itemHierarchicalIndex]);
      setSelectedItem(event.item);
    }
  };

  const addLoadMoreAction = (parentNode: LoadOnDemandTreeViewDataItem) => {
    const node: LoadOnDemandTreeViewDataItem = {
      id: "loadMore",
      onLoadMoreClick: (item) => {
        loadItems().then((moreItems) => {
          const loadMoreNode = searchTree(
            tree,
            item.id
          ) as LoadOnDemandTreeViewDataItem;
          loadMoreNode.onLoadMoreClick = undefined;
          if (parentNode.items) {
            parentNode?.items.splice(parentNode?.items.length - 1, 1); // remove the load more node
            parentNode.items = parentNode.items.concat(moreItems);
          }
          addLoadMoreAction(parentNode);
          setTree([...tree]);
        });
      }
    };
    if (!parentNode.items) {
      return;
    }
    parentNode.items.push(node);
  };

  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    const target = event.item.id;
    const ids = expand.ids;
    if (ids.includes(target)) {
      ids.splice(ids.indexOf(target), 1);
    } else {
      ids.push(target);
    }
    setExpand({ ids, idField: "id" });
    if (event.item.hasChildren && !event.item.items) {
      loadItems().then((items) => {
        const targetItem = searchTree(
          tree,
          event.item.id
        ) as LoadOnDemandTreeViewDataItem;
        targetItem.items = items;
        if (target == "1-1") {
          addLoadMoreAction(targetItem);
        }
        setTree([...tree]);
      });
    }
  };

  const refreshSelectedItem = () => {
    if (!selectedItem) {
      return;
    }
    const id = selectedItem.id;
    const ids: string[] = expand.ids;
    if (!ids.includes(id)) {
      // 如果被选中节点是未展开的，则不需要refresh
      return;
    }
    // 想让节点变成loading状态，满足两个条件。一是item.hasChildren为true，二是没有子节点
    const targetItem: TargetItem | undefined = searchTree(tree, id);
    if (!targetItem) {
      return;
    }

    targetItem.hasChildren = true;
    targetItem.items = null;
    setTree([...tree]);
    loadItems().then((items) => {
      targetItem.items = items;
      setTree([...tree]);
    });
  };

  return (
    <div style={{ width: 430 }}>
      <DefaultButton
        disabled={!selectedItem}
        onClick={() => refreshSelectedItem()}
        style={{ marginBottom: 15 }}
      >
        Refresh selected item
      </DefaultButton>
      <TreeView
        data={processTreeViewItems(tree, { select: select, expand: expand })}
        onItemClick={onItemClick}
        expandIcons={true}
        item={TreeItem}
        onExpandChange={onExpandChange}
      />
    </div>
  );
};

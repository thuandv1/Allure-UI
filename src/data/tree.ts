const heading = "Tree";
const desc =
  "Which can be used in a complex hierarchy to emphasize the whole structure.";

const usage = {
  basic: {
    title: "Basic Usage",
    code: `import * as React from "react";

import { TreeView, TreeViewExpandChangeEvent, TreeViewItemClickEvent, processTreeViewItems } from "@gui/fluent-ui-allure";

interface TreeViewDataItem {
    id: string;
    text: string;
    expanded?: boolean;
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
                        text: "Carrot",
                    },
                    {
                        id: "2-1-2",
                        text: "Potato",
                    },
                    {
                        id: "2-1-3",
                        text: "Cabbage",
                    },
                ],
            },
            {
                id: "2-2",
                text: "Fats",
                items: [
                    {
                        id: "2-2-1",
                        text: "Oil",
                    },
                    {
                        id: "2-2-2",
                        text: "Nuts",
                    },
                ],
            },
            {
                id: "2-3",
                text: "Proteins",
                items: [
                    {
                        id: "2-3-1",
                        text: "Egg",
                    },
                    {
                        id: "2-3-2",
                        text: "Fish",
                    },
                    {
                        id: "2-3-3",
                        text: "Milk",
                    },
                ],
            },
        ],
    },
];

export const SampleBasic = () => {
    const [expand, setExpand] = React.useState({ ids: ["1", "2-2"], idField: "id" });
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

    return (
        <div style={{ width: 430 }}>
            <TreeView data={processTreeViewItems(tree, { select: select, expand: expand })} expandIcons={true} onExpandChange={onExpandChange} onItemClick={onItemClick} />
        </div>
    );
};`
  },
  custom: {
    title: "Custom Icon",
    desc: "Tabs are styled as cards. Choose a card-style tab according to your page layout.",
    code: `import * as React from "react";

import { TreeView, TreeViewExpandChangeEvent, ItemRenderProps, TreeViewItemClickEvent, processTreeViewItems, Icon } from "@gui/fluent-ui-allure";

interface TreeViewDataItem {
    id: string;
    text: string;
    expanded?: boolean;
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
                        text: "Carrot",
                    },
                    {
                        id: "2-1-2",
                        text: "Potato",
                    },
                    {
                        id: "2-1-3",
                        text: "Cabbage",
                    },
                ],
            },
            {
                id: "2-2",
                text: "Fats",
                items: [
                    {
                        id: "2-2-1",
                        text: "Oil",
                    },
                    {
                        id: "2-2-2",
                        text: "Nuts",
                    },
                ],
            },
            {
                id: "2-3",
                text: "Proteins",
                items: [
                    {
                        id: "2-3-1",
                        text: "Egg",
                    },
                    {
                        id: "2-3-2",
                        text: "Fish",
                    },
                    {
                        id: "2-3-3",
                        text: "Milk",
                    },
                ],
            },
        ],
    },
];

const TreeItem = (props: ItemRenderProps) => {
    const item = props.item as TreeViewDataItem;
    let iconName = "far-file-lines";
    if (item.id.length == 1 || item.id.length == 3) {
        iconName = item.expanded ? "far-folder-open" : "far-folder";
    }

    return (
        <span>
            <Icon style={{ marginRight: 10, width: 16 }} iconName={iconName} />
            {item.text}
        </span>
    );
};

export const SampleIcon = () => {
    const [expand, setExpand] = React.useState({ ids: ["1", "2-1", "2-2"], idField: "id" });
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

    return (
        <div style={{ width: 430 }}>
            <TreeView
                data={processTreeViewItems(tree, { select: select, expand: expand })}
                expandIcons={true}
                item={TreeItem}
                onExpandChange={onExpandChange}
                aria-multiselectable={true}
                onItemClick={onItemClick}
            />
        </div>
    );
};`
  },
  dragNDrop: {
    title: "Drag & Drop",
    code: `import * as React from "react";

import {
    TreeView,
    TreeViewExpandChangeEvent,
    TreeViewItemClickEvent,
    processTreeViewItems,
    TreeViewDragClue,
    TreeViewDragAnalyzer,
    moveTreeViewItem,
    TreeViewItemDragOverEvent,
    TreeViewItemDragEndEvent,
} from "@gui/fluent-ui-allure";

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
                        text: "Carrot",
                    },
                    {
                        id: "2-1-2",
                        text: "Potato",
                    },
                    {
                        id: "2-1-3",
                        text: "Cabbage",
                    },
                ],
            },
            {
                id: "2-2",
                text: "Fats",
                items: [
                    {
                        id: "2-2-1",
                        text: "Oil",
                    },
                    {
                        id: "2-2-2",
                        text: "Nuts",
                    },
                ],
            },
            {
                id: "2-3",
                text: "Proteins",
                items: [
                    {
                        id: "2-3-1",
                        text: "Egg",
                    },
                    {
                        id: "2-3-2",
                        text: "Fish",
                    },
                    {
                        id: "2-3-3",
                        text: "Milk",
                    },
                ],
            },
        ],
    },
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
    const getElement = (x: number, y: number): { element: Element, id: string } => {
        let node = document.elementFromPoint(x, y) as any;
        while (node && !node[DOM_KENDO_ITEM_ID_FIELD]) {
            node = node.parentNode;
        }
        if (node && node[DOM_KENDO_ITEM_ID_FIELD]) {
            return { element: node, id: node[DOM_KENDO_ITEM_ID_FIELD]};
        }
        return { element: null, id: null };
    }

    const onItemDragOver = (event: TreeViewItemDragOverEvent) => {
        const { target } = event;
        const { element, id } = getElement(event.clientX, event.clientY);
        const className = getClueClassName(event);
        target.element.querySelectorAll('div.k-treeview-mid')
            .forEach(item => { item.classList.remove('dragdrop-child', 'dragdrop-before', 'dragdrop-after') });
        element.classList.add(className);
        dragOverCnt.current++;
        dragClue.current.show(event.pageY + 10, event.pageX, event.item.text, "");
    };

    const onItemDragEnd = (event: TreeViewItemDragEndEvent) => {
        isDragDrop.current = dragOverCnt.current > 0;
        dragOverCnt.current = 0;
        dragClue.current.hide();
        event.target.element.querySelectorAll('div.k-treeview-mid')
        .forEach(item => { item.classList.remove('dragdrop-child', 'dragdrop-before', 'dragdrop-after', 'k-i-cancel') });
        const eventAnalyzer = new TreeViewDragAnalyzer(event).init();

        if (eventAnalyzer.isDropAllowed) {
            const updatedTree: any = moveTreeViewItem(event.itemHierarchicalIndex, tree, eventAnalyzer.getDropOperation() || "child", eventAnalyzer.destinationMeta.itemHierarchicalIndex);
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
        <div style={{width: 430}}>
            <TreeView
                data={processTreeViewItems(tree, { select: selected, expand: expand })}
                draggable={true}
                onItemDragOver={onItemDragOver}
                onItemDragEnd={onItemDragEnd}
                expandIcons={true}
                onExpandChange={onExpandChange}
                aria-multiselectable={true}
                onItemClick={onItemClick}
            />
            <TreeViewDragClue style={{display: 'flex', height: 40, width: 430, background: '#FFFFFFE6 0% 0% ', boxShadow: '0px 0px 12px #00000029'}} ref={dragClue} />
        </div>
    );
};`
  },
  selectable: {
    title: "Selectable",
    code: `import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    TreeView,
    TreeViewCheckDescriptor,
    TreeViewCheckChangeSettings,
    TreeViewExpandChangeEvent,
    TreeViewCheckChangeEvent,
    TreeViewItemClickEvent,
    processTreeViewItems,
    handleTreeViewCheckChange,
} from "@gui/fluent-ui-allure";

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
                        text: "Carrot",
                    },
                    {
                        id: "2-1-2",
                        text: "Potato",
                    },
                    {
                        id: "2-1-3",
                        text: "Cabbage",
                    },
                ],
            },
            {
                id: "2-2",
                text: "Fats",
                items: [
                    {
                        id: "2-2-1",
                        text: "Oil",
                    },
                    {
                        id: "2-2-2",
                        text: "Nuts",
                    },
                ],
            },
            {
                id: "2-3",
                text: "Proteins",
                items: [
                    {
                        id: "2-3-1",
                        text: "Egg",
                    },
                    {
                        id: "2-3-2",
                        text: "Fish",
                    },
                    {
                        id: "2-3-3",
                        text: "Milk",
                    },
                ],
            },
        ],
    },
];

export const SampleCheckbox = () => {
    const [check, setCheck] = React.useState<TreeViewCheckDescriptor>({ applyCheckIndeterminate: true, ids: [], idField: "id" });
    const [expand, setExpand] = React.useState({ ids: ["1", "2-1", "2-2"], idField: "id" });
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
        const settings: TreeViewCheckChangeSettings = { singleMode: false, checkChildren: true, checkParents: true };
        setCheck(handleTreeViewCheckChange(event, check, tree, settings));
    };
    return (
        <div style={{ width: 430 }}>
            <TreeView
                data={processTreeViewItems(tree, { select: select, check: check, expand: expand })}
                expandIcons={true}
                onExpandChange={onExpandChange}
                aria-multiselectable={true}
                onItemClick={onItemClick}
                checkboxes={true}
                onCheckChange={onCheckChange}
            />
        </div>
    );
};`
  },
  filter: {
    title: "Filter",
    code: `import * as React from "react";

import {
    TreeView,
    TreeViewExpandChangeEvent,
    TreeViewCheckChangeEvent,
    TreeViewItemClickEvent,
    processTreeViewItems,
    handleTreeViewCheckChange,
    SearchBox,
    ISearchBoxStyles,
    SecondaryText,
} from "@gui/fluent-ui-allure";

import "@progress/kendo-react-animation";

const cssRule = \`
.filter-tree .k-disabled {
    display: none;
}
    \`;
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
        items: [{ text: "Tables & Chairs" }, { text: "Sofas" }, { text: "Occasional Furniture" }],
    },
    {
        text: "Decor",
        items: [{ text: "Bed Linen" }, { text: "Curtains & Blinds" }, { text: "Carpets" }],
    },
];

const styles: Partial<ISearchBoxStyles> = { root: { height: 40 }, box: { width: "100%" }, iconButton: { top: 8 } };

export const SampleFilter = () => {
    const [searchText, setSearchText] = React.useState("");
    const [check, setCheck] = React.useState({ applyCheckIndeterminate: true, ids: [], idField: "text" });
    const [expand, setExpand] = React.useState({ ids: ["Furniture"], idField: "text" });
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
        const settings = { singleMode: false, checkChildren: true, checkParents: true };
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
                item.hidden = item.items.every((i) => i.hidden == true);
            } else if (!contains(item.text, term) && (!item.items || item.items.length == 0)) {
                console.log(\`\${item.text} contains \${term} false && item has no children\`);
                item.hidden = true;
            } else if (!contains(item.text, term) && item.items && item.items.length > 0) {
                console.log(\`\${item.text} contains \${term} false && item has children\`);
                filter(item.items, term);
                console.log(\`\${item.text} contains \${term} false && children all hidden\`);
                item.hidden = item.items.every((i) => i.hidden == true);
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
                placeholder="Search..."
                showIcon
                value={searchText}
                onChange={(ev, v) => {
                    setSearchText(v);
                    onFilter(v);
                }}
            />
            <TreeView
                data={processTreeViewItems(tree, { select: select, check: check, expand: expand })}
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
};`
  },
  directory: {
    title: "Directory Tree",
    code: `import * as React from "react";
import * as ReactDOM from "react-dom";

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
    DefaultButton,
    IContextualMenuProps,
} from "@gui/fluent-ui-allure";

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
        items: [{ text: "Tables & Chairs" }, { text: "Sofas" }, { text: "Occasional Furniture" }],
    },
    {
        text: "Decor",
        items: [{ text: "Bed Linen" }, { text: "Curtains & Blinds" }, { text: "Carpets" }],
    },
];

const menuProps: IContextualMenuProps = {
    items: [
        {
            key: "emailMessage",
            text: "Email message",
            iconProps: { iconName: "Mail" },
        },
        {
            key: "calendarEvent",
            text: "Calendar event",
            iconProps: { iconName: "Calendar" },
        },
    ],
};

const TreeItem = (props: ItemRenderProps) => {
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

            <IconButton className="directory-tree-action" style={{ width: 32, height: 32, minWidth: 32 }} bordered iconProps={{ iconName: "fas-ellipsis", style: { fontSize: 20 } }} menuIconProps={{ style: { display: "none" } }} menuProps={menuProps} />
        </Stack>
    );
};

export const SampleDirectory = () => {
    const [check, setCheck] = React.useState({ applyCheckIndeterminate: true, ids: [], idField: "text" });
    const [expand, setExpand] = React.useState({ ids: ["Item2"], idField: "text" });
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
        const settings = { singleMode: false, checkChildren: true, checkParents: true };
        setCheck(handleTreeViewCheckChange(event, check, tree, settings));
    };
    return (
        <div style={{ width: 430 }}>
            <TreeView
                item={TreeItem}
                directoryTree={true}
                data={processTreeViewItems(tree, { select: select, check: check, expand: expand })}
                expandIcons={true}
                onExpandChange={onExpandChange}
                aria-multiselectable={true}
                onItemClick={onItemClick}
                checkboxes={true}
                onCheckChange={onCheckChange}
            />
        </div>
    );
};`
  },
  loading: {
    title: "Loading",
    code: `import * as React from "react";

import { TreeView, TreeViewDataItem, TreeViewExpandChangeEvent, processTreeViewItems, ItemRenderProps, Loading, TreeViewItemClickEvent, Link, DefaultButton } from "@gui/fluent-ui-allure";

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
            { id: "1-3", text: "Occasional Furniture" },
        ],
    },
    {
        id: "2",
        text: "Decor",
        items: [
            { id: "2-1", text: "Bed Linen" },
            { id: "2-2", text: "Curtains & Blinds" },
            { id: "2-3", text: "Carpets", hasChildren: true },
        ],
    },
];

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

function searchTree(items: LoadOnDemandTreeViewDataItem[], id: string): LoadOnDemandTreeViewDataItem {
    for (const item of items) {
        const target = innerSearch(item);
        if (target) {
            return target;
        }
    }

    function innerSearch(item: LoadOnDemandTreeViewDataItem) {
        if (item.id == id) {
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
                    item.onLoadMoreClick(item);
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
    const [expand, setExpand] = React.useState({ ids: ["1", "2"], idField: "id" });
    const [select, setSelect] = React.useState([]);
    const [selectedItem, setSelectedItem] = React.useState<LoadOnDemandTreeViewDataItem>();

    const onItemClick = (event: TreeViewItemClickEvent) => {
        if (event.item.id != 'loadMore') {
            setSelect([event.itemHierarchicalIndex]);
            setSelectedItem(event.item);
        } 
    };

    const addLoadMoreAction = (parentNode: LoadOnDemandTreeViewDataItem) => {
        const node: LoadOnDemandTreeViewDataItem = {
            id: "loadMore",
            onLoadMoreClick: (item) => {
                loadItems().then((moreItems) => {
                    const loadMoreNode = searchTree(tree, item.id);
                    loadMoreNode.onLoadMoreClick = undefined;
                    parentNode.items.splice(parentNode.items.length - 1, 1); // remove the load more node
                    parentNode.items = parentNode.items.concat(moreItems);
                    addLoadMoreAction(parentNode);
                    setTree([...tree]);
                });
            },
        };
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
                const targetItem = searchTree(tree, event.item.id);
                targetItem.items = items;
                if (target == "1-1") {
                    addLoadMoreAction(targetItem);
                }
                setTree([...tree]);
            });
        }
    };

    const refreshSelectedItem = () => {
        
        const id = selectedItem.id;
        const ids = expand.ids;
        if (!ids.includes(id)) {
            // 如果被选中节点是未展开的，则不需要refresh
            return;
        }
        // 想让节点变成loading状态，满足两个条件。一是item.hasChildren为true，二是没有子节点
        const targetItem = searchTree(tree, id);
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
            <DefaultButton disabled={!selectedItem} onClick={() => refreshSelectedItem()} style={{marginBottom: 15}}>Refresh selected item</DefaultButton>
            <TreeView data={processTreeViewItems(tree, { select: select, expand: expand })} onItemClick={onItemClick} expandIcons={true} item={TreeItem} onExpandChange={onExpandChange} />
        </div>
    );
};`
  }
};

export { heading, desc, usage };

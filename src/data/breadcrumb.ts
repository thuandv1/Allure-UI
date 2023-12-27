const heading = "Breadcrumb";
const desc =
  "It display by the page hierarchy and allows user to know where they are. Better to have this breadcrumb navigation except for homepage.";

const dontUse = {
  title: "Don't use when:",
  uses: [
    "Product has no logical hierarchy",
    "There are too many navigation options that are very close together.",
    "Breadcrumb cannot replace the primary navigation."
  ]
};

const usage = {
  basic: {
    title: "Usage",
    desc: "When there is only 1 level breadcrumb, it is not clickable. But the text color is black.",
    code: `import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";

export const SampleRoot = () => {
    const items: IBreadcrumbItem[] = [{ text: "Home", key: "Home" }];

    return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
};`
  },
  second: {
    desc: "Some links may not be clickable.",
    code: `import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";

export const SampleBasic = () => {
    function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
        console.log(\`Breadcrumb item with key "\${item.key}" has been clicked.\`);
    }

    const items: IBreadcrumbItem[] = [
        { text: "Home", key: "k1", onClick: onItemClick },
        { text: "Application", key: "k2", onClick: onItemClick },
        { text: "Application management", key: "k3", href: "/application-management" },
        { text: "Application detail", key: "k4" },
    ];

    return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
};`
  },
  third: {
    desc: "Example for multi-parent nodes. This is a common style.",
    code: `import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";

export const SampleBasic = () => {
    function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
        console.log(\`Breadcrumb item with key "\${item.key}" has been clicked.\`);
    }

    const items: IBreadcrumbItem[] = [
        { text: "Home", key: "k1", onClick: onItemClick },
        { text: "Application", key: "k2", onClick: onItemClick },
        { text: "Application management", key: "k3", href: "/application-management" },
        { text: "Application detail", key: "k4" },
    ];

    return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
};`
  },
  fourth: {
    desc: "Show ... in the middle of breadcrumb when there are so many nodes that cannot show all at the same time. Always keep the first level and the last level visible.",
    code: `import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";

export const SampleOverflowIndex = () => {
    function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
        console.log(\`Breadcrumb item with key "\${item.key}" has been clicked.\`);
    }

    const items: IBreadcrumbItem[] = [
        { text: "Home", key: "k1", onClick: onItemClick },
        { text: "Second Level", key: "k2", onClick: onItemClick },
        { text: "Third Level", key: "k3", onClick: onItemClick },
        { text: "Application management", key: "k4", onClick: onItemClick },
        { text: "Application detail", key: "k5" },
    ];

    return <Breadcrumb items={items} overflowIndex={1} maxDisplayedItems={3} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
};`
  },
  fifth: {
    desc: "Show ... at the beginning of breadcrumb when there are so many nodes that cannot show all at the same time. Always keep the last level visible.",
    code: `import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";

export const SampleMaxDisplayedItems = () => {
    function onItemClick(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
        console.log(\`Breadcrumb item with key "\${item.key}" has been clicked.\`);
    }

    const items: IBreadcrumbItem[] = [
        { text: "Home", key: "k1", onClick: onItemClick },
        { text: "Second Level", key: "k2", onClick: onItemClick },
        { text: "Third Level", key: "k3", onClick: onItemClick },
        { text: "Application management", key: "k4", onClick: onItemClick },
        { text: "Application detail", key: "k5" },
    ];

    return <Breadcrumb items={items} maxDisplayedItems={2} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
};`
  }
};

export { heading, desc, dontUse, usage };

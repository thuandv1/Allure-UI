const usage = {
  basic: {
    code: `import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";

export const SampleRoot = () => {
    const items: IBreadcrumbItem[] = [{ text: "Home", key: "Home" }];

    return <Breadcrumb items={items} maxDisplayedItems={10} ariaLabel="Breadcrumb with items rendered as buttons" overflowAriaLabel="More links" />;
};`
  },
  second: {
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

export { usage };

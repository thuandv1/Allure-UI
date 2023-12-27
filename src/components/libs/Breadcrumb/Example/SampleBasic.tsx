import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";

export const SampleBasic = () => {
  function onItemClick(
    ev?: React.MouseEvent<HTMLElement>,
    item?: IBreadcrumbItem
  ): void {
    console.log(`Breadcrumb item with key "${item?.key}" has been clicked.`);
  }

  const items: IBreadcrumbItem[] = [
    { text: "Home", key: "k1", onClick: onItemClick },
    { text: "Application", key: "k2", onClick: onItemClick },
    {
      text: "Application management",
      key: "k3",
      href: "/application-management"
    },
    { text: "Application detail", key: "k4" }
  ];

  return (
    <Breadcrumb
      items={items}
      maxDisplayedItems={10}
      ariaLabel="Breadcrumb with items rendered as buttons"
      overflowAriaLabel="More links"
    />
  );
};

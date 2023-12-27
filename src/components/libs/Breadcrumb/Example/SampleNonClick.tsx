import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";

export const SampleNonClickable = () => {
  function onItemClick(
    ev?: React.MouseEvent<HTMLElement>,
    item?: IBreadcrumbItem
  ): void {
    console.log(`Breadcrumb item with key "${item?.key}" has been clicked.`);
  }

  const items: IBreadcrumbItem[] = [
    { text: "Home(non-clickable)", key: "k1" },
    { text: "Sub", key: "k2", onClick: onItemClick },
    { text: "Sub2(non-clickable)", key: "k3" },
    { text: "Detail", key: "k4" }
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

import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

export const SampleNonClickable = () => {
  const [t] = useTranslation("breadcrumb");

  function onItemClick(
    ev?: React.MouseEvent<HTMLElement>,
    item?: IBreadcrumbItem
  ): void {
    console.log(`Breadcrumb item with key "${item?.key}" has been clicked.`);
  }

  const items: IBreadcrumbItem[] = [
    { text: t("home") + t("non_click"), key: "k1" },
    { text: t("sub"), key: "k2", onClick: onItemClick },
    { text: t("sub") + 2 + t("non_click"), key: "k3" },
    { text: t("detail"), key: "k4" }
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

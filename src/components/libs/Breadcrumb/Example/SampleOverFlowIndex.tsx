import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

export const SampleOverflowIndex = () => {
  const [t] = useTranslation("breadcrumb");

  function onItemClick(
    ev?: React.MouseEvent<HTMLElement>,
    item?: IBreadcrumbItem
  ): void {
    console.log(`Breadcrumb item with key "${item?.key}" has been clicked.`);
  }

  const items: IBreadcrumbItem[] = [
    { text: t("home"), key: "k1", onClick: onItemClick },
    { text: t("second"), key: "k2", onClick: onItemClick },
    { text: t("third"), key: "k3", onClick: onItemClick },
    {
      text: `${t("application")} ${t("management")}`,
      key: "k4",
      onClick: onItemClick
    },
    { text: `${t("application")} ${t("detail").toLowerCase()}`, key: "k5" }
  ];

  return (
    <Breadcrumb
      items={items}
      overflowIndex={1}
      maxDisplayedItems={3}
      ariaLabel="Breadcrumb with items rendered as buttons"
      overflowAriaLabel="More links"
    />
  );
};

import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

export const SampleBasic = () => {
  const [t] = useTranslation("breadcrumb");

  function onItemClick(
    ev?: React.MouseEvent<HTMLElement>,
    item?: IBreadcrumbItem
  ): void {
    console.log(`Breadcrumb item with key "${item?.key}" has been clicked.`);
  }

  const items: IBreadcrumbItem[] = [
    { text: t("home"), key: "k1", onClick: onItemClick },
    { text: t("application"), key: "k2", onClick: onItemClick },
    {
      text: `${t("application")} ${t("management")}`,
      key: "k3",
      href: "/application-management"
    },
    { text: `${t("application")} ${t("detail").toLowerCase()}`, key: "k4" }
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

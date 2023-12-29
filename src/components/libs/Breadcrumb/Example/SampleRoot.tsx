import * as React from "react";
import { Breadcrumb, IBreadcrumbItem } from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

export const SampleRoot = () => {
  const [t] = useTranslation("breadcrumb");

  const items: IBreadcrumbItem[] = [{ text: t("home"), key: "Home" }];

  return (
    <Breadcrumb
      items={items}
      maxDisplayedItems={10}
      ariaLabel="Breadcrumb with items rendered as buttons"
      overflowAriaLabel="More links"
    />
  );
};

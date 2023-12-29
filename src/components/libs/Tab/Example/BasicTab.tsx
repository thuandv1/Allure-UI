import * as React from "react";
import { Label } from "@fluentui/react";
import { Pivot, PivotItem } from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

const labelStyles: Partial<any> = {
  root: { marginTop: 10 }
};

export const TabBasicView: React.FunctionComponent = () => {
  const [t] = useTranslation("tab");

  return (
    <Pivot
      // overflowBehavior={"menu"}
      style={{ maxWidth: 210 }}
      aria-label="Basic Pivot Example"
    >
      <PivotItem
        headerText={t("title", {
          index: 1
        })}
        headerButtonProps={{
          "data-order": 1,
          "data-title": "My Files Title"
        }}
      >
        <Label styles={labelStyles}>
          {t("title", {
            index: "#1"
          })}
        </Label>
      </PivotItem>
      <PivotItem
        headerText={t("title", {
          index: 2
        })}
      >
        <Label styles={labelStyles}>
          {t("title", {
            index: "#2"
          })}
        </Label>
      </PivotItem>
      <PivotItem
        headerText={t("title", {
          index: 3
        })}
      >
        <Label styles={labelStyles}>
          {t("title", {
            index: "#3"
          })}
        </Label>
      </PivotItem>
      <PivotItem
        headerText={t("title", {
          index: 4
        })}
      >
        <Label styles={labelStyles}>
          {t("title", {
            index: "#4"
          })}
        </Label>
      </PivotItem>
      <PivotItem
        headerText={t("title", {
          index: 5
        })}
      >
        <Label styles={labelStyles}>
          {t("title", {
            index: "#5"
          })}
        </Label>
      </PivotItem>
    </Pivot>
  );
};

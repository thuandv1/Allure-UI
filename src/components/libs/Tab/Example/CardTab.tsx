import { Label } from "@fluentui/react";
import { Pivot, PivotItem } from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";
const tabItemStyle = {
  height: 200,
  padding: 10
};
export const TabCordView: React.FunctionComponent = () => {
  const [t] = useTranslation("tab");

  return (
    <Pivot
      overflowBehavior={"menu"}
      style={{ maxWidth: 357 }}
      linkFormat="tabs"
      styles={{ link: { width: 104 } }}
      aria-label="Links of Tab Style Pivot Example"
    >
      <PivotItem
        style={tabItemStyle}
        headerText={t("title", {
          index: 1
        })}
      >
        <Label>
          {t("title", {
            index: "#1"
          })}
        </Label>
      </PivotItem>
      <PivotItem
        style={tabItemStyle}
        headerText={t("title", {
          index: 2
        })}
      >
        <Label>
          {t("title", {
            index: "#2"
          })}
        </Label>
      </PivotItem>
      <PivotItem
        style={tabItemStyle}
        headerText={t("title", {
          index: 3
        })}
      >
        <Label>
          {t("title", {
            index: "#3"
          })}
        </Label>
      </PivotItem>
      <PivotItem
        style={tabItemStyle}
        headerText={t("title", {
          index: 4
        })}
      >
        <Label>
          {t("title", {
            index: "#4"
          })}
        </Label>
      </PivotItem>
      <PivotItem
        style={tabItemStyle}
        headerText={t("title", {
          index: 5
        })}
      >
        <Label>
          {t("title", {
            index: "#5"
          })}
        </Label>
      </PivotItem>
    </Pivot>
  );
};

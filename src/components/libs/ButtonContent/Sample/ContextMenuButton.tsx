import * as React from "react";
import {
  Stack,
  DefaultButton,
  PrimaryButton,
  IconButton,
  IContextualMenuProps
} from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

export const ContextMenuButton = () => {
  const [t] = useTranslation("button");

  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: "k1",
        text: t("email"),
        iconProps: { iconName: "fas-envelope" }
      },
      {
        key: "k2",
        text: t("calendar"),
        iconProps: { iconName: "fas-calendar-days" },
        subMenuProps: {
          calloutProps: {
            gapSpace: 5
          },
          gapSpace: 5,
          items: [
            {
              key: "k2-1",
              text: t("meeting"),
              iconProps: { iconName: "fas-envelope" }
            },
            {
              key: "k2-2",
              text: t("startup"),
              iconProps: { iconName: "fas-envelope" }
            }
          ]
        }
      }
    ],
    directionalHintFixed: true
  };

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <DefaultButton menuProps={menuProps}>{t("outline")}</DefaultButton>

      <DefaultButton
        iconProps={{ iconName: "fas-rotate-right" }}
        menuProps={menuProps}
      >
        {t("outline")}
      </DefaultButton>

      <PrimaryButton menuProps={menuProps}>{t("group")}</PrimaryButton>

      <IconButton
        bordered
        iconProps={{ iconName: "fas-ellipsis" }}
        menuProps={menuProps}
        styles={{ menuIcon: { display: "none" } }}
      ></IconButton>
    </Stack>
  );
};

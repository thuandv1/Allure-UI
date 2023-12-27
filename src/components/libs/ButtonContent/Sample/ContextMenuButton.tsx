import * as React from "react";
import {
  Stack,
  DefaultButton,
  PrimaryButton,
  IconButton,
  IContextualMenuProps
} from "@gui/fluent-ui-allure";

export const ContextMenuButton = () => {
  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: "k1",
        text: "Email message",
        iconProps: { iconName: "fas-envelope" }
      },
      {
        key: "k2",
        text: "Calendar event",
        iconProps: { iconName: "fas-calendar-days" },
        subMenuProps: {
          calloutProps: {
            gapSpace: 5
          },
          gapSpace: 5,
          items: [
            {
              key: "k2-1",
              text: "Meeting",
              iconProps: { iconName: "fas-envelope" }
            },
            {
              key: "k2-2",
              text: "Startup",
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
      <DefaultButton menuProps={menuProps}>Outline</DefaultButton>

      <DefaultButton
        iconProps={{ iconName: "fas-rotate-right" }}
        menuProps={menuProps}
      >
        Outline
      </DefaultButton>

      <PrimaryButton menuProps={menuProps}>Button Group</PrimaryButton>

      <IconButton
        bordered
        iconProps={{ iconName: "fas-ellipsis" }}
        menuProps={menuProps}
        styles={{ menuIcon: { display: "none" } }}
      ></IconButton>
    </Stack>
  );
};

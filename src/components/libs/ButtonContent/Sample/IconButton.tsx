import * as React from "react";
import {
  Stack,
  DefaultButton,
  PrimaryButton,
  IconButton as IconBtn,
  DashedButton,
  TextButton
} from "@gui/fluent-ui-allure";

export const IconButton = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <DefaultButton iconProps={{ iconName: "fas-rotate-right" }}>
        Outline
      </DefaultButton>

      <PrimaryButton iconProps={{ iconName: "fas-rotate-right" }}>
        Filled button
      </PrimaryButton>

      <DashedButton iconProps={{ iconName: "fas-plus" }}>
        Dashed button
      </DashedButton>

      <IconBtn bordered iconProps={{ iconName: "fas-layer-group" }}></IconBtn>

      <TextButton
        style={{ minWidth: 0 }}
        iconProps={{ iconName: "fas-layer-group" }}
      ></TextButton>
    </Stack>
  );
};

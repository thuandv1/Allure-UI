import * as React from "react";
import {
  Stack,
  DefaultButton,
  PrimaryButton,
  IconButton as IconBtn,
  DashedButton,
  TextButton
} from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

export const IconButton = () => {
  const [t] = useTranslation("button");

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <DefaultButton iconProps={{ iconName: "fas-rotate-right" }}>
        {t("outline")}
      </DefaultButton>
      <PrimaryButton iconProps={{ iconName: "fas-rotate-right" }}>
        {t("filled")}
      </PrimaryButton>
      <DashedButton iconProps={{ iconName: "fas-plus" }}>
        {t("dashed")}
      </DashedButton>
      <IconBtn bordered iconProps={{ iconName: "fas-layer-group" }}></IconBtn>
      <TextButton
        style={{ minWidth: 0 }}
        iconProps={{ iconName: "fas-layer-group" }}
      ></TextButton>
    </Stack>
  );
};

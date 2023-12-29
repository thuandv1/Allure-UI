import * as React from "react";
import {
  Stack,
  DefaultButton,
  PrimaryButton,
  Link,
  IconButton,
  TextButton,
  DashedButton,
  Toggle,
  TooltipHost
} from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

export const DisableButton = () => {
  const [enableFocus, setEnableFocus] = React.useState(false);
  const [t] = useTranslation("button");

  return (
    <Stack>
      <Toggle
        checked={enableFocus}
        onChange={(_, checked = false) => {
          setEnableFocus(checked);
        }}
        label={t("enable_text")}
        inlineLabel
      />
      <Stack horizontal tokens={{ childrenGap: 16 }}>
        <TooltipHost content={t("content")}>
          <TextButton allowDisabledFocus={enableFocus} disabled>
            {t("normal")}
          </TextButton>
        </TooltipHost>
        <TooltipHost content={t("content")}>
          <DefaultButton allowDisabledFocus={enableFocus} disabled>
            {t("outline")}
          </DefaultButton>
        </TooltipHost>
        <TooltipHost content={t("content")}>
          <DefaultButton
            allowDisabledFocus={enableFocus}
            disabled
            iconProps={{ iconName: "fas-rotate-right" }}
          >
            {t("outline")}
          </DefaultButton>
        </TooltipHost>
        <TooltipHost content={t("content")}>
          <PrimaryButton allowDisabledFocus={enableFocus} disabled>
            {t("filled")}
          </PrimaryButton>
        </TooltipHost>
        <TooltipHost content={t("content")}>
          <PrimaryButton
            allowDisabledFocus={enableFocus}
            disabled
            iconProps={{ iconName: "fas-rotate-right" }}
          >
            {t("filled")}
          </PrimaryButton>
        </TooltipHost>
        <TooltipHost
          styles={{ root: { display: "flex !important" } }}
          content={t("content")}
        >
          <Link disabled>{t("link")}</Link>
        </TooltipHost>
        <TooltipHost content={t("content")}>
          <DashedButton allowDisabledFocus={enableFocus} disabled>
            {t("dashed")}
          </DashedButton>
        </TooltipHost>
        <TooltipHost content={t("content")}>
          <IconButton
            allowDisabledFocus={enableFocus}
            bordered
            disabled
            iconProps={{ iconName: "fas-bell" }}
          ></IconButton>
        </TooltipHost>
      </Stack>
    </Stack>
  );
};

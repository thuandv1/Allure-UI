import * as React from "react";
import {
  Stack,
  DefaultButton,
  PrimaryButton,
  IconButton
} from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";

export const LoadingButton = () => {
  const [busy, setBusy] = React.useState(false);
  const [t] = useTranslation("button");

  return (
    <Stack tokens={{ childrenGap: 16 }}>
      <Stack horizontal tokens={{ childrenGap: 16 }}>
        <PrimaryButton busy={busy}>{t("filled")}</PrimaryButton>
        <PrimaryButton busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>
          {t("filled")}
        </PrimaryButton>

        <DefaultButton busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>
          {t("outline")}
        </DefaultButton>

        <IconButton
          busy={busy}
          bordered
          iconProps={{ iconName: "fas-bell" }}
        ></IconButton>

        <PrimaryButton onClick={() => setBusy(!busy)}>
          {t("toggle")}
        </PrimaryButton>
      </Stack>
      <Stack horizontal tokens={{ childrenGap: 16 }}>
        <PrimaryButton busy={busy} busyText="Loading">
          {t("filled")}
        </PrimaryButton>
        <PrimaryButton
          busy={busy}
          busyText="Loading"
          iconProps={{ iconName: "fas-rotate-right" }}
        >
          {t("filled")}
        </PrimaryButton>

        <DefaultButton
          busy={busy}
          busyText="Loading"
          iconProps={{ iconName: "fas-rotate-right" }}
        >
          {t("outline")}
        </DefaultButton>
      </Stack>
    </Stack>
  );
};

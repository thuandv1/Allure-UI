import * as React from "react";
import {
  Stack,
  DefaultButton,
  PrimaryButton,
  IconButton
} from "@gui/fluent-ui-allure";

export const LoadingButton = () => {
  const [busy, setBusy] = React.useState(false);
  return (
    <Stack tokens={{ childrenGap: 16 }}>
      <Stack horizontal tokens={{ childrenGap: 16 }}>
        <PrimaryButton busy={busy}>Filled button</PrimaryButton>
        <PrimaryButton busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>
          Filled button
        </PrimaryButton>

        <DefaultButton busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>
          Outline
        </DefaultButton>

        <IconButton
          busy={busy}
          bordered
          iconProps={{ iconName: "fas-bell" }}
        ></IconButton>

        <PrimaryButton onClick={() => setBusy(!busy)}>
          Toggle Busy
        </PrimaryButton>
      </Stack>
      <Stack horizontal tokens={{ childrenGap: 16 }}>
        <PrimaryButton busy={busy} busyText="Loading">
          Filled button
        </PrimaryButton>
        <PrimaryButton
          busy={busy}
          busyText="Loading"
          iconProps={{ iconName: "fas-rotate-right" }}
        >
          Filled button
        </PrimaryButton>

        <DefaultButton
          busy={busy}
          busyText="Loading"
          iconProps={{ iconName: "fas-rotate-right" }}
        >
          Outline
        </DefaultButton>
      </Stack>
    </Stack>
  );
};

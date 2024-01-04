import { Checkbox, Stack } from "@gui/fluent-ui-allure";
import * as React from "react";

export const SampleDisabled = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }}>
      <Checkbox label="Check box" disabled />
      <Checkbox label="Check box" disabled checked />
    </Stack>
  );
};

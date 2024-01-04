import { Checkbox, Stack } from "@gui/fluent-ui-allure";
import * as React from "react";

export const SampleBasic = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }}>
      <Checkbox label="check box" />
    </Stack>
  );
};

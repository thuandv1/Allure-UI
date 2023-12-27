import * as React from "react";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

export const ColorIcon = () => {
  const style = (color: string): React.CSSProperties => {
    return {
      fontSize: 24,
      color: color
    };
  };

  return (
    <Stack horizontal tokens={{ childrenGap: 30 }}>
      <FontIcon style={style("#0072D0")} iconName="fas-plus" />
      <FontIcon style={style("#00A84E")} iconName="far-pen-to-square" />
      <FontIcon style={style("#D01B1B")} iconName="fas-trash" />
    </Stack>
  );
};

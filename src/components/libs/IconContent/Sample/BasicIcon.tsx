import * as React from "react";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

export const BasicIcon = () => {
  const style: React.CSSProperties = {
    fontSize: 24
  };

  return (
    <Stack horizontal tokens={{ childrenGap: 30 }}>
      <FontIcon style={style} iconName="fas-plus" />
      <FontIcon style={style} iconName="far-pen-to-square" />
      <FontIcon style={style} iconName="fas-trash" />
      <FontIcon style={style} iconName="af-smile" />
      <FontIcon style={style} iconName="af-face-sad-tear" />
    </Stack>
  );
};

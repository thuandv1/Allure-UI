import * as React from "react";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

export const OfficeColorIcon = () => {
  const style = (color: string): React.CSSProperties => {
    return {
      fontSize: 24,
      color: color
    };
  };
  return (
    <Stack horizontal tokens={{ childrenGap: 30 }}>
      <FontIcon style={style("#0F78D4")} iconName="ExchangeLogo" />
      <FontIcon style={style("#038387")} iconName="SharepointLogo" />
      <FontIcon style={style("#4B53BC")} iconName="TeamsLogo16" />
    </Stack>
  );
};

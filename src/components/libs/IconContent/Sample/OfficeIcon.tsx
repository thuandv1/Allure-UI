import * as React from "react";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

export const OfficeIcon = () => {
  const style: React.CSSProperties = {
    fontSize: 24
  };
  return (
    <Stack horizontal tokens={{ childrenGap: 30 }}>
      <FontIcon style={style} iconName="ExchangeLogo" />
      <FontIcon style={style} iconName="SharepointLogo" />
      <FontIcon style={style} iconName="TeamsLogo16" />
    </Stack>
  );
};

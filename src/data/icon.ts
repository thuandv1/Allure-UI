const heading = "Icon";
const desc =
  "Icon provides visual context and enhances usability. It is often used as an action. Display the icon when it is available. Otherwise, they will be disabled. Always use a show full name when hovering on an icon, there will be a tooltip to display its full name.";

const refer = {
  awesome: {
    title: "Font awesome V6 free",
    link: "https://fontawesome.com/v6/search?m=free&s=regular%2Csolid"
  },
  microsoft: {
    title: "  For Microsoft - Office UI Fabric Icons",
    link: "https://uifabricicons.azurewebsites.net/"
  }
};

const usage = {
  basic: {
    title: "Font awesome basic usage",
    code: `import * as React from "react";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

export const SampleFontAwesomeBasic = () => {
    const style: React.CSSProperties = {
        fontSize: 24,
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
};`
  },
  color: {
    title: "Font awesome with custom color",
    code: `import * as React from "react";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

export const SampleFontAwesomeColors = () => {
    const style = (color: string): React.CSSProperties => {
        return {
            fontSize: 24,
            color: color,
        };
    };

    return (
        <Stack horizontal tokens={{ childrenGap: 30 }}>
            <FontIcon style={style("#0072D0")} iconName="fas-plus" />
            <FontIcon style={style("#00A84E")} iconName="far-pen-to-square" />
            <FontIcon style={style("#D01B1B")} iconName="fas-trash" />
        </Stack>
    );
};`
  },
  office: {
    title: "Office UI Fabric Icons basic usage",
    code: `import * as React from "react";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

export const SampleMicrosoftBasic = () => {
    const style: React.CSSProperties = {
        fontSize: 24,
    };
    return (
        <Stack horizontal tokens={{ childrenGap: 30 }}>
            <FontIcon style={style} iconName="ExchangeLogo" />
            <FontIcon style={style} iconName="SharepointLogo" />
            <FontIcon style={style} iconName="TeamsLogo16" />
        </Stack>
    );
};`
  },
  officeColor: {
    title: "Office UI Fabric Icons with custom color",
    code: `import * as React from "react";
import { Stack, FontIcon } from "@gui/fluent-ui-allure";

export const SampleMicrosoftColors = () => {
    const style = (color: string): React.CSSProperties => {
        return {
            fontSize: 24,
            color: color,
        };
    };
    return (
        <Stack horizontal tokens={{ childrenGap: 30 }}>
            <FontIcon style={style("#0F78D4")} iconName="ExchangeLogo" />
            <FontIcon style={style("#038387")} iconName="SharepointLogo" />
            <FontIcon style={style("#4B53BC")} iconName="TeamsLogo16" />
        </Stack>
    );
};`
  }
};

export { heading, desc, usage, refer };

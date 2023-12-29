const WCAG = {
  link: "https://www.w3.org/TR/WCAG20/"
};

const install = {
  syntax: " npm install @gui/fluent-ui-allure"
};

const installCode = `@gui:registry=https://proget.avepoint.net/npm/avepoint-npm/
registry=https://proget.avepoint.net/npm/npm.org/
`;

const themeCode = `import { ThemeProvider, getAllureTheme, Themes, Language } from '@gui/fluent-ui-allure';
import * as React from 'react';

const Content = () => {
    return (
        <ThemeProvider theme={getAllureTheme(Themes.Cabolt, Language.EN)}>
            <div />
        </ThemeProvider>
    );
};`;

export { install, themeCode, installCode, WCAG };

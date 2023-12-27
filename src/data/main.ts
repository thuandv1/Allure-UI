const heading = "Allure Design System";
const desc =
  "This Allure design system contains both style and interaction guideline which can be applied to the online products of AvePoint. It can help us to build a consistency user experience for AvePoint customers.";

const WCAG = {
  title: "WCAG2.0 supported",
  desc: "Web Content Accessibility Guidelines (WCAG) 2.0 covers a wide range of recommendations for making Web content more accessible. Following these guidelines will make content accessible to a wider range of people with disabilities, including blindness and low vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited movement, speech disabilities, photosensitivity and combinations of these. Following these guidelines will also often make your Web content more usable to users in general.",
  link: "https://www.w3.org/TR/WCAG20/"
};

const install = {
  title: "Installation",
  desc: {
    start: "Since Allure UI is hosted on the feed",
    end: "of Proget, you should create a .npmrc file under the root folder of your UI project."
  },
  link: "https://proget.avepoint.net/feeds/avepoint-npm/@gui/fluent-ui-allure",
  npm: "Then install the Allure UI package:",
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

const usage = {
  title: "Usage",
  desc: "In the root file of your React App, import Allure UI and set the corresponding theme and language."
};

export { install, themeCode, installCode, heading, desc, WCAG, usage };

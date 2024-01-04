import { PartialTheme, Themes } from "@gui/fluent-ui-allure";

export type AppState = {
  theme: Themes;
  customTheme?: PartialTheme;
  onThemeCustom: boolean;
};

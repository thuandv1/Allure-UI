import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllureTheme,
  IExtendedPalette,
  Language,
  PartialTheme,
  Theme,
  Themes
} from "@gui/fluent-ui-allure";

import { AppState } from "./type";
import { APP } from "./constants";
import { LocalStorage } from "helpers";
import { THEME_KEY } from "constants/language";

let localTheme = LocalStorage.get(THEME_KEY);

const initialState: AppState = {
  theme: localTheme ? +localTheme : Themes.Cobalt,
  customTheme: undefined,
  onThemeCustom: false
};

const slice = createSlice({
  name: APP,
  initialState,
  reducers: {
    changeTheme(state: AppState, { payload }: PayloadAction<Themes>) {
      state.theme = payload;
      state.customTheme = undefined;
      state.onThemeCustom = false;
    },
    changeThemeCustom(
      state: AppState,
      { payload }: PayloadAction<PartialTheme>
    ) {
      state.customTheme = payload;
    },
    onThemeDesign(state: AppState, { payload }: PayloadAction<boolean>) {
      state.onThemeCustom = payload;
    }
  }
});

export const { changeTheme, changeThemeCustom, onThemeDesign } = slice.actions;

const appReducer = slice.reducer;
export default appReducer;

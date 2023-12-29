import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Themes } from "@gui/fluent-ui-allure";

import { AppState } from "./type";
import { APP } from "./constants";
import { LocalStorage } from "helpers";
import { THEME_KEY } from "constants/language";

let localTheme = LocalStorage.get(THEME_KEY);

const initialState: AppState = {
  theme: localTheme ? +localTheme : Themes.Cobalt
};

const slice = createSlice({
  name: APP,
  initialState,
  reducers: {
    changeTheme(state: AppState, { payload }: PayloadAction<Themes>) {
      state.theme = payload;
    }
  }
});

export const { changeTheme } = slice.actions;

const appReducer = slice.reducer;
export default appReducer;

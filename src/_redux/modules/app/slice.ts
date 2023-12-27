import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language, Themes } from "@gui/fluent-ui-allure";

import { AppState } from "./type";
import { APP } from "./constants";

const initialState: AppState = {
  theme: Themes.Cobalt,
  language: Language.EN
};

const slice = createSlice({
  name: APP,
  initialState,
  reducers: {
    changeTheme(state: AppState, { payload }: PayloadAction<Themes>) {
      state.theme = payload;
    },
    changeLanguage(state: AppState, {payload} : PayloadAction<Language>) {
      state.language = payload
    }
  }
});

export const {
  changeTheme
} = slice.actions;

const appReducer = slice.reducer;
export default appReducer;

import { RootState } from "_redux/rootReducer";

const selectTheme = (state: RootState) => state.app.theme;
const selectThemeCustom = (state: RootState) => state.app.customTheme;
const selectOnThemeCustom = (state: RootState) => state.app.onThemeCustom;

export { selectTheme, selectThemeCustom, selectOnThemeCustom };

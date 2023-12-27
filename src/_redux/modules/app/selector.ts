import { RootState } from "_redux/rootReducer";

const selectTheme = (state: RootState) => state.app.theme;

export { selectTheme };

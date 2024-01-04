import { ThemeProvider, getAllureTheme, Language } from "@gui/fluent-ui-allure";
import { selectTheme, selectThemeCustom } from "_redux/modules/app/selector";
import { useSelector } from "react-redux";

interface IThemeProps {
  children: React.ReactNode;
}
function Theme(props: IThemeProps) {
  const { children } = props;

  const themeSelected = useSelector(selectTheme);
  const themeCustom = useSelector(selectThemeCustom);

  const currentTheme = getAllureTheme(themeSelected, Language.EN);

  return (
    <ThemeProvider theme={themeCustom ?? currentTheme}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;

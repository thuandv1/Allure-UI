import { ThemeProvider, getAllureTheme, Language } from "@gui/fluent-ui-allure";
import { selectTheme } from "_redux/modules/app/selector";
import { useSelector } from "react-redux";

interface IThemeProps {
  children: React.ReactNode;
}
function Theme(props: IThemeProps) {
  const { children } = props;

  const themeSelected = useSelector(selectTheme);

  return (
    <ThemeProvider theme={getAllureTheme(themeSelected, Language.EN)}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;

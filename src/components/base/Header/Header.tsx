import classNames from "classnames/bind";

import {
  Dropdown,
  IDropdownOption,
  Language,
  Themes
} from "@gui/fluent-ui-allure";

import styles from "./Header.module.scss";
import { Logo } from "assets/images";
import SearchBar from "components/SearchBar";
import { LanguageEnum } from "constants/language";
import { useDispatch } from "react-redux";
import { changeTheme } from "_redux/modules/app/slice";
import { Link } from "react-router-dom";
import { routes } from "configs";

const cx = classNames.bind(styles);

const themeOptions: IDropdownOption[] = Object.entries(Themes)
  .filter(([_, value]) => typeof value === "number")
  .map(([key, value]) => ({
    text: `Theme: ${key}`,
    key: value.toString()
  }));

const languageOptions: IDropdownOption[] = Object.values(Language)
  .filter((value) => typeof value === "string")
  .map((value) => ({
    text: LanguageEnum[value as keyof typeof LanguageEnum],
    key: value
  }));

function Header() {
  const dispatch = useDispatch();

  return (
    <header className={cx("header")}>
      <div className={cx("left")}>
        <Link to={routes.Home} className={cx("logo")}>
          <img src={Logo} alt="Logo Allure" />
          <h1>Allure UI</h1>
        </Link>
        <SearchBar placeholder="Type search keyword" />
      </div>
      <div className={cx("action")}>
        <Dropdown
          onChange={(_, option) => console.log({ option })}
          options={languageOptions}
          placeholder="English"
        />
        <Dropdown
          onChange={(_, option) => dispatch(changeTheme(+option!.key))}
          options={themeOptions}
          placeholder="Theme: Cobalt"
        />
      </div>
    </header>
  );
}

export default Header;

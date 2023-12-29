import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
import { Dropdown, IDropdownOption, Themes } from "@gui/fluent-ui-allure";

import styles from "./Header.module.scss";
import { Logo } from "assets/images";
import SearchBar from "components/SearchBar";
import { LANGUAGE_KEY, LanguageEnum, THEME_KEY } from "constants/language";
import { changeTheme } from "_redux/modules/app/slice";
import { routes } from "configs";
import { LocalStorage } from "helpers";

const cx = classNames.bind(styles);

function Header() {
  const { t, i18n } = useTranslation(["common", "language", "themes"]);
  const lang = LocalStorage.get(LANGUAGE_KEY);
  const theme = LocalStorage.get(THEME_KEY);

  const dispatch = useDispatch();

  const languageOptions: IDropdownOption[] = useMemo(
    () =>
      Object.keys(LanguageEnum)
        .filter((value) => value)
        .map((value) => ({
          text: t(`language:${value}`),
          key: value
        })),
    [t]
  );

  const themeOptions: IDropdownOption[] = useMemo(
    () =>
      Object.entries(Themes)
        .filter(([_, value]) => typeof value === "number")
        .map(([key, value]) => ({
          text: t("themes:theme", {
            theme: t(`themes:${key.toLowerCase()}`)
          }),
          key: value.toString()
        })),
    [t]
  );

  const handleChangeLanguage = (
    _: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => {
    const lang = `${option?.key}`;

    if (!lang) {
      return;
    }

    i18n.changeLanguage(lang);
    LocalStorage.add(LANGUAGE_KEY, lang);
  };

  const handleChangeTheme = (
    _: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => {
    const theme = +option!.key;

    if (!theme) {
      return;
    }

    LocalStorage.add(THEME_KEY, JSON.stringify(theme));

    dispatch(changeTheme(theme));
  };

  return (
    <header className={cx("header")}>
      <div className={cx("left")}>
        <Link to={routes.Home} className={cx("logo")}>
          <img src={Logo} alt="Logo Allure" />
          <h1>
            {t("app_name", {
              text: "UI"
            })}
          </h1>
        </Link>
        <SearchBar placeholder={t("search")} />
      </div>

      <div className={cx("action")}>
        <Dropdown
          defaultSelectedKey={lang}
          onChange={handleChangeLanguage}
          options={languageOptions}
          placeholder={t("language:en")}
        />
        <Dropdown
          defaultSelectedKey={theme}
          options={themeOptions}
          onChange={handleChangeTheme}
          placeholder={t("themes:theme", {
            theme: t("themes:cobalt")
          })}
        />
      </div>
    </header>
  );
}

export default Header;

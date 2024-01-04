import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
import {
  Dropdown,
  IDropdownOption,
  Stack,
  Themes
} from "@gui/fluent-ui-allure";
import { Lang, initialize } from "@gui/common-i18n-terms";

import styles from "./Header.module.scss";
import { Logo } from "assets/images";
import SearchBar from "components/SearchBar";
import { LANGUAGE_KEY, THEME_KEY } from "constants/language";
import { changeTheme, onThemeDesign } from "_redux/modules/app/slice";
import { routes } from "configs";
import { LocalStorage } from "helpers";
import { selectTheme } from "_redux/modules/app/selector";
import { THEME_CUSTOM_KEY } from "constants/theme";

const cx = classNames.bind(styles);

function Header() {
  const { t, i18n } = useTranslation(["common", "language", "themes"]);
  const theme = useSelector(selectTheme);
  const lang = LocalStorage.get(LANGUAGE_KEY);

  const dispatch = useDispatch();

  const languageOptions: IDropdownOption[] = useMemo(
    () => [
      { text: t("language:en"), key: "en" },
      { text: t("language:jp"), key: "jp" },
      { text: t("language:ch"), key: "ch" },
      { text: t("language:de"), key: "de" },
      { text: t("language:fr"), key: "fr" }
    ],
    [t]
  );

  initialize(lang as Lang);

  const themeOptions: IDropdownOption[] = useMemo(
    () => [
      {
        key: Themes.Cobalt,
        text: t("themes:theme", {
          theme: t("themes:cobalt")
        })
      },
      {
        key: Themes.Teal,
        text: t("themes:theme", {
          theme: t("themes:teal")
        })
      },
      {
        key: Themes.Ochre,
        text: t("themes:theme", {
          theme: t("themes:ochre")
        })
      },
      {
        key: Themes.Violet,
        text: t("themes:theme", {
          theme: t("themes:violet")
        })
      },
      {
        key: Themes.Magenta,
        text: t("themes:theme", {
          theme: t("themes:magenta")
        })
      },
      {
        key: Themes.Lavender,
        text: t("themes:theme", {
          theme: t("themes:lavender")
        })
      },
      {
        key: Themes.Pewter,
        text: t("themes:theme", {
          theme: t("themes:pewter")
        })
      },
      {
        key: Themes.Mint,
        text: t("themes:theme", {
          theme: t("themes:mint")
        })
      },
      { key: THEME_CUSTOM_KEY, text: t("themes:custom") }
    ],
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
    const currentTheme = option!.key;

    if (typeof currentTheme !== "number" && !currentTheme) {
      return;
    }

    if (currentTheme === THEME_CUSTOM_KEY) {
      dispatch(onThemeDesign(true));
      return;
    }

    LocalStorage.add(THEME_KEY, JSON.stringify(currentTheme));
    dispatch(onThemeDesign(false));
    dispatch(changeTheme(+currentTheme));
  };

  console.log({ theme });

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
          selectedKey={lang}
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

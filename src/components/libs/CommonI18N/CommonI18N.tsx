import { useTranslation } from "react-i18next";
import { Dropdown } from "@gui/fluent-ui-allure";
import { useState } from "react";
import { getResource, Lang } from "@gui/common-i18n-terms";
import Content from "components/base/Content";

function CommonI18NTerm() {
  const [language, setLanguage] = useState("en");
  const [t] = useTranslation(["common_i18n_terms", "common", "language"]);
  const resources = getResource(language as Lang);

  const options = [
    { text: t("language:en"), key: "en" },
    { text: t("language:de"), key: "de" },
    { text: t("language:fr"), key: "fr" },
    { text: t("language:jp"), key: "ja" },
    { text: t("language:ch"), key: "zh" }
  ];

  return (
    <Content
      title={t("title")}
      desc={t("desc", {
        app: t("common:app_name", {
          text: ""
        })
      })}
    >
      <div>
        <div style={{ width: 280, marginTop: 10 }}>
          <Dropdown
            id="dropdown-language-child"
            options={options}
            placeholder={t("choose")}
            defaultSelectedKey={language}
            onChange={(e, option) => {
              setLanguage(option!.key.toString());
            }}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>{t("key")}&nbsp;</th>
              <th>{t("value")}</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(resources)
              .filter((key) => key.indexOf("I18NShared_Location") !== 0)
              .map((key) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{resources[key]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Content>
  );
}

export default CommonI18NTerm;

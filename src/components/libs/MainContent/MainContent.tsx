import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./MainContent.module.scss";
import { Logo } from "assets/images";
import SectionContent from "components/SectionContent";
import Content from "components/base/Content";
import Environment from "components/Environment";
import { WCAG, install, installCode, themeCode } from "data/main";
import Code from "components/base/Code";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

function MainContent() {
  const [t] = useTranslation(["introduction", "common"]);

  return (
    <Content
      title={t("common:design_system", {
        name: t("common:app_name", {
          text: ""
        })
      })}
      desc={t("design_desc", {
        app: t("common:app_name", {
          text: ""
        }),
        company: t("common:company_name")
      })}
      header={<img src={Logo} alt="Allure Logo" />}
    >
      <SectionContent title={t("wcag_title")} desc={t("wcag_desc")}>
        <Link className={cx("w3-link")} to={WCAG.link}>
          {t("wcag_overview")}
        </Link>
      </SectionContent>
      <SectionContent title={t("environment")}>
        <Environment />
      </SectionContent>
      <SectionContent title={t("common:install")}>
        <div className={cx("install")}>
          {
            <p
              dangerouslySetInnerHTML={{
                __html: t("setup", {
                  name: t("common:app_name", {
                    text: ""
                  })
                }).replace(
                  "_",
                  '<a className={cx("link")} href="https://proget.avepoint.net/feeds/avepoint-npm/@gui/fluent-ui-allure" target="_blank">avepoint-npm</a>'
                )
              }}
            ></p>
          }
          <Code border={true}>{installCode}</Code>
          <p className={cx("text")}>
            {t("install", {
              name: t("common:app_name", {
                text: ""
              })
            })}
          </p>
          <Code border={true}>{install.syntax}</Code>
        </div>
      </SectionContent>
      <SectionContent
        title={t("usage", {
          name: t("common:app_name", {
            text: ""
          })
        })}
        desc={t("usage", {
          name: t("common:app_name", {
            text: ""
          })
        })}
      >
        <Code border={true}>{themeCode}</Code>
      </SectionContent>
    </Content>
  );
}

export default MainContent;

import { Icon } from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";

import { principles } from "data/designPrinciple";
import Content from "components/base/Content";
import styles from "./DesignPrincipleContent.module.scss";

const cx = classNames.bind(styles);

function DesignPrincipleContent() {
  const [t] = useTranslation("design_principle");

  return (
    <Content title={t("title")}>
      <ul className={cx("principles")}>
        {principles.map((principle) => (
          <li key={principle.icon}>
            <Icon iconName={principle.icon} />
            <div className={cx("info")}>
              <h6>{t(principle.title.toLowerCase())}</h6>
              <p>{t(principle.title.toLowerCase() + "_desc")}</p>
            </div>
          </li>
        ))}
      </ul>
    </Content>
  );
}

export default DesignPrincipleContent;

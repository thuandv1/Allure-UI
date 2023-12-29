import { Icon } from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";

import styles from "./NotFound.module.scss";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

interface Props {
  keyword: string;
}

function NotFound(props: Props) {
  const { keyword } = props;
  const [t] = useTranslation("common");

  return (
    <div className={cx("no-result")}>
      <Icon iconName="SearchIssue" />
      <p>
        {t("no_results")}&nbsp;
        <b>"{keyword}"</b>
      </p>
    </div>
  );
}

export default NotFound;

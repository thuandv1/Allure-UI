import { Icon } from "@gui/fluent-ui-allure";
import classNames from "classnames/bind";

import styles from "./NotFound.module.scss";

const cx = classNames.bind(styles);

interface Props {
  keyword: string;
}

function NotFound(props: Props) {
  const { keyword } = props;

  return (
    <div className={cx("no-result")}>
      <Icon iconName="SearchIssue" />
      <p>
        No results for <b>"{keyword}"</b>
      </p>
    </div>
  );
}

export default NotFound;

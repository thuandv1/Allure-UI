import classNames from "classnames/bind";

import styles from "./ChangeLog.module.scss";

const cx = classNames.bind(styles);

interface IHeaderChangeLogProps {
  appName: string;
  version: string | number;
  time: string;
}

function HeaderChangeLog(props: IHeaderChangeLogProps) {
  const { appName, time, version } = props;

  return (
    <div className={cx("header")}>
      <b>{appName + version}</b>
      <span>{time}</span>
    </div>
  );
}

export default HeaderChangeLog;

import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./ChangeLog.module.scss";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

interface ILogSectionProps {
  title: string;
  data: string[];
}

function LogSection(props: ILogSectionProps) {
  const { title, data } = props;
  const [t] = useTranslation("change_log");

  return (
    <div className={cx("wrapper")}>
      <b>{title}</b>
      {data.map((d) => (
        <div className={cx("item")}>
          <Link
            target="_blank"
            to={`https://jira.avepoint.net/browse/${d
              .toUpperCase()
              .replace("_", "-")}`}
          >
            {d.toUpperCase().replace("_", "-")}
          </Link>
          <p>{t(d)}</p>
        </div>
      ))}
    </div>
  );
}

export default LogSection;

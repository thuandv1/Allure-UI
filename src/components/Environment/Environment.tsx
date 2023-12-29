import classNames from "classnames/bind";

import styles from "./Environment.module.scss";
import { environments } from "constants/environment";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

function Environment() {
  const [t] = useTranslation("introduction");

  return (
    <div className={cx("environment")}>
      {environments.map((env, index) => (
        <div key={index} className={cx("item")}>
          <img src={env.img} alt="" />
          <h6>{env.name}</h6>
          <span>
            {t("last_version", {
              number: env.version
            })}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Environment;

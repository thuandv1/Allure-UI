import classNames from "classnames/bind";

import styles from "./Environment.module.scss";
import { environments } from "constants/environment";

const cx = classNames.bind(styles);

function Environment() {
  return (
    <div className={cx("environment")}>
      {environments.map((env, index) => (
        <div key={index} className={cx("item")}>
          <img src={env.img} alt="" />
          <h6>{env.name}</h6>
          <span>{env.version}</span>
        </div>
      ))}
    </div>
  );
}

export default Environment;

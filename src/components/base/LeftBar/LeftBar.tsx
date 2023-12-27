import { LeftBarModules } from "constants/leftBarModules";
import classNames from "classnames/bind";

import LeftBarItem from "./LeftBarItem";
import styles from "./LeftBar.module.scss";

const cx = classNames.bind(styles);

function LeftBar() {
  return (
    <div className={cx("bar")}>
      {LeftBarModules.map((barItem, index) => (
        <LeftBarItem barItem={barItem} key={index} />
      ))}
    </div>
  );
}

export default LeftBar;

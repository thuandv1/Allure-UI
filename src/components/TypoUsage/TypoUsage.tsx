import classNames from "classnames/bind";

import styles from "./TypoUsage.module.scss";

interface Props {
  text?: string;
}

const cx = classNames.bind(styles);

function TypoUsage(props: Props) {
  const {
    text = "They all can be used in design according to different scenarios."
  } = props;
  return <p className={cx("text")}>{text}</p>;
}

export default TypoUsage;

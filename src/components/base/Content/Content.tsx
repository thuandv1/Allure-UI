import classNames from "classnames/bind";

import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

interface IContentProps {
  title: string;
  desc?: string;
  children: React.ReactNode;
  header?: React.ReactNode;
}

function Content(props: IContentProps) {
  const { children, title, desc, header } = props;

  return (
    <div className={cx("content")}>
      {header}
      <h2 className={cx("title")}>{title}</h2>
      <p className={cx("desc")}>{desc}</p>
      {children}
    </div>
  );
}

export default Content;

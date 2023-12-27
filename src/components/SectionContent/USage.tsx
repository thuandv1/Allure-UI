import classNames from "classnames/bind";

import styles from "./SectionContent.module.scss";

const cx = classNames.bind(styles);

interface IUSagaProps {
  title: string;
  desc: string;
  component?: React.ReactNode;
  expandCode?: boolean;
}

function USage(props: IUSagaProps) {
  const { title, desc, component, expandCode } = props;

  return (
    <div className={cx("usage")}>
      <h3>{title}</h3>
      <p>{desc}</p>
      {component}
    </div>
  );
}

export default USage;
